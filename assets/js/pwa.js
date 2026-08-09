/* Registrierung des Service Workers und Hinweis auf neue Versionen.
   Läuft nur über http(s) – beim direkten Öffnen per Doppelklick (file://)
   gibt es keine Service Worker, die App funktioniert dort trotzdem. */
(function () {
  if (!("serviceWorker" in navigator)) return;
  if (location.protocol !== "https:" && location.protocol !== "http:") return;

  var uebernahmeGewuenscht = false;

  navigator.serviceWorker.addEventListener("controllerchange", function () {
    // Nur neu laden, wenn die Nutzerin das Update ausdrücklich bestätigt hat.
    if (uebernahmeGewuenscht) location.reload();
  });

  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").then(function (reg) {

      if (reg.waiting && navigator.serviceWorker.controller) hinweisZeigen(reg);

      reg.addEventListener("updatefound", function () {
        var neu = reg.installing;
        if (!neu) return;
        neu.addEventListener("statechange", function () {
          if (neu.state !== "installed") return;
          if (navigator.serviceWorker.controller) hinweisZeigen(reg);
          else if (window.BWL && BWL.util) BWL.util.toast("Offline einsatzbereit");
        });
      });

      // Stündlich nachsehen, ob eine neue Fassung bereitliegt.
      setInterval(function () { reg.update(); }, 60 * 60 * 1000);

    }).catch(function (err) {
      console.warn("Service Worker konnte nicht registriert werden:", err);
    });
  });

  function hinweisZeigen(reg) {
    if (document.querySelector(".update-banner")) return;
    var el = (window.BWL && BWL.util) ? BWL.util.el : null;
    if (!el) return;

    var banner = el(".update-banner", {}, [
      el("span", { text: "Neue Version verfügbar" }),
      el("button.btn.btn-primary.btn-sm", {
        text: "Neu laden",
        onclick: function () {
          uebernahmeGewuenscht = true;
          if (reg.waiting) reg.waiting.postMessage({ type: "uebernehmen" });
          else location.reload();
        }
      }),
      el("button.icon-btn", {
        text: "✕", title: "Später",
        onclick: function () { banner.remove(); }
      })
    ]);
    document.body.appendChild(banner);
  }
})();
