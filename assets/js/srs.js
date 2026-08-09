/* ============================================================
   Spaced-Repetition-Planer (SM-2 Variante mit Lernschritten)

   Zustände einer Karte:
     "neu"     – noch nie beantwortet
     "lernen"  – in der Einführungsphase (Minutenschritte)
     "wdh"     – im Langzeit-Intervall (Tage)
     "relearn" – nach einem Fehler zurück in Minutenschritte

   Bewertungen: 1 = Nochmal, 2 = Schwer, 3 = Gut, 4 = Leicht
   ============================================================ */
window.BWL = window.BWL || {};

BWL.srs = (function () {
  var MIN = 60 * 1000, TAG = 24 * 60 * MIN;

  var DEF = {
    lernSchritte:   [1, 10],   // Minuten
    relearnSchritte:[10],      // Minuten
    startIntervall: 1,         // Tage nach Abschluss der Lernphase
    leichtIntervall:4,         // Tage bei "Leicht" aus der Lernphase heraus
    startEase:      2.5,
    minEase:        1.3,
    schwerFaktor:   1.2,
    leichtBonus:    1.3,
    rueckfallFaktor:0.5,       // Intervall-Rest nach einem Fehler
    maxIntervall:   365 * 3,
    fuzz:           0.05,
    leechGrenze:    8,
    tagesWechsel:   4          // Uhrzeit, ab der ein neuer "Lerntag" zählt
  };

  function cfg(over) {
    var c = {}, k;
    for (k in DEF) c[k] = DEF[k];
    if (over) for (k in over) if (over[k] !== undefined && over[k] !== null) c[k] = over[k];
    return c;
  }

  /** Fortlaufender Tagesindex in lokaler Zeit, Tageswechsel um 4 Uhr morgens. */
  function tagIndex(ts, c) {
    var h = (c || DEF).tagesWechsel;
    var d = new Date(ts - h * 60 * MIN);
    return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / TAG);
  }

  function heute(c) { return tagIndex(Date.now(), c); }

  function neu() {
    return { s: "neu", due: 0, ivl: 0, ease: DEF.startEase, step: 0, reps: 0, lapses: 0, last: 0 };
  }

  function ensure(st) {
    if (!st) return neu();
    var n = neu(), k;
    for (k in n) if (st[k] === undefined) st[k] = n[k];
    return st;
  }

  /** Ist die Karte jetzt fällig? Wiederholungen zählen tageweise. */
  function faellig(st, c, now) {
    st = ensure(st);
    now = now || Date.now();
    if (st.suspended) return false;
    if (st.s === "neu") return false;
    if (st.s === "wdh") return tagIndex(st.due, c) <= tagIndex(now, c);
    return st.due <= now;
  }

  function fuzzen(tage, c) {
    if (tage < 2.5) return tage;
    var spanne = Math.max(1, tage * c.fuzz);
    return Math.max(1, Math.round(tage + (Math.random() * 2 - 1) * spanne));
  }

  /**
   * Berechnet den Folgezustand.
   * @returns {{st:Object, ivlTage:number}} ivlTage = Abstand bis zur nächsten Abfrage
   */
  function bewerten(stIn, grade, conf, now) {
    var c = cfg(conf);
    var st = ensure(JSON.parse(JSON.stringify(stIn || {})));
    now = now || Date.now();

    var lernPhase = (st.s === "neu" || st.s === "lernen");
    var relearn = (st.s === "relearn");
    var tage = 0;

    if (lernPhase) {
      var schritte = c.lernSchritte;
      if (grade === 1) {
        st.s = "lernen"; st.step = 0;
        tage = schritte[0] / 1440;
      } else if (grade === 2) {
        st.s = "lernen";
        st.step = Math.min(st.step, schritte.length - 1);
        tage = schritte[st.step] / 1440;
      } else if (grade === 3) {
        var next = st.step + 1;
        if (next >= schritte.length) {
          st.s = "wdh"; st.step = 0; st.ivl = c.startIntervall;
          tage = st.ivl;
        } else {
          st.s = "lernen"; st.step = next;
          tage = schritte[next] / 1440;
        }
      } else { // 4 = Leicht → direkt in die Langzeitphase
        st.s = "wdh"; st.step = 0; st.ivl = c.leichtIntervall;
        tage = st.ivl;
      }
    } else if (relearn) {
      var rs = c.relearnSchritte;
      if (grade === 1) {
        st.step = 0; tage = rs[0] / 1440;
      } else if (grade === 2) {
        st.step = Math.min(st.step, rs.length - 1); tage = rs[st.step] / 1440;
      } else {
        var n2 = st.step + 1;
        if (grade === 4 || n2 >= rs.length) {
          st.s = "wdh"; st.step = 0;
          st.ivl = Math.max(1, st.ivl || 1);
          tage = st.ivl;
        } else {
          st.step = n2; tage = rs[n2] / 1440;
        }
      }
    } else { // "wdh"
      var ivl = Math.max(1, st.ivl || 1);
      if (grade === 1) {
        st.lapses += 1;
        st.ease = Math.max(c.minEase, st.ease - 0.2);
        st.ivl = Math.max(1, Math.round(ivl * c.rueckfallFaktor));
        st.s = "relearn"; st.step = 0;
        tage = c.relearnSchritte[0] / 1440;
        if (st.lapses >= c.leechGrenze) st.leech = true;
      } else if (grade === 2) {
        st.ease = Math.max(c.minEase, st.ease - 0.15);
        st.ivl = fuzzen(Math.max(ivl + 1, ivl * c.schwerFaktor), c);
        tage = st.ivl;
      } else if (grade === 3) {
        st.ivl = fuzzen(Math.max(ivl + 1, ivl * st.ease), c);
        tage = st.ivl;
      } else {
        st.ease = st.ease + 0.15;
        st.ivl = fuzzen(Math.max(ivl + 2, ivl * st.ease * c.leichtBonus), c);
        tage = st.ivl;
      }
      st.ivl = Math.min(st.ivl, c.maxIntervall);
      tage = Math.min(tage, c.maxIntervall);
    }

    st.reps += 1;
    st.last = now;
    st.due = now + tage * TAG;
    return { st: st, ivlTage: tage };
  }

  /** Vorschau auf das Intervall, ohne den Zustand zu verändern (ohne Zufallsstreuung). */
  function vorschau(st, grade, conf) {
    var c = cfg(conf);
    c.fuzz = 0;
    var alt = Math.random;
    Math.random = function () { return 0.5; };
    var r;
    try { r = bewerten(st, grade, c); } finally { Math.random = alt; }
    return r.ivlTage;
  }

  /** Reifegrad für Statistik/Anzeige. */
  function reife(st) {
    st = ensure(st);
    if (st.s === "neu") return "neu";
    if (st.s === "lernen" || st.s === "relearn") return "lernen";
    return st.ivl >= 21 ? "reif" : "jung";
  }

  return {
    DEF: DEF, cfg: cfg, neu: neu, ensure: ensure, faellig: faellig,
    bewerten: bewerten, vorschau: vorschau, reife: reife,
    tagIndex: tagIndex, heute: heute, TAG: TAG
  };
})();
