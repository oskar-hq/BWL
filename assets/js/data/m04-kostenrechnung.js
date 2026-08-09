BWL.addModul({
  id: "m04",
  name: "Kosten- und Leistungsrechnung",
  beschreibung: "Von der Kostenart bis zum Break-even. Das Modul mit der höchsten Klausurdichte – und der klarsten Entscheidungslogik.",
  karten: [

  { id: "m04-01", thema: "Aufbau der KLR", typ: "denkmuster",
    frage: "Welche drei Stufen durchläuft die Kostenrechnung und welche Frage beantwortet jede?",
    antwort: "**Kostenartenrechnung**: Welche Kosten sind angefallen? **Kostenstellenrechnung**: Wo sind sie angefallen? **Kostenträgerrechnung**: Wofür sind sie angefallen?",
    schritte: [
      "Kostenarten erfassen und in Einzel- und Gemeinkosten trennen.",
      "Einzelkosten direkt dem Kostenträger zuordnen.",
      "Gemeinkosten über den Betriebsabrechnungsbogen auf Kostenstellen verteilen.",
      "Von dort über Zuschlagssätze oder Bezugsgrößen auf die Kostenträger schlüsseln."
    ],
    merksatz: "Welche – wo – wofür." },

  { id: "m04-02", thema: "Kostenbegriffe", typ: "denkmuster",
    frage: "Wie unterscheiden sich die Kostengliederungen fix/variabel und Einzel-/Gemeinkosten – und warum darf man sie nicht gleichsetzen?",
    antwort: "**Fix/variabel** bezieht sich auf das Verhalten bei Beschäftigungsänderung. **Einzel-/Gemeinkosten** bezieht sich auf die Zurechenbarkeit zum Kostenträger. Das sind zwei unabhängige Dimensionen.",
    beispiel: "Fertigungslöhne im Akkord: variabel und Einzelkosten. Energie der Fertigungshalle: variabel, aber Gemeinkosten. Miete der Halle: fix und Gemeinkosten. Eine Spezialform nur für Produkt A: fix, aber Einzelkosten des Produkts (unechte Gemeinkosten sind wieder etwas anderes – zurechenbar, aber aus Wirtschaftlichkeitsgründen pauschaliert).",
    falle: "„Gemeinkosten sind fix“ ist der häufigste Kurzschluss. Er führt dazu, dass variable Gemeinkosten in der Teilkostenrechnung vergessen werden.",
    merksatz: "Verhalten und Zurechenbarkeit sind zwei verschiedene Fragen." },

  { id: "m04-03", thema: "Betriebsabrechnungsbogen", typ: "formel",
    frage: "Wozu dient der BAB und wie ermittelst du daraus die Zuschlagssätze?",
    antwort: "Der BAB verteilt die Gemeinkosten über Verteilungsschlüssel auf die Hauptkostenstellen (Material, Fertigung, Verwaltung, Vertrieb) und setzt sie dann ins Verhältnis zu einer Bezugsgröße derselben Stelle.",
    formel: [
      "MGK-Satz = Materialgemeinkosten ÷ Fertigungsmaterial · 100",
      "FGK-Satz = Fertigungsgemeinkosten ÷ Fertigungslöhne · 100",
      "VwGK-Satz = Verwaltungsgemeinkosten ÷ Herstellkosten des Umsatzes · 100",
      "VtGK-Satz = Vertriebsgemeinkosten ÷ Herstellkosten des Umsatzes · 100"
    ],
    beispiel: "Fertigungsmaterial 400.000 €, Materialgemeinkosten 32.000 € → MGK-Satz 8 %.",
    falle: "Zuschlagssätze unterstellen Proportionalität zur Bezugsgröße. Bei hoher Automatisierung sind die Fertigungslöhne aber winzig und die Zuschläge erreichen 800 % – dann ist ein Maschinenstundensatz die ehrlichere Bezugsgröße." },

  { id: "m04-04", thema: "Zuschlagskalkulation", typ: "formel",
    frage: "Nenne das vollständige Kalkulationsschema von den Materialkosten bis zum Angebotspreis.",
    antwort: "Das Schema läuft von den Einzelkosten über Herstell- und Selbstkosten zum Barverkaufs-, Ziel- und Listenpreis.",
    formel: [
      "  Fertigungsmaterial",
      "+ Materialgemeinkosten            = Materialkosten",
      "  Fertigungslöhne",
      "+ Fertigungsgemeinkosten",
      "+ Sondereinzelkosten der Fertigung = Fertigungskosten",
      "= Herstellkosten",
      "+ Verwaltungsgemeinkosten",
      "+ Vertriebsgemeinkosten",
      "+ Sondereinzelkosten des Vertriebs = Selbstkosten",
      "+ Gewinnzuschlag                   = Barverkaufspreis",
      "+ Skonto (im Hundert)              = Zielverkaufspreis",
      "+ Rabatt (im Hundert)              = Listenverkaufspreis"
    ],
    falle: "Skonto und Rabatt werden **im Hundert** gerechnet, nicht auf Hundert: Bei 3 % Skonto entspricht der Barverkaufspreis 97 % des Zielverkaufspreises, also Zielpreis = Barpreis ÷ 0,97.",
    merksatz: "Material, Fertigung, Herstell, Selbst, Bar, Ziel, Liste." },

  { id: "m04-05", thema: "Divisionskalkulation", typ: "formel",
    frage: "Wann setzt du Divisions-, Äquivalenzziffern- und Zuschlagskalkulation ein?",
    antwort: "**Divisionskalkulation** bei Einproduktfertigung (Kosten ÷ Menge), mehrstufig bei Lagerbeständen zwischen den Stufen. **Äquivalenzziffernkalkulation** bei Sortenfertigung – artverwandte Produkte, deren Kostenverhältnisse sich durch Ziffern abbilden lassen. **Zuschlagskalkulation** bei heterogener Einzel- und Serienfertigung.",
    formel: ["Divisionskalkulation: k = K ÷ x", "Äquivalenzziffern: Recheneinheiten = Σ (x_i · ä_i);  k_1 = K ÷ Recheneinheiten;  k_i = k_1 · ä_i"],
    beispiel: "Drei Biersorten mit Ziffern 0,8 / 1,0 / 1,3 und Mengen 2.000 / 5.000 / 1.000 hl bei 336.000 € Kosten: Recheneinheiten = 1.600 + 5.000 + 1.300 = 7.900; k je Einheitssorte = 42,53 €; Sorte 3 kostet 55,29 €/hl." },

  { id: "m04-06", thema: "Maschinenstundensatz", typ: "formel",
    frage: "Wie bildest du einen Maschinenstundensatz und warum ist er der Zuschlagskalkulation oft überlegen?",
    antwort: "Alle maschinenabhängigen Gemeinkosten werden gesammelt und durch die geplanten Laufstunden geteilt. Der Rest der Fertigungsgemeinkosten wird weiter über die Löhne verrechnet (Restgemeinkostenzuschlag).",
    formel: ["MStdS = (kalk. Abschreibung + kalk. Zinsen + Raumkosten + Energie + Instandhaltung + Werkzeuge) ÷ Laufstunden p. a."],
    beispiel: "Kosten 96.000 €/Jahr, 1.600 Laufstunden → 60 €/Stunde. Ein Auftrag mit 2,5 Maschinenstunden trägt 150 € maschinenabhängige Gemeinkosten.",
    falle: "Der Nenner ist die geplante **Nutzung**, nicht die theoretische Kapazität. Sinkt die Auslastung, steigt der Satz – und mit ihm der kalkulierte Preis, was die Nachfrage weiter senkt. Diese Kostenspirale ist ein klassischer Vollkostenfehler." },

  { id: "m04-07", thema: "Deckungsbeitrag", typ: "formel",
    frage: "Was ist ein Deckungsbeitrag und was sagt er aus?",
    antwort: "Der Betrag, der nach Abzug der variablen Kosten vom Erlös übrig bleibt und zur Deckung der Fixkosten und darüber hinaus zum Gewinn beiträgt. Er ist die zentrale Entscheidungsgröße für kurzfristige Fragen.",
    formel: [
      "db = p − k_v      (Stückdeckungsbeitrag)",
      "DB = x · (p − k_v) (Gesamtdeckungsbeitrag)",
      "Gewinn = DB − K_f",
      "DB-Quote = db ÷ p"
    ],
    schritte: [
      "Ist der Stückdeckungsbeitrag positiv? Dann trägt jedes Stück zur Fixkostendeckung bei.",
      "Reicht der Gesamtdeckungsbeitrag über alle Produkte, um die Fixkosten zu decken?",
      "Erst diese zweite Frage entscheidet über Gewinn oder Verlust."
    ],
    falle: "Ein Produkt mit negativem Vollkostenergebnis, aber positivem Deckungsbeitrag darf kurzfristig nicht eliminiert werden – die Fixkosten bleiben und werden dann von den übrigen Produkten getragen.",
    merksatz: "Kurzfristig entscheidet der Deckungsbeitrag, langfristig die Vollkosten." },

  { id: "m04-08", thema: "Break-even-Analyse", typ: "formel",
    frage: "Wie berechnest du Break-even-Menge, Break-even-Umsatz und Sicherheitsstrecke?",
    antwort: "Der Break-even-Punkt ist die Menge, bei der der Gesamtdeckungsbeitrag genau die Fixkosten deckt – der Gewinn ist null.",
    formel: [
      "x_BE = K_f ÷ (p − k_v)",
      "Umsatz_BE = K_f ÷ DB-Quote",
      "x bei Zielgewinn G:  x = (K_f + G) ÷ (p − k_v)",
      "Sicherheitsstrecke = (x_ist − x_BE) ÷ x_ist"
    ],
    beispiel: "K_f = 300.000 €, p = 80 €, k_v = 50 € → db = 30 €, x_BE = 10.000 Stück, Umsatz_BE = 800.000 €. Bei geplanten 13.000 Stück beträgt die Sicherheitsstrecke 23 %.",
    falle: "Das Modell unterstellt lineare Kosten- und Erlösfunktionen, konstante Preise und ein konstantes Absatzprogramm. Bei Mehrproduktfertigung gilt es nur bei unverändertem Produktmix." },

  { id: "m04-09", thema: "Preisuntergrenzen", typ: "denkmuster",
    frage: "Welche Preisuntergrenzen unterscheidest du und wann gilt welche?",
    antwort: "**Kurzfristige Preisuntergrenze** = variable Stückkosten – gültig bei freier Kapazität, wenn die Fixkosten ohnehin anfallen.\n**Kurzfristige Preisuntergrenze im Engpass** = variable Kosten + entgangener Deckungsbeitrag der verdrängten Alternative.\n**Langfristige Preisuntergrenze** = Selbstkosten (Vollkosten) – auf Dauer müssen alle Kosten und ein Kapitaldienst verdient werden.\n**Liquiditätsorientierte Untergrenze** = auszahlungswirksame Kosten – die absolute Notgrenze.",
    schritte: [
      "Erst Kapazitätssituation klären: frei oder Engpass?",
      "Dann Zeithorizont klären: einmaliger Zusatzauftrag oder Dauergeschäft?",
      "Dann die passende Untergrenze wählen.",
      "Zum Schluss preispolitische Nebenwirkungen prüfen."
    ],
    falle: "Die kurzfristige Untergrenze ist eine Ausnahmeregel für freie Kapazität. Wer dauerhaft zu variablen Kosten verkauft, deckt seine Fixkosten nie." },

  { id: "m04-10", thema: "Programmplanung", typ: "denkmuster",
    frage: "Wie planst du das optimale Produktionsprogramm bei genau einem Engpass?",
    antwort: "Nicht nach absolutem Deckungsbeitrag, sondern nach dem Deckungsbeitrag je Einheit des Engpasses.",
    formel: "relativer DB = db ÷ Engpassverbrauch je Stück",
    schritte: [
      "Alle Produkte mit negativem Stückdeckungsbeitrag streichen.",
      "Prüfen, ob die Kapazität überhaupt knapp ist – wenn nicht, alles produzieren, was db > 0 hat.",
      "Relativen Deckungsbeitrag je Produkt berechnen.",
      "Absteigend sortieren und die Kapazität von oben nach unten auffüllen.",
      "Absatzhöchstmengen als Nebenbedingung beachten.",
      "Bei mehreren Engpässen versagt die Rangfolge – dann lineare Optimierung."
    ],
    beispiel: "A: db 60 €, 3 h → 20 €/h. B: db 30 €, 1 h → 30 €/h. Trotz des halb so hohen Stückdeckungsbeitrags kommt B zuerst.",
    falle: "Die Rangfolge nach absolutem Deckungsbeitrag ist im Engpass systematisch falsch – sie bevorzugt die Produkte, die den Engpass am meisten verbrauchen." },

  { id: "m04-11", thema: "Eigenfertigung oder Fremdbezug", typ: "denkmuster",
    frage: "Wie rechnest du eine Make-or-Buy-Entscheidung korrekt?",
    antwort: "Verglichen werden die **entscheidungsrelevanten** Kosten: bei Eigenfertigung die variablen Kosten plus die nur dadurch anfallenden (abbaubaren) Fixkosten, bei Fremdbezug der Einstandspreis plus Beschaffungsnebenkosten. Nicht abbaubare Fixkosten fallen in beiden Fällen an und bleiben draußen.",
    formel: ["Kritische Menge: x* = abbaubare Fixkosten ÷ (Bezugspreis − variable Stückkosten)"],
    schritte: [
      "Variable Stückkosten der Eigenfertigung ermitteln.",
      "Prüfen, welche Fixkosten bei Fremdbezug tatsächlich entfallen.",
      "Freiwerdende Kapazität bewerten – ihr Alternativnutzen ist ein Vorteil des Fremdbezugs.",
      "Kritische Menge berechnen und mit der Planmenge vergleichen.",
      "Qualitative Faktoren ergänzen: Know-how-Verlust, Abhängigkeit, Spezifität, Kapazitätsflexibilität."
    ],
    falle: "Vollkostenvergleiche führen fast immer zum Fremdbezug, weil sie nicht abbaubare Fixkosten der Eigenfertigung anlasten. Nach der Auslagerung bleiben diese Kosten – und werden auf die verbliebenen Produkte umgelegt, die dadurch ebenfalls unrentabel erscheinen. Diese Abwärtsspirale heißt Outsourcing-Falle." },

  { id: "m04-12", thema: "Kostenauflösung", typ: "formel",
    frage: "Wie zerlegst du eine Mischkostenposition in fixen und variablen Anteil?",
    antwort: "Über das mathematische Verfahren (Differenzenquotient aus zwei Beschäftigungsniveaus) oder statistisch über eine Regression mehrerer Perioden.",
    formel: [
      "k_v = (K_2 − K_1) ÷ (x_2 − x_1)",
      "K_f = K_1 − k_v · x_1"
    ],
    beispiel: "Bei 8.000 Stück fallen 260.000 € an, bei 12.000 Stück 340.000 €. k_v = 80.000 ÷ 4.000 = 20 €/Stück; K_f = 260.000 − 160.000 = 100.000 €.",
    falle: "Das Verfahren unterstellt Linearität im betrachteten Intervall. Liegt zwischen den beiden Punkten ein Kapazitätssprung, ist das Ergebnis Unsinn." },

  { id: "m04-13", thema: "Abweichungsanalyse", typ: "formel",
    frage: "Wie zerlegst du in der flexiblen Plankostenrechnung die Gesamtabweichung?",
    antwort: "In die **Beschäftigungsabweichung** (Folge der Fixkostenproportionalisierung – sie ist keine Verantwortung der Kostenstelle) und die **Verbrauchsabweichung** (echte Wirtschaftlichkeitsabweichung).",
    formel: [
      "Sollkosten = K_f_plan + k_v_plan · x_ist",
      "verrechnete Plankosten = (K_plan ÷ x_plan) · x_ist",
      "Beschäftigungsabweichung = Sollkosten − verrechnete Plankosten",
      "Verbrauchsabweichung = Istkosten − Sollkosten"
    ],
    beispiel: "Plan: 200.000 € bei 10.000 Std. (davon 120.000 fix). Ist: 8.000 Std., 178.000 €. Sollkosten = 120.000 + 8 · 8.000 = 184.000 €. Verrechnet = 20 · 8.000 = 160.000 €. Beschäftigungsabweichung 24.000 € (Leerkosten), Verbrauchsabweichung −6.000 € (günstig).",
    merksatz: "Beschäftigung erklärt die Auslastung, Verbrauch erklärt die Leistung." },

  { id: "m04-14", thema: "Prozesskostenrechnung", typ: "begriff",
    frage: "Welches Problem löst die Prozesskostenrechnung und wie funktioniert sie?",
    antwort: "Sie adressiert die wachsenden **indirekten** Gemeinkosten in Verwaltung, Beschaffung, Logistik und Qualitätssicherung, die wertmäßige Zuschläge falsch verteilen. Statt prozentualer Zuschläge werden Tätigkeiten (Prozesse) identifiziert, ihre Kostentreiber bestimmt und Prozesskostensätze je Vorgang gebildet.",
    schritte: [
      "Teilprozesse je Kostenstelle erfassen.",
      "In leistungsmengeninduziert (lmi, mit Kostentreiber) und leistungsmengenneutral (lmn) trennen.",
      "Prozesskostensatz = Prozesskosten ÷ Prozessmenge.",
      "lmn-Kosten anteilig umlegen (Umlagesatz).",
      "Produkte mit den tatsächlich beanspruchten Prozessmengen belasten."
    ],
    beispiel: "Eine Bestellung kostet 85 € unabhängig vom Wert. Ein Kleinteil für 40 € mit monatlicher Einzelbestellung ist damit ein Verlustgeschäft – im Zuschlagsverfahren wäre das nie sichtbar geworden.",
    merksatz: "Nicht der Wert treibt die Gemeinkosten, sondern die Anzahl der Vorgänge." },

  { id: "m04-15", thema: "Target Costing", typ: "denkmuster",
    frage: "Wie dreht Target Costing die klassische Kalkulationsrichtung um?",
    antwort: "Klassisch: Kosten ermitteln, Gewinn aufschlagen, Preis fordern. Target Costing fragt umgekehrt: Was darf das Produkt kosten, damit es sich zum marktfähigen Preis mit Zielmarge verkaufen lässt?",
    formel: ["Zielkosten (allowable costs) = Zielverkaufspreis − Zielgewinn", "Zielkostenindex = Nutzenanteil der Komponente ÷ Kostenanteil der Komponente"],
    schritte: [
      "Marktpreis aus Kundensicht bestimmen.",
      "Zielmarge abziehen → erlaubte Gesamtkosten.",
      "Produktfunktionen nach Kundennutzen gewichten.",
      "Kostenanteil je Komponente gegen den Nutzenanteil stellen.",
      "Index über 1 = Komponente darf mehr kosten; unter 1 = Kostensenkung nötig."
    ],
    falle: "Zielkosten sind kein Rabattkommando an den Einkauf. Sie sind ein Konstruktionsauftrag – über 70 % der späteren Kosten werden in der Entwicklungsphase festgelegt.",
    merksatz: "Nicht „Was kostet es?“, sondern „Was darf es kosten?“" },

  { id: "m04-16", thema: "Mehrstufige Deckungsbeitragsrechnung", typ: "begriff",
    frage: "Was gewinnst du durch eine mehrstufige Fixkostendeckungsrechnung?",
    antwort: "Die Fixkosten werden nicht als Block behandelt, sondern den Ebenen zugeordnet, für die sie tatsächlich anfallen: Produkt-, Produktgruppen-, Bereichs- und Unternehmensfixkosten. Damit wird sichtbar, welche Ebene sich selbst trägt.",
    formel: [
      "Umsatz − variable Kosten            = DB I",
      "− Produktfixkosten                   = DB II",
      "− Produktgruppenfixkosten            = DB III",
      "− Bereichsfixkosten                  = DB IV",
      "− Unternehmensfixkosten              = Betriebsergebnis"
    ],
    beispiel: "Ein Produkt mit positivem DB I, aber negativem DB II trägt seine eigenen Spezialanlagen nicht – hier ist eine Eliminierung tatsächlich zu prüfen, anders als bei positivem DB II.",
    merksatz: "Eliminieren darf man erst, wenn die zugehörigen Fixkosten wirklich verschwinden." },

  { id: "m04-17", thema: "Break-even-Analyse", typ: "case",
    frage: "Rechne beide Optionen durch und gib eine Empfehlung mit Bedingung.",
    szenario: "Ein Hersteller verkauft 14.000 Stück zu 90 € bei variablen Kosten von 54 € und Fixkosten von 400.000 €. Der Vertrieb schlägt vor, den Preis auf 82 € zu senken; er erwartet dadurch 18.000 Stück Absatz. Die Kapazitätsgrenze liegt bei 20.000 Stück.",
    hinweis: "Vergleiche die Gesamtdeckungsbeiträge, nicht die Stückgrößen. Und rechne aus, welche Menge die Preissenkung mindestens rechtfertigen würde.",
    antwort: "Ist-Situation: db = 36 €, DB = 504.000 €, Gewinn = 104.000 €. Break-even bei 11.112 Stück.\nNach Preissenkung: db = 28 €, DB = 18.000 · 28 = 504.000 €, Gewinn = 104.000 €. Break-even steigt auf 14.286 Stück.\nDie Preissenkung ist exakt ergebnisneutral – bei deutlich höherem Risiko: Der Absatz muss um 28,6 % steigen, nur um den Status quo zu halten, und die Prognose von 18.000 Stück ist genau die kritische Menge (504.000 ÷ 28). Jede Absatzerwartung darunter macht die Senkung nachteilig, während gleichzeitig 4.000 Stück mehr produziert, finanziert und gelagert werden müssen.\nEmpfehlung: nur durchführen, wenn belastbar **mehr** als 18.000 Stück erwartbar sind und die Kapazität von 20.000 Stück nicht zum neuen Engpass wird. Zu bedenken ist außerdem die Irreversibilität: Preissenkungen lassen sich kaum zurücknehmen, und Wettbewerber können nachziehen – dann bleibt die Mengenwirkung aus und nur der Margenverlust.",
    check: [
      "Stückdeckungsbeiträge beider Szenarien korrekt (36 € bzw. 28 €)",
      "Über den Gesamtdeckungsbeitrag verglichen, nicht über den Umsatz",
      "Kritische Menge von 18.000 Stück berechnet",
      "Break-even-Verschiebung als Risikoargument genannt",
      "Kapazitätsgrenze berücksichtigt",
      "Empfehlung an eine überprüfbare Bedingung geknüpft"
    ],
    falle: "Eine Preissenkung von 9 % frisst hier 22 % des Deckungsbeitrags je Stück. Je dünner die Marge, desto brutaler wirkt der Hebel." },

  { id: "m04-18", thema: "Programmplanung", typ: "case",
    frage: "Welches Programm ist optimal und welcher Gewinn ergibt sich?",
    szenario: "Drei Produkte teilen sich eine Anlage mit 1.200 Maschinenstunden pro Monat. Fixkosten 45.000 €/Monat.\nA: Preis 120 €, variable Kosten 70 €, 2,0 h/Stück, max. Absatz 300 Stück.\nB: Preis 80 €, variable Kosten 56 €, 0,8 h/Stück, max. Absatz 500 Stück.\nC: Preis 200 €, variable Kosten 140 €, 2,5 h/Stück, max. Absatz 250 Stück.",
    hinweis: "Erst relative Deckungsbeiträge, dann Kapazität von oben auffüllen.",
    antwort: "Stückdeckungsbeiträge: A 50 €, B 24 €, C 60 €.\nRelative Deckungsbeiträge je Maschinenstunde: A 25 €/h, B 30 €/h, C 24 €/h. Rangfolge: **B, A, C**.\nB voll: 500 · 0,8 = 400 h, DB 12.000 €. Rest 800 h.\nA voll: 300 · 2,0 = 600 h, DB 15.000 €. Rest 200 h.\nC mit 200 h ÷ 2,5 = 80 Stück, DB 4.800 €.\nGesamt-DB = 31.800 €, abzüglich 45.000 € Fixkosten = **−13.200 € Verlust**.\nDas Programm ist optimal, das Ergebnis trotzdem negativ. Die richtige Schlussfolgerung ist daher nicht „anderes Programm“, sondern: Kapazität erweitern (jede zusätzliche Stunde bringt 24 € über C), Fixkosten senken oder Preise anheben. Die Engpassstunde ist mindestens 24 € wert – das ist zugleich die Obergrenze für die Kosten einer Kapazitätserweiterung.",
    check: [
      "Relative statt absolute Deckungsbeiträge verwendet",
      "Rangfolge B vor A vor C korrekt bestimmt",
      "Absatzhöchstmengen als Nebenbedingung beachtet",
      "Restkapazität sauber auf C verteilt (80 Stück)",
      "Gesamtergebnis −13.200 € ermittelt",
      "Erkannt, dass das Ergebnis ein Fixkosten- bzw. Kapazitätsproblem ist, kein Programmproblem",
      "Wert der Engpassstunde (24 €) als Entscheidungsgröße für die Erweiterung genannt"
    ],
    merksatz: "Der relative Deckungsbeitrag der letzten produzierten Einheit ist der Preis, den eine Kapazitätserweiterung höchstens kosten darf." },

  { id: "m04-19", thema: "Eigenfertigung oder Fremdbezug", typ: "case",
    frage: "Wie entscheidest du, und ab welcher Menge kippt die Empfehlung?",
    szenario: "Ein Bauteil wird bisher selbst gefertigt: variable Kosten 14 €/Stück, zurechenbare Fixkosten 90.000 €/Jahr, davon 60.000 € bei Einstellung der Fertigung abbaubar (Leasing einer Maschine, Leiharbeit). Ein Zulieferer bietet 19 €/Stück an. Der Jahresbedarf beträgt 11.000 Stück. Die frei werdende Fläche könnte für 8.000 €/Jahr untervermietet werden.",
    hinweis: "Nur abbaubare Fixkosten sind relevant – und die Untervermietung ist ein Vorteil des Fremdbezugs.",
    antwort: "Eigenfertigung relevant: 11.000 · 14 + 60.000 = **214.000 €**.\nFremdbezug relevant: 11.000 · 19 − 8.000 Mietertrag = **201.000 €**.\nFremdbezug ist um 13.000 € günstiger.\nKritische Menge ohne Mietertrag: 60.000 ÷ (19 − 14) = 12.000 Stück – oberhalb davon wäre Eigenfertigung günstiger. Mit Mietertrag: 68.000 ÷ 5 = 13.600 Stück. Bei 11.000 Stück liegt der Bedarf darunter, die Empfehlung ist stabil, aber ein Nachfrageanstieg um gut 20 % würde sie umkehren.\nQualitativ gegenzuprüfen: Know-how-Verlust, Abhängigkeit von einem einzigen Lieferanten, Qualitäts- und Lieferrisiko, Reversibilität (die abgebaute Kapazität kommt nicht kostenlos zurück).",
    check: [
      "Nur abbaubare Fixkosten (60.000 €) angesetzt",
      "Nicht abbaubare 30.000 € korrekt ausgeklammert",
      "Untervermietung als Opportunitätsertrag des Fremdbezugs berücksichtigt",
      "Beide Alternativen korrekt beziffert (214.000 € vs. 201.000 €)",
      "Kritische Menge berechnet und zur Bedarfsmenge in Beziehung gesetzt",
      "Mindestens zwei qualitative Faktoren ergänzt"
    ],
    falle: "Wären alle 90.000 € Fixkosten angesetzt worden, käme die Eigenfertigung auf 244.000 € – der Fremdbezug erschiene weit vorteilhafter, als er ist. Die nicht abbaubaren 30.000 € fallen danach trotzdem an." },

  { id: "m04-20", thema: "Kostenrechnungssysteme", typ: "begriff",
    frage: "Wie ordnest du Kostenrechnungssysteme nach Zeitbezug und Umfang ein?",
    antwort: "Nach **Zeitbezug**: Istkostenrechnung (vergangene Werte, keine Kontrollfunktion), Normalkostenrechnung (Durchschnittswerte der Vergangenheit), Plankostenrechnung (vorgegebene Werte, ermöglicht Abweichungsanalyse).\nNach **Umfang**: Vollkostenrechnung (alle Kosten werden auf Kostenträger verrechnet) und Teilkostenrechnung (nur variable bzw. Einzelkosten – Grundlage jeder kurzfristigen Entscheidung).",
    merksatz: "Plan + Teilkosten = Steuerung. Ist + Vollkosten = Dokumentation." }

]});
