BWL.addModul({
  id: "m10",
  name: "Kennzahlen & Unternehmensanalyse",
  beschreibung: "Rentabilität, Liquidität, Kapitalstruktur – und die Fähigkeit, aus drei Zahlen die richtige Frage abzuleiten.",
  karten: [

  { id: "m10-01", thema: "Rentabilitätskennzahlen", typ: "formel",
    frage: "Wie berechnest du Eigenkapital-, Gesamtkapital- und Umsatzrentabilität – und warum steht bei der Gesamtkapitalrentabilität der Zinsaufwand im Zähler?",
    antwort: "Die Gesamtkapitalrentabilität misst die Verzinsung des **gesamten** eingesetzten Kapitals. Da Fremdkapitalzinsen die Vergütung eines Teils dieses Kapitals sind, müssen sie zum Gewinn addiert werden – sonst wäre die Kennzahl von der Finanzierungsstruktur abhängig und nicht mehr vergleichbar.",
    formel: [
      "EK-Rentabilität = Jahresüberschuss ÷ Eigenkapital · 100",
      "GK-Rentabilität = (Jahresüberschuss + Fremdkapitalzinsen) ÷ Gesamtkapital · 100",
      "Umsatzrentabilität = Jahresüberschuss ÷ Umsatz · 100",
      "ROI = Umsatzrentabilität · Kapitalumschlag"
    ],
    beispiel: "JÜ 300.000 €, Zinsen 90.000 €, EK 1,2 Mio., GK 4 Mio., Umsatz 8 Mio.: r_EK = 25 %, r_GK = 9,75 %, Umsatzrendite 3,75 %.",
    falle: "Eine hohe Eigenkapitalrentabilität kann allein aus einer dünnen Eigenkapitaldecke stammen. Sie ist ohne die Kapitalstruktur nicht interpretierbar." },

  { id: "m10-02", thema: "DuPont-Schema", typ: "denkmuster",
    frage: "Wie zerlegt das DuPont-Schema den Return on Investment und wozu nutzt du die Zerlegung?",
    antwort: "Der ROI wird in **Umsatzrentabilität** (Ergebnisqualität je Umsatzeuro) und **Kapitalumschlag** (Umsatz je gebundenem Kapitaleuro) zerlegt. Damit lässt sich jede Maßnahme einem der beiden Äste zuordnen – und man sieht, dass dieselbe Rendite auf zwei völlig verschiedenen Wegen erreichbar ist.",
    formel: ["ROI = (Gewinn ÷ Umsatz) · (Umsatz ÷ investiertes Kapital)"],
    schritte: [
      "Ast 1 – Marge: Preise, Produktmix, variable Kosten, Fixkostenblock.",
      "Ast 2 – Umschlag: Vorräte, Forderungen, Anlagevermögen, Kapazitätsauslastung.",
      "Maßnahme dem Ast zuordnen und Wirkung durchrechnen.",
      "Gegenläufigkeit prüfen: Höhere Lieferbereitschaft verbessert vielleicht die Marge, senkt aber den Umschlag."
    ],
    beispiel: "Ein Discounter erreicht 12 % ROI mit 2 % Marge und Umschlag 6; ein Anlagenbauer mit 12 % Marge und Umschlag 1. Beide Modelle funktionieren – aber sie verlangen völlig verschiedene Steuerung.",
    merksatz: "Rendite ist Marge mal Tempo." },

  { id: "m10-03", thema: "Ergebnisgrößen", typ: "begriff",
    frage: "Wie hängen EBITDA, EBIT, EBT und Jahresüberschuss zusammen und wofür nutzt man welche Größe?",
    antwort: "Die Kette läuft von der operativen Ertragskraft zum Nettoergebnis: **EBITDA** (vor Abschreibungen, Zinsen, Steuern) zeigt die operative Ertragskraft weitgehend unabhängig von Investitionspolitik und Bewertungswahlrechten. **EBIT** ist das operative Ergebnis nach Abschreibungen, also unabhängig von der Finanzierung – die Basis jedes Betriebsvergleichs. **EBT** ist das Ergebnis vor Steuern, der **Jahresüberschuss** das, was den Eigentümern verbleibt.",
    formel: [
      "EBITDA − Abschreibungen = EBIT",
      "EBIT − Zinsergebnis = EBT",
      "EBT − Steuern = Jahresüberschuss"
    ],
    falle: "EBITDA wird gern als Cashflow-Ersatz verkauft. Es ignoriert aber den realen Wertverzehr der Anlagen und die Bindung im Working Capital – bei kapitalintensiven Geschäftsmodellen ist das eine erhebliche Beschönigung." },

  { id: "m10-04", thema: "Liquiditätsgrade", typ: "formel",
    frage: "Wie sind die drei Liquiditätsgrade definiert und welche Richtwerte gelten?",
    antwort: "Sie setzen zunehmend breitere Teile des Umlaufvermögens ins Verhältnis zu den kurzfristigen Verbindlichkeiten.",
    formel: [
      "Liquidität 1. Grades = Zahlungsmittel ÷ kurzfristige Verbindlichkeiten · 100        (Richtwert 10–30 %)",
      "Liquidität 2. Grades = (Zahlungsmittel + kurzfristige Forderungen) ÷ kfr. Verb. · 100  (Richtwert ≈ 100 %)",
      "Liquidität 3. Grades = gesamtes Umlaufvermögen ÷ kfr. Verb. · 100                   (Richtwert 120–200 %)"
    ],
    schritte: [
      "Immer prüfen, was in den kurzfristigen Verbindlichkeiten steckt (Steuern, Löhne, Kontokorrent).",
      "Forderungen auf Werthaltigkeit und Alter prüfen.",
      "Kennzahl gegen die tatsächliche Zahlungsplanung halten."
    ],
    falle: "Alle drei Grade sind Stichtagsgrößen und sagen nichts über die zeitliche Verteilung. Eine Liquidität 2. Grades von 100 % nützt nichts, wenn die Forderungen in 60 Tagen eingehen und die Verbindlichkeiten in 10 Tagen fällig sind. Nur eine Finanzplanung zeigt das." },

  { id: "m10-05", thema: "Kapitalstruktur", typ: "formel",
    frage: "Welche Kennzahlen beschreiben die Kapitalstruktur und wie interpretierst du sie?",
    antwort: "Sie messen die Risikotragfähigkeit: Wie viel Verlust kann das Unternehmen absorbieren, bevor die Gläubiger betroffen sind?",
    formel: [
      "Eigenkapitalquote = EK ÷ Gesamtkapital · 100",
      "Verschuldungsgrad = FK ÷ EK · 100",
      "Anlagendeckung II = (EK + langfristiges FK) ÷ Anlagevermögen · 100",
      "dynamischer Verschuldungsgrad = Nettofinanzverbindlichkeiten ÷ operativer Cashflow  (Jahre)"
    ],
    beispiel: "Nettoschulden 6 Mio. €, operativer Cashflow 1,5 Mio. € → dynamischer Verschuldungsgrad 4 Jahre. Banken sehen Werte über 3 bis 4 Jahre kritisch, weil dann die Entschuldungsfähigkeit vom Bestandsgeschäft abhängt.",
    merksatz: "Die Eigenkapitalquote misst Puffer, der dynamische Verschuldungsgrad misst Ausdauer." },

  { id: "m10-06", thema: "Umschlagskennzahlen", typ: "formel",
    frage: "Wie berechnest du Debitoren-, Kreditorenlaufzeit und Lagerdauer – und was sagt der Cash Conversion Cycle?",
    antwort: "Die Umschlagskennzahlen übersetzen Bestände in Tage und machen die Kapitalbindung sichtbar. Der Cash Conversion Cycle zeigt, wie viele Tage zwischen der Bezahlung des Materials und dem Geldeingang vom Kunden liegen – so lange muss das Unternehmen den Umsatz vorfinanzieren.",
    formel: [
      "Debitorenlaufzeit = ø Forderungen ÷ Umsatz · 365",
      "Kreditorenlaufzeit = ø Verbindlichkeiten L+L ÷ Materialaufwand · 365",
      "Lagerdauer = ø Vorräte ÷ Materialaufwand · 365",
      "Cash Conversion Cycle = Lagerdauer + Debitorenlaufzeit − Kreditorenlaufzeit"
    ],
    beispiel: "Lagerdauer 55 Tage, Debitorenlaufzeit 48, Kreditorenlaufzeit 32 → CCC = 71 Tage. Bei 20 Mio. € Umsatz sind rund 3,9 Mio. € dauerhaft gebunden. Jeder eingesparte Tag setzt gut 54.000 € frei.",
    falle: "Die Kreditorenlaufzeit lässt sich scheinbar kostenlos verlängern – tatsächlich kostet der Verzicht auf 2 % Skonto bei 20 Tagen Differenz über 36 % effektiven Jahreszins." },

  { id: "m10-07", thema: "Skonto", typ: "formel",
    frage: "Wie berechnest du den effektiven Jahreszins eines Lieferantenkredits?",
    antwort: "Der Verzicht auf Skonto ist die Aufnahme eines Kredits zum Preis des Skontos für die Dauer der Zahlungszielverlängerung.",
    formel: ["effektiver Jahreszins ≈ Skontosatz ÷ (100 − Skontosatz) · 360 ÷ (Zahlungsziel − Skontofrist) · 100"],
    beispiel: "3 % Skonto bei 10 Tagen, Ziel 30 Tage: 3 ÷ 97 · 360 ÷ 20 · 100 = **55,7 %** p. a. Jeder Kontokorrentkredit ist billiger.",
    merksatz: "Skonto ziehen ist fast immer die günstigste Finanzierungsentscheidung des Tages." },

  { id: "m10-08", thema: "Wertorientierung", typ: "formel",
    frage: "Was misst der Economic Value Added und was unterscheidet ihn vom Jahresüberschuss?",
    antwort: "EVA misst den **Übergewinn** nach Abzug der Kosten des gesamten eingesetzten Kapitals – auch der Eigenkapitalkosten, die in der GuV nicht auftauchen. Ein positiver Jahresüberschuss bedeutet noch keine Wertschaffung; erst oberhalb der Kapitalkosten entsteht Wert.",
    formel: [
      "EVA = NOPAT − (investiertes Kapital · WACC)",
      "gleichwertig: EVA = (ROCE − WACC) · investiertes Kapital",
      "ROCE = EBIT · (1 − s) ÷ (Eigenkapital + verzinsliches Fremdkapital)"
    ],
    beispiel: "NOPAT 4,2 Mio. €, investiertes Kapital 50 Mio. €, WACC 9 % → Kapitalkosten 4,5 Mio. € → EVA = −300.000 €. Das Unternehmen ist profitabel und vernichtet trotzdem Wert.",
    schritte: [
      "Drei Hebel prüfen: NOPAT steigern, Kapital senken, Kapitalkosten senken.",
      "Der zweite Hebel wird meist vergessen – nicht betriebsnotwendiges Vermögen bindet Kapital ohne Ertrag."
    ],
    merksatz: "Gewinn ist erst dann Erfolg, wenn er die Kapitalkosten übersteigt." },

  { id: "m10-09", thema: "Kennzahlensysteme", typ: "denkmuster",
    frage: "Warum arbeitet man mit Kennzahlensystemen statt mit Einzelkennzahlen?",
    antwort: "Weil eine einzelne Kennzahl mehrdeutig ist und zu einseitiger Steuerung verleitet. Ein System stellt rechnerische (DuPont: ROI-Baum) oder sachlogische Beziehungen (Balanced Scorecard) her, macht Zielkonflikte sichtbar und erlaubt es, eine Abweichung bis zur Ursache zurückzuverfolgen.",
    schritte: [
      "Spitzenkennzahl festlegen.",
      "Rechnerisch in Bestandteile zerlegen.",
      "Je Ast Verantwortliche zuordnen.",
      "Abweichung immer von oben nach unten aufsplitten, bis die Ursache eindeutig ist."
    ],
    falle: "Kennzahlen sind Fragen, keine Antworten. Eine sinkende Umsatzrendite sagt nur, wo man nachsehen muss – nicht, was zu tun ist." },

  { id: "m10-10", thema: "Vergleichsarten", typ: "begriff",
    frage: "Welche Vergleichsmaßstäbe gibt es und welche Fehlerquellen bringen sie mit?",
    antwort: "**Zeitvergleich** (eigene Vorperioden – zeigt Entwicklung, verewigt aber eigene Schwächen), **Betriebsvergleich/Benchmarking** (Wettbewerber oder Branchendurchschnitt – erfordert vergleichbare Bilanzierung, Größe und Fertigungstiefe) und **Soll-Ist-Vergleich** (Plan gegen Ist – nur so gut wie die Planung).",
    schritte: [
      "Immer mindestens zwei Vergleichsarten kombinieren.",
      "Vor jedem Betriebsvergleich Strukturunterschiede bereinigen (Fertigungstiefe, Leasing statt Kauf, Rechtsform).",
      "Bei Abweichungen zuerst fragen, ob die Zahl oder der Maßstab falsch ist."
    ],
    falle: "Ein guter Branchendurchschnitt ist kein guter Wert – er kann die Durchschnittsleistung einer strukturell unattraktiven Branche sein." },

  { id: "m10-11", thema: "Grenzen von Kennzahlen", typ: "denkmuster",
    frage: "Welche systematischen Grenzen haben Bilanzkennzahlen?",
    antwort: "Sie sind **vergangenheitsbezogen**, **stichtagsbezogen** (und damit gestaltbar), von **Bewertungswahlrechten** abhängig, blind für **stille Reserven** und für alles **nicht Bilanzierte** (Marke, Know-how, Kundenbeziehungen, Auftragsbestand). Zudem verändert jede Kennzahl das Verhalten, sobald sie zur Steuerungsgröße wird.",
    beispiel: "Ein Unternehmen verlagert Fertigung an Zulieferer: Bilanzsumme sinkt, Kapitalumschlag und ROI steigen – ohne dass eine einzige Verbesserung im operativen Geschäft stattgefunden hätte.",
    merksatz: "Sobald eine Kennzahl zum Ziel wird, hört sie auf, ein gutes Maß zu sein." },

  { id: "m10-12", thema: "Produktivitätskennzahlen", typ: "formel",
    frage: "Welche Kennzahlen beschreiben die Leistungsfähigkeit je Beschäftigtem?",
    antwort: "Sie setzen Leistungsgrößen ins Verhältnis zum Personaleinsatz und sind über Branchen hinweg nur eingeschränkt vergleichbar.",
    formel: [
      "Umsatz je Mitarbeiter = Umsatz ÷ ø Beschäftigte",
      "Wertschöpfung je Mitarbeiter = Wertschöpfung ÷ ø Beschäftigte",
      "Personalkostenintensität = Personalaufwand ÷ Gesamtleistung · 100",
      "Personalkostenquote der Wertschöpfung = Personalaufwand ÷ Wertschöpfung · 100"
    ],
    falle: "Umsatz je Mitarbeiter hängt massiv an der Fertigungstiefe: Wer viel zukauft, sieht produktiver aus. Für Vergleiche ist die Wertschöpfung je Mitarbeiter die ehrlichere Größe." },

  { id: "m10-13", thema: "Kennzahlenanalyse", typ: "case",
    frage: "Welche Diagnose stellst du, und welche drei Maßnahmen priorisierst du?",
    szenario: "Zwei Jahre im Vergleich. Umsatz 18,0 → 21,6 Mio. €. Jahresüberschuss 720.000 → 650.000 €. Eigenkapital 3,6 → 4,0 Mio. €, Bilanzsumme 12,0 → 16,5 Mio. €. Vorräte 2,4 → 4,1 Mio. €, Forderungen 2,2 → 3,6 Mio. €, Verbindlichkeiten L+L 1,8 → 1,9 Mio. €, Bankverbindlichkeiten 3,0 → 6,2 Mio. €. Operativer Cashflow 900.000 → −450.000 €.",
    hinweis: "Rechne Rentabilität, Eigenkapitalquote und die Umschlagskennzahlen für beide Jahre – und lies dann die Geschichte.",
    antwort: "**Kennzahlen:** Umsatzrendite 4,0 % → 3,0 %. EK-Quote 30,0 % → 24,2 %. Kapitalumschlag 1,50 → 1,31. ROI damit 6,0 % → 3,9 %. Debitorenlaufzeit 44,6 → 60,8 Tage. Vorratsreichweite gemessen am Umsatz 48,7 → 69,3 Tage. Bankverbindlichkeiten mehr als verdoppelt bei negativem operativem Cashflow.\n**Diagnose:** Das Unternehmen wächst 20 % im Umsatz, aber die Bilanzsumme wächst 37,5 %. Das Wachstum wird vollständig über Working Capital und Bankkredite finanziert. Beide Äste des ROI verschlechtern sich gleichzeitig – die Marge sinkt (vermutlich über Preiszugeständnisse zur Umsatzsteigerung), und der Kapitalumschlag sinkt, weil Vorräte und Forderungen schneller wachsen als der Umsatz. Der negative operative Cashflow bei positivem Gewinn zeigt: Der Gewinn ist im Umlaufvermögen gebunden. Das ist der Verlauf, an dessen Ende die Bank die Linie nicht mehr erhöht.\n**Priorisierte Maßnahmen:**\n1. Forderungsmanagement – 16 Tage zurückzugewinnen setzt rund 950.000 € frei; schnellste Wirkung, keine Investition nötig.\n2. Bestandsabbau über ABC/XYZ-Klassifizierung und Reichweitengrenzen; die 20 Tage Mehrreichweite entsprechen rund 1,2 Mio. € gebundenem Kapital.\n3. Margendisziplin – Deckungsbeitragsanalyse je Kunde und Produkt und Stopp der Umsatzjagd; Wachstumstempo an den frei finanzierbaren Rahmen koppeln.\nParallel: Fristenkongruenz herstellen, also den Teil der Kontokorrentlinie, der dauerhaft gebunden ist, in ein langfristiges Darlehen umschulden.",
    check: [
      "Umsatzrendite, EK-Quote und Kapitalumschlag für beide Jahre berechnet",
      "ROI-Verschlechterung in beide Äste zerlegt (Marge und Umschlag)",
      "Debitorenlaufzeit und Vorratsreichweite quantifiziert",
      "Negativen operativen Cashflow bei positivem Gewinn als Kernbefund benannt",
      "Erkannt, dass das Wachstum vollständig fremdfinanziert wird",
      "Maßnahmen nach Wirkungsgeschwindigkeit priorisiert und beziffert",
      "Fristenkongruenz bzw. Umschuldung angesprochen"
    ],
    falle: "Der naheliegende Blick auf den Jahresüberschuss („nur leicht gesunken“) verharmlost die Lage vollständig. Die Gefahr steckt im Cashflow und in der Kapitalstruktur." },

  { id: "m10-14", thema: "DuPont-Schema", typ: "case",
    frage: "Welche Maßnahme hebt den ROI am stärksten? Rechne alle drei durch.",
    szenario: "Ein Unternehmen erzielt 40 Mio. € Umsatz, 2,4 Mio. € Gewinn und bindet 20 Mio. € Kapital. Zur Auswahl stehen: (a) Preiserhöhung um 1 % ohne Mengenverlust, (b) Senkung der Materialkosten um 2 % bei einem Materialaufwand von 18 Mio. €, (c) Abbau der Vorräte um 2,5 Mio. €.",
    hinweis: "ROI = Umsatzrendite × Kapitalumschlag. Jede Maßnahme wirkt auf genau einen der beiden Faktoren – bis auf eine.",
    antwort: "Ausgangslage: Umsatzrendite 6,0 %, Kapitalumschlag 2,0 → **ROI 12,0 %**.\n(a) Preis +1 %: Umsatz 40,4 Mio., Gewinn 2,8 Mio. → Rendite 6,93 %, Umschlag 2,02 → **ROI 14,0 %**.\n(b) Material −2 %: Ersparnis 360.000 €, Gewinn 2,76 Mio. → Rendite 6,9 %, Umschlag 2,0 → **ROI 13,8 %**.\n(c) Vorräte −2,5 Mio.: Kapital 17,5 Mio., Gewinn unverändert → Rendite 6,0 %, Umschlag 2,29 → **ROI 13,7 %**.\nAlle drei liegen nahe beieinander, die Preiserhöhung führt knapp. Interessanter ist die Struktur: Ein einziger Prozentpunkt Preis erhöht den Gewinn um 17 %, weil er vollständig in die Marge durchschlägt. Deshalb ist der Preis fast immer der stärkste Gewinnhebel – und zugleich der riskanteste, weil die Mengenannahme kippen kann. Bei einem Deckungsbeitragsanteil von 40 % genügen rund 2,4 % Mengenverlust, um den Vorteil vollständig aufzuzehren.\nMaßnahme (c) verbessert zusätzlich die Liquidität um 2,5 Mio. €, was in der ROI-Zahl gar nicht sichtbar wird – ein Beispiel dafür, dass eine einzelne Spitzenkennzahl nie alle relevanten Wirkungen abbildet.",
    check: [
      "Ausgangs-ROI korrekt über beide Faktoren berechnet",
      "Alle drei Maßnahmen durchgerechnet",
      "Erkannt, dass (a) und (b) auf die Marge, (c) auf den Umschlag wirken",
      "Hebelwirkung der Preiserhöhung auf den Gewinn (+17 %) erkannt",
      "Mengenrisiko der Preiserhöhung quantifiziert oder zumindest benannt",
      "Liquiditätswirkung von (c) als nicht abgebildeten Zusatznutzen erwähnt"
    ],
    merksatz: "Preis wirkt auf den Gewinn am stärksten – und auf die Menge am schnellsten." },

  { id: "m10-15", thema: "Anlagenanalyse", typ: "formel",
    frage: "Welche Kennzahlen beschreiben die Vermögensstruktur und den Zustand des Anlagevermögens?",
    antwort: "Sie zeigen, wie stark das Kapital langfristig gebunden ist und wie alt die Anlagen sind – ein niedriger Anlagenabnutzungsgrad kündigt Ersatzinvestitionen an.",
    formel: [
      "Anlagenintensität = Anlagevermögen ÷ Gesamtvermögen · 100",
      "Anlagendeckungsgrad I = EK ÷ Anlagevermögen · 100",
      "Abschreibungsquote = Abschreibungen ÷ Anlagevermögen zu AK · 100",
      "Anlagenabnutzungsgrad = kumulierte Abschreibungen ÷ AK der Anlagen · 100",
      "Investitionsquote = Nettoinvestitionen ÷ Abschreibungen"
    ],
    beispiel: "Ein Abnutzungsgrad von 78 % und eine Investitionsquote unter 1 bedeuten: Es wird weniger investiert als abgeschrieben – die Substanz wird abgebaut, das Ergebnis der nächsten Jahre ist geliehen.",
    falle: "Hohe Anlagenintensität bedeutet hohe Fixkostenbelastung und damit einen hohen Break-even. Solche Unternehmen reagieren auf Absatzrückgänge sehr viel empfindlicher – Kapitalstruktur und Kostenstruktur müssen zusammen gelesen werden." }

]});
