/* Kleine Helfer – bewusst ohne Framework, damit die App per Doppelklick läuft. */
window.BWL = window.BWL || {};

BWL.util = (function () {
  var TAG = /^(\w+)([.#][\w-]+)*$/;

  /** el("div.card#x", {attr}, [kinder|text]) */
  function el(sel, attrs, kids) {
    var m = String(sel).split(/([.#])/);
    var node = document.createElement(m[0] || "div");
    for (var i = 1; i < m.length; i += 2) {
      if (m[i] === ".") node.classList.add(m[i + 1]);
      else node.id = m[i + 1];
    }
    if (attrs) {
      for (var k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
        var v = attrs[k];
        if (v === null || v === undefined || v === false) continue;
        if (k === "html") node.innerHTML = v;
        else if (k === "text") node.textContent = v;
        else if (k.slice(0, 2) === "on" && typeof v === "function") node.addEventListener(k.slice(2), v);
        else node.setAttribute(k, v === true ? "" : v);
      }
    }
    append(node, kids);
    return node;
  }

  function append(node, kids) {
    if (kids === null || kids === undefined || kids === false) return;
    if (Array.isArray(kids)) { kids.forEach(function (k) { append(node, k); }); return; }
    node.appendChild(kids instanceof Node ? kids : document.createTextNode(String(kids)));
  }

  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); return node; }

  /** Sehr begrenztes Markup in Karteninhalten: **fett**, *kursiv*, `code`. */
  function rich(str) {
    var s = escapeHtml(String(str == null ? "" : str));
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[\s(])\*([^*\n]+)\*/g, "$1<em>$2</em>");
    s = s.replace(/\n/g, "<br>");
    return s;
  }

  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /** Zahl mit deutschem Dezimalkomma. */
  function num(n, dec) {
    if (dec === undefined) dec = 0;
    return Number(n).toLocaleString("de-DE", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }

  /** Intervall in Tagen → "3 Tage" / "2,4 Mon." / "1,3 Jahre" */
  function ivlText(days) {
    if (days < 1 / 1440) return "<1 Min.";
    if (days < 1) {
      var min = Math.round(days * 1440);
      if (min < 60) return min + " Min.";
      return num(days * 24, 1) + " Std.";
    }
    if (days < 30) return num(Math.round(days), 0) + (Math.round(days) === 1 ? " Tag" : " Tage");
    if (days < 365) return num(days / 30.4, 1) + " Mon.";
    return num(days / 365, 1) + " Jahre";
  }

  function dateText(ts) {
    return new Date(ts).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
  }

  function shuffle(arr, rndSeed) {
    var a = arr.slice(), r = rndSeed || Math.random;
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var toastTimer = null;
  function toast(msg) {
    var t = document.querySelector(".toast");
    if (!t) { t = el("div.toast"); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  function download(filename, text) {
    var blob = new Blob([text], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = el("a", { href: url, download: filename });
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 500);
  }

  return {
    el: el, clear: clear, rich: rich, escapeHtml: escapeHtml, num: num,
    ivlText: ivlText, dateText: dateText, shuffle: shuffle, toast: toast, download: download
  };
})();
