BWL.addModul({
  id: "m07",
  name: "Produktion, Beschaffung & Logistik",
  beschreibung: "Losgrößen, Bestände, Durchlaufzeiten – die Rechenwege, mit denen man Kapitalbindung und Lieferfähigkeit gegeneinander abwägt.",
  karten: [

  { id: "m07-01", thema: "Produktionstypen", typ: "begriff",
    frage: "Wie unterscheidest du Fertigungstypen nach Auflagengröße und nach der Anordnung der Betriebsmittel?",
    antwort: "Nach **Auflagengröße**: Einzelfertigung, Serienfertigung, Sortenfertigung (artverwandte Produkte auf denselben Anlagen), Massenfertigung.\nNach **Anordnung**: Werkstattfertigung (gleichartige Maschinen räumlich zusammen – flexibel, lange Durchlaufzeiten), Fließfertigung (Anordnung nach Arbeitsfolge – kurze Durchlaufzeiten, geringe Flexibilität), Gruppen-/Inselfertigung (Kompromiss), Baustellenfertigung (Produkt bleibt am Ort).",
    schritte: [
      "Erst Programmbreite und Stückzahl bestimmen.",
      "Daraus folgt der sinnvolle Organisationstyp.",
      "Trade-off benennen: Flexibilität gegen Stückkosten und Durchlaufzeit."
    ],
    falle: "Die Kalkulationsmethode hängt am Fertigungstyp: Divisionskalkulation bei Massen-, Äquivalenzziffern bei Sorten-, Zuschlagskalkulation bei Einzel- und Serienfertigung." },

  { id: "m07-02", thema: "Optimale Bestellmenge", typ: "formel",
    frage: "Wie leitet sich die optimale Bestellmenge her und welche Annahmen stecken darin?",
    antwort: "Gesucht ist das Minimum der Summe aus bestellfixen Kosten (sinken mit der Bestellmenge) und Lagerhaltungskosten (steigen mit ihr). Im Optimum sind beide Kostenblöcke gleich groß.",
    formel: [
      "x_opt = √( (2 · Jahresbedarf · Bestellkosten je Bestellung) ÷ (Einstandspreis · Lagerkostensatz) )",
      "Gesamtkosten = (M ÷ x) · K_B + (x ÷ 2) · p · l"
    ],
    beispiel: "M = 24.000 Stück, K_B = 120 €, p = 25 €, l = 20 % → x_opt = √(5.760.000 ÷ 5) = √1.152.000 ≈ 1.073 Stück, also rund 22 Bestellungen pro Jahr.",
    falle: "Die Formel unterstellt konstanten Bedarf, feste Preise ohne Mengenrabatte, sofortige Lieferung und keine Fehlmengen. Die Kostenkurve verläuft im Optimum sehr flach – Abweichungen von ±20 % kosten kaum etwas, was Rundungen auf Gebindegrößen unproblematisch macht.",
    merksatz: "Im Optimum sind Bestellkosten und Lagerkosten gleich hoch." },

  { id: "m07-03", thema: "Optimale Losgröße", typ: "formel",
    frage: "Worin unterscheidet sich die optimale Losgröße von der optimalen Bestellmenge?",
    antwort: "Strukturell in nichts – nur die Kostenarten heißen anders: Statt bestellfixer Kosten stehen **Rüstkosten**, statt des Einstandspreises die **Herstellkosten** je Stück.",
    formel: ["x_opt = √( (2 · Jahresbedarf · Rüstkosten je Los) ÷ (Herstellkosten je Stück · Lagerkostensatz) )"],
    schritte: [
      "Rüstkosten je Rüstvorgang ermitteln (Personal, Stillstand des Engpasses, Anlaufausschuss).",
      "Lagerkostensatz aus Kapitalbindung, Raum, Versicherung, Schwund bilden.",
      "Formel anwenden und auf Produktionsrestriktionen runden."
    ],
    falle: "Rüstkosten sind keine Naturkonstante. Wer die Rüstzeit halbiert, senkt die optimale Losgröße um 29 % – genau hier setzt Lean an: Nicht die Losgröße optimieren, sondern die Rüstkosten angreifen." },

  { id: "m07-04", thema: "ABC-Analyse", typ: "denkmuster",
    frage: "Wie führst du eine ABC-Analyse durch und welche Konsequenz hat jede Klasse?",
    antwort: "Positionen werden nach ihrem Jahresverbrauchswert (Menge × Preis) sortiert und kumuliert klassifiziert.\n**A** (ca. 5–20 % der Positionen, 70–80 % des Werts): intensive Disposition, Einzelbestellung, Lieferantenverhandlung, geringe Bestände.\n**B**: normale Steuerung.\n**C** (ca. 50–70 % der Positionen, 5–10 % des Werts): vereinfachte Verfahren, Sichtkontrolle, Rahmenverträge, größere Bestände – die Steuerung darf nicht teurer sein als das Material.",
    schritte: [
      "Jahresverbrauchswert je Position berechnen.",
      "Absteigend sortieren.",
      "Kumulierte Wert- und Mengenanteile bilden.",
      "Klassengrenzen setzen.",
      "Dispositionsverfahren je Klasse festlegen."
    ],
    falle: "Wertlos heißt nicht unkritisch. Deshalb wird die ABC- mit der XYZ-Analyse kombiniert und zusätzlich die Versorgungskritikalität betrachtet." },

  { id: "m07-05", thema: "XYZ-Analyse", typ: "denkmuster",
    frage: "Was misst die XYZ-Analyse und wie kombinierst du sie mit ABC?",
    antwort: "Sie klassifiziert nach **Vorhersagegenauigkeit** des Verbrauchs: **X** konstant, hohe Prognosegüte; **Y** schwankend mit Trend oder Saison; **Z** unregelmäßig, kaum prognostizierbar.\nKombiniert ergibt sich eine Neun-Felder-Matrix: **AX** eignet sich für Just-in-Time und synchrone Beschaffung, **CZ** für Vorratshaltung mit einfacher Steuerung, **AZ** ist der kritische Fall – hoher Wert bei schlechter Prognose, hier braucht es Rahmenverträge, Lieferantenanbindung und bewusste Sicherheitsbestände.",
    merksatz: "ABC sagt, wie viel es wert ist. XYZ sagt, wie gut du es weißt." },

  { id: "m07-06", thema: "Bestellpunktverfahren", typ: "formel",
    frage: "Wie berechnest du Meldebestand und Sicherheitsbestand?",
    antwort: "Der Meldebestand ist der Bestand, bei dessen Unterschreitung bestellt wird. Er deckt den Verbrauch während der Wiederbeschaffungszeit plus einen Puffer für Unsicherheit.",
    formel: [
      "Meldebestand = Tagesverbrauch · Wiederbeschaffungszeit + Sicherheitsbestand",
      "Sicherheitsbestand ≈ z · σ · √(Wiederbeschaffungszeit)"
    ],
    beispiel: "Tagesverbrauch 80 Stück, Wiederbeschaffungszeit 12 Tage, Sicherheitsbestand 300 → Meldebestand 1.260 Stück.",
    falle: "Der Sicherheitsbestand wächst mit der **Wurzel** der Wiederbeschaffungszeit und mit dem geforderten Servicegrad überproportional: Von 95 % auf 99 % Servicegrad steigt der Faktor z von 1,65 auf 2,33 – 41 % mehr Bestand für 4 Prozentpunkte Lieferbereitschaft." },

  { id: "m07-07", thema: "Lagerkennzahlen", typ: "formel",
    frage: "Nenne die zentralen Lagerkennzahlen und ihren Zusammenhang.",
    antwort: "Sie hängen alle am durchschnittlichen Lagerbestand und übersetzen ihn in Zeit und Kapitalkosten.",
    formel: [
      "ø Lagerbestand = (Anfangsbestand + Endbestand) ÷ 2   oder = Mindestbestand + Bestellmenge ÷ 2",
      "Umschlagshäufigkeit = Jahresverbrauch ÷ ø Lagerbestand",
      "ø Lagerdauer = 360 ÷ Umschlagshäufigkeit",
      "Lagerzinssatz = Jahreszinssatz · ø Lagerdauer ÷ 360",
      "Lagerzinsen = ø Lagerwert · Lagerzinssatz"
    ],
    beispiel: "Jahresverbrauch 900.000 €, ø Bestand 150.000 € → Umschlag 6, Lagerdauer 60 Tage. Bei 8 % Zins: Lagerzinssatz 1,33 %, Lagerzinsen 2.000 €.",
    merksatz: "Jeder Umschlag mehr verkürzt die Kapitalbindung und finanziert sich selbst." },

  { id: "m07-08", thema: "Just-in-Time", typ: "denkmuster",
    frage: "Welche Voraussetzungen braucht Just-in-Time und welche Risiken handelst du dir ein?",
    antwort: "Voraussetzungen: konstanter, gut prognostizierbarer Bedarf (AX-Teile), räumliche Nähe oder zuverlässige Logistik, hohe Liefertreue und Qualität (Wareneingangsprüfung entfällt), abgestimmte Informationssysteme, langfristige Lieferbeziehungen.\nRisiken: keine Puffer gegen Störungen – Streik, Stau, Ausfall oder Qualitätsprobleme legen die Linie sofort still; Verlagerung der Lagerhaltung zum Lieferanten (der sie einpreist); höhere Transportfrequenz.",
    schritte: [
      "Teile über ABC/XYZ vorselektieren – JIT nur für AX und AY.",
      "Prozessfähigkeit des Lieferanten prüfen.",
      "Notfallkonzept und Mindestpuffer definieren.",
      "Gesamtkosten rechnen, nicht nur die Lagerkosten."
    ],
    falle: "JIT ist kein Sparprogramm für Bestände, sondern ein Synchronisationskonzept. Ohne stabile Prozesse erzeugt es nur teure Stillstände." },

  { id: "m07-09", thema: "Bedarfsermittlung", typ: "begriff",
    frage: "Wann arbeitest du programmgesteuert, wann verbrauchsgesteuert?",
    antwort: "**Programmgesteuert (deterministisch)**: Ableitung aus dem Produktionsprogramm über Stücklisten – genau, aufwendig, sinnvoll für A-Teile und hochwertige Baugruppen.\n**Verbrauchsgesteuert (stochastisch)**: Fortschreibung von Vergangenheitswerten über gleitende Durchschnitte oder exponentielle Glättung – einfach, sinnvoll für B- und C-Teile mit regelmäßigem Verbrauch.\nErgänzend die **subjektive Schätzung** bei fehlenden Daten (Neuprodukte).",
    formel: ["exponentielle Glättung: Prognose_neu = Prognose_alt + α · (Ist_alt − Prognose_alt)"],
    beispiel: "Prognose 500, Ist 560, α = 0,3 → neue Prognose 518. Ein hohes α reagiert schnell, verstärkt aber Zufallsschwankungen." },

  { id: "m07-10", thema: "Beschaffungsstrategien", typ: "denkmuster",
    frage: "Vergleiche Single, Dual und Multiple Sourcing.",
    antwort: "**Single Sourcing**: ein Lieferant je Teil – enge Integration, niedrigere Prozesskosten, Mengenbündelung, aber maximale Abhängigkeit und Ausfallrisiko.\n**Dual Sourcing**: zwei Quellen – Wettbewerb bleibt erhalten, Ausfall wird abgefedert, etwas höhere Komplexität.\n**Multiple Sourcing**: viele Quellen – maximaler Preiswettbewerb, geringe Bindung, aber hohe Transaktionskosten und wenig gemeinsame Entwicklung.",
    schritte: [
      "Spezifität und strategische Bedeutung des Teils bestimmen.",
      "Ausfallfolgen bewerten (legt es die Linie still?).",
      "Marktstruktur prüfen: Gibt es überhaupt Alternativen?",
      "Abhängigkeitsrisiko gegen Effizienzgewinn abwägen."
    ],
    falle: "Single Sourcing rechnet sich in ruhigen Zeiten und wird in Krisen teuer. Die Ersparnis ist sicher, das Risiko ist wahrscheinlichkeitsgewichtet – deshalb wird es systematisch unterschätzt." },

  { id: "m07-11", thema: "Lean Management", typ: "begriff",
    frage: "Welche Verschwendungsarten kennt das Lean-Konzept?",
    antwort: "Sieben klassische Arten (Muda): **Überproduktion**, **Bestände**, **Transport**, **Wartezeit**, **überflüssige Bewegung**, **falsche oder zu aufwendige Prozesse**, **Fehler und Nacharbeit**. Häufig ergänzt um die achte: **ungenutztes Mitarbeiterpotenzial**.",
    schritte: [
      "Wert aus Kundensicht definieren – alles, wofür der Kunde nicht zahlen würde, ist Kandidat für Verschwendung.",
      "Wertstrom aufnehmen.",
      "Fluss herstellen, Pull statt Push.",
      "Perfektion als laufenden Prozess betreiben."
    ],
    falle: "Überproduktion gilt als schlimmste Verschwendung, weil sie alle anderen erzeugt: Bestände, Transporte, Flächen, versteckte Qualitätsfehler." },

  { id: "m07-12", thema: "Durchlaufzeit", typ: "formel",
    frage: "Wie hängen Bestand, Durchsatz und Durchlaufzeit zusammen?",
    antwort: "Über das Gesetz von Little: Der mittlere Bestand im System entspricht dem Durchsatz multipliziert mit der mittleren Durchlaufzeit. Daraus folgt: Wer die Durchlaufzeit senken will, ohne den Durchsatz zu erhöhen, muss den Bestand senken.",
    formel: ["Bestand = Durchsatz · Durchlaufzeit", "Durchlaufzeit = Bestand ÷ Durchsatz"],
    beispiel: "Vor einer Fertigungsstufe liegen 600 Aufträge, es werden 40 pro Tag abgearbeitet → Durchlaufzeit 15 Tage. Halbiert man den freigegebenen Bestand auf 300, sinkt die Durchlaufzeit auf 7,5 Tage – ohne eine einzige Maschine schneller zu machen.",
    falle: "Mehr Aufträge freizugeben erhöht nicht den Durchsatz, sondern nur den Bestand und damit die Durchlaufzeit. Der Durchsatz wird ausschließlich vom Engpass bestimmt.",
    merksatz: "Weniger Aufträge im System heißt schnellere Aufträge." },

  { id: "m07-13", thema: "Qualitätskosten", typ: "denkmuster",
    frage: "Wie gliederst du Qualitätskosten und was besagt die Zehnerregel?",
    antwort: "**Fehlerverhütungskosten** (Schulung, Prozessfähigkeit, Lieferantenentwicklung), **Prüfkosten** (Kontrollen, Messmittel) und **Fehlerkosten** (intern: Ausschuss, Nacharbeit; extern: Gewährleistung, Rückruf, Imageverlust).\nDie **Zehnerregel** besagt, dass sich die Kosten der Fehlerbehebung mit jeder Wertschöpfungsstufe etwa verzehnfachen: Konstruktion 1 – Fertigungsvorbereitung 10 – Fertigung 100 – beim Kunden 1.000.",
    schritte: [
      "Fehlerkosten sichtbar machen – sie stecken meist in anderen Konten.",
      "Verhütungskosten dort erhöhen, wo die Fehlerkosten stärker sinken.",
      "Grenzbetrachtung führen: Die letzten Fehler zu eliminieren ist überproportional teuer."
    ],
    falle: "Externe Fehlerkosten werden systematisch unterschätzt, weil Imageschaden und Kundenabwanderung nicht gebucht werden." },

  { id: "m07-14", thema: "Optimale Bestellmenge", typ: "case",
    frage: "Welche Bestellmenge wählst du? Rechne beide Varianten.",
    szenario: "Jahresbedarf 18.000 Stück, Bestellkosten 90 € je Bestellung, Einstandspreis 40 €/Stück, Lagerkostensatz 15 % p. a. Der Lieferant bietet zusätzlich an: Ab einer Bestellmenge von 3.000 Stück gewährt er 2 % Rabatt auf den Einstandspreis.",
    hinweis: "Rechne zuerst das klassische Optimum, dann die Gesamtkosten inklusive Materialwert für beide Varianten – der Rabatt wirkt auf den größten Kostenblock.",
    antwort: "Klassisches Optimum: x_opt = √((2 · 18.000 · 90) ÷ (40 · 0,15)) = √(3.240.000 ÷ 6) = √540.000 ≈ **735 Stück**.\nVariante A (735 Stück): Bestellkosten 18.000 ÷ 735 · 90 = 2.204 €; Lagerkosten 735 ÷ 2 · 40 · 0,15 = 2.205 €; Materialwert 720.000 € → **724.409 €**.\nVariante B (3.000 Stück, Preis 39,20 €): Bestellkosten 18.000 ÷ 3.000 · 90 = 540 €; Lagerkosten 1.500 · 39,20 · 0,15 = 8.820 €; Materialwert 705.600 € → **714.960 €**.\nVariante B ist um rund 9.450 € günstiger. Der Rabatt von 2 % spart 14.400 € Materialkosten; dem stehen 6.615 € höhere Lagerkosten abzüglich 1.664 € eingesparter Bestellkosten gegenüber, also 4.951 € Mehrkosten.\nZu prüfen bleibt: Reicht die Lagerfläche? Wie hoch ist das Verderb- und Veralterungsrisiko bei zwei Monaten Reichweite? Und ist der Lagerkostensatz von 15 % realistisch oder unterschätzt er die Kapitalbindung?",
    check: [
      "Optimale Bestellmenge korrekt mit rund 735 Stück berechnet",
      "Materialwert in den Gesamtkostenvergleich einbezogen (sonst ist der Rabatt unsichtbar)",
      "Lager- und Bestellkosten beider Varianten getrennt ausgewiesen",
      "Variante B als günstiger erkannt",
      "Nebenbedingungen wie Lagerfläche und Veralterungsrisiko angesprochen"
    ],
    falle: "Wer nur Bestell- und Lagerkosten vergleicht, übersieht den Rabatt vollständig – der Materialwert ist bei Rabattstaffeln entscheidungsrelevant, weil er sich zwischen den Alternativen unterscheidet." },

  { id: "m07-15", thema: "Engpasssteuerung", typ: "case",
    frage: "Welche Maßnahme empfiehlst du, und welche wäre Geldverschwendung?",
    szenario: "Eine Fertigung besteht aus vier Stationen mit Kapazitäten von 120, 80, 140 und 110 Stück pro Schicht. Vor Station 2 stauen sich 900 Teile. Der Produktionsleiter möchte in eine schnellere Maschine für Station 3 investieren (Kapazität dann 200), weil dort die älteste Anlage steht.",
    hinweis: "Wie hoch ist der Systemdurchsatz? Und welche Investition erhöht ihn?",
    antwort: "Der Durchsatz des Systems beträgt 80 Stück je Schicht – bestimmt allein durch Station 2. Eine Investition in Station 3 erhöht den Durchsatz um **null** Stück und vergrößert nur den Bestandsaufbau vor Station 2 bzw. die Leerzeit an Station 3.\nRichtige Reihenfolge: Station 2 identifizieren, ausreizen (Rüstzeiten reduzieren, Pausen überlappen, keine Ausschussteile in den Engpass lassen, Qualitätsprüfung **vor** die Station legen), alle anderen Stationen dem Engpasstakt unterordnen und die Auftragsfreigabe auf 80 Stück je Schicht begrenzen. Erst danach den Engpass erweitern.\nDer Bestand von 900 Teilen bedeutet nach Little 900 ÷ 80 = 11,25 Schichten Durchlaufzeit allein an dieser Stelle. Begrenzt man den Puffer auf 160 Teile, sinkt sie auf 2 Schichten – bei unverändertem Durchsatz.\nNach der Erweiterung von Station 2 wandert der Engpass zu Station 4 (110 Stück); mehr als 110 ist ohne weitere Maßnahmen also nicht zu holen. Das begrenzt auch, wie viel Kapazität an Station 2 sinnvoll zugekauft wird.",
    check: [
      "Station 2 als Engpass identifiziert",
      "Erkannt, dass die geplante Investition den Durchsatz nicht erhöht",
      "Ausreizen vor Erweitern als Reihenfolge genannt",
      "Qualitätsprüfung vor den Engpass gelegt",
      "Little's Law auf den Bestand angewandt und Durchlaufzeit berechnet",
      "Wanderung des Engpasses zu Station 4 vorausgedacht und als Obergrenze der Erweiterung erkannt"
    ],
    merksatz: "Investiere nie in eine Station, die ohnehin wartet." },

  { id: "m07-16", thema: "Kapazität", typ: "formel",
    frage: "Wie berechnest du Auslastungsgrad und Nutzungsgrad einer Anlage?",
    antwort: "Der **Auslastungsgrad** setzt die tatsächliche Nutzung ins Verhältnis zur verfügbaren Kapazität. Die Gesamtanlageneffektivität (OEE) verbindet zusätzlich Leistung und Qualität.",
    formel: [
      "Auslastungsgrad = Ist-Ausbringung ÷ Kapazität · 100",
      "OEE = Verfügbarkeitsgrad · Leistungsgrad · Qualitätsgrad"
    ],
    beispiel: "Verfügbarkeit 90 %, Leistung 85 %, Qualität 98 % → OEE = 74,97 %. Ein Viertel der eingekauften Kapazität wird nicht produktiv.",
    falle: "Eine hohe Auslastung ist nur an der Engpassstation ein Erfolg. An allen anderen Stationen erzeugt sie Zwischenbestände – Auslastung ist dort ein Kostentreiber, kein Leistungsmerkmal." }

]});
