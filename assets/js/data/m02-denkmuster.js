BWL.addModul({
  id: "m02",
  name: "Ökonomische Denkmuster",
  beschreibung: "Die Werkzeuge hinter den Rechenwegen: Grenzbetrachtung, Opportunitätskosten, Engpässe, Anreize. Wer diese Muster erkennt, löst auch unbekannte Aufgaben.",
  karten: [

  { id: "m02-01", thema: "Opportunitätskosten", typ: "denkmuster",
    frage: "Was sind Opportunitätskosten, und woran erkennst du in einer Aufgabe, dass du sie ansetzen musst?",
    antwort: "Opportunitätskosten sind der entgangene Nutzen der besten nicht gewählten Alternative. Sie tauchen immer dann auf, wenn eine **knappe** Ressource verwendet wird – Maschinenzeit, Fläche, Kapital, Aufmerksamkeit des Vertriebs.",
    schritte: [
      "Frage: Ist die eingesetzte Ressource knapp? Bei freier Kapazität sind die Opportunitätskosten null.",
      "Wenn knapp: Was wäre die beste Alternativverwendung?",
      "Deren entgangener Deckungsbeitrag ist der Ansatz – nicht der Anschaffungspreis der Ressource.",
      "Diesen Betrag zu den auszahlungswirksamen Kosten addieren."
    ],
    beispiel: "Ein Zusatzauftrag belegt 100 Maschinenstunden. Ist die Maschine ausgelastet und erwirtschaftet sonst 40 €/Stunde Deckungsbeitrag, betragen die Opportunitätskosten 4.000 € – zusätzlich zu Material und Löhnen.",
    falle: "„Das Grundstück gehört uns doch schon, das kostet nichts.“ Doch: Es kostet die entgangene Miete oder den entgangenen Verkaufserlös.",
    merksatz: "Kosten sind nicht, was du zahlst, sondern was du aufgibst." },

  { id: "m02-02", thema: "Sunk Costs", typ: "denkmuster",
    frage: "Warum sind bereits angefallene Kosten für eine Entscheidung irrelevant – und warum fällt es Menschen so schwer, das zu akzeptieren?",
    antwort: "Entscheidungen wirken ausschließlich in die Zukunft. Relevant ist deshalb nur, was sich zwischen den Alternativen **noch unterscheidet**. Ausgaben, die unabhängig von der Entscheidung schon geflossen und nicht mehr rückholbar sind, fallen in beiden Alternativen identisch an und kürzen sich heraus.\nPsychologisch wirkt die Verlustaversion: Ein Abbruch macht den bereits erlittenen Verlust sichtbar und endgültig, das Weitermachen hält die Hoffnung am Leben.",
    schritte: [
      "Zwei Alternativen nebeneinanderstellen: weitermachen vs. abbrechen.",
      "Nur noch zu erwartende Ein- und Auszahlungen eintragen.",
      "Alles bereits Bezahlte streichen – auch Buchwerte und aktivierte Entwicklungskosten.",
      "Restwerte prüfen: Was bringt der Abbruch noch ein? Das ist relevant."
    ],
    beispiel: "Ein Projekt hat bereits 800.000 € verschlungen, braucht noch 300.000 € und wird 350.000 € einbringen. Fertigstellen ist richtig (+50.000 €), obwohl das Projekt insgesamt ein Verlust von 750.000 € bleibt.",
    falle: "Der umgekehrte Fehler ist ebenso häufig: Ein Projekt abzubrechen, weil „schon so viel Geld verbrannt wurde“. Auch das ist eine Sunk-Cost-Argumentation.",
    merksatz: "Vergangenes Geld hat keine Meinung zur Zukunft." },

  { id: "m02-03", thema: "Grenzbetrachtung", typ: "denkmuster",
    frage: "Was besagt das Marginalprinzip, und wie lautet die allgemeine Optimalbedingung?",
    antwort: "Optimiert wird nicht über Durchschnitte, sondern über die **jeweils nächste Einheit**. Eine Aktivität wird so lange ausgeweitet, wie ihr Grenznutzen (Grenzerlös) über ihren Grenzkosten liegt. Das Optimum liegt dort, wo Grenzerlös gleich Grenzkosten ist.",
    formel: ["Optimum:  Grenzerlös = Grenzkosten", "dG/dx = 0  mit  G(x) = E(x) − K(x)"],
    schritte: [
      "Frage nie „Lohnt sich das?“, sondern „Lohnt sich eine Einheit mehr?“",
      "Grenzgröße bilden: Wie ändern sich Erlös und Kosten bei einer Einheit mehr?",
      "Ausweiten, solange die Differenz positiv ist.",
      "Beim Vorzeichenwechsel stoppen."
    ],
    falle: "Durchschnittskosten führen systematisch in die Irre: Ein Auftrag kann unter den Vollkosten liegen und trotzdem lohnend sein, wenn er über den Grenzkosten liegt und freie Kapazität nutzt.",
    merksatz: "Am Rand entscheiden, nicht im Durchschnitt." },

  { id: "m02-04", thema: "Relevanzprinzip", typ: "denkmuster",
    frage: "Welche zwei Bedingungen muss eine Größe erfüllen, um entscheidungsrelevant zu sein?",
    antwort: "Sie muss **zukünftig** anfallen und sich **zwischen den Alternativen unterscheiden**. Beides zusammen, nicht nur eines von beidem.",
    schritte: [
      "Alternativen sauber definieren – auch die Unterlassungsalternative.",
      "Für jede Größe prüfen: fällt sie noch an? Fällt sie unterschiedlich an?",
      "Nur die Differenz betrachten (Differenzkalkül).",
      "Nicht zahlungswirksame, aber entscheidungsrelevante Größen ergänzen: Opportunitätskosten."
    ],
    beispiel: "Bei Eigenfertigung vs. Fremdbezug sind Mietkosten der Halle irrelevant, wenn die Halle in beiden Fällen weiterläuft – relevant werden sie, sobald sie bei Fremdbezug untervermietet werden könnte.",
    merksatz: "Zukünftig **und** unterschiedlich – sonst gehört es nicht in die Rechnung." },

  { id: "m02-05", thema: "Fixkostendegression", typ: "formel",
    frage: "Was beschreibt die Fixkostendegression, und wo liegt ihre Grenze?",
    antwort: "Mit steigender Ausbringungsmenge verteilen sich die konstanten Fixkosten auf mehr Stück; die Stückfixkosten sinken hyperbolisch. Die Grenze ist die Kapazität: Wird sie überschritten, springen die Fixkosten sprungfix nach oben (neue Maschine, neue Schicht, neue Halle).",
    formel: ["k_f(x) = K_f ÷ x", "k(x) = K_f ÷ x + k_v"],
    beispiel: "K_f = 200.000 €, k_v = 12 €. Bei 10.000 Stück: 32 €/Stück. Bei 40.000 Stück: 17 €/Stück. Bei 40.001 Stück mit nötiger zweiter Maschine (+150.000 €): wieder 20,7 €/Stück.",
    falle: "Fixkostendegression verführt zur Überproduktion: Stückkosten sinken auf dem Papier, das Lager füllt sich mit unverkaufter Ware. Der Effekt ist erst realisiert, wenn abgesetzt wird.",
    merksatz: "Fixkosten sind nur je Stück variabel – in Summe bleiben sie stur." },

  { id: "m02-06", thema: "Skaleneffekte", typ: "begriff",
    frage: "Unterscheide Economies of Scale, Economies of Scope und Lernkurveneffekte.",
    antwort: "**Economies of Scale**: sinkende Stückkosten durch größere Menge desselben Produkts (Fixkostendegression, Größendegression bei Anlagen, bessere Einkaufskonditionen).\n**Economies of Scope**: sinkende Kosten durch gemeinsame Nutzung von Ressourcen über **mehrere** Produkte (Vertriebsnetz, Marke, Plattform, F&E).\n**Lernkurveneffekte**: sinkende Stückkosten durch kumulierte Erfahrung, unabhängig von der Losgröße einer Periode.",
    falle: "Diseconomies of Scale nicht vergessen: Ab einer Größe steigen Koordinations-, Kommunikations- und Kontrollkosten überproportional – die Stückkostenkurve wird U-förmig." },

  { id: "m02-07", thema: "Erfahrungskurve", typ: "formel",
    frage: "Was sagt das Erfahrungskurvengesetz quantitativ aus?",
    antwort: "Mit jeder Verdopplung der **kumulierten** Produktionsmenge sinken die inflationsbereinigten Stückkosten der Wertschöpfung um einen konstanten Prozentsatz, empirisch meist 20–30 %.",
    formel: ["k(2x) = k(x) · r   mit r ≈ 0,7 … 0,8", "k(x) = k(1) · x^(log₂ r)"],
    beispiel: "Startkosten 100 €/Stück, Lernrate 80 %: nach der 2. Verdopplung (4-fache Menge) 64 €, nach der 3. (8-fach) 51,20 €.",
    falle: "Die Kostensenkung ist kein Automatismus, sondern eine Möglichkeit – sie muss durch Prozessverbesserung realisiert werden. Strategisch gefährlich: aggressive Preissenkungen in Erwartung künftiger Erfahrungsgewinne, die dann ausbleiben.",
    merksatz: "Verdopplung der Erfahrung, nicht der Zeit." },

  { id: "m02-08", thema: "Zeitwert des Geldes", typ: "denkmuster",
    frage: "Warum ist ein Euro heute mehr wert als ein Euro in einem Jahr, und welche Konsequenz hat das für jeden Vergleich von Zahlungen?",
    antwort: "Weil er zinsbringend angelegt werden kann (Verzinsungseffekt), weil Konsum lieber früher als später erfolgt (Zeitpräferenz) und weil künftige Zahlungen unsicher sind (Risiko). Konsequenz: Zahlungen zu verschiedenen Zeitpunkten dürfen **niemals** addiert oder verglichen werden, ohne sie vorher auf denselben Zeitpunkt zu beziehen.",
    formel: ["Barwert: BW = Z_t ÷ (1+i)^t", "Endwert: EW = Z_0 · (1+i)^t"],
    schritte: [
      "Zahlungsstrahl zeichnen, jede Zahlung mit ihrem Zeitpunkt.",
      "Bezugszeitpunkt wählen (meist t = 0).",
      "Alle Zahlungen ab-/aufzinsen.",
      "Erst dann summieren und vergleichen."
    ],
    falle: "Die Summe undiskontierter Zahlungen („das Projekt bringt insgesamt 5 Mio.“) ist ökonomisch bedeutungslos, wenn sich die zeitliche Struktur der Alternativen unterscheidet.",
    merksatz: "Nie Beträge aus verschiedenen Zeitpunkten addieren." },

  { id: "m02-09", thema: "Engpassdenken", typ: "denkmuster",
    frage: "Wie steuert man ein System, in dem eine Ressource den Durchsatz begrenzt?",
    antwort: "Das Gesamtsystem wird ausschließlich vom Engpass bestimmt. Optimierungen außerhalb des Engpasses erhöhen nicht den Durchsatz, sondern nur die Bestände. Deshalb wird die Programmplanung am **relativen Deckungsbeitrag je Engpasseinheit** ausgerichtet.",
    formel: "relativer DB = Deckungsbeitrag je Stück ÷ Engpassverbrauch je Stück",
    schritte: [
      "Engpass identifizieren – wo staut sich Arbeit vor der Station?",
      "Engpass maximal ausnutzen (keine Rüstverluste, keine Pausen, keine Ausschussteile durchlassen).",
      "Alle anderen Stationen dem Engpass unterordnen, nicht auslasten um jeden Preis.",
      "Engpass erweitern.",
      "Ist er beseitigt, den nächsten suchen – der Engpass wandert immer."
    ],
    falle: "Vollauslastung aller Stationen ist kein Ziel, sondern ein Symptom schlechter Steuerung: Sie erzeugt Zwischenlager vor dem Engpass und bindet Kapital.",
    merksatz: "Eine verlorene Stunde am Engpass ist eine verlorene Stunde des ganzen Systems." },

  { id: "m02-10", thema: "Prinzipal-Agent", typ: "begriff",
    frage: "Was beschreibt die Prinzipal-Agent-Theorie, und welche drei Problemtypen unterscheidet sie?",
    antwort: "Ein Prinzipal (Auftraggeber) überträgt Aufgaben an einen Agenten (Auftragnehmer), der besser informiert ist und eigene Interessen verfolgt. Aus der Informationsasymmetrie folgen drei Typen:\n**Hidden Characteristics** → Adverse Selection: Qualitätsmerkmale sind vor Vertragsschluss unbekannt.\n**Hidden Action / Hidden Information** → Moral Hazard: Das Verhalten nach Vertragsschluss ist nicht beobachtbar oder nicht beurteilbar.\n**Hidden Intention** → Hold-up: Nach spezifischen Investitionen wird die Abhängigkeit ausgenutzt.",
    beispiel: "Aktionäre (Prinzipal) und Vorstand (Agent); Versicherung und Versicherter; Arbeitgeber und Beschäftigte; Käufer und Gebrauchtwagenhändler.",
    merksatz: "Vor dem Vertrag: Auswahlproblem. Nach dem Vertrag: Verhaltensproblem." },

  { id: "m02-11", thema: "Anreizgestaltung", typ: "denkmuster",
    frage: "Welche Instrumente wirken gegen Adverse Selection, welche gegen Moral Hazard?",
    antwort: "Gegen **Adverse Selection** (vor Vertragsschluss): Signaling durch die besser informierte Seite (Zeugnisse, Zertifikate, Garantien), Screening durch die schlechter informierte Seite (Tests, Probezeit, Selbstselektion über Vertragsmenüs), Reputation.\nGegen **Moral Hazard** (nach Vertragsschluss): Anreizverträge mit Ergebnisbeteiligung, Selbstbeteiligung, Monitoring und Berichtspflichten, Bonding durch die Agentin (Kaution, Rückzahlungsklausel).",
    schritte: [
      "Zeitpunkt bestimmen: Liegt das Problem vor oder nach Vertragsschluss?",
      "Wer hat den Informationsvorsprung?",
      "Instrument danach wählen – Signaling geht immer von der informierten Seite aus."
    ],
    falle: "Anreize wirken – auch auf das, was nicht gemeint war. Wird nur die messbare Größe belohnt, wird genau die optimiert und alles Unmessbare vernachlässigt.",
    merksatz: "Man bekommt, wofür man bezahlt – nicht, was man sich wünscht." },

  { id: "m02-12", thema: "Transaktionskosten", typ: "denkmuster",
    frage: "Wie erklärt die Transaktionskostentheorie, ob eine Leistung selbst erstellt oder am Markt gekauft wird?",
    antwort: "Neben den Produktionskosten fallen Kosten der Abwicklung an: Anbahnung, Vereinbarung, Abwicklung, Kontrolle, Anpassung. Selbst erstellen lohnt, wenn die Transaktionskosten des Marktbezugs hoch sind. Treiber sind **Spezifität** der Investition, **Unsicherheit** und **Häufigkeit** der Transaktion.",
    schritte: [
      "Spezifität prüfen: Ist die nötige Investition anderweitig verwendbar? Wenn nein, droht Hold-up.",
      "Unsicherheit prüfen: Lässt sich der Leistungsinhalt vorab vollständig beschreiben?",
      "Häufigkeit prüfen: Lohnt der Aufbau interner Kapazität?",
      "Hohe Spezifität + hohe Unsicherheit + hohe Häufigkeit → Eigenerstellung oder enge Partnerschaft."
    ],
    beispiel: "Standardschrauben werden zugekauft (geringe Spezifität). Ein auf die eigene Anlage zugeschnittenes Werkzeug wird eher intern gefertigt oder über einen langfristigen Vertrag mit Investitionsschutz beschafft.",
    merksatz: "Je spezifischer die Investition, desto gefährlicher der Markt." },

  { id: "m02-13", thema: "Bestands- und Stromgrößen", typ: "denkmuster",
    frage: "Warum darfst du Bilanz-, GuV- und Cashflow-Größen nicht durcheinanderwerfen?",
    antwort: "Die Bilanz zeigt **Bestände zu einem Zeitpunkt** (Vermögen, Kapital), GuV und Cashflow-Rechnung zeigen **Ströme über eine Periode** (Aufwand/Ertrag bzw. Ein-/Auszahlungen). Wer beides mischt, vergleicht Momentaufnahmen mit Filmen.",
    schritte: [
      "Bei jeder Kennzahl prüfen: Stehen Bestand und Strom im Verhältnis?",
      "Wenn ja (z. B. Umsatz ÷ Vorräte), Durchschnittsbestand verwenden statt Stichtagswert.",
      "Bei Zeitpunktvergleichen auf den Stichtagseffekt achten (Saison, Bilanzpolitik)."
    ],
    beispiel: "Der Lagerumschlag setzt einen Jahresstrom (Materialeinsatz) ins Verhältnis zu einem Bestand. Nimmt man den Bestand am 31.12. – traditionell dem Tiefpunkt des Jahres – sieht der Umschlag künstlich gut aus.",
    falle: "Gewinn ist kein Geld. Ein Ertrag ist gebucht, sobald die Leistung erbracht ist – die Einzahlung kann Monate später oder nie kommen.",
    merksatz: "Zeitpunkt oder Zeitraum – erst klären, dann rechnen." },

  { id: "m02-14", thema: "Entscheidung unter Risiko", typ: "formel",
    frage: "Wie bewertest du eine Entscheidung unter Risiko, und warum reicht der Erwartungswert allein nicht?",
    antwort: "Der Erwartungswert gewichtet alle Ergebnisse mit ihren Eintrittswahrscheinlichkeiten. Er beschreibt aber nur das Zentrum der Verteilung, nicht deren Streuung. Weil die meisten Entscheider risikoavers sind und weil existenzbedrohende Verluste nicht durch häufige kleine Gewinne aufgewogen werden, muss die Streuung mitbewertet werden.",
    formel: ["E(X) = Σ p_i · x_i", "σ = √( Σ p_i · (x_i − E(X))² )", "Präferenzwert Φ = E(X) − a · σ   (a = Risikoaversion)"],
    schritte: [
      "Umweltzustände und Wahrscheinlichkeiten auflisten.",
      "Ergebnismatrix aufstellen.",
      "Erwartungswert je Alternative berechnen.",
      "Streuung und Worst Case ergänzen.",
      "Prüfen, ob der Worst Case tragbar ist – wenn nicht, scheidet die Alternative unabhängig vom Erwartungswert aus."
    ],
    falle: "Der Erwartungswert setzt implizit voraus, dass die Entscheidung oft wiederholt wird. Bei einmaligen, großen Entscheidungen ist er ein schlechter Ratgeber.",
    merksatz: "Erst Erwartungswert, dann Ruinrisiko." },

  { id: "m02-15", thema: "Sensitivitätsanalyse", typ: "denkmuster",
    frage: "Was leistet eine Sensitivitätsanalyse und wie führst du sie durch?",
    antwort: "Sie zeigt, wie stark sich eine Eingangsgröße ändern darf, bevor die Entscheidung kippt. Statt Scheingenauigkeit zu erzeugen, macht sie sichtbar, welche Annahmen wirklich zählen.",
    schritte: [
      "Ergebnisgröße festlegen (Kapitalwert, Deckungsbeitrag, Gewinn).",
      "Kritischen Wert bestimmen: Bei welchem Absatz, Preis, Zinssatz wird das Ergebnis null?",
      "Abstand zum erwarteten Wert als Sicherheitsspanne ausweisen.",
      "Eingangsgrößen nach Hebelwirkung sortieren – nur die stärksten weiter untersuchen."
    ],
    beispiel: "Ein Projekt hat einen Kapitalwert von 120.000 € und wird bei einem Absatzrückgang von 18 % unvorteilhaft. Die Aussage „18 % Puffer“ ist belastbarer als jede Punktprognose.",
    merksatz: "Nicht die Prognose verteidigen, sondern die Kipp-Punkte kennen." },

  { id: "m02-16", thema: "Pareto-Prinzip", typ: "denkmuster",
    frage: "Was besagt das Pareto-Prinzip im betrieblichen Kontext, und wo wendest du es an?",
    antwort: "Ein kleiner Teil der Elemente trägt den Großteil des Effekts – typischerweise verursachen rund 20 % der Positionen 80 % des Werts. Anwendungsfelder: Materialbeschaffung (ABC-Analyse), Kunden- und Produktdeckungsbeiträge, Fehlerursachen, Lagerbestände, Forderungsmanagement.",
    schritte: [
      "Positionen nach Wertbeitrag absteigend sortieren.",
      "Kumulierten Anteil bilden.",
      "Klassen abgrenzen (A ≈ 80 % Wert, B ≈ 15 %, C ≈ 5 %).",
      "Steuerungsintensität je Klasse differenzieren – nicht jede Position verdient dieselbe Aufmerksamkeit."
    ],
    falle: "C-Positionen sind wertmäßig unbedeutend, können aber technisch kritisch sein: Eine 3-Cent-Dichtung legt die Montagelinie genauso still wie ein Motor. Deshalb Wert- **und** Kritikalitätsdimension betrachten." },

  { id: "m02-17", thema: "Sunk Costs", typ: "case",
    frage: "Wie entscheidest du – und welche Zahl in der Vorlage ist eine Falle?",
    szenario: "Eine Software-Eigenentwicklung hat bislang 1,4 Mio. € gekostet. Für die Fertigstellung sind noch 600.000 € nötig, danach werden über fünf Jahre Einsparungen von 900.000 € (Barwert) erwartet. Alternativ gibt es jetzt eine Standardlösung: 350.000 € Lizenz- und Einführungskosten, Barwert der Einsparungen 700.000 €. Der Projektleiter argumentiert, ein Abbruch würde 1,4 Mio. € vernichten.",
    hinweis: "Stelle beide Alternativen mit ausschließlich künftigen Zahlungen nebeneinander.",
    antwort: "Die 1,4 Mio. € sind versunken und in beiden Alternativen identisch – sie kommen in der Rechnung nicht vor.\nWeiterentwickeln: −600.000 + 900.000 = **+300.000 €**.\nStandardlösung: −350.000 + 700.000 = **+350.000 €**.\nDie Standardlösung ist um 50.000 € vorteilhafter. Zusätzlich zu prüfen wäre, ob Teile der Eigenentwicklung noch verwertbar sind (das wäre ein relevanter Zufluss der Abbruchalternative) und wie sich die Risiken unterscheiden – die Standardlösung hat in der Regel die verlässlichere Kostenschätzung, die Eigenentwicklung den besseren Prozessfit.",
    check: [
      "Die 1,4 Mio. € als versunken erkannt und aus der Rechnung genommen",
      "Beide Alternativen als Differenz künftiger Zahlungen gerechnet",
      "Zahlenergebnis korrekt: +300.000 € gegen +350.000 €",
      "Restverwertung der Eigenentwicklung als zusätzlichen Punkt angesprochen",
      "Risikounterschied zwischen Eigenentwicklung und Standard erwähnt"
    ],
    falle: "Das Argument „wir würden 1,4 Mio. vernichten“ ist emotional stark und ökonomisch leer. Die 1,4 Mio. sind bereits ausgegeben – die Entscheidung bestimmt nur noch, ob 600.000 oder 350.000 folgen." },

  { id: "m02-18", thema: "Opportunitätskosten", typ: "case",
    frage: "Welchen Preis musst du mindestens verlangen?",
    szenario: "Eine Fertigung ist auf ihrer Engpassmaschine voll ausgelastet. Produkt A erwirtschaftet dort 45 € Deckungsbeitrag je Maschinenstunde. Ein Neukunde fragt einen Sonderauftrag an: Materialeinsatz 18 €/Stück, Fertigungslohn 12 €/Stück, Maschinenzeit 0,5 Stunden je Stück, 400 Stück.",
    hinweis: "Der Auftrag verdrängt Produktion – was geht dabei verloren?",
    antwort: "Die variablen Kosten betragen 30 €/Stück. Da die Maschine der Engpass ist, verdrängt jede Einheit 0,5 Stunden Produktion von A und damit 0,5 · 45 = 22,50 € entgangenen Deckungsbeitrag.\nPreisuntergrenze = 30 + 22,50 = **52,50 €/Stück** (gesamt 21.000 €). Bei freier Kapazität läge die kurzfristige Preisuntergrenze dagegen bei 30 €.\nZusätzlich zu bedenken: Sonderpreise sprechen sich herum und gefährden das reguläre Preisniveau; ein einmaliger Auftrag rechtfertigt keine dauerhafte Untergrenze unter Vollkosten.",
    check: [
      "Variable Kosten korrekt mit 30 €/Stück angesetzt",
      "Engpasssituation erkannt und Opportunitätskosten angesetzt",
      "Umrechnung auf den Engpassverbrauch je Stück (0,5 h) durchgeführt",
      "Preisuntergrenze 52,50 €/Stück ermittelt",
      "Unterschied zur Situation mit freier Kapazität benannt",
      "Preispolitische Nebenwirkung erwähnt"
    ],
    merksatz: "Preisuntergrenze = variable Kosten + entgangener Deckungsbeitrag des Engpasses." }

]});
