/* ============================================================
   Service Worker – macht die App offline nutzbar.

   WICHTIG: Nach jeder inhaltlichen Änderung VERSION erhöhen.
   Der Browser erkennt ein Update nur, wenn sich diese Datei ändert;
   die neue Version wird dann vollständig neu vorgeladen und die
   alte Cache-Generation beim Aktivieren gelöscht.
   ============================================================ */

const VERSION = "v1";
const CACHE = "bwl-" + VERSION;

/* Die App-Hülle. Relative Pfade, damit dieselbe Datei sowohl unter
   einer eigenen Domain als auch in einem Unterverzeichnis funktioniert. */
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/css/app.css",
  "./assets/js/data/registry.js",
  "./assets/js/data/m01-grundlagen.js",
  "./assets/js/data/m02-denkmuster.js",
  "./assets/js/data/m03-rechnungswesen.js",
  "./assets/js/data/m04-kostenrechnung.js",
  "./assets/js/data/m05-investition-finanzierung.js",
  "./assets/js/data/m06-marketing.js",
  "./assets/js/data/m07-produktion-logistik.js",
  "./assets/js/data/m08-organisation-personal.js",
  "./assets/js/data/m09-strategie.js",
  "./assets/js/data/m10-kennzahlen.js",
  "./assets/js/util.js",
  "./assets/js/srs.js",
  "./assets/js/store.js",
  "./assets/js/stats.js",
  "./assets/js/app.js",
  "./assets/js/pwa.js",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-512-maskable.png",
  "./assets/icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  // Kein skipWaiting: Die neue Version wartet, bis die Nutzerin sie bestätigt.
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((namen) => Promise.all(
        namen.filter((n) => n.startsWith("bwl-") && n !== CACHE)
             .map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

/* Auf Zuruf der Seite die wartende Version übernehmen. */
self.addEventListener("message", (e) => {
  if (e.data && e.data.type === "uebernehmen") self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;

  /* Seitenaufrufe: erst Netz (damit Aktualisierungen ankommen),
     bei Ausfall die zwischengespeicherte Startseite. */
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const kopie = res.clone();
          caches.open(CACHE).then((c) => c.put("./index.html", kopie));
          return res;
        })
        .catch(() => caches.match("./index.html", { ignoreSearch: true })
          .then((t) => t || caches.match("./")))
    );
    return;
  }

  /* Übrige Dateien: erst Cache, sonst Netz und dann ablegen. */
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((treffer) => {
      if (treffer) return treffer;
      return fetch(req).then((res) => {
        if (res && res.ok && res.type === "basic") {
          const kopie = res.clone();
          caches.open(CACHE).then((c) => c.put(req, kopie));
        }
        return res;
      });
    })
  );
});
