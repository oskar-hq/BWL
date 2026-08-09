/* ============================================================
   Persistenz + Warteschlange
   Der Lernfortschritt liegt getrennt von den Karteninhalten,
   damit Inhalte ergänzt werden können, ohne Fortschritt zu verlieren.
   ============================================================ */
window.BWL = window.BWL || {};

BWL.store = (function () {
  var KEY = "bwl-denkmuster-v1";
  var srs = BWL.srs;

  var STANDARD = {
    v: 1,
    settings: {
      neuProTag: 12,
      maxWdhProTag: 120,
      theme: "auto",
      module: {},          // modulId -> false schaltet ein Modul ab
      zeigeHinweis: true
    },
    karten: {},            // kartenId -> Planungszustand
    log: [],               // { t, id, g, i, v }  v = Zustand vor der Antwort
    ersterTag: null
  };

  var S = null;
  var undoStack = [];

  /* ---------- Laden / Speichern ---------- */

  function load() {
    if (S) return S;
    S = JSON.parse(JSON.stringify(STANDARD));
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var got = JSON.parse(raw);
        S.karten = got.karten || {};
        S.log = got.log || [];
        S.ersterTag = got.ersterTag || null;
        if (got.settings) for (var k in got.settings) S.settings[k] = got.settings[k];
      }
    } catch (e) {
      console.warn("Gespeicherter Stand konnte nicht gelesen werden:", e);
    }
    if (S.ersterTag === null) S.ersterTag = srs.heute();
    return S;
  }

  function save() {
    try {
      if (S.log.length > 20000) S.log = S.log.slice(-15000);
      localStorage.setItem(KEY, JSON.stringify(S));
    } catch (e) {
      BWL.util.toast("Speichern fehlgeschlagen – Speicher voll?");
    }
  }

  function settings() { return load().settings; }

  function setSetting(k, v) { load().settings[k] = v; save(); }

  /* ---------- Karten ---------- */

  var _alle = null;
  function alleKarten() {
    if (_alle) return _alle;
    _alle = [];
    (BWL.module || []).forEach(function (m) {
      (m.karten || []).forEach(function (k, i) {
        var c = Object.create(k);
        c.modulId = m.id;
        c.modulName = m.name;
        c.idx = i;
        _alle.push(c);
      });
    });
    return _alle;
  }

  function kartenById() {
    if (!BWL._byId) {
      BWL._byId = {};
      alleKarten().forEach(function (k) { BWL._byId[k.id] = k; });
    }
    return BWL._byId;
  }

  function modulAktiv(id) {
    var m = settings().module;
    return m[id] !== false;
  }

  /** Karten aus aktiven Modulen, ohne zurückgestellte. */
  function aktiveKarten() {
    return alleKarten().filter(function (k) {
      if (!modulAktiv(k.modulId)) return false;
      var st = zustand(k.id);
      return !st.suspended;
    });
  }

  function zustand(id) {
    var S = load();
    if (!S.karten[id]) S.karten[id] = srs.neu();
    return srs.ensure(S.karten[id]);
  }

  function setZustand(id, st) { load().karten[id] = st; }

  /* ---------- Tageszähler ---------- */

  function heuteZaehler() {
    var S = load(), d = srs.heute();
    var neu = 0, wdh = 0;
    for (var i = S.log.length - 1; i >= 0; i--) {
      var e = S.log[i];
      if (srs.tagIndex(e.t) !== d) {
        if (srs.tagIndex(e.t) < d) break;
        continue;
      }
      if (e.v === "neu") neu++; else wdh++;
    }
    return { neu: neu, wdh: wdh, gesamt: neu + wdh };
  }

  /* ---------- Warteschlange ---------- */

  function warteschlange() {
    var now = Date.now();
    var heute = srs.heute();
    var z = heuteZaehler();
    var st = settings();
    var restNeu = Math.max(0, (st.neuProTag || 0) - z.neu);
    var restWdh = Math.max(0, (st.maxWdhProTag || 0) - z.wdh);

    var lernJetzt = [], lernSpaeter = [], wdhFaellig = [], neuOffen = [];
    aktiveKarten().forEach(function (k) {
      var s = zustand(k.id);
      if (s.s === "neu") { neuOffen.push(k); return; }
      if (s.s === "lernen" || s.s === "relearn") {
        (s.due <= now ? lernJetzt : lernSpaeter).push(k);
        return;
      }
      if (srs.tagIndex(s.due) <= heute) wdhFaellig.push(k);
    });

    lernJetzt.sort(function (a, b) { return zustand(a.id).due - zustand(b.id).due; });
    lernSpaeter.sort(function (a, b) { return zustand(a.id).due - zustand(b.id).due; });

    return {
      lernJetzt: lernJetzt,
      lernSpaeter: lernSpaeter,
      wdh: wdhFaellig.slice(0, restWdh),
      wdhGesamt: wdhFaellig.length,
      neu: neuOffen.slice(0, restNeu),
      neuGesamt: neuOffen.length,
      restNeu: restNeu,
      restWdh: restWdh
    };
  }

  /** Nächste zu zeigende Karte – oder null, wenn nichts mehr ansteht. */
  function naechsteKarte() {
    var q = warteschlange();
    if (q.lernJetzt.length) return q.lernJetzt[0];

    var nWdh = q.wdh.length, nNeu = q.neu.length;
    if (nWdh || nNeu) {
      if (!nNeu) return pickZufall(q.wdh);
      if (!nWdh) return q.neu[0];
      // Neue Karten gleichmäßig unter die Wiederholungen mischen
      return Math.random() < nNeu / (nNeu + nWdh) ? q.neu[0] : pickZufall(q.wdh);
    }
    if (q.lernSpaeter.length) return q.lernSpaeter[0];   // Restschritte vorziehen
    return null;
  }

  function pickZufall(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  /* ---------- Antworten ---------- */

  function antworten(kartenId, grade) {
    var S = load();
    var vorher = zustand(kartenId);
    var vorReife = vorher.s;
    var r = srs.bewerten(vorher, grade, srs.cfg({
      lernSchritte: srs.DEF.lernSchritte
    }));
    undoStack.push({ id: kartenId, vorher: JSON.parse(JSON.stringify(vorher)), logLen: S.log.length });
    if (undoStack.length > 30) undoStack.shift();

    setZustand(kartenId, r.st);
    S.log.push({ t: Date.now(), id: kartenId, g: grade, i: Math.round(r.ivlTage * 100) / 100, v: vorReife });
    save();
    return r;
  }

  function kannUndo() { return undoStack.length > 0; }

  function undo() {
    if (!undoStack.length) return false;
    var S = load();
    var u = undoStack.pop();
    S.karten[u.id] = u.vorher;
    S.log = S.log.slice(0, u.logLen);
    save();
    return u.id;
  }

  function zuruecksetzen(kartenId) {
    var S = load();
    delete S.karten[kartenId];
    save();
  }

  function toggleSuspend(kartenId) {
    var st = zustand(kartenId);
    st.suspended = !st.suspended;
    setZustand(kartenId, st);
    save();
    return st.suspended;
  }

  /* ---------- Sichern / Wiederherstellen ---------- */

  function exportieren() {
    var S = load();
    return JSON.stringify({
      app: "bwl-denkmuster", v: S.v, exportiert: new Date().toISOString(),
      settings: S.settings, karten: S.karten, log: S.log, ersterTag: S.ersterTag
    }, null, 1);
  }

  function importieren(text) {
    var got = JSON.parse(text);
    if (!got || !got.karten) throw new Error("Datei enthält keinen Lernstand.");
    S = JSON.parse(JSON.stringify(STANDARD));
    S.karten = got.karten;
    S.log = got.log || [];
    S.ersterTag = got.ersterTag || srs.heute();
    if (got.settings) for (var k in got.settings) S.settings[k] = got.settings[k];
    save();
  }

  function allesLoeschen() {
    localStorage.removeItem(KEY);
    S = null; undoStack = [];
    load();
  }

  return {
    load: load, save: save, settings: settings, setSetting: setSetting,
    alleKarten: alleKarten, kartenById: kartenById, aktiveKarten: aktiveKarten,
    modulAktiv: modulAktiv, zustand: zustand, setZustand: setZustand,
    heuteZaehler: heuteZaehler, warteschlange: warteschlange, naechsteKarte: naechsteKarte,
    antworten: antworten, undo: undo, kannUndo: kannUndo,
    zuruecksetzen: zuruecksetzen, toggleSuspend: toggleSuspend,
    exportieren: exportieren, importieren: importieren, allesLoeschen: allesLoeschen
  };
})();
