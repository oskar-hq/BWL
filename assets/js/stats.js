/* Auswertungen über Lernstand und Log. */
window.BWL = window.BWL || {};

BWL.stats = (function () {
  var srs = BWL.srs, store = BWL.store;

  function reifeVerteilung(karten) {
    var v = { neu: 0, lernen: 0, jung: 0, reif: 0, gesamt: 0 };
    (karten || store.aktiveKarten()).forEach(function (k) {
      v[srs.reife(store.zustand(k.id))]++;
      v.gesamt++;
    });
    return v;
  }

  /** Wie viele Wiederholungen stehen in den nächsten n Tagen an? */
  function prognose(n) {
    n = n || 14;
    var heute = srs.heute(), out = [];
    for (var i = 0; i < n; i++) out.push(0);
    store.aktiveKarten().forEach(function (k) {
      var st = store.zustand(k.id);
      if (st.s === "neu") return;
      var d = srs.tagIndex(st.due) - heute;
      if (d < 0) d = 0;
      if (d < n) out[d]++;
    });
    return out;
  }

  /** Beantwortete Karten je Tag (rückwärts, Index 0 = heute). */
  function aktivitaet(n) {
    n = n || 30;
    var heute = srs.heute(), S = store.load(), out = [];
    for (var i = 0; i < n; i++) out.push(0);
    S.log.forEach(function (e) {
      var d = heute - srs.tagIndex(e.t);
      if (d >= 0 && d < n) out[d]++;
    });
    return out;
  }

  function streak() {
    var S = store.load(), heute = srs.heute();
    var tage = {};
    S.log.forEach(function (e) { tage[srs.tagIndex(e.t)] = true; });
    var start = tage[heute] ? heute : (tage[heute - 1] ? heute - 1 : null);
    if (start === null) return 0;
    var n = 0, d = start;
    while (tage[d]) { n++; d--; }
    return n;
  }

  /** Trefferquote echter Wiederholungen (ohne Lernphase), letzte n Antworten. */
  function trefferquote(n) {
    var S = store.load(), rel = [];
    for (var i = S.log.length - 1; i >= 0 && rel.length < (n || 500); i--) {
      if (S.log[i].v === "wdh") rel.push(S.log[i]);
    }
    if (!rel.length) return null;
    var ok = rel.filter(function (e) { return e.g >= 3; }).length;
    return ok / rel.length;
  }

  function modulStats(modulId) {
    var heute = srs.heute();
    var v = { gesamt: 0, neu: 0, lernen: 0, jung: 0, reif: 0, faellig: 0 };
    store.alleKarten().forEach(function (k) {
      if (k.modulId !== modulId) return;
      var st = store.zustand(k.id);
      v.gesamt++;
      v[srs.reife(st)]++;
      if (st.s !== "neu" && !st.suspended && srs.tagIndex(st.due) <= heute) v.faellig++;
    });
    return v;
  }

  function gesamtAntworten() { return store.load().log.length; }

  /** Anteil der Karten, die überhaupt schon einmal dran waren. */
  function abdeckung() {
    var alle = store.aktiveKarten();
    if (!alle.length) return 0;
    var n = alle.filter(function (k) { return store.zustand(k.id).s !== "neu"; }).length;
    return n / alle.length;
  }

  /** Zeitaufwand grob geschätzt: 25 s je Karte. */
  function minutenHeute(anzahl) { return Math.round(anzahl * 25 / 60); }

  return {
    reifeVerteilung: reifeVerteilung, prognose: prognose, aktivitaet: aktivitaet,
    streak: streak, trefferquote: trefferquote, modulStats: modulStats,
    gesamtAntworten: gesamtAntworten, abdeckung: abdeckung, minutenHeute: minutenHeute
  };
})();
