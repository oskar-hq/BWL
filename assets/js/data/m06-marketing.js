BWL.addModul({
  id: "m06",
  name: "Marketing & Vertrieb",
  beschreibung: "Vom Segment zum Preis: Wie Nachfrage entsteht, wie man sie misst und was ein Kunde wirklich wert ist.",
  karten: [

  { id: "m06-01", thema: "Marketing-Mix", typ: "begriff",
    frage: "Was umfasst der Marketing-Mix, und warum reichen vier P im Dienstleistungsbereich nicht?",
    antwort: "Die vier klassischen Instrumente: **Product** (Programm, Qualität, Service, Marke), **Price** (Preis, Konditionen, Rabatte, Zahlungsziele), **Place** (Absatzwege, Logistik, Standort), **Promotion** (Werbung, Verkaufsförderung, PR, persönlicher Verkauf).\nBei Dienstleistungen kommen drei hinzu, weil Leistung und Erbringung untrennbar sind: **People**, **Process**, **Physical Evidence**.",
    schritte: [
      "Erst Zielgruppe und Positionierung festlegen.",
      "Dann die Instrumente daraus ableiten – nicht umgekehrt.",
      "Auf Konsistenz prüfen: Premiumpositionierung und Dauerrabatte widersprechen sich."
    ],
    falle: "Der Mix ist kein Baukasten unabhängiger Hebel. Jede Änderung an einem P verändert die Wirkung der anderen." },

  { id: "m06-02", thema: "Segmentierung", typ: "denkmuster",
    frage: "Welche Kriterien muss ein brauchbares Marktsegment erfüllen?",
    antwort: "Es muss **messbar**, **erreichbar** (über Kommunikation und Vertrieb), **wirtschaftlich tragfähig** (ausreichend groß), **intern homogen und extern heterogen**, **zeitlich stabil** und **handlungsrelevant** sein – die Segmente müssen auf Marketingmaßnahmen unterschiedlich reagieren.",
    schritte: [
      "Segmentierungskriterien wählen: geografisch, demografisch, psychografisch, verhaltensorientiert.",
      "Segmente bilden und auf Trennschärfe prüfen.",
      "Attraktivität je Segment bewerten (Größe, Wachstum, Wettbewerbsintensität, Zugang).",
      "Zielsegmente auswählen (Targeting).",
      "Position im Kopf der Zielgruppe definieren (Positioning)."
    ],
    falle: "Demografische Merkmale sind leicht messbar, erklären aber oft wenig. Kaufverhalten und Nutzenerwartung trennen meist deutlich besser." },

  { id: "m06-03", thema: "Preiselastizität", typ: "formel",
    frage: "Wie ist die Preiselastizität der Nachfrage definiert und wie interpretierst du sie?",
    antwort: "Sie misst die prozentuale Mengenreaktion auf eine prozentuale Preisänderung. Sie ist im Normalfall negativ; entscheidend ist der Betrag.",
    formel: ["ε = (Δx ÷ x) ÷ (Δp ÷ p)", "|ε| > 1: elastisch – Preissenkung erhöht den Umsatz", "|ε| < 1: unelastisch – Preiserhöhung erhöht den Umsatz"],
    beispiel: "Preis −5 %, Menge +12 % → ε = −2,4, deutlich elastisch. Umsatzwirkung: 0,95 · 1,12 = 1,064, also +6,4 % Umsatz.",
    falle: "Umsatz ist nicht Gewinn. Bei einem Deckungsbeitragsanteil von 30 % muss die Menge bei 5 % Preissenkung um über 20 % steigen, nur um den Deckungsbeitrag zu halten. Die relevante Größe ist immer die **Deckungsbeitrags**elastizität.",
    merksatz: "Elastisch heißt: Der Preis darf nicht das erste Instrument sein." },

  { id: "m06-04", thema: "Preisstrategien", typ: "denkmuster",
    frage: "Wann setzt du Skimming, wann Penetration ein?",
    antwort: "**Skimming**: hoher Einführungspreis, schrittweise Senkung. Sinnvoll bei echter Innovation, hoher Zahlungsbereitschaft früher Käufergruppen, geringem Wettbewerbsdruck, hohen Entwicklungskosten und begrenzter Kapazität. Amortisiert schnell und lässt Preisspielraum nach unten.\n**Penetration**: niedriger Einführungspreis, schnelle Marktdurchdringung. Sinnvoll bei elastischer Nachfrage, starken Skalen- und Erfahrungskurveneffekten, Netzwerkeffekten und drohendem Markteintritt von Wettbewerbern.",
    schritte: [
      "Ist die Nachfrage heterogen und gibt es zahlungsbereite Frühkäufer? → Skimming.",
      "Bestimmen Stückkosten den Wettbewerb und gibt es Netzwerkeffekte? → Penetration.",
      "Markteintrittsbarrieren prüfen: Ohne Schutz lädt Skimming Nachahmer ein."
    ],
    falle: "Der Weg von unten nach oben ist fast unmöglich. Ein zu niedriger Einführungspreis definiert den Referenzpreis dauerhaft." },

  { id: "m06-05", thema: "Preisdifferenzierung", typ: "begriff",
    frage: "Welche Formen der Preisdifferenzierung gibt es und welche Bedingung müssen alle erfüllen?",
    antwort: "Formen: **personell** (Studierende, Senioren), **zeitlich** (Happy Hour, Saison, Frühbucher), **räumlich** (Ländermärkte), **mengenbezogen** (Staffelpreise), **leistungsbezogen** (Produktvarianten, Versioning) und **Bündelung**.\nBedingung für alle: Die Marktsegmente müssen wirksam **getrennt** werden können – Arbitrage zwischen den Segmenten muss ausgeschlossen sein.",
    beispiel: "Bahnfahrkarten mit Zugbindung sind Selbstselektion: Wer flexibel sein muss, zahlt mehr; das Produkt ist künstlich verschlechtert, um die Segmente zu trennen.",
    merksatz: "Preisdifferenzierung schöpft Zahlungsbereitschaft ab – aber nur, wenn die Zäune halten." },

  { id: "m06-06", thema: "Produktlebenszyklus", typ: "denkmuster",
    frage: "Welche Phasen hat der Produktlebenszyklus und was folgt daraus jeweils für Deckungsbeitrag und Mitteleinsatz?",
    antwort: "**Einführung**: negative Ergebnisse, hoher Kommunikationsaufwand, Mittelverbrauch. **Wachstum**: steigende Deckungsbeiträge, Kapazitätsaufbau, weiterhin Mittelbedarf. **Reife**: höchster absoluter Gewinn, Preisdruck beginnt, Mittelüberschuss. **Sättigung/Rückgang**: sinkende Deckungsbeiträge, Desinvestition oder Relaunch.",
    schritte: [
      "Phase am Wachstum des Gesamtmarkts festmachen, nicht am eigenen Umsatz.",
      "Mittelbedarf und Mittelfreisetzung je Phase abschätzen.",
      "Portfolio so zusammenstellen, dass reife Produkte die Einführung neuer finanzieren."
    ],
    falle: "Der Zyklus ist ein Beschreibungsmodell, keine Naturgesetzmäßigkeit. Ein Umsatzrückgang kann auch schlicht Folge falscher Maßnahmen sein – wer ihn als „Sättigungsphase“ deutet, spart die Investition genau dann ein, wenn sie nötig wäre." },

  { id: "m06-07", thema: "BCG-Portfolio", typ: "denkmuster",
    frage: "Wie ist die BCG-Matrix aufgebaut und welche Normstrategien leiten sich ab?",
    antwort: "Achsen: **relativer Marktanteil** (eigener Anteil ÷ Anteil des größten Wettbewerbers, Proxy für Kostenposition über die Erfahrungskurve) und **Marktwachstum** (Proxy für Mittelbedarf).\n**Question Marks** (hohes Wachstum, kleiner Anteil): selektiv investieren oder aufgeben. **Stars** (hoch/hoch): investieren, Position halten. **Cash Cows** (niedriges Wachstum, hoher Anteil): abschöpfen, Mittel umlenken. **Poor Dogs**: desinvestieren oder Nische.",
    schritte: [
      "Geschäftsfelder sauber abgrenzen.",
      "Relativen Marktanteil berechnen – Trennlinie bei 1,0.",
      "Marktwachstum gegen eine Referenz setzen (z. B. BIP-Wachstum oder 10 %).",
      "Mittelflüsse zwischen den Feldern planen: Cash Cows finanzieren Stars und ausgewählte Question Marks."
    ],
    falle: "Die Matrix unterstellt, dass Marktanteil Kostenvorteile erzeugt und dass Geschäftsfelder unabhängig sind. Beides gilt nicht immer – ein „Poor Dog“ kann als Ergänzungsprodukt unverzichtbar sein." },

  { id: "m06-08", thema: "Customer Lifetime Value", typ: "formel",
    frage: "Wie berechnest du den Kundenwert und wozu brauchst du ihn?",
    antwort: "Der Customer Lifetime Value ist der Barwert aller künftigen Deckungsbeiträge eines Kunden abzüglich der Akquisitionskosten. Er bestimmt, wie viel die Gewinnung eines Kunden kosten darf.",
    formel: [
      "CLV = −CAC + Σ_t (DB_t · r^t) ÷ (1+i)^t",
      "vereinfacht bei konstantem DB und Bindungsrate r:  CLV = DB · r ÷ (1 + i − r) − CAC"
    ],
    beispiel: "DB 300 €/Jahr, Bindungsrate 80 %, i = 10 % → CLV vor Akquisition = 300 · 0,8 ÷ (1,1 − 0,8) = 800 €. Akquisitionskosten von 250 € sind damit vertretbar, 900 € nicht.",
    schritte: [
      "Deckungsbeitrag je Kunde und Periode ermitteln, nicht Umsatz.",
      "Bindungsrate empirisch bestimmen (1 − Abwanderungsrate).",
      "Abzinsen.",
      "Akquisitionskosten abziehen.",
      "Segmente getrennt rechnen – Durchschnittskunden gibt es nicht."
    ],
    falle: "Eine Erhöhung der Bindungsrate wirkt überproportional: Von 80 % auf 85 % steigt der Wert im Beispiel von 800 € auf 1.020 €, also um mehr als ein Viertel. Bindung schlägt Neukundengewinnung fast immer.",
    merksatz: "Ein Kunde ist eine Investition, kein Umsatz." },

  { id: "m06-09", thema: "Kano-Modell", typ: "denkmuster",
    frage: "Welche drei Anforderungstypen unterscheidet das Kano-Modell, und was folgt daraus für die Produktentwicklung?",
    antwort: "**Basisanforderungen**: werden vorausgesetzt; ihre Erfüllung stiftet keine Zufriedenheit, ihr Fehlen aber massive Unzufriedenheit. **Leistungsanforderungen**: Zufriedenheit steigt linear mit dem Erfüllungsgrad; hierüber wird verglichen und verhandelt. **Begeisterungsanforderungen**: unerwartet, stiften überproportionale Zufriedenheit, werden bei Fehlen aber nicht vermisst.",
    schritte: [
      "Basisanforderungen zuerst und vollständig erfüllen – sie sind Eintrittskarte, kein Differenzierungsmerkmal.",
      "Bei Leistungsanforderungen gezielt dort investieren, wo die Zielgruppe vergleicht.",
      "Begeisterungsmerkmale sparsam und überraschend einsetzen."
    ],
    falle: "Begeisterungsmerkmale wandern über die Zeit zu Leistungs- und dann zu Basisanforderungen. Was heute begeistert, wird in drei Jahren erwartet." },

  { id: "m06-10", thema: "Distributionspolitik", typ: "begriff",
    frage: "Welche Kriterien entscheiden zwischen direktem und indirektem Vertrieb?",
    antwort: "Für **direkten** Vertrieb sprechen: erklärungsbedürftige Produkte, hoher Stückwert, wenige Großkunden, Wunsch nach Kundenkontakt und Datenhoheit, Preisdurchsetzung. Für **indirekten** Vertrieb sprechen: breite Zielgruppe, geringe Stückwerte, hohe Flächenabdeckung, geringe Fixkostenbelastung, vorhandene Handelsstrukturen.",
    schritte: [
      "Erklärungsbedarf und Stückwert bestimmen.",
      "Kosten je Kundenkontakt vergleichen (eigener Außendienst als Fixkostenblock vs. Handelsspanne als variable Kosten).",
      "Kritische Umsatzgröße rechnen, ab der der eigene Vertrieb günstiger ist.",
      "Konflikte zwischen den Kanälen einplanen."
    ],
    falle: "Der Aufbau eines eigenen Onlinekanals neben dem Handel erzeugt Kanalkonflikte. Wer beides will, braucht differenzierte Sortimente oder klare Preisregeln." },

  { id: "m06-11", thema: "Kommunikation", typ: "begriff",
    frage: "Was beschreibt das AIDA-Modell und wo liegt seine Schwäche?",
    antwort: "Eine Wirkungsstufenfolge der Werbung: **Attention** (Aufmerksamkeit), **Interest** (Interesse), **Desire** (Wunsch), **Action** (Kauf). Jede Stufe hat eine eigene Konversionsrate; darüber lässt sich der Trichter quantitativ steuern.",
    falle: "AIDA unterstellt einen linearen, rationalen Ablauf und endet mit dem Kauf. Wiederkauf, Weiterempfehlung und Impulskäufe bildet es nicht ab – deshalb erweitern moderne Modelle um Loyalty und Advocacy." },

  { id: "m06-12", thema: "Marktkennzahlen", typ: "formel",
    frage: "Unterscheide Marktpotenzial, Marktvolumen, Absatzvolumen und Marktanteil.",
    antwort: "**Marktpotenzial**: theoretische Aufnahmefähigkeit des Marktes (Obergrenze). **Marktvolumen**: tatsächlich realisierter Absatz aller Anbieter. **Absatzvolumen**: eigener Absatz. **Marktanteil**: eigener Anteil am Marktvolumen. **Marktsättigungsgrad**: Marktvolumen ÷ Marktpotenzial.",
    formel: ["Marktanteil = eigenes Absatzvolumen ÷ Marktvolumen", "relativer Marktanteil = eigener Marktanteil ÷ Marktanteil des stärksten Wettbewerbers"],
    beispiel: "Marktpotenzial 5 Mio. Stück, Marktvolumen 3 Mio., eigener Absatz 450.000 → Marktanteil 15 %, Sättigungsgrad 60 %.",
    falle: "Ein hoher Marktanteil in einem gesättigten Markt ist etwas völlig anderes als derselbe Anteil in einem Markt mit 40 % Wachstumsreserve." },

  { id: "m06-13", thema: "Marktforschung", typ: "begriff",
    frage: "Wann nutzt du Sekundär-, wann Primärforschung?",
    antwort: "**Sekundärforschung** wertet vorhandene Daten aus (interne Statistiken, Verbandsdaten, Studien, amtliche Statistik): schnell, günstig, aber nicht auf die eigene Frage zugeschnitten und möglicherweise veraltet.\n**Primärforschung** erhebt neu (Befragung, Beobachtung, Experiment, Panel): passgenau und aktuell, aber teuer und zeitaufwendig.",
    schritte: [
      "Immer mit Sekundärforschung beginnen – sie schärft die Fragestellung.",
      "Erst die verbleibende Informationslücke primär erheben.",
      "Erhebungsmethode an der Frage ausrichten: Beobachtung zeigt Verhalten, Befragung zeigt Aussagen über Verhalten."
    ],
    falle: "Zwischen bekundeter Zahlungsbereitschaft und tatsächlichem Kauf klafft eine große Lücke. Preisfragen gehören ins Experiment oder in Conjoint-Analysen, nicht in die direkte Befragung." },

  { id: "m06-14", thema: "Preisentscheidung", typ: "case",
    frage: "Lohnt sich die Aktion? Rechne und begründe.",
    szenario: "Ein Onlinehändler erwägt eine Rabattaktion von 15 % auf ein Produkt mit einem Listenpreis von 60 € und variablen Kosten von 39 €. Der Marketingleiter erwartet eine Absatzsteigerung von 30 %. Aktuell werden 4.000 Stück im Aktionszeitraum verkauft. Zusätzliche Aktionskosten: 6.000 €.",
    hinweis: "Rechne über den Gesamtdeckungsbeitrag, nicht über den Umsatz. Und bestimme die kritische Absatzsteigerung.",
    antwort: "Ohne Aktion: db = 21 €, DB = 4.000 · 21 = **84.000 €**.\nMit Aktion: Preis 51 €, db = 12 €, Menge 5.200 → DB = 62.400 €, abzüglich 6.000 € Aktionskosten = **56.400 €**.\nDie Aktion vernichtet 27.600 € Deckungsbeitrag.\nKritische Menge: (84.000 + 6.000) ÷ 12 = 7.500 Stück, also **+87,5 %** Absatzsteigerung. Die erwarteten 30 % reichen bei weitem nicht.\nDer Grund liegt im Hebel: 15 % Preisnachlass entsprechen 43 % des Stückdeckungsbeitrags. Je dünner die Marge, desto größer der nötige Mengenausgleich. Sinnvoller wären Maßnahmen, die den Preis nicht antasten: Bündelung, Zugaben mit niedrigen Grenzkosten, zeitliche Begrenzung auf Neukunden oder Mengenstaffeln, die nur zusätzliche Käufe verbilligen.",
    check: [
      "Stückdeckungsbeitrag vor und nach Rabatt korrekt (21 € bzw. 12 €)",
      "Gesamtdeckungsbeitrag statt Umsatz verglichen",
      "Aktionskosten einbezogen",
      "Kritische Absatzsteigerung von 87,5 % berechnet",
      "Hebelwirkung des Rabatts auf die Marge erklärt",
      "Alternativen zur Preissenkung vorgeschlagen"
    ],
    merksatz: "Rabatt wirkt nicht auf den Preis, sondern auf die Marge – und die ist viel kleiner." },

  { id: "m06-15", thema: "Kundenwert", typ: "case",
    frage: "Wie viel darf die Kundengewinnung kosten, und welches Programm empfiehlst du?",
    szenario: "Ein Abo-Dienst hat 12 € monatlichen Umsatz je Kunde bei variablen Kosten von 3 €. Die monatliche Abwanderungsrate beträgt 4 %. Die Akquisitionskosten liegen aktuell bei 180 € je Neukunde. Kalkulationszins vernachlässigbar. Zur Diskussion steht ein Servicepaket, das 1 € je Kunde und Monat kostet und die Abwanderung auf 3 % senkt.",
    hinweis: "Die durchschnittliche Verweildauer ist der Kehrwert der Abwanderungsrate.",
    antwort: "Ausgangslage: db = 9 €/Monat, durchschnittliche Verweildauer = 1 ÷ 0,04 = 25 Monate → Kundenwert vor Akquisition = 225 €. Abzüglich 180 € CAC bleiben **45 €** je Kunde. Das Geschäft trägt sich, aber die Amortisation dauert 20 Monate – bei diesem Puffer ist das Wachstumstempo durch die Liquidität begrenzt.\nMit Servicepaket: db = 8 €/Monat, Verweildauer = 1 ÷ 0,03 = 33,3 Monate → 266,7 € Kundenwert, abzüglich 180 € = **86,7 €**. Der Wert je Kunde steigt um 93 %, obwohl die Marge je Monat sinkt.\nEmpfehlung: Servicepaket einführen. Die Bindungsrate ist der stärkste Hebel, weil sie multiplikativ auf die gesamte Restlaufzeit wirkt, während die Marge nur additiv wirkt. Voraussetzung ist, dass die Senkung der Abwanderung belastbar gemessen wird – am besten über einen Test mit Kontrollgruppe.",
    check: [
      "Deckungsbeitrag statt Umsatz verwendet",
      "Verweildauer als Kehrwert der Abwanderungsrate bestimmt",
      "Kundenwert beider Varianten berechnet (225 € bzw. 266,7 € vor CAC)",
      "Erkannt, dass die niedrigere Monatsmarge durch längere Bindung überkompensiert wird",
      "Amortisationsdauer der Akquisition als Liquiditätsgrenze angesprochen",
      "Messbarkeit über Test mit Kontrollgruppe gefordert"
    ],
    falle: "Wer nur die Monatsmarge betrachtet, lehnt das Servicepaket ab. Der Fehler ist die zu kurze Betrachtungsperiode." },

  { id: "m06-16", thema: "Positionierung", typ: "denkmuster",
    frage: "Was macht eine tragfähige Positionierung aus?",
    antwort: "Sie beschreibt, welchen für die Zielgruppe **relevanten** Nutzen die Marke besetzt, worin sie sich vom Wettbewerb **unterscheidet** und warum das **glaubwürdig** ist. Fehlt eines der drei Merkmale, ist es keine Positionierung, sondern ein Slogan.",
    schritte: [
      "Relevante Kaufkriterien der Zielgruppe erheben.",
      "Wettbewerber auf diesen Dimensionen kartieren (Positionierungskreuz).",
      "Freie und zugleich relevante Position suchen.",
      "Belegbarkeit prüfen: Welche Leistung macht die Behauptung wahr?",
      "Alle Mix-Instrumente konsequent daran ausrichten."
    ],
    falle: "Eine freie Position ist oft deshalb frei, weil sie niemanden interessiert. Differenzierung ohne Relevanz ist verschwendetes Geld.",
    merksatz: "Relevant, anders, glaubwürdig – alle drei oder keins." }

]});
