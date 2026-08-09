# BWL Denkmuster-Training

Eine Lernplattform für Betriebswirtschaftslehre nach dem Prinzip der **verteilten Wiederholung**
(Spaced Repetition). Sie ist nicht auf das Auswendiglernen von Definitionen ausgelegt, sondern
darauf, ökonomische **Denkmuster** einzuschleifen: Grenzbetrachtung, Opportunitätskosten,
Relevanzprinzip, Engpasslogik, Zeitwert des Geldes, Anreizwirkungen.

## Starten

Keine Installation, kein Build, keine Internetverbindung nötig:

```
index.html im Browser öffnen
```

Alternativ über einen lokalen Server (empfohlen, wenn der Browser lokale Dateien einschränkt):

```bash
npx http-server -p 8080     # oder: python3 -m http.server 8080
```

Der Lernfortschritt wird im `localStorage` des Browsers gespeichert. Unter **Einstellungen**
lässt sich er als JSON-Datei sichern und wieder einspielen – das ist auch der Weg, um auf einem
zweiten Gerät weiterzulernen.

> **Der Speicher hängt an der Adresse.** `localStorage` ist an die Origin gebunden: Fortschritt
> von `file://`, von `oskar-hq.github.io` und von `bwl.oskarjacobsen.de` sind drei voneinander
> unabhängige Stände – ebenso `http` und `https` derselben Domain. Für den Umzug die Sicherung
> exportieren und auf der neuen Adresse einspielen.

## Live-Adresse

Die Seite läuft über GitHub Pages unter **https://bwl.oskarjacobsen.de**.

## Auf dem Handy installieren

Die App ist eine PWA und läuft nach dem Ersteinsatz vollständig offline.

- **iOS/Safari:** Seite öffnen → Teilen → *Zum Home-Bildschirm*
- **Android/Chrome:** Seite öffnen → Menü → *App installieren*

Sie startet dann im Vollbild ohne Browserleiste, mit eigenem Icon und eigenem Eintrag im
App-Umschalter. Über langes Antippen des Icons führen Verknüpfungen direkt in die heutige
Sitzung, in den Transfer-Drill oder in die Statistik.

Erscheint eine neue Fassung, zeigt die App unten einen Hinweis mit Schaltfläche *Neu laden*.
Das Update wird erst nach Bestätigung übernommen – eine laufende Lernsitzung wird nie
unterbrochen, der Fortschritt bleibt erhalten.

## Aufbau der Sammlung

166 Karten in zehn Modulen:

| Modul | Inhalt | Karten |
|---|---|---|
| Grundlagen & konstitutive Entscheidungen | Ökonomisches Prinzip, Ziele, Rechtsform, Standort | 16 |
| Ökonomische Denkmuster | Grenzbetrachtung, Sunk Costs, Engpass, Prinzipal-Agent | 18 |
| Externes Rechnungswesen | Bilanz, GuV, Cashflow, GoB, Bewertung | 16 |
| Kosten- und Leistungsrechnung | BAB, Kalkulation, Deckungsbeitrag, Break-even | 20 |
| Investition & Finanzierung | Kapitalwert, interner Zinsfuß, Leverage, Working Capital | 18 |
| Marketing & Vertrieb | Segmentierung, Elastizität, Preisstrategie, Kundenwert | 16 |
| Produktion, Beschaffung & Logistik | Losgröße, ABC/XYZ, JIT, Durchlaufzeit | 16 |
| Organisation, Personal & Führung | Leitungssysteme, Motivation, Anreizsysteme, Change | 15 |
| Strategie & Unternehmensführung | Five Forces, Wertkette, VRIO, BSC | 16 |
| Kennzahlen & Unternehmensanalyse | DuPont, Liquidität, EVA, Bilanzanalyse | 15 |

### Kartentypen

- **Begriff** – klassische Abfrage von Definitionen und Abgrenzungen
- **Denkmuster** – ein Prinzip plus die Schrittfolge, in der man es anwendet
- **Rechenweg** – Formel, Herleitung, Zahlenbeispiel
- **Mini-Case** – ein Sachverhalt, den man selbst durchdenkt; die Auflösung enthält eine
  Selbstcheck-Liste, mit der die eigene Antwort Punkt für Punkt abgeglichen wird

Fast jede Karte trägt zusätzlich eine **typische Falle** – der Denkfehler, der an dieser Stelle
regelmäßig gemacht wird. Der Lerneffekt liegt oft mehr in diesem Feld als in der Antwort selbst.

## Der Wiederholungsplaner

SM-2-Variante mit Lernschritten, wie sie aus Anki bekannt ist:

- Neue Karten laufen durch zwei Lernschritte (1 Minute, 10 Minuten), danach beginnt das
  Langzeitintervall bei einem Tag; „Leicht“ startet direkt bei vier Tagen.
- Jede Karte trägt einen Leichtigkeitsfaktor (Start 2,5, Minimum 1,3). „Gut“ multipliziert das
  Intervall damit, „Leicht“ zusätzlich mit 1,3, „Schwer“ nur mit 1,2.
- „Nochmal“ senkt den Faktor um 0,2, halbiert das Intervall und schickt die Karte zurück in die
  Kurzschleife.
- Intervalle werden um ±5 % gestreut, damit nicht ganze Kartenblöcke am selben Tag zurückkommen.
- Tageslimits für neue Karten und Wiederholungen verhindern, dass ein übermütiger erster Tag
  drei Wochen später zur Lawine wird. Der Tageswechsel liegt bei 4 Uhr morgens.

## Ansichten

- **Lernen** – die geplante Tagessitzung mit Tastatursteuerung
  (`Leertaste` Antwort zeigen bzw. „Gut“, `1`–`4` bewerten, `h` Hinweis, `u` rückgängig, `Esc` beenden)
- **Transfer** – Drill ausschließlich mit Denkmuster- und Case-Karten, ohne Einfluss auf den
  Wiederholungsplan. Gedacht für die Woche vor der Klausur.
- **Module** – einzelne Themengebiete zu- und abschalten
- **Statistik** – Prognose der nächsten 14 Tage, Aktivität, Reifegrad, Auswertung je Modul
- **Karten** – vollständiges Nachschlagewerk mit Suche und Filtern
- **Einstellungen** – Tageslimits, Design, Sicherung

## Empfohlene Nutzung

1. Täglich 10–15 Minuten. Das ist die eigentliche Wirkstelle des Verfahrens – nicht die Länge
   der Sitzung, sondern ihre Regelmäßigkeit.
2. Bei Case-Karten die Antwort erst **laut oder schriftlich formulieren**, dann auflösen. Das
   Ringen um die Antwort erzeugt den Lerneffekt, nicht das Wiedererkennen.
3. Ehrlich bewerten. „Gut“ nur, wenn die Antwort ohne Zögern kam. Wer sich selbst schont,
   bekommt schöne Statistiken und eine schlechte Klausur.
4. Trefferquote im Blick behalten: 85–92 % sind der gesunde Bereich. Deutlich darunter heißt,
   die Zahl neuer Karten pro Tag ist zu hoch.

## Struktur des Projekts

```
index.html
manifest.webmanifest   App-Manifest (Name, Icons, Verknüpfungen)
sw.js                  Service Worker – Offline-Betrieb und Updates
CNAME                  Custom Domain für GitHub Pages
.nojekyll              überspringt den Jekyll-Build
assets/css/app.css
assets/icons/          App-Icons (192, 512, maskable, Apple)
assets/js/util.js      DOM-Helfer, Formatierung
assets/js/srs.js       Wiederholungsplaner (SM-2)
assets/js/store.js     Persistenz, Warteschlange, Sicherung
assets/js/stats.js     Auswertungen
assets/js/app.js       Ansichten und Interaktion
assets/js/pwa.js       Registrierung des Service Workers, Update-Hinweis
assets/js/data/        die zehn Inhaltsmodule
```

### Veröffentlichen

Pages-Einstellung: *Deploy from a branch*, Branch `main`, Ordner `/ (root)`. Es gibt keinen
Build-Schritt – ein `git push` genügt, die neue Fassung steht nach ein bis zwei Minuten.

DNS für die Custom Domain (Subdomain, deshalb ein einzelner Eintrag):

```
bwl   CNAME   oskar-hq.github.io.
```

Danach in den Pages-Einstellungen *Enforce HTTPS* aktivieren.

### Eigene Karten ergänzen

Eine neue Karte ist ein Objekt im `karten`-Array eines Moduls:

```js
{ id: "m04-21", thema: "Deckungsbeitrag", typ: "denkmuster",
  frage:    "…",
  szenario: "…",           // optional, vor allem bei Cases
  hinweis:  "…",           // optional, abrufbar vor dem Auflösen
  antwort:  "…",
  schritte: ["…", "…"],    // optional
  formel:   "…",           // optional, String oder Array von Zeilen
  beispiel: "…",           // optional
  check:    ["…"],         // optional, Selbstcheck bei Cases
  falle:    "…",           // optional
  merksatz: "…" }          // optional
```

Die `id` muss eindeutig bleiben – der Lernfortschritt hängt daran. In den Texten sind
`**fett**`, `*kursiv*`, `` `code` `` und Zeilenumbrüche mit `\n` erlaubt.
Ein neues Modul wird als Datei unter `assets/js/data/` angelegt, ruft `BWL.addModul({…})` auf
und wird in `index.html` **und** in der Liste `ASSETS` in `sw.js` eingetragen.

> **Nach jeder Änderung `VERSION` in `sw.js` erhöhen** (`"v1"` → `"v2"` …). Der Browser erkennt
> ein Update ausschließlich daran, dass sich diese Datei ändert. Ohne Erhöhung bekommen bereits
> installierte Geräte weiterhin die alte Fassung aus ihrem Cache.
