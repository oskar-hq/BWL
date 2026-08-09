BWL.addModul({
  id: "m09",
  name: "Strategie & Unternehmensführung",
  beschreibung: "Branchenlogik, Wettbewerbsvorteil, Ressourcen: die Modelle, mit denen man begründet, warum ein Unternehmen dauerhaft Geld verdient.",
  karten: [

  { id: "m09-01", thema: "Strategieprozess", typ: "denkmuster",
    frage: "Welche Schritte durchläuft der strategische Managementprozess?",
    antwort: "**Zielbildung** (Vision, Mission, Oberziele) → **strategische Analyse** (Umwelt und Unternehmen) → **Strategieformulierung** und Bewertung von Alternativen → **Implementierung** (Strukturen, Prozesse, Ressourcen, Anreize) → **strategische Kontrolle** (Prämissen-, Durchführungs- und Überwachungskontrolle) mit Rückkopplung.",
    schritte: [
      "Analyse immer doppelt führen: außen (Chancen/Risiken) und innen (Stärken/Schwächen).",
      "Alternativen erzeugen, bevor bewertet wird – sonst wird die erstbeste Idee begründet statt geprüft.",
      "Implementierung von Anfang an mitdenken: Die meisten Strategien scheitern nicht an der Idee, sondern an der Umsetzung.",
      "Prämissenkontrolle einrichten: Welche Annahme müsste sich ändern, damit die Strategie falsch wird?"
    ],
    falle: "Strategische Kontrolle als reine Ergebniskontrolle greift zu spät. Der eigentliche Wert liegt in der laufenden Prüfung der Annahmen." },

  { id: "m09-02", thema: "SWOT-Analyse", typ: "denkmuster",
    frage: "Wie leitest du aus einer SWOT-Analyse tatsächlich Strategien ab?",
    antwort: "Nicht durch Auflisten, sondern durch **Kombination** der Innen- mit der Außensicht in vier Feldern:\n**SO** (Stärken nutzen, um Chancen zu ergreifen) – Ausbaustrategien.\n**ST** (Stärken einsetzen, um Risiken abzuwehren) – Absicherungsstrategien.\n**WO** (Schwächen abbauen, um Chancen nutzen zu können) – Aufholstrategien.\n**WT** (Schwächen und Risiken zugleich) – Rückzug oder Vermeidung.",
    schritte: [
      "Stärken und Schwächen immer **relativ zum Wettbewerb** bestimmen, nicht absolut.",
      "Chancen und Risiken aus der Umweltanalyse ableiten, nicht aus dem Bauch.",
      "Jede Kombination als Handlungssatz formulieren: „Wir nutzen X, um Y zu erreichen.“",
      "Auf drei bis fünf Stoßrichtungen verdichten."
    ],
    falle: "Die häufigste SWOT ist eine Liste ohne Konsequenz. Und: Eine Stärke, die die Zielgruppe nicht interessiert, ist keine Stärke." },

  { id: "m09-03", thema: "Five Forces", typ: "denkmuster",
    frage: "Welche fünf Kräfte bestimmen nach Porter die Attraktivität einer Branche?",
    antwort: "**Rivalität unter bestehenden Wettbewerbern**, **Bedrohung durch neue Anbieter**, **Bedrohung durch Ersatzprodukte**, **Verhandlungsmacht der Lieferanten**, **Verhandlungsmacht der Abnehmer**. Je stärker die Kräfte, desto stärker wird die Branchenrendite abgeschöpft.",
    schritte: [
      "Branche und relevanten Markt zuerst sauber abgrenzen – das Ergebnis hängt vollständig davon ab.",
      "Je Kraft die Treiber prüfen: Markteintrittsbarrieren, Umstellungskosten, Konzentrationsgrad, Standardisierung, Preissensitivität, Fixkostenanteil.",
      "Kräfte gewichten statt gleich behandeln.",
      "Ableitung: Position wählen, in der die stärksten Kräfte am wenigsten wirken – oder die Kräfte aktiv verändern."
    ],
    beispiel: "Hoher Fixkostenanteil plus geringe Produktdifferenzierung plus langsames Marktwachstum ergibt zwangsläufig Preiskampf – siehe Luftverkehr.",
    falle: "Das Modell ist statisch und ignoriert Komplementäre und Kooperationen. Es erklärt Renditeniveaus, nicht Veränderungsdynamik." },

  { id: "m09-04", thema: "Wertkette", typ: "denkmuster",
    frage: "Wie ist Porters Wertkette aufgebaut und wozu dient sie?",
    antwort: "**Primäraktivitäten**: Eingangslogistik, Operationen, Ausgangslogistik, Marketing und Vertrieb, Kundendienst. **Unterstützungsaktivitäten**: Unternehmensinfrastruktur, Personalwirtschaft, Technologieentwicklung, Beschaffung. Die Differenz zwischen den Kosten aller Aktivitäten und dem erzielten Preis ist die Gewinnspanne.\nSie dient dazu, Wettbewerbsvorteile einzelnen Aktivitäten zuzuordnen – ein Vorteil entsteht immer in einer konkreten Tätigkeit oder in deren Verknüpfung, nie „im Unternehmen“ allgemein.",
    schritte: [
      "Aktivitäten auflisten und Kosten zuordnen.",
      "Je Aktivität fragen: Erzeugt sie Differenzierung, Kostenvorteil oder nichts von beidem?",
      "Verknüpfungen zwischen Aktivitäten prüfen – dort liegen die schwer imitierbaren Vorteile.",
      "Aktivitäten ohne Beitrag auslagern oder streichen."
    ] },

  { id: "m09-05", thema: "Wettbewerbsstrategien", typ: "denkmuster",
    frage: "Welche generischen Wettbewerbsstrategien unterscheidet Porter, und was ist das Problem der Mittelposition?",
    antwort: "**Kostenführerschaft** (branchenweit der günstigste Anbieter), **Differenzierung** (branchenweit einzigartiger Nutzen, der einen Preisaufschlag trägt) und **Fokussierung** (eines von beidem in einem Segment).\nWer weder das eine noch das andere konsequent verfolgt, landet „stuck in the middle“: zu teuer für Preiskäufer, zu beliebig für Qualitätskäufer.",
    schritte: [
      "Quelle des Vorteils bestimmen: Kosten oder Nutzen?",
      "Reichweite bestimmen: Gesamtmarkt oder Segment?",
      "Prüfen, ob die gesamte Wertkette zu dieser Wahl passt – Kostenführerschaft verlangt andere Prozesse als Differenzierung.",
      "Nachhaltigkeit prüfen: Wie leicht ist der Vorteil imitierbar?"
    ],
    falle: "Kostenführerschaft kann nur **ein** Anbieter je Branche sein; alle anderen, die es versuchen, verlieren doppelt. Und niedrige Preise sind keine Kostenführerschaft – entscheidend ist die Kostenposition, nicht die Preisposition.",
    merksatz: "Billiger oder anders – aber bitte entschieden." },

  { id: "m09-06", thema: "Ressourcenbasierter Ansatz", typ: "denkmuster",
    frage: "Welche Eigenschaften muss eine Ressource nach dem VRIO-Schema haben, um dauerhaften Wettbewerbsvorteil zu stiften?",
    antwort: "**Valuable** – sie muss Chancen nutzen oder Risiken abwehren. **Rare** – sie darf nicht allgemein verfügbar sein. **Imperfectly imitable** – schwer nachahmbar (historisch gewachsen, kausal mehrdeutig, sozial komplex). **Organized** – das Unternehmen muss so aufgestellt sein, dass es die Ressource auch nutzt.",
    schritte: [
      "Ressourcen und Fähigkeiten sammeln (materiell, immateriell, organisational).",
      "Jede durch die vier Filter schicken.",
      "Nur wertvoll → Wettbewerbsgleichstand; wertvoll und selten → temporärer Vorteil; zusätzlich schwer imitierbar und organisational verankert → dauerhafter Vorteil."
    ],
    beispiel: "Eine Maschine ist wertvoll, aber kaufbar – kein dauerhafter Vorteil. Eine über 20 Jahre gewachsene Zusammenarbeit zwischen Entwicklung und Fertigung ist sozial komplex und praktisch nicht kopierbar.",
    falle: "Der Ansatz ist rückwärtsgewandt anwendbar und schwer prognostisch: Man erkennt Kernkompetenzen meist erst, wenn sie sich bewährt haben." },

  { id: "m09-07", thema: "Ansoff-Matrix", typ: "denkmuster",
    frage: "Welche vier Wachstumsstrategien unterscheidet die Produkt-Markt-Matrix und wie unterscheiden sie sich im Risiko?",
    antwort: "**Marktdurchdringung** (bestehende Produkte, bestehende Märkte) – geringstes Risiko, über Nutzungsintensität, Wettbewerbsverdrängung und Nichtverwender. **Marktentwicklung** (bestehende Produkte, neue Märkte) – neue Regionen oder Segmente. **Produktentwicklung** (neue Produkte, bestehende Märkte) – Innovation für bekannte Kunden. **Diversifikation** (neu/neu) – höchstes Risiko, weil weder Markt- noch Produktkenntnis vorliegt.",
    schritte: [
      "Immer von innen nach außen prüfen: Ist das Potenzial im bestehenden Markt wirklich ausgeschöpft?",
      "Risiko steigt mit jedem Schritt weg vom Bekannten – etwa Faktor zwei je Feld.",
      "Bei Diversifikation begründen, worin der Verbund besteht (Kompetenz, Vertrieb, Marke). Ohne Verbund ist es Kapitalanlage, keine Strategie."
    ],
    falle: "Diversifikation wird oft mit Risikostreuung begründet. Das ist Sache der Anteilseigner – die können ihr Portfolio billiger streuen als das Unternehmen." },

  { id: "m09-08", thema: "Umweltanalyse", typ: "begriff",
    frage: "Welche Felder deckt eine PESTEL-Analyse ab?",
    antwort: "**Political** (Regulierung, Handelspolitik, Stabilität), **Economic** (Konjunktur, Zinsen, Wechselkurse, Kaufkraft), **Social** (Demografie, Werte, Lebensstile), **Technological** (Innovationen, Substitution, Digitalisierung), **Environmental** (Klima, Ressourcen, Auflagen), **Legal** (Arbeits-, Wettbewerbs-, Produkthaftungsrecht).",
    schritte: [
      "Je Feld nur die Faktoren aufnehmen, die die Branche tatsächlich treffen.",
      "Jeden Faktor nach Eintrittswahrscheinlichkeit und Wirkungsstärke bewerten.",
      "Die stärksten in Chancen und Risiken der SWOT überführen.",
      "Frühindikatoren definieren, an denen sich Veränderungen ablesen lassen."
    ],
    falle: "PESTEL erzeugt leicht Listen ohne Konsequenz. Der Wert liegt in der Bewertung und in der Frage: Was müsste ich beobachten?" },

  { id: "m09-09", thema: "Balanced Scorecard", typ: "denkmuster",
    frage: "Welche vier Perspektiven hat die Balanced Scorecard und welches Problem löst sie?",
    antwort: "**Finanzen** (Wie sehen uns die Kapitalgeber?), **Kunden** (Wie sehen uns die Kunden?), **interne Prozesse** (Worin müssen wir hervorragend sein?), **Lernen und Entwicklung** (Wie bleiben wir veränderungsfähig?).\nSie löst zwei Probleme: die Einseitigkeit rein finanzieller, vergangenheitsbezogener Kennzahlen und die Lücke zwischen formulierter Strategie und operativem Handeln – über Ursache-Wirkungs-Ketten von unten nach oben.",
    schritte: [
      "Strategie in konkrete Ziele je Perspektive übersetzen.",
      "Je Ziel Messgröße, Zielwert und Maßnahme festlegen.",
      "Ursache-Wirkungs-Kette explizit formulieren: Qualifikation → Prozessqualität → Kundenzufriedenheit → Umsatz.",
      "Auf wenige Kennzahlen begrenzen (Richtwert: höchstens 20)."
    ],
    falle: "Ohne die Ursache-Wirkungs-Kette wird die Scorecard zu einem beliebigen Kennzahlenfriedhof. Der Erkenntniswert liegt in den unterstellten Zusammenhängen – und in ihrer Überprüfung." },

  { id: "m09-10", thema: "Integration und Diversifikation", typ: "begriff",
    frage: "Unterscheide horizontale, vertikale und laterale Diversifikation.",
    antwort: "**Horizontal**: Ausweitung auf verwandte Produkte derselben Wertschöpfungsstufe (Nutzung gleicher Technologie, Kunden, Kanäle). **Vertikal**: Ausdehnung auf vor- oder nachgelagerte Stufen – Rückwärtsintegration Richtung Lieferant, Vorwärtsintegration Richtung Kunde. **Lateral**: Eintritt in völlig fremde Bereiche ohne sachlichen Zusammenhang (Konglomerat).",
    schritte: [
      "Vertikale Integration über Transaktionskosten begründen: Spezifität, Unsicherheit, Häufigkeit.",
      "Sie erhöht die Fixkostenbelastung und senkt die Flexibilität – der Preis der Kontrolle.",
      "Laterale Diversifikation braucht einen sehr guten Grund, weil Verbundvorteile fehlen."
    ],
    falle: "Vertikale Integration wird gern mit „Wir sparen die Marge des Lieferanten“ begründet. Diese Marge ist aber die Vergütung für Risiko und Spezialisierung – man kauft sie nicht weg, man übernimmt sie." },

  { id: "m09-11", thema: "Synergien", typ: "denkmuster",
    frage: "Warum scheitern die meisten Unternehmenszusammenschlüsse an ihren Synergieerwartungen?",
    antwort: "Weil Synergien systematisch überschätzt und ihre Realisierungskosten unterschätzt werden. Kostensynergien (Doppelfunktionen, Einkaufsbündelung) sind noch am belastbarsten; Umsatzsynergien (Cross-Selling) treten selten in der geplanten Höhe ein. Hinzu kommen Integrationskosten, Kulturkonflikte, Abwanderung von Leistungsträgern und Bindung von Managementaufmerksamkeit.\nÖkonomisch entscheidend: Der Käufer zahlt die erwarteten Synergien vorab als Prämie an die Verkäufer. Wert entsteht nur, wenn die realisierten Synergien die gezahlte Prämie **übersteigen**.",
    schritte: [
      "Synergien einzeln beziffern und mit Verantwortlichem und Termin hinterlegen.",
      "Realisierungskosten und -dauer gegenrechnen.",
      "Barwert bilden und mit der Übernahmeprämie vergleichen.",
      "Sensitivität rechnen: Was, wenn nur die Hälfte eintritt?"
    ],
    falle: "Der Fluch des Gewinners: In einem Bieterverfahren setzt sich derjenige durch, der am optimistischsten schätzt – also mit hoher Wahrscheinlichkeit zu viel zahlt." },

  { id: "m09-12", thema: "Zielsystem", typ: "begriff",
    frage: "Wie hängen Vision, Mission, Strategie und operative Ziele zusammen, und was macht ein Ziel operational?",
    antwort: "**Vision**: das angestrebte Zukunftsbild, sinnstiftend und richtungsgebend. **Mission**: der Zweck und Auftrag – wofür das Unternehmen existiert, für wen, mit welchem Nutzen. **Strategie**: der Weg dorthin, also Auswahl von Märkten und Wettbewerbsvorteilen. **Operative Ziele**: die messbaren Zwischenschritte.\nOperational wird ein Ziel durch **Inhalt**, **Ausmaß**, **Zeitbezug** und **Geltungsbereich** – gebräuchlich als SMART: spezifisch, messbar, akzeptiert, realistisch, terminiert.",
    falle: "„Wir wollen Marktführer werden“ ist ohne Definition von Markt, Messgröße und Zeitpunkt keine Zielformulierung, sondern eine Stimmung." },

  { id: "m09-13", thema: "Szenariotechnik", typ: "denkmuster",
    frage: "Wie funktioniert die Szenariotechnik und wann ist sie einer Prognose überlegen?",
    antwort: "Statt einer Punktprognose werden mehrere in sich konsistente Zukunftsbilder entwickelt – typischerweise ein positives Extremszenario, ein negatives und ein Trendszenario. Überlegen ist sie bei hoher Unsicherheit und langem Zeithorizont, wo eine Prognose Scheingenauigkeit erzeugt.",
    schritte: [
      "Einflussfaktoren sammeln und auf Schlüsselfaktoren verdichten.",
      "Faktoren nach Unsicherheit und Wirkung sortieren; die zwei kritischsten spannen die Szenariomatrix auf.",
      "Konsistente Kombinationen zu Szenarien ausarbeiten.",
      "Je Szenario Konsequenzen und Handlungsoptionen ableiten.",
      "Robuste Maßnahmen identifizieren – die, die in allen Szenarien sinnvoll sind.",
      "Frühwarnindikatoren definieren."
    ],
    merksatz: "Ziel ist nicht, die Zukunft zu treffen, sondern nicht überrascht zu werden." },

  { id: "m09-14", thema: "Geschäftsmodell", typ: "begriff",
    frage: "Welche Bausteine beschreibt das Business Model Canvas?",
    antwort: "Neun Felder: **Kundensegmente**, **Wertangebot**, **Kanäle**, **Kundenbeziehungen**, **Einnahmequellen**, **Schlüsselressourcen**, **Schlüsselaktivitäten**, **Schlüsselpartner** und **Kostenstruktur**. Rechts steht die Marktseite, links die Leistungsseite, unten die ökonomische Konsequenz.",
    schritte: [
      "Immer mit Kundensegment und Wertangebot beginnen.",
      "Prüfen, ob die Einnahmequellen zum Wertangebot passen – wer zahlt wofür und warum?",
      "Kostenstruktur gegen Einnahmequellen halten: Trägt das Modell bei realistischer Menge?",
      "Kritische Annahmen markieren und zuerst testen."
    ],
    falle: "Das Canvas beschreibt, es bewertet nicht. Ein vollständig ausgefülltes Canvas ist noch kein tragfähiges Geschäftsmodell." },

  { id: "m09-15", thema: "Five Forces", typ: "case",
    frage: "Analysiere die Branchenstruktur und leite eine Positionierungsempfehlung ab.",
    szenario: "Ein mittelständischer Hersteller von Standard-Verpackungsfolien: Vier Anbieter teilen sich 70 % des Marktes, die Produkte sind technisch nahezu austauschbar, der Fixkostenanteil liegt bei rund 60 %, das Marktwachstum bei 1 %. Rohstoff ist ein Granulat von drei Petrochemiekonzernen. Die Abnehmer sind Lebensmittelkonzerne, die jährlich ausschreiben. Papierbasierte Alternativen gewinnen durch Regulierung an Bedeutung.",
    hinweis: "Gehe die fünf Kräfte einzeln durch und gewichte sie, bevor du eine Empfehlung gibst.",
    antwort: "**Rivalität: sehr hoch.** Homogene Produkte, hoher Fixkostenanteil und stagnierender Markt zwingen zur Auslastung – jeder Deckungsbeitrag über den variablen Kosten wird angenommen, das führt zu Preiskämpfen.\n**Lieferantenmacht: hoch.** Drei Rohstoffanbieter, kaum Ausweichmöglichkeiten, Preisschwankungen werden durchgereicht.\n**Abnehmermacht: sehr hoch.** Große Konzerne, jährliche Ausschreibungen, keine Umstellungskosten.\n**Substitution: steigend.** Regulatorisch getrieben, mittelfristig strukturell bedrohlich.\n**Neue Anbieter: mittel.** Kapitalintensität wirkt als Barriere, aber die Technologie ist verfügbar.\nBefund: eine strukturell unattraktive Branche – die Rendite wird von beiden Seiten der Wertkette abgeschöpft. Reine Kostenführerschaft ist nur für den größten Anbieter ein tragfähiger Weg.\nEmpfehlung für den Mittelständler: aus dem austauschbaren Standardgeschäft heraus, hin zu **Fokussierung mit Differenzierung** – etwa recyclingfähige oder Monomaterial-Folien mit Zertifizierung, technische Beratung und gemeinsame Entwicklung mit dem Abnehmer, kleinere Losgrößen und kurze Lieferzeiten. Genau das senkt die Abnehmermacht (Umstellungskosten entstehen) und verwandelt die Substitutionsbedrohung in eine Chance. Parallel: langfristige Rohstoffverträge oder Indexbindung gegen die Lieferantenmacht, Auslastungsdisziplin statt Preiskampf.",
    check: [
      "Alle fünf Kräfte einzeln beurteilt und begründet",
      "Fixkostenanteil und Marktwachstum als Treiber der Rivalität verknüpft",
      "Abnehmermacht mit fehlenden Umstellungskosten begründet",
      "Substitution als regulatorisch getrieben und strukturell erkannt",
      "Kräfte gewichtet statt gleich behandelt",
      "Empfehlung als Fokus-/Differenzierungsstrategie formuliert",
      "Erklärt, wie die Maßnahmen konkret einzelne Kräfte abschwächen"
    ],
    falle: "Die naheliegende Antwort „Kosten senken“ verschärft die Lage: Sie ändert nichts an der Austauschbarkeit und liefert nur Munition für die nächste Ausschreibung." },

  { id: "m09-16", thema: "Wettbewerbsstrategie", typ: "case",
    frage: "Welche der beiden Optionen ist konsistenter? Begründe entlang der Wertkette.",
    szenario: "Ein Möbelhersteller mit 300 Beschäftigten steht vor der Wahl. Option A: Investition in eine hochautomatisierte Fertigungslinie (7 Mio. €), Reduktion der Variantenvielfalt von 400 auf 60, Belieferung großer Handelsketten. Option B: Ausbau der Individualfertigung mit Konfigurator, Lieferzeit 3 Wochen, eigener Onlineshop und Fachhandelspartner, Preisaufschlag 25 %. Das Unternehmen ist heute in beidem mittelmäßig: 400 Varianten, aber Stückkosten 12 % über dem Marktführer.",
    hinweis: "Die Ausgangslage ist die eigentliche Diagnose. Und: Welche Wertkette passt zu welcher Strategie?",
    antwort: "Die Diagnose lautet **stuck in the middle**: hohe Variantenvielfalt ohne Differenzierungsprämie, gleichzeitig 12 % Kostennachteil. Genau diese Position verliert gegen beide Seiten.\nOption A zielt auf Kostenführerschaft. Sie verlangt eine durchgängig darauf ausgerichtete Wertkette: standardisierte Konstruktion, lange Serien, straffe Beschaffung, schlanke Verwaltung, Vertrieb über wenige Großkunden. Das Risiko: Kostenführer kann nur einer sein, und der Marktführer liegt bereits 12 % vorn und wird mit größerer Menge weiter lernen. Zudem steigt der Fixkostenanteil deutlich – der Break-even wandert nach oben, die Abhängigkeit von wenigen Handelsketten erhöht deren Verhandlungsmacht.\nOption B zielt auf Fokus-Differenzierung. Dazu passen Konfigurator, kurze Lieferzeit, Fachhandel und Direktvertrieb, außerdem flexible Fertigung mit kleinen Losen und niedrigen Rüstkosten. Der Preisaufschlag von 25 % muss die höheren Stückkosten mehr als decken – das ist die zentrale Rechengröße und über eine Deckungsbeitragsrechnung je Variante zu prüfen.\nEmpfehlung: **Option B**, weil sie an die vorhandene Variantenkompetenz anknüpft und den Kostennachteil zur Nebensache macht, während Option A den Vorsprung des Marktführers frontal angreifen müsste – mit 7 Mio. € Einsatz und schlechteren Ausgangsbedingungen. Bedingung: konsequenter Rückbau der Varianten, die weder Deckungsbeitrag noch Differenzierung liefern, und Investition in Rüstzeitreduktion statt in Ausbringungsmenge. Ohne diese Konsequenz bleibt es bei der Mittelposition, nur mit neuem Etikett.",
    check: [
      "Ausgangslage als Mittelposition diagnostiziert",
      "Erkannt, dass Kostenführerschaft nur für einen Anbieter tragfähig ist",
      "Wertkettenkonsistenz je Option geprüft, nicht nur die Investitionssumme",
      "Fixkostenanstieg und Break-even-Verschiebung bei Option A benannt",
      "Erhöhte Abnehmermacht durch Konzentration auf Handelsketten erkannt",
      "Preisaufschlag gegen Mehrkosten als zentrale Prüfgröße bei Option B benannt",
      "Empfehlung an konkrete Bedingungen geknüpft (Variantenbereinigung, Rüstzeiten)"
    ],
    merksatz: "Eine Strategie ist erst dann eine Strategie, wenn sie auch sagt, was man nicht mehr tut." }

]});
