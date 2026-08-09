BWL.addModul({
  id: "m05",
  name: "Investition & Finanzierung",
  beschreibung: "Kapitalwert, Zinsfuß, Leverage: Wie man Zahlungsströme über die Zeit vergleichbar macht und Kapital sinnvoll aufstellt.",
  karten: [

  { id: "m05-01", thema: "Verfahrensüberblick", typ: "denkmuster",
    frage: "Wie ordnest du die Investitionsrechenverfahren, und wann darfst du ein statisches Verfahren verwenden?",
    antwort: "**Statische Verfahren** (Kostenvergleich, Gewinnvergleich, Rentabilitätsvergleich, Amortisation) arbeiten mit Durchschnittswerten einer Periode und ignorieren den Zeitwert des Geldes. **Dynamische Verfahren** (Kapitalwert, interner Zinsfuß, Annuität) diskontieren die gesamte Zahlungsreihe.\nStatisch ist nur vertretbar bei kurzer Laufzeit, gleichmäßigen Zahlungen und als Überschlagsrechnung.",
    schritte: [
      "Läuft die Investition über mehrere Jahre mit ungleichen Zahlungen? → dynamisch.",
      "Geht es um eine Rangfolge mehrerer Projekte? → Kapitalwert.",
      "Geht es um eine Verzinsungsaussage? → interner Zinsfuß.",
      "Unterscheiden sich die Nutzungsdauern? → Annuität."
    ],
    falle: "Die statische Amortisationsrechnung wird gern als Risikomaß verkauft. Sie ignoriert alles, was nach der Amortisation passiert – ein Projekt mit hohen Spätzahlungen wird systematisch benachteiligt." },

  { id: "m05-02", thema: "Kapitalwert", typ: "formel",
    frage: "Wie ist der Kapitalwert definiert und wie interpretierst du ihn?",
    antwort: "Der Kapitalwert ist die Summe aller auf den Zeitpunkt 0 abgezinsten Ein- und Auszahlungen einer Investition. Ist er positiv, verzinst sich das eingesetzte Kapital höher als der Kalkulationszinssatz – der Kapitalwert ist der **darüber hinausgehende Vermögenszuwachs in heutigen Euro**.",
    formel: ["C_0 = −A_0 + Σ_{t=1..n} CF_t ÷ (1+i)^t + L_n ÷ (1+i)^n"],
    schritte: [
      "Zahlungsreihe aufstellen, inklusive Anschaffungsauszahlung in t = 0 und Liquidationserlös in t = n.",
      "Kalkulationszinssatz begründen (Opportunität, WACC, Risikozuschlag).",
      "Jede Zahlung einzeln abzinsen, bei konstanten Zahlungen den Rentenbarwertfaktor nutzen.",
      "Summieren. C_0 ≥ 0 → vorteilhaft.",
      "Bei mehreren Projekten: höchster Kapitalwert gewinnt (bei gleicher Laufzeit und ohne Kapitalbeschränkung)."
    ],
    beispiel: "A_0 = 100.000 €, 5 Jahre je 28.000 €, i = 8 %. RBF(8 %, 5) = 3,9927 → C_0 = −100.000 + 111.796 = 11.796 €.",
    falle: "Der Kapitalwert unterstellt, dass alle Rückflüsse zum Kalkulationszinssatz wiederangelegt werden. Bei sehr hohen Zinssätzen ist diese Prämisse unrealistisch." },

  { id: "m05-03", thema: "Rentenbarwertfaktor", typ: "formel",
    frage: "Wann verwendest du Rentenbarwertfaktor, Wiedergewinnungsfaktor und Abzinsungsfaktor?",
    antwort: "Der **Abzinsungsfaktor** holt eine einzelne künftige Zahlung in die Gegenwart. Der **Rentenbarwertfaktor** verdichtet eine gleichbleibende Zahlungsreihe zu einem Barwert. Der **Wiedergewinnungsfaktor** (Kehrwert des RBF) verteilt einen Barwert auf gleich hohe Jahresbeträge – das ist die Annuität.",
    formel: [
      "AbF = 1 ÷ (1+i)^n",
      "RBF = ((1+i)^n − 1) ÷ (i · (1+i)^n)",
      "WGF = (i · (1+i)^n) ÷ ((1+i)^n − 1)"
    ],
    beispiel: "i = 6 %, n = 10: RBF = 7,3601. Ein Barwert von 50.000 € entspricht einer Annuität von 50.000 ÷ 7,3601 = 6.793 € pro Jahr.",
    merksatz: "RBF verdichtet, WGF verteilt." },

  { id: "m05-04", thema: "Interner Zinsfuß", typ: "formel",
    frage: "Was misst der interne Zinsfuß und welche zwei Schwächen musst du kennen?",
    antwort: "Er ist der Zinssatz, bei dem der Kapitalwert null wird – also die effektive Verzinsung des jeweils gebundenen Kapitals. Vorteilhaft ist eine Investition, wenn der interne Zinsfuß über dem Kalkulationszinssatz liegt.",
    formel: ["C_0(r) = 0", "Näherung (lineare Interpolation): r ≈ i_1 − C_0(i_1) · (i_2 − i_1) ÷ (C_0(i_2) − C_0(i_1))"],
    schritte: [
      "Zwei Zinssätze wählen, einer mit positivem, einer mit negativem Kapitalwert.",
      "Kapitalwerte berechnen.",
      "Linear interpolieren.",
      "Ergebnis prüfen, indem man den gefundenen Satz einsetzt."
    ],
    falle: "Erstens kann es bei mehrfachem Vorzeichenwechsel der Zahlungsreihe mehrere interne Zinsfüße geben. Zweitens taugt er nicht für Rangfolgen: Ein kleines Projekt mit 40 % Rendite kann weniger Vermögen schaffen als ein großes mit 12 %. Bei Auswahlentscheidungen zählt der Kapitalwert.",
    merksatz: "Kapitalwert sagt wie viel, Zinsfuß sagt wie gut." },

  { id: "m05-05", thema: "Annuitätenmethode", typ: "formel",
    frage: "Wann ist die Annuitätenmethode dem Kapitalwert überlegen?",
    antwort: "Wenn Investitionen mit **unterschiedlicher Nutzungsdauer** verglichen werden sollen und eine identische Wiederholung unterstellt werden kann. Die Annuität übersetzt den Kapitalwert in einen jährlichen Durchschnittsüberschuss und macht die Alternativen damit vergleichbar.",
    formel: ["Annuität = C_0 · WGF(i, n)"],
    beispiel: "Projekt A: C_0 = 40.000 €, n = 4 Jahre, i = 8 % → WGF = 0,30192 → Annuität 12.077 €.\nProjekt B: C_0 = 55.000 €, n = 8 Jahre → WGF = 0,17401 → Annuität 9.571 €. Trotz des kleineren Kapitalwerts ist A jährlich vorteilhafter.",
    falle: "Die Annuität ist nur bei unterstellter identischer Wiederholung ein fairer Vergleich. Ist eine Wiederholung ausgeschlossen, bleibt der Kapitalwert das richtige Kriterium." },

  { id: "m05-06", thema: "Amortisationsrechnung", typ: "formel",
    frage: "Wie berechnest du die Amortisationsdauer statisch und dynamisch?",
    antwort: "Die Amortisationsdauer ist der Zeitraum, bis die Rückflüsse die Anschaffungsauszahlung gedeckt haben. Statisch mit Durchschnittsrückflüssen, dynamisch mit kumulierten **abgezinsten** Rückflüssen.",
    formel: [
      "statisch: t = A_0 ÷ durchschnittlicher jährlicher Rückfluss",
      "dynamisch: kleinstes t mit  Σ_{τ=1..t} CF_τ ÷ (1+i)^τ ≥ A_0"
    ],
    beispiel: "A_0 = 90.000 €, Rückflüsse 30.000 €/Jahr, i = 10 %. Statisch: 3,0 Jahre. Dynamisch: nach 3 Jahren erst 74.606 €, nach 4 Jahren 95.096 € – also rund 3,8 Jahre.",
    falle: "Die Amortisationsdauer ist ein Risikomaß, kein Vorteilhaftigkeitsmaß. Als alleiniges Kriterium führt sie zu einer systematischen Kurzfristorientierung." },

  { id: "m05-07", thema: "Kalkulationszinssatz", typ: "denkmuster",
    frage: "Wie bestimmst du den Kalkulationszinssatz, und was drückt der WACC aus?",
    antwort: "Der Kalkulationszinssatz ist die Mindestverzinsung, die eine Investition erbringen muss – also die Rendite der besten Alternativverwendung bei gleichem Risiko. In der Praxis wird er als gewichteter durchschnittlicher Kapitalkostensatz gebildet.",
    formel: ["WACC = (EK ÷ GK) · r_EK + (FK ÷ GK) · r_FK · (1 − s)", "r_EK nach CAPM: r_f + β · (r_M − r_f)"],
    schritte: [
      "Eigenkapitalkosten über die Renditeerwartung der Eigentümer bestimmen.",
      "Fremdkapitalkosten als effektiven Zinssatz ansetzen, um die Steuerersparnis gekürzt (Tax Shield).",
      "Mit Marktwerten gewichten, nicht mit Buchwerten.",
      "Projektspezifisches Risiko über einen Zuschlag abbilden."
    ],
    falle: "Fremdkapital erscheint billiger als Eigenkapital – aber ein höherer Verschuldungsgrad erhöht das Risiko der Eigentümer und damit r_EK. Der WACC sinkt deshalb nicht beliebig mit der Verschuldung." },

  { id: "m05-08", thema: "Finanzierungssystematik", typ: "begriff",
    frage: "Wie ordnest du Finanzierungsformen nach Herkunft und Rechtsstellung?",
    antwort: "Zwei Dimensionen: **Herkunft** (Außenfinanzierung von außerhalb des Unternehmens, Innenfinanzierung aus dem Umsatzprozess) und **Rechtsstellung des Kapitalgebers** (Eigen- oder Fremdkapital).",
    schritte: [
      "Außen + Eigen: Beteiligungsfinanzierung, Kapitalerhöhung, Venture Capital.",
      "Außen + Fremd: Kredit, Anleihe, Lieferantenkredit, Leasing.",
      "Innen + Eigen: Selbstfinanzierung (Gewinnthesaurierung), Abschreibungs- und Rückstellungsgegenwerte, Vermögensumschichtung.",
      "Innen + Fremd: langfristige Rückstellungen (z. B. Pensionen)."
    ],
    merksatz: "Woher kommt das Geld – und wem gehört es danach?" },

  { id: "m05-09", thema: "Leverage-Effekt", typ: "formel",
    frage: "Wie wirkt der Leverage-Effekt und wo liegt seine Kehrseite?",
    antwort: "Solange die Gesamtkapitalrentabilität über dem Fremdkapitalzins liegt, steigt die Eigenkapitalrentabilität mit zunehmendem Verschuldungsgrad – der Zinsüberschuss kommt allein dem Eigenkapital zugute. Fällt die Gesamtkapitalrentabilität unter den Fremdkapitalzins, kehrt sich der Hebel um und wirkt genauso stark nach unten.",
    formel: ["r_EK = r_GK + (r_GK − i_FK) · (FK ÷ EK)"],
    beispiel: "r_GK = 12 %, i_FK = 6 %, FK/EK = 2 → r_EK = 12 + 6 · 2 = 24 %. Bricht r_GK auf 4 % ein: r_EK = 4 − 2 · 2 = 0 %.",
    falle: "Der Leverage-Effekt erhöht nicht den Erwartungswert, sondern die Streuung. Er ist keine Wertschöpfung, sondern eine Risikoumverteilung – und Fremdkapitalgeber preisen steigendes Risiko über höhere Zinsen ein.",
    merksatz: "Der Hebel wirkt in beide Richtungen, und nach unten schneller." },

  { id: "m05-10", thema: "Goldene Bilanzregel", typ: "denkmuster",
    frage: "Was fordern die goldene Finanzierungsregel und die goldene Bilanzregel?",
    antwort: "Die **goldene Finanzierungsregel** verlangt Fristenkongruenz: Die Bindungsdauer des Vermögens darf die Überlassungsdauer des Kapitals nicht übersteigen.\nDie **goldene Bilanzregel** konkretisiert das: Anlagevermögen soll durch Eigenkapital (enge Fassung) bzw. durch Eigenkapital plus langfristiges Fremdkapital (weite Fassung) gedeckt sein.",
    formel: ["Deckungsgrad A = EK ÷ AV · 100", "Deckungsgrad B = (EK + langfristiges FK) ÷ AV · 100  (soll ≥ 100 %)"],
    falle: "Ein Deckungsgrad B unter 100 % bedeutet, dass langfristig gebundenes Vermögen kurzfristig finanziert ist – bei jeder Prolongation entsteht Refinanzierungsrisiko. Genau daran scheitern Unternehmen in Kreditklemmen, nicht an fehlender Rentabilität." },

  { id: "m05-11", thema: "Leasing", typ: "denkmuster",
    frage: "Wie vergleichst du Leasing und kreditfinanzierten Kauf sachgerecht?",
    antwort: "Über den Barwert aller Zahlungen nach Steuern, nicht über den Vergleich von Rate und Abschreibung. Zu berücksichtigen sind Leasingraten, Sonderzahlungen, Restwert, steuerliche Abzugsfähigkeit, Bilanzwirkung und die Frage, wer welche Risiken trägt.",
    schritte: [
      "Zahlungsreihe Leasing aufstellen (Raten, Sonderzahlung, Rückgabe).",
      "Zahlungsreihe Kauf aufstellen (Anschaffung, Zins, Tilgung, Steuerersparnis über Abschreibung, Restwert).",
      "Beide mit demselben Zinssatz abzinsen.",
      "Barwerte vergleichen.",
      "Qualitative Faktoren ergänzen: Flexibilität, Technologierisiko, Bilanzbild, Liquiditätsschonung."
    ],
    falle: "„Leasing schont die Bilanz“ gilt handelsrechtlich beim Operating Leasing, nach IFRS 16 werden Nutzungsrechte dagegen aktiviert. Und Ratingsysteme rechnen Leasingverpflichtungen ohnehin hinzu." },

  { id: "m05-12", thema: "Working Capital", typ: "formel",
    frage: "Was ist Working Capital und warum ist seine Steuerung eine Finanzierungsquelle?",
    antwort: "Working Capital ist das im Umlaufvermögen gebundene, nicht kurzfristig fremdfinanzierte Kapital. Jede Verkürzung von Lager- und Forderungslaufzeiten sowie jede Verlängerung von Lieferantenzielen setzt gebundenes Kapital frei – ohne Kredit und ohne Gesellschafter.",
    formel: [
      "Working Capital = Umlaufvermögen − kurzfristige Verbindlichkeiten",
      "Cash Conversion Cycle = Lagerdauer + Forderungslaufzeit − Lieferantenziel"
    ],
    beispiel: "Ein Unternehmen mit 60 Mio. € Umsatz senkt die Forderungslaufzeit von 60 auf 45 Tage: freigesetzte Liquidität = 60 Mio. ÷ 365 · 15 ≈ 2,47 Mio. €.",
    merksatz: "Die billigste Finanzierungsquelle liegt im eigenen Umlaufvermögen." },

  { id: "m05-13", thema: "Factoring", typ: "begriff",
    frage: "Welche drei Funktionen erfüllt Factoring und was kostet es?",
    antwort: "**Finanzierungsfunktion** (sofortige Liquidität, meist 80–90 % der Forderung), **Delkrederefunktion** (Übernahme des Ausfallrisikos beim echten Factoring) und **Dienstleistungsfunktion** (Debitorenbuchhaltung, Mahnwesen).\nKosten setzen sich aus Zins auf den Bevorschussungsbetrag, Factoringgebühr und ggf. Delkrederegebühr zusammen.",
    schritte: [
      "Effektivkosten auf Jahresbasis umrechnen und mit dem Kontokorrentzins vergleichen.",
      "Ersparte Kosten der eigenen Debitorenbuchhaltung gegenrechnen.",
      "Wert der Risikoübernahme berücksichtigen.",
      "Kundenreaktion prüfen – offenes Factoring wird als Bonitätssignal gelesen."
    ],
    falle: "Beim unechten Factoring bleibt das Ausfallrisiko beim Verkäufer; wirtschaftlich ist das ein besicherter Kredit, keine Risikoabgabe." },

  { id: "m05-14", thema: "Liquiditätsplanung", typ: "denkmuster",
    frage: "Wie baust du eine kurzfristige Liquiditätsplanung auf?",
    antwort: "Als rollierende Zahlungsstromrechnung – nicht als GuV-Fortschreibung.",
    schritte: [
      "Anfangsbestand an Zahlungsmitteln.",
      "Erwartete Einzahlungen nach tatsächlichen Zahlungszielen, nicht nach Rechnungsdatum.",
      "Erwartete Auszahlungen inklusive Steuern, Löhnen, Tilgungen, Investitionen.",
      "Saldo je Periode und kumuliert.",
      "Gegen verfügbare Kreditlinien halten und Unterdeckungen frühzeitig sichtbar machen.",
      "Wöchentlich rollierend fortschreiben, Szenarien für Zahlungsverzug rechnen."
    ],
    falle: "Umsatzsteuer und Sozialabgaben sind durchlaufende Posten, die im Ergebnis nicht auftauchen, aber die Liquidität massiv takten." },

  { id: "m05-15", thema: "Kreditsicherheiten", typ: "begriff",
    frage: "Unterscheide Personal- und Realsicherheiten und nenne je zwei Beispiele.",
    antwort: "**Personalsicherheiten** begründen einen zusätzlichen Schuldner: Bürgschaft, Garantie, Schuldbeitrag. **Realsicherheiten** geben Zugriff auf einen Vermögensgegenstand: Grundschuld und Hypothek, Sicherungsübereignung, Pfandrecht, Eigentumsvorbehalt, Zession von Forderungen.",
    falle: "Sicherheiten senken den Verlust bei Ausfall (LGD), nicht die Ausfallwahrscheinlichkeit (PD). Eine schlechte Bonität wird durch Sicherheiten nicht gut – sie wird nur für die Bank tragbar." },

  { id: "m05-16", thema: "Kapitalwert", typ: "case",
    frage: "Ist die Investition vorteilhaft? Rechne und beurteile.",
    szenario: "Anschaffung einer Anlage für 480.000 €. Erwartete Überschüsse: Jahr 1: 120.000 €, Jahr 2: 150.000 €, Jahr 3: 180.000 €, Jahr 4: 160.000 €. Restverkaufserlös am Ende von Jahr 4: 60.000 €. Kalkulationszinssatz 9 %.",
    hinweis: "Der Restwert fällt in t = 4 an und wird mit demselben Faktor abgezinst wie der Überschuss dieses Jahres.",
    antwort: "Abzinsungsfaktoren bei 9 %: 0,9174 / 0,8417 / 0,7722 / 0,7084.\nBarwerte: 110.088 + 126.255 + 138.996 + 113.344 = 488.683 €.\nRestwert: 60.000 · 0,7084 = 42.504 €.\nC_0 = −480.000 + 488.683 + 42.504 = **+51.187 €**.\nDie Investition ist vorteilhaft: Sie verzinst das eingesetzte Kapital über 9 % hinaus und schafft zusätzlich rund 51.000 € Vermögen in heutigen Euro.\nErgänzend: Der interne Zinsfuß liegt spürbar über 9 % (bei 14 % wird der Kapitalwert etwa null). Der Sicherheitsabstand ist damit ordentlich – zu prüfen bleibt, wie belastbar die Überschüsse der Jahre 3 und 4 sind, denn sie tragen den größten Teil des Ergebnisses.",
    check: [
      "Anschaffungsauszahlung korrekt in t = 0 angesetzt",
      "Jede Zahlung einzeln mit dem richtigen Faktor abgezinst",
      "Restwert in t = 4 nicht vergessen",
      "Kapitalwert rund +51.000 € ermittelt",
      "Ergebnis richtig interpretiert (Vermögenszuwachs über die Mindestverzinsung hinaus)",
      "Sensitivität bzw. Belastbarkeit der späten Zahlungen angesprochen"
    ],
    falle: "Häufiger Fehler: den Restwert mit dem Faktor des Jahres 5 abzinsen oder ihn zur Anschaffungsauszahlung zu addieren, statt ihn am Ende zu vereinnahmen." },

  { id: "m05-17", thema: "Leverage-Effekt", typ: "case",
    frage: "Berechne beide Finanzierungsvarianten und beurteile das Risiko.",
    szenario: "Ein Projekt bindet 1.000.000 € Gesamtkapital und wirft ein Betriebsergebnis (vor Zinsen) von 100.000 € ab. Variante A: vollständige Eigenfinanzierung. Variante B: 300.000 € Eigenkapital und 700.000 € Fremdkapital zu 6 %. Prüfe zusätzlich, was in einem schlechten Jahr mit nur 40.000 € Betriebsergebnis passiert.",
    hinweis: "r_GK ist das Betriebsergebnis vor Zinsen im Verhältnis zum Gesamtkapital.",
    antwort: "Gutes Jahr: r_GK = 10 %.\nVariante A: r_EK = 10 %.\nVariante B: Zinsen 42.000 €, Gewinn 58.000 €, r_EK = 58.000 ÷ 300.000 = **19,3 %**. Über die Formel: 10 + (10 − 6) · 2,333 = 19,3 %.\nSchlechtes Jahr: r_GK = 4 %.\nVariante A: r_EK = 4 %.\nVariante B: Zinsen 42.000 €, Ergebnis −2.000 €, r_EK = **−0,7 %**. Formel: 4 + (4 − 6) · 2,333 = −0,7 %.\nBeurteilung: Der Verschuldungsgrad von 2,33 verdreifacht nahezu die Renditespanne – aus 6 Prozentpunkten Schwankung des Gesamtkapitals werden 20 Prozentpunkte beim Eigenkapital. Entscheidend ist deshalb nicht die erwartete Rendite, sondern die Frage, ob das Unternehmen einen längeren Zeitraum mit r_GK unter 6 % durchhält: Zinsen sind fix und zahlungswirksam, während Dividenden ausgesetzt werden können.",
    check: [
      "r_GK korrekt als Ergebnis vor Zinsen ÷ Gesamtkapital berechnet",
      "Eigenkapitalrentabilität beider Varianten für das gute Jahr ermittelt",
      "Umschlag des Hebels im schlechten Jahr gezeigt",
      "Verschuldungsgrad als Hebelmaß benannt",
      "Erkannt, dass der Hebel nur Risiko umverteilt und keinen Wert schafft",
      "Zinsfixierung gegenüber Dividendenflexibilität als eigentlichen Risikofaktor genannt"
    ],
    merksatz: "Fremdkapital macht gute Jahre besser und schlechte Jahre existenziell." },

  { id: "m05-18", thema: "Innenfinanzierung", typ: "begriff",
    frage: "Wie entsteht Finanzierung aus Abschreibungen (Kapitalfreisetzungseffekt), und was ist der Lohmann-Ruchti-Effekt?",
    antwort: "Abschreibungen sind Aufwand ohne Auszahlung. Werden sie über die Verkaufserlöse verdient, fließen die Beträge als liquide Mittel zu und stehen bis zur Ersatzbeschaffung zur Verfügung – das ist der **Kapitalfreisetzungseffekt**.\nWerden diese Mittel laufend in gleichartige Anlagen reinvestiert, lässt sich die Kapazität ohne zusätzliches Kapital ausweiten (**Lohmann-Ruchti-Effekt**), weil zu jedem Zeitpunkt nur ein Teil des Anlagenbestands ersetzt werden muss.",
    falle: "Der Effekt setzt voraus, dass die Abschreibungen über den Markt tatsächlich verdient werden und dass die zusätzlichen Kapazitäten auch ausgelastet werden können. Sonst finanziert man Leerkapazität." }

]});
