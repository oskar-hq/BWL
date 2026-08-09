/* ============================================================
   Oberfläche
   ============================================================ */
window.BWL = window.BWL || {};

BWL.app = (function () {
  var u = BWL.util, el = u.el, srs = BWL.srs, store = BWL.store, stats = BWL.stats;
  var root = document.getElementById("view");

  var aktuelleAnsicht = "lernen";
  var karte = null;           // aktuell gezeigte Lernkarte
  var antwortSichtbar = false;
  var hinweisSichtbar = false;
  var transfer = null;        // { karten: [], i: 0, sichtbar: bool }

  var GRADES = [
    { g: 1, name: "Nochmal", key: "1" },
    { g: 2, name: "Schwer", key: "2" },
    { g: 3, name: "Gut", key: "3" },
    { g: 4, name: "Leicht", key: "4" }
  ];

  var TYP_LABEL = {
    begriff: "Begriff", denkmuster: "Denkmuster", formel: "Rechenweg", case: "Mini-Case"
  };

  /* ================= Navigation ================= */

  function go(name) {
    aktuelleAnsicht = name;
    antwortSichtbar = false;
    hinweisSichtbar = false;
    Array.prototype.forEach.call(document.querySelectorAll("#tabs .tab"), function (t) {
      t.classList.toggle("active", t.dataset.view === name);
    });
    render();
    window.scrollTo(0, 0);
  }

  function render() {
    u.clear(root);
    ({
      lernen: viewLernen,
      transfer: viewTransfer,
      module: viewModule,
      statistik: viewStatistik,
      karten: viewKarten,
      einstellungen: viewEinstellungen
    }[aktuelleAnsicht] || viewLernen)();
  }

  /* ================= Lernen ================= */

  function viewLernen() {
    if (karte) { renderSession(); return; }
    renderDashboard();
  }

  function renderDashboard() {
    var q = store.warteschlange();
    var z = store.heuteZaehler();
    var offen = q.lernJetzt.length + q.wdh.length + q.neu.length + q.lernSpaeter.length;
    var verteilung = stats.reifeVerteilung();
    var quote = stats.trefferquote();

    root.appendChild(el("h1", { text: "Heute" }));
    root.appendChild(el("p.lead", {
      text: "Verteilte Wiederholung heißt: jede Karte kommt genau dann zurück, wenn du sie beinahe vergessen hättest. "
          + "Kurze Einheiten täglich schlagen lange Einheiten am Prüfungswochenende."
    }));

    root.appendChild(el(".kpis", {}, [
      kpi(q.wdh.length + q.lernJetzt.length + q.lernSpaeter.length, "Karten heute fällig", "teal"),
      kpi(q.neu.length, "neue Karten geplant", "accent"),
      kpi(z.gesamt, "heute beantwortet", ""),
      kpi(stats.streak(), "Tage Serie", "amber")
    ]));

    root.appendChild(el(".queue-bar", {}, [
      el("span.pill.wdh", {}, [el("i.dot"), "Wiederholung " + (q.wdh.length + q.lernJetzt.length)]),
      el("span.pill.neu", {}, [el("i.dot"), "Neu " + q.neu.length]),
      q.lernSpaeter.length ? el("span.pill.lern", {}, [el("i.dot"), "Lernschritte offen " + q.lernSpaeter.length]) : null,
      el("span.pill", { text: "≈ " + stats.minutenHeute(offen) + " Min." })
    ]));

    if (offen > 0) {
      root.appendChild(el("div", { style: "margin-top:18px" }, [
        el("button.btn.btn-primary", { onclick: startSession, text: "Lernen starten  ▸" })
      ]));
    } else {
      root.appendChild(el(".card-box.empty", { style: "margin-top:18px" }, [
        el("span.emoji", { text: "✅" }),
        el("h2.mt0", { text: "Für heute alles erledigt" }),
        el("p", {
          text: q.neuGesamt > 0
            ? "Es warten noch " + q.neuGesamt + " unangetastete Karten. Das Tageslimit schützt dich vor einer Wiederholungslawine in zwei Wochen – du kannst es unter Einstellungen anheben."
            : "Alle Karten aus den aktiven Modulen sind im Umlauf. Nutze die freie Zeit für den Transfer-Drill."
        }),
        el(".row", { style: "justify-content:center" }, [
          el("button.btn", { onclick: function () { go("transfer"); }, text: "Transfer-Drill öffnen" }),
          q.neuGesamt > 0 ? el("button.btn.btn-ghost", {
            onclick: function () {
              store.setSetting("neuProTag", (store.settings().neuProTag || 0) + 10);
              u.toast("Tageslimit für neue Karten auf " + store.settings().neuProTag + " erhöht");
              render();
            }, text: "10 neue Karten zusätzlich"
          }) : null
        ])
      ]));
    }

    /* Fortschrittsband */
    root.appendChild(el("h2", { text: "Deine Sammlung" }));
    root.appendChild(el(".card-box", { style: "padding:16px 18px" }, [
      stackbar(verteilung),
      el(".legend", {}, [
        lg("var(--border-strong)", "Neu " + verteilung.neu),
        lg("var(--amber)", "In der Lernphase " + verteilung.lernen),
        lg("var(--accent)", "Jung (< 21 Tage) " + verteilung.jung),
        lg("var(--teal)", "Reif (≥ 21 Tage) " + verteilung.reif)
      ]),
      quote !== null ? el("p.note", { style: "margin:12px 0 0",
        text: "Trefferquote bei echten Wiederholungen: " + u.num(quote * 100, 0) + " %. "
            + (quote > 0.95 ? "Sehr hoch – du darfst mutiger „Leicht“ drücken, das spart Wiederholungen."
              : quote < 0.8 ? "Etwas niedrig – lieber weniger neue Karten pro Tag, bis sich das einpendelt."
              : "Genau im gesunden Bereich (85–92 %).") }) : null
    ]));
  }

  function kpi(val, label, farbe) {
    return el(".kpi" + (farbe ? "." + farbe : ""), {}, [
      el(".kpi-val", { text: typeof val === "number" ? u.num(val) : val }),
      el(".kpi-label", { text: label })
    ]);
  }

  function lg(color, text) {
    return el("span", {}, [el("i", { style: "background:" + color }), text]);
  }

  function stackbar(v) {
    var g = Math.max(1, v.gesamt);
    return el(".stackbar", {}, [
      el("i.s-reif", { style: "width:" + (v.reif / g * 100) + "%", title: "Reif: " + v.reif }),
      el("i.s-jung", { style: "width:" + (v.jung / g * 100) + "%", title: "Jung: " + v.jung }),
      el("i.s-lern", { style: "width:" + (v.lernen / g * 100) + "%", title: "Lernphase: " + v.lernen }),
      el("i.s-neu", { style: "width:" + (v.neu / g * 100) + "%", title: "Neu: " + v.neu })
    ]);
  }

  /* ---------- Lernsitzung ---------- */

  function startSession() {
    karte = store.naechsteKarte();
    antwortSichtbar = false;
    hinweisSichtbar = false;
    if (!karte) { u.toast("Nichts mehr fällig"); render(); return; }
    render();
  }

  function naechste() {
    karte = store.naechsteKarte();
    antwortSichtbar = false;
    hinweisSichtbar = false;
    render();
  }

  function beenden() {
    karte = null;
    render();
  }

  function renderSession() {
    var q = store.warteschlange();
    var offen = q.lernJetzt.length + q.wdh.length + q.neu.length + q.lernSpaeter.length;
    var z = store.heuteZaehler();
    var gesamtHeute = z.gesamt + offen;
    var pct = gesamtHeute ? (z.gesamt / gesamtHeute * 100) : 100;

    root.appendChild(el(".session-head", {}, [
      el("span", { text: "Verbleibend heute: " + offen }),
      el(".progress", {}, [el("i", { style: "width:" + pct + "%" })]),
      el("span", { text: z.gesamt + " beantwortet" }),
      el("button.btn.btn-ghost.btn-sm", { onclick: beenden, text: "Beenden" })
    ]));

    root.appendChild(kartenAnsicht(karte, antwortSichtbar, true));
  }

  /** Baut die Karte. interaktiv=true fügt Buttons und Bewertung hinzu. */
  function kartenAnsicht(k, mitAntwort, interaktiv) {
    var st = store.zustand(k.id);
    var box = el(".flash");

    box.appendChild(el(".flash-meta", {}, [
      el("span.tag.typ-" + k.typ, { text: TYP_LABEL[k.typ] || k.typ }),
      el("span", { text: k.modulName }),
      el("span", { text: "·" }),
      el("span", { text: k.thema }),
      interaktiv ? el("span", { style: "margin-left:auto",
        text: st.s === "neu" ? "neue Karte" : "Intervall " + u.ivlText(st.ivl || 0) + " · " + st.reps + "×" }) : null
    ]));

    var body = el(".flash-body");
    body.appendChild(el(".q-label", { text: k.typ === "case" ? "Situation" : "Frage" }));
    body.appendChild(el("p.q-text", { html: u.rich(k.frage) }));
    if (k.szenario) body.appendChild(el(".szenario", { html: u.rich(k.szenario) }));

    if (interaktiv && k.hinweis && !mitAntwort) {
      if (hinweisSichtbar) {
        body.appendChild(el(".hinweis", { html: "<strong>Hinweis:</strong> " + u.rich(k.hinweis) }));
      } else {
        body.appendChild(el("button.btn.btn-ghost.btn-sm.hint-btn", {
          text: "Hinweis anzeigen", onclick: function () { hinweisSichtbar = true; render(); }
        }));
      }
    }

    if (mitAntwort) body.appendChild(antwortBlock(k, interaktiv));

    if (interaktiv) {
      if (!mitAntwort) {
        body.appendChild(el("div", { style: "margin-top:26px" }, [
          el("button.btn.btn-primary.btn-block", {
            text: "Antwort zeigen  (Leertaste)",
            onclick: function () { antwortSichtbar = true; render(); }
          })
        ]));
      } else {
        body.appendChild(gradeButtons(k));
      }
    }

    box.appendChild(body);
    return box;
  }

  function antwortBlock(k, interaktiv) {
    var a = el(".answer");
    a.appendChild(el(".a-label", { text: k.typ === "case" ? "So denkst du dich durch" : "Antwort" }));
    if (k.antwort) a.appendChild(el("p.a-text", { html: u.rich(k.antwort) }));

    if (k.schritte && k.schritte.length) {
      a.appendChild(el(".block.schritte", {}, [
        el(".block-title", { text: "Denkschritte" }),
        el("ol", {}, k.schritte.map(function (s) { return el("li", { html: u.rich(s) }); }))
      ]));
    }
    if (k.formel) {
      var zeilen = Array.isArray(k.formel) ? k.formel : [k.formel];
      a.appendChild(el(".block.formel", {}, [
        el(".block-title", { text: "Formel" }),
        el("div", {}, zeilen.map(function (f) { return el("span.fx", { html: u.rich(f) }); }))
      ]));
    }
    if (k.beispiel) {
      a.appendChild(el(".block.beispiel", {}, [
        el(".block-title", { text: "Beispiel" }),
        el("div", { html: u.rich(k.beispiel) })
      ]));
    }
    if (k.check && k.check.length) {
      a.appendChild(el(".block.beispiel", {}, [
        el(".block-title", { text: "Selbstcheck – was hattest du?" }),
        checkliste(k)
      ]));
    }
    if (k.falle) {
      a.appendChild(el(".block.falle", {}, [
        el(".block-title", { text: "Typische Falle" }),
        el("div", { html: u.rich(k.falle) })
      ]));
    }
    if (k.merksatz) {
      a.appendChild(el(".block.merksatz", {}, [
        el(".block-title", { text: "Merksatz" }),
        el("div", { html: u.rich(k.merksatz) })
      ]));
    }
    return a;
  }

  function checkliste(k) {
    var wrap = el("div");
    var ul = el("ul.checklist");
    var info = el(".check-score", { text: "0 von " + k.check.length + " Punkten angehakt" });
    var n = 0;
    k.check.forEach(function (c, i) {
      var cb = el("input", { type: "checkbox", id: "chk-" + k.id + "-" + i });
      cb.addEventListener("change", function () {
        n += cb.checked ? 1 : -1;
        info.textContent = n + " von " + k.check.length + " Punkten angehakt"
          + (n === k.check.length ? " – vollständig, das ist ein „Gut“ oder „Leicht“." : "");
      });
      ul.appendChild(el("li", {}, [cb, el("label", { "for": "chk-" + k.id + "-" + i, html: u.rich(c) })]));
    });
    wrap.appendChild(ul);
    wrap.appendChild(info);
    return wrap;
  }

  function gradeButtons(k) {
    var st = store.zustand(k.id);
    var wrap = el(".grades");
    GRADES.forEach(function (gr) {
      var tage = srs.vorschau(st, gr.g);
      wrap.appendChild(el("button.grade.g" + gr.g, {
        onclick: function () { bewerten(gr.g); },
        title: "Taste " + gr.key
      }, [
        el("span.g-name", { text: gr.name }),
        el("span.g-ivl", { text: u.ivlText(tage) }),
        el("span.g-key", { text: gr.key })
      ]));
    });

    var foot = el(".session-foot", {}, [
      store.kannUndo() ? el("button.btn.btn-ghost.btn-sm", { text: "↶ Rückgängig (u)", onclick: rueckgaengig }) : null,
      el("button.btn.btn-ghost.btn-sm", {
        text: "Karte zurückstellen", title: "Karte aus dem Umlauf nehmen",
        onclick: function () {
          store.toggleSuspend(k.id);
          u.toast("Karte zurückgestellt – reaktivierbar unter „Karten“");
          naechste();
        }
      })
    ]);

    var box = el("div");
    box.appendChild(wrap);
    box.appendChild(foot);
    return box;
  }

  function bewerten(g) {
    if (!karte || !antwortSichtbar) return;
    var r = store.antworten(karte.id, g);
    u.toast(GRADES[g - 1].name + " · nächste Abfrage in " + u.ivlText(r.ivlTage));
    naechste();
  }

  function rueckgaengig() {
    var id = store.undo();
    if (!id) return;
    karte = store.kartenById()[id];
    antwortSichtbar = true;
    hinweisSichtbar = false;
    u.toast("Letzte Bewertung zurückgenommen");
    render();
  }

  /* ================= Transfer-Drill ================= */

  function viewTransfer() {
    if (transfer) { renderTransfer(); return; }

    root.appendChild(el("h1", { text: "Transfer-Drill" }));
    root.appendChild(el("p.lead", {
      text: "Wissen abrufen ist eine Sache, es auf eine fremde Situation anwenden eine andere. Der Drill zieht ausschließlich "
          + "Denkmuster- und Case-Karten – ohne Einfluss auf deinen Wiederholungsplan. Formuliere deine Antwort laut oder "
          + "schriftlich, bevor du auflöst; genau dieses Ringen erzeugt den Lerneffekt."
    }));

    var pool = drillPool();
    root.appendChild(el(".card-box", { style: "padding:18px" }, [
      el("p.note.mt0", { text: pool.length + " passende Karten in den aktiven Modulen." }),
      el(".row", {}, [5, 10, 20].map(function (n) {
        return el("button.btn" + (n === 10 ? ".btn-primary" : ""), {
          text: n + " Karten", disabled: pool.length === 0,
          onclick: function () {
            transfer = { karten: u.shuffle(pool).slice(0, n), i: 0, sichtbar: false };
            render();
          }
        });
      }))
    ]));

    root.appendChild(el("h2", { text: "So nutzt du den Drill richtig" }));
    root.appendChild(el(".card-box", { style: "padding:4px 18px 14px" }, [
      el("ol", { style: "padding-left:20px;font-size:14.5px;line-height:1.7" }, [
        el("li", { html: u.rich("**Erst zerlegen, dann rechnen.** Welche Größen sind gegeben, welche gesucht, welche Entscheidung steht an?") }),
        el("li", { html: u.rich("**Muster benennen.** Ist das eine Grenzbetrachtung, ein Fixkostenproblem, eine Zeitwertfrage, ein Anreizproblem?") }),
        el("li", { html: u.rich("**Antwort in drei Sätzen.** Ergebnis, Begründung, Vorbehalt – so argumentierst du auch in der Klausur.") }),
        el("li", { html: u.rich("**Erst dann auflösen** und mit dem Selbstcheck vergleichen.") })
      ])
    ]));
  }

  function drillPool() {
    return store.aktiveKarten().filter(function (k) {
      return k.typ === "denkmuster" || k.typ === "case";
    });
  }

  function renderTransfer() {
    var k = transfer.karten[transfer.i];
    root.appendChild(el(".session-head", {}, [
      el("span", { text: "Karte " + (transfer.i + 1) + " von " + transfer.karten.length }),
      el(".progress", {}, [el("i", { style: "width:" + (transfer.i / transfer.karten.length * 100) + "%" })]),
      el("button.btn.btn-ghost.btn-sm", { text: "Beenden", onclick: function () { transfer = null; render(); } })
    ]));

    var box = kartenAnsicht(k, transfer.sichtbar, false);
    var body = box.querySelector(".flash-body");
    if (!transfer.sichtbar) {
      body.appendChild(el("div", { style: "margin-top:26px" }, [
        el("button.btn.btn-primary.btn-block", {
          text: "Auflösen  (Leertaste)",
          onclick: function () { transfer.sichtbar = true; render(); }
        })
      ]));
    } else {
      body.appendChild(el("div", { style: "margin-top:26px" }, [
        el("button.btn.btn-primary.btn-block", {
          text: transfer.i + 1 < transfer.karten.length ? "Nächste Karte  (Leertaste)" : "Drill abschließen",
          onclick: function () {
            if (transfer.i + 1 < transfer.karten.length) { transfer.i++; transfer.sichtbar = false; }
            else { transfer = null; u.toast("Drill abgeschlossen"); }
            render();
          }
        })
      ]));
    }
    root.appendChild(box);
  }

  /* ================= Module ================= */

  function viewModule() {
    root.appendChild(el("h1", { text: "Module" }));
    root.appendChild(el("p.lead", {
      text: "Schalte ab, was du gerade nicht brauchst – abgeschaltete Module tauchen weder im Lernen noch im Drill auf, "
          + "der Fortschritt bleibt aber erhalten."
    }));

    var grid = el(".mod-grid");
    (BWL.module || []).forEach(function (m) {
      var s = stats.modulStats(m.id);
      var an = store.modulAktiv(m.id);
      var g = Math.max(1, s.gesamt);
      var cb = el("input", { type: "checkbox" });
      cb.checked = an;
      cb.addEventListener("change", function () {
        var mm = store.settings().module;
        mm[m.id] = cb.checked;
        store.setSetting("module", mm);
        render();
      });

      grid.appendChild(el(".mod" + (an ? "" : ".off"), {}, [
        el(".mod-top", {}, [
          el(".mod-name", { text: m.name }),
          el("label.switch", {}, [cb, el("span")])
        ]),
        el("p.mod-desc", { text: m.beschreibung }),
        el(".mod-bar", {}, [
          el("i.s-reif", { style: "width:" + (s.reif / g * 100) + "%" }),
          el("i.s-jung", { style: "width:" + (s.jung / g * 100) + "%" }),
          el("i.s-lern", { style: "width:" + (s.lernen / g * 100) + "%" })
        ]),
        el(".mod-stat", {}, [
          el("span", { text: s.gesamt + " Karten" }),
          el("span", { text: (s.gesamt - s.neu) + " angefangen" }),
          s.faellig ? el("span", { style: "color:var(--teal);font-weight:600", text: s.faellig + " fällig" }) : null
        ])
      ]));
    });
    root.appendChild(grid);
  }

  /* ================= Statistik ================= */

  function viewStatistik() {
    var v = stats.reifeVerteilung();
    var quote = stats.trefferquote();
    var akt = stats.aktivitaet(14);

    root.appendChild(el("h1", { text: "Statistik" }));
    root.appendChild(el("p.lead", { text: "Die Prognose zeigt, was auf dich zukommt. Bleibt sie flach, ist dein Tageslimit gut gewählt." }));

    root.appendChild(el(".kpis", {}, [
      kpi(stats.gesamtAntworten(), "Antworten insgesamt", ""),
      kpi(v.reif, "reife Karten", "teal"),
      kpi(Math.round(stats.abdeckung() * 100), "% der Sammlung angefangen", "accent"),
      kpi(quote === null ? "–" : Math.round(quote * 100), "% Trefferquote", "violet")
    ]));

    root.appendChild(el("h2", { text: "Fällige Wiederholungen – nächste 14 Tage" }));
    root.appendChild(el(".card-box.chart-wrap", {}, [balken(stats.prognose(14), false)]));

    root.appendChild(el("h2", { text: "Aktivität – letzte 14 Tage" }));
    root.appendChild(el(".card-box.chart-wrap", {}, [balken(akt.slice().reverse(), true, true)]));

    root.appendChild(el("h2", { text: "Nach Modul" }));
    var tb = el("table.tbl", {}, [
      el("thead", {}, [el("tr", {}, [
        el("th", { text: "Modul" }),
        el("th.num", { text: "Karten" }),
        el("th.num", { text: "Neu" }),
        el("th.num", { text: "Lernphase" }),
        el("th.num", { text: "Jung" }),
        el("th.num", { text: "Reif" }),
        el("th.num", { text: "Fällig" })
      ])])
    ]);
    var tbody = el("tbody");
    (BWL.module || []).forEach(function (m) {
      var s = stats.modulStats(m.id);
      tbody.appendChild(el("tr", {}, [
        el("td", { text: m.name }),
        el("td.num", { text: s.gesamt }),
        el("td.num", { text: s.neu }),
        el("td.num", { text: s.lernen }),
        el("td.num", { text: s.jung }),
        el("td.num", { text: s.reif }),
        el("td.num", { text: s.faellig || "–" })
      ]));
    });
    tb.appendChild(tbody);
    root.appendChild(el(".card-box", { style: "padding:6px 4px" }, [tb]));
  }

  function balken(werte, istAktivitaet, rueckwaerts) {
    var max = Math.max.apply(null, werte.concat([1]));
    var chart = el(".chart");
    werte.forEach(function (w, i) {
      var d = new Date();
      var offset = rueckwaerts ? -(werte.length - 1 - i) : i;
      d.setDate(d.getDate() + offset);
      var cap = i === 0 && !rueckwaerts ? "heute"
        : (rueckwaerts && i === werte.length - 1) ? "heute"
        : d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });
      chart.appendChild(el(".col", {}, [
        el(".num", { text: w || "" }),
        el(".bar" + (istAktivitaet ? ".rev" : ""), { style: "height:" + (w / max * 100) + "%", title: w + " Karten" }),
        el(".cap", { text: cap })
      ]));
    });
    return chart;
  }

  /* ================= Kartenbrowser ================= */

  var filter = { text: "", modul: "", typ: "", status: "" };

  function viewKarten() {
    root.appendChild(el("h1", { text: "Alle Karten" }));
    root.appendChild(el("p.lead", { text: "Nachschlagen, suchen, einzelne Karten zurücksetzen oder aus dem Umlauf nehmen." }));

    var suche = el("input.inp", { type: "search", placeholder: "Suchen in Frage, Antwort, Thema …", value: filter.text });
    suche.addEventListener("input", function () { filter.text = suche.value; liste(); });

    var mSel = el("select.sel", {}, [el("option", { value: "", text: "Alle Module" })].concat(
      (BWL.module || []).map(function (m) { return el("option", { value: m.id, text: m.name }); })));
    mSel.value = filter.modul;
    mSel.addEventListener("change", function () { filter.modul = mSel.value; liste(); });

    var tSel = el("select.sel", {}, [el("option", { value: "", text: "Alle Typen" })].concat(
      Object.keys(TYP_LABEL).map(function (t) { return el("option", { value: t, text: TYP_LABEL[t] }); })));
    tSel.value = filter.typ;
    tSel.addEventListener("change", function () { filter.typ = tSel.value; liste(); });

    var sSel = el("select.sel", {}, [
      el("option", { value: "", text: "Alle Zustände" }),
      el("option", { value: "neu", text: "Neu" }),
      el("option", { value: "lernen", text: "Lernphase" }),
      el("option", { value: "jung", text: "Jung" }),
      el("option", { value: "reif", text: "Reif" }),
      el("option", { value: "suspend", text: "Zurückgestellt" })
    ]);
    sSel.value = filter.status;
    sSel.addEventListener("change", function () { filter.status = sSel.value; liste(); });

    root.appendChild(el(".filters", {}, [suche, mSel, tSel, sSel]));
    var box = el(".card-box");
    root.appendChild(box);

    function liste() {
      u.clear(box);
      var q = filter.text.trim().toLowerCase();
      var treffer = store.alleKarten().filter(function (k) {
        if (filter.modul && k.modulId !== filter.modul) return false;
        if (filter.typ && k.typ !== filter.typ) return false;
        var st = store.zustand(k.id);
        if (filter.status === "suspend") { if (!st.suspended) return false; }
        else if (filter.status && (st.suspended || srs.reife(st) !== filter.status)) return false;
        if (!q) return true;
        return (k.frage + " " + (k.antwort || "") + " " + k.thema + " " + (k.szenario || "")).toLowerCase().indexOf(q) >= 0;
      });

      box.appendChild(el("div", { style: "padding:10px 16px;font-size:13px;color:var(--text-faint)",
        text: treffer.length + " von " + store.alleKarten().length + " Karten" }));

      treffer.slice(0, 400).forEach(function (k) {
        var st = store.zustand(k.id);
        var r = st.suspended ? "suspend" : srs.reife(st);
        var item = el(".browse-item");
        var kopf = el(".browse-q", {}, [
          el("span.caret", { text: "▸" }),
          el("span", {}, [
            el("span", { html: u.rich(k.frage) }),
            el(".browse-sub", {}, [
              el("span.state-chip.state-" + (r === "suspend" ? "neu" : r), {
                text: { neu: "neu", lernen: "Lernphase", jung: "jung", reif: "reif", suspend: "zurückgestellt" }[r]
              }),
              el("span", { text: k.modulName + " · " + k.thema }),
              el("span", { text: TYP_LABEL[k.typ] }),
              st.s !== "neu" ? el("span", { text: "nächste Abfrage " + u.dateText(st.due) }) : null
            ])
          ])
        ]);
        kopf.addEventListener("click", function () { item.classList.toggle("open"); });
        item.appendChild(kopf);

        var det = el(".browse-a");
        if (k.szenario) det.appendChild(el(".szenario", { html: u.rich(k.szenario) }));
        det.appendChild(antwortBlock(k, false));
        det.appendChild(el(".row", { style: "margin-top:14px" }, [
          el("button.btn.btn-ghost.btn-sm", {
            text: st.suspended ? "Wieder aktivieren" : "Zurückstellen",
            onclick: function () { store.toggleSuspend(k.id); liste(); }
          }),
          st.s !== "neu" ? el("button.btn.btn-ghost.btn-sm", {
            text: "Fortschritt zurücksetzen",
            onclick: function () { store.zuruecksetzen(k.id); u.toast("Karte zurückgesetzt"); liste(); }
          }) : null
        ]));
        item.appendChild(det);
        box.appendChild(item);
      });

      if (!treffer.length) box.appendChild(el(".empty", {}, [el("p", { text: "Keine Karte passt zu diesen Filtern." })]));
    }
    liste();
  }

  /* ================= Einstellungen ================= */

  function viewEinstellungen() {
    var s = store.settings();
    root.appendChild(el("h1", { text: "Einstellungen" }));
    root.appendChild(el("p.lead", { text: "Tageslimits steuern, wie stark deine Wiederholungslast in den kommenden Wochen wächst." }));

    var neuInp = el("input.inp", { type: "number", min: "0", max: "200", value: s.neuProTag });
    neuInp.addEventListener("change", function () {
      store.setSetting("neuProTag", Math.max(0, parseInt(neuInp.value, 10) || 0));
      u.toast("Gespeichert");
    });
    var wdhInp = el("input.inp", { type: "number", min: "10", max: "999", value: s.maxWdhProTag });
    wdhInp.addEventListener("change", function () {
      store.setSetting("maxWdhProTag", Math.max(10, parseInt(wdhInp.value, 10) || 10));
      u.toast("Gespeichert");
    });

    root.appendChild(el(".card-box", {}, [
      el(".setting", {}, [
        el(".setting-txt", {}, [
          el("b", { text: "Neue Karten pro Tag" }),
          el("span", { text: "Faustregel: jede neue Karte erzeugt über die nächsten Monate rund 8–10 Wiederholungen. 10–15 sind ein guter Dauerwert." })
        ]), neuInp
      ]),
      el(".setting", {}, [
        el(".setting-txt", {}, [
          el("b", { text: "Maximale Wiederholungen pro Tag" }),
          el("span", { text: "Obergrenze, damit ein Rückstand dich nicht erschlägt. Überzählige Karten rutschen auf den Folgetag." })
        ]), wdhInp
      ]),
      el(".setting", {}, [
        el(".setting-txt", {}, [
          el("b", { text: "Darstellung" }),
          el("span", { text: "Hell, dunkel oder automatisch nach Systemeinstellung." })
        ]),
        (function () {
          var sel = el("select.sel", {}, [
            el("option", { value: "auto", text: "Automatisch" }),
            el("option", { value: "light", text: "Hell" }),
            el("option", { value: "dark", text: "Dunkel" })
          ]);
          sel.value = s.theme || "auto";
          sel.addEventListener("change", function () { store.setSetting("theme", sel.value); themeAnwenden(); });
          return sel;
        })()
      ])
    ]));

    root.appendChild(el("h2", { text: "Lernstand sichern" }));
    var fileInp = el("input", { type: "file", accept: "application/json,.json", style: "display:none" });
    fileInp.addEventListener("change", function () {
      var f = fileInp.files[0];
      if (!f) return;
      var fr = new FileReader();
      fr.onload = function () {
        try {
          store.importieren(String(fr.result));
          u.toast("Lernstand geladen");
          go("lernen");
        } catch (e) { u.toast("Datei konnte nicht gelesen werden"); }
      };
      fr.readAsText(f);
    });

    root.appendChild(el(".card-box", {}, [
      el(".setting", {}, [
        el(".setting-txt", {}, [
          el("b", { text: "Sicherung erstellen" }),
          el("span", { text: "Der Fortschritt liegt nur in diesem Browser. Leerst du den Browserspeicher, ist er weg – lade dir regelmäßig eine Kopie herunter." })
        ]),
        el("button.btn", {
          text: "Als Datei speichern",
          onclick: function () {
            u.download("bwl-lernstand-" + new Date().toISOString().slice(0, 10) + ".json", store.exportieren());
          }
        })
      ]),
      el(".setting", {}, [
        el(".setting-txt", {}, [
          el("b", { text: "Sicherung einspielen" }),
          el("span", { text: "Ersetzt den aktuellen Stand vollständig." })
        ]),
        el("button.btn", { text: "Datei auswählen", onclick: function () { fileInp.click(); } })
      ]),
      el(".setting", {}, [
        el(".setting-txt", {}, [
          el("b", { text: "Alles zurücksetzen" }),
          el("span", { text: "Löscht sämtlichen Fortschritt in diesem Browser. Die Karteninhalte bleiben." })
        ]),
        el("button.btn.danger", {
          text: "Fortschritt löschen",
          onclick: function () {
            if (confirm("Wirklich den gesamten Lernfortschritt löschen?")) {
              store.allesLoeschen(); u.toast("Zurückgesetzt"); go("lernen");
            }
          }
        })
      ])
    ]));
    root.appendChild(fileInp);

    root.appendChild(el("h2", { text: "Tastatur" }));
    root.appendChild(el(".card-box", { style: "padding:14px 18px" }, [
      el("p.note.mt0", {}, [
        el("span.kbd", { text: "Leertaste" }), " Antwort zeigen bzw. „Gut“ · ",
        el("span.kbd", { text: "1" }), "–", el("span.kbd", { text: "4" }), " bewerten · ",
        el("span.kbd", { text: "h" }), " Hinweis · ",
        el("span.kbd", { text: "u" }), " rückgängig · ",
        el("span.kbd", { text: "Esc" }), " Sitzung beenden"
      ])
    ]));

    root.appendChild(el("h2", { text: "Wie der Planer rechnet" }));
    root.appendChild(el(".card-box", { style: "padding:6px 18px 16px" }, [
      el("ul", { style: "font-size:14px;line-height:1.7;padding-left:20px;color:var(--text-soft)" }, [
        el("li", { html: u.rich("Neue Karten laufen durch zwei Lernschritte (**1 Minute**, **10 Minuten**), danach beginnt das Langzeitintervall bei **1 Tag**.") }),
        el("li", { html: u.rich("Jede Karte trägt einen Leichtigkeitsfaktor (Start **2,5**). „Gut“ multipliziert das Intervall damit, „Leicht“ zusätzlich mit 1,3, „Schwer“ nur mit 1,2.") }),
        el("li", { html: u.rich("„Nochmal“ senkt den Faktor um 0,2, halbiert das Intervall und schickt die Karte zurück in die Kurzschleife.") }),
        el("li", { html: u.rich("Intervalle werden leicht zufällig gestreut (±5 %), damit nicht ganze Kartenblöcke am selben Tag zurückkommen.") })
      ])
    ]));
  }

  /* ================= Theme + Tastatur ================= */

  function themeAnwenden() {
    var t = store.settings().theme || "auto";
    if (t === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", t);
  }

  function themeWechseln() {
    var reihe = ["auto", "light", "dark"];
    var t = store.settings().theme || "auto";
    var next = reihe[(reihe.indexOf(t) + 1) % reihe.length];
    store.setSetting("theme", next);
    themeAnwenden();
    u.toast({ auto: "Design: automatisch", light: "Design: hell", dark: "Design: dunkel" }[next]);
    if (aktuelleAnsicht === "einstellungen") render();
  }

  function tasten(e) {
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;

    if (aktuelleAnsicht === "transfer" && transfer) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        if (!transfer.sichtbar) transfer.sichtbar = true;
        else if (transfer.i + 1 < transfer.karten.length) { transfer.i++; transfer.sichtbar = false; }
        else { transfer = null; u.toast("Drill abgeschlossen"); }
        render();
      } else if (e.key === "Escape") { transfer = null; render(); }
      return;
    }

    if (aktuelleAnsicht !== "lernen" || !karte) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (!antwortSichtbar) { antwortSichtbar = true; render(); }
      else bewerten(3);
    } else if (["1", "2", "3", "4"].indexOf(e.key) >= 0) {
      if (antwortSichtbar) bewerten(parseInt(e.key, 10));
    } else if (e.key === "h") {
      if (!antwortSichtbar) { hinweisSichtbar = true; render(); }
    } else if (e.key === "u") {
      rueckgaengig();
    } else if (e.key === "Escape") {
      beenden();
    }
  }

  /* ================= Start ================= */

  function init() {
    store.load();
    themeAnwenden();
    document.getElementById("tabs").addEventListener("click", function (e) {
      var b = e.target.closest(".tab");
      if (b) go(b.dataset.view);
    });
    document.getElementById("themeBtn").addEventListener("click", themeWechseln);
    document.addEventListener("keydown", tasten);
    go("lernen");
  }

  return { init: init, go: go };
})();

BWL.app.init();
