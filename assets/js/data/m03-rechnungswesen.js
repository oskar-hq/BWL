BWL.addModul({
  id: "m03",
  name: "Externes Rechnungswesen",
  beschreibung: "Bilanz, GuV und Cashflow lesen – und verstehen, warum Gewinn und Geld zwei verschiedene Dinge sind.",
  karten: [

  { id: "m03-01", thema: "Bilanzaufbau", typ: "denkmuster",
    frage: "Was zeigen Aktiv- und Passivseite der Bilanz jeweils, und warum sind beide zwangsläufig gleich hoch?",
    antwort: "Die **Aktivseite** zeigt die Mittelverwendung: Wofür ist das Kapital gebunden (Anlage- und Umlaufvermögen)? Die **Passivseite** zeigt die Mittelherkunft: Wem gehört das Kapital bzw. wer hat es zur Verfügung gestellt (Eigen- und Fremdkapital)?\nBeide Seiten betrachten dasselbe Vermögen aus zwei Blickwinkeln – daher ist die Summengleichheit keine Erkenntnis, sondern eine Definition.",
    schritte: [
      "Aktiva nach Liquidierbarkeit sortiert lesen: oben langfristig gebunden, unten schnell verfügbar.",
      "Passiva nach Fristigkeit lesen: oben unbefristet (Eigenkapital), unten kurzfristig.",
      "Vertikal auf Kapitalstruktur prüfen, horizontal auf Fristenkongruenz."
    ],
    merksatz: "Links steht, was das Geld tut. Rechts steht, wem es gehört." },

  { id: "m03-02", thema: "Vier Begriffspaare", typ: "denkmuster",
    frage: "Grenze Einzahlung/Auszahlung, Einnahme/Ausgabe, Ertrag/Aufwand und Leistung/Kosten voneinander ab.",
    antwort: "**Auszahlung/Einzahlung**: tatsächlicher Geldfluss (Zahlungsmittelbestand). **Ausgabe/Einnahme**: Geldvermögen inklusive Forderungen und Verbindlichkeiten. **Aufwand/Ertrag**: bewerteter Güterverbrauch bzw. -entstehung laut GuV, also das Gesamtvermögen einer Periode. **Kosten/Leistung**: betriebszweckbezogener, bewerteter Güterverbrauch der Kostenrechnung.",
    schritte: [
      "Frage 1: Fließt Geld? → Zahlungsebene.",
      "Frage 2: Ist es periodengerecht zugeordnet? → GuV-Ebene.",
      "Frage 3: Gehört es zum eigentlichen Betriebszweck und ist es normalisiert? → Kostenebene."
    ],
    beispiel: "Kauf einer Maschine für 120.000 € bar: sofort Auszahlung 120.000 €, aber Aufwand nur 20.000 € pro Jahr über die Abschreibung. Kalkulatorische Abschreibung auf Wiederbeschaffungswert kann in der Kostenrechnung 24.000 € betragen.",
    falle: "Neutraler Aufwand (betriebsfremd, periodenfremd, außerordentlich) ist Aufwand, aber keine Kosten. Kalkulatorische Kosten (Unternehmerlohn, Eigenkapitalzinsen, Wagnisse) sind Kosten, aber kein Aufwand.",
    merksatz: "Geld → Periode → Betriebszweck. Drei Filter, drei Ebenen." },

  { id: "m03-03", thema: "Bilanzveränderungen", typ: "denkmuster",
    frage: "Welche vier Grundtypen von Bilanzveränderungen gibt es?",
    antwort: "**Aktivtausch** (Position auf der Aktivseite gegen andere, Summe konstant), **Passivtausch** (analog rechts), **Bilanzverlängerung** (Aktiv- und Passivposten steigen), **Bilanzverkürzung** (beide sinken).",
    beispiel: "Barkauf von Rohstoffen = Aktivtausch. Umwandlung einer Verbindlichkeit in ein Darlehen = Passivtausch. Kauf auf Ziel = Verlängerung. Tilgung aus dem Bankkonto = Verkürzung.",
    falle: "Die Bilanzsumme allein sagt nichts über Erfolg. Eine Bilanzverlängerung durch Kreditaufnahme lässt das Unternehmen größer aussehen und verschlechtert zugleich die Eigenkapitalquote." },

  { id: "m03-04", thema: "GuV-Verfahren", typ: "begriff",
    frage: "Worin unterscheiden sich Gesamtkostenverfahren und Umsatzkostenverfahren?",
    antwort: "Das **Gesamtkostenverfahren** stellt die gesamte Periodenleistung – Umsatz plus Bestandsveränderungen an fertigen und unfertigen Erzeugnissen plus aktivierte Eigenleistungen – den nach **Kostenarten** gegliederten Aufwendungen gegenüber (Material, Personal, Abschreibungen).\nDas **Umsatzkostenverfahren** stellt nur den Umsatz den Herstellungskosten der **abgesetzten** Leistungen gegenüber und gliedert die übrigen Aufwendungen nach **Funktionsbereichen** (Vertrieb, Verwaltung, F&E).",
    schritte: [
      "Erkennungszeichen Gesamtkostenverfahren: Position „Bestandsveränderungen“ vorhanden.",
      "Erkennungszeichen Umsatzkostenverfahren: Positionen heißen Vertriebskosten, Verwaltungskosten.",
      "Der Jahresüberschuss ist bei beiden identisch – nur die Aufgliederung unterscheidet sich."
    ],
    falle: "Beim Gesamtkostenverfahren muss der Bestandsaufbau als Ertrag erfasst werden, sonst stünde Aufwand für Produkte in der Rechnung, die noch nicht verkauft sind." },

  { id: "m03-05", thema: "Abschreibung", typ: "formel",
    frage: "Welche Abschreibungsverfahren gibt es und wozu dient die planmäßige Abschreibung überhaupt?",
    antwort: "Sie verteilt die Anschaffungs- oder Herstellungskosten eines abnutzbaren Anlageguts periodengerecht auf die Nutzungsdauer – der Werteverzehr soll dort als Aufwand erscheinen, wo der Nutzen entsteht.",
    formel: [
      "linear:      a = (AK − Restwert) ÷ n",
      "geometrisch-degressiv:  a_t = Restbuchwert_{t−1} · p",
      "leistungsbezogen:  a_t = (AK − RW) · (Leistung_t ÷ Gesamtleistung)"
    ],
    beispiel: "AK 100.000 €, n = 5 Jahre, kein Restwert. Linear: 20.000 €/Jahr. Degressiv mit 30 %: 30.000 / 21.000 / 14.700 / … – Wechsel zur linearen Methode, sobald diese den höheren Betrag liefert.",
    falle: "Abschreibung ist Aufwand ohne Auszahlung. Deshalb wird sie in der indirekten Cashflow-Rechnung wieder hinzugerechnet – sie ist aber keine Finanzierungsquelle aus dem Nichts, sondern nur der über den Umsatz zurückfließende Kapitaleinsatz." },

  { id: "m03-06", thema: "Rückstellungen", typ: "begriff",
    frage: "Wie unterscheiden sich Rückstellung, Verbindlichkeit und Rechnungsabgrenzungsposten?",
    antwort: "**Verbindlichkeit**: Grund, Höhe und Fälligkeit stehen fest. **Rückstellung**: Verpflichtung gegenüber Dritten ist dem Grunde nach wahrscheinlich, aber in Höhe und/oder Zeitpunkt ungewiss (Pensionen, Gewährleistung, Prozessrisiken, ausstehende Rechnungen). **Rechnungsabgrenzungsposten**: Zahlung ist bereits erfolgt, der Aufwand oder Ertrag gehört aber in die Folgeperiode – Höhe und Zeitpunkt sind sicher.",
    schritte: [
      "Gibt es einen Außenverpflichtungsgrund? Nein → keine Rückstellung.",
      "Sind Höhe und Zeitpunkt sicher? Ja → Verbindlichkeit.",
      "Ist die Zahlung schon geflossen und betrifft die Folgeperiode? → Abgrenzungsposten."
    ],
    falle: "Aufwandsrückstellungen für rein innerbetriebliche Vorhaben sind handelsrechtlich weitgehend unzulässig – ohne Außenverpflichtung keine Rückstellung." },

  { id: "m03-07", thema: "Grundsätze ordnungsmäßiger Buchführung", typ: "denkmuster",
    frage: "Was besagen Realisationsprinzip, Imparitätsprinzip und Vorsichtsprinzip – und in welchem Verhältnis stehen sie?",
    antwort: "Das **Vorsichtsprinzip** ist das Dach: Im Zweifel wird das Vermögen niedriger und die Schulden höher angesetzt. Daraus folgen zwei ungleich behandelte Regeln:\n**Realisationsprinzip** – Gewinne dürfen erst ausgewiesen werden, wenn sie durch Umsatz realisiert sind.\n**Imparitätsprinzip** – vorhersehbare Verluste sind bereits zu berücksichtigen, sobald sie drohen.\n„Imparitätisch“ heißt genau das: ungleiche Behandlung von Gewinnen und Verlusten.",
    beispiel: "Ein Auftrag über zwei Jahre wird handelsrechtlich erst bei Abnahme als Ertrag erfasst. Zeichnet sich hingegen ein Verlust ab, ist sofort eine Drohverlustrückstellung zu bilden.",
    falle: "Das Vorsichtsprinzip schützt Gläubiger, verzerrt aber die Periodenabgrenzung. Genau hier setzen die IFRS an, die stärker auf entscheidungsnützliche Information für Investoren zielen." },

  { id: "m03-08", thema: "Bewertung", typ: "denkmuster",
    frage: "Was besagt das Niederstwertprinzip und wie unterscheidet sich streng von gemildert?",
    antwort: "Aktiva werden mit dem niedrigeren der beiden Werte angesetzt: fortgeführte Anschaffungskosten oder beizulegender Wert am Stichtag.\n**Streng** gilt für das Umlaufvermögen: Jede Wertminderung ist zwingend zu erfassen, unabhängig von ihrer Dauer.\n**Gemildert** gilt für das Anlagevermögen: Abgeschrieben wird nur bei **voraussichtlich dauernder** Wertminderung.",
    formel: "Wertansatz Umlaufvermögen = min(AK/HK; Börsen- oder Marktpreis am Stichtag)",
    falle: "Für Verbindlichkeiten gilt spiegelbildlich das Höchstwertprinzip – hier wird der höhere Wert angesetzt. Wer das Prinzip nur für Aktiva lernt, scheitert an der Fremdwährungsverbindlichkeit." },

  { id: "m03-09", thema: "Anschaffungskosten", typ: "formel",
    frage: "Wie ermittelst du die Anschaffungskosten eines Vermögensgegenstands?",
    antwort: "Anschaffungspreis zuzüglich Anschaffungsnebenkosten und nachträglicher Anschaffungskosten, abzüglich Anschaffungspreisminderungen. Nicht einbezogen werden Finanzierungskosten und die abziehbare Vorsteuer.",
    formel: [
      "Anschaffungspreis (netto)",
      "− Rabatte, Boni, Skonti",
      "+ Anschaffungsnebenkosten (Fracht, Zoll, Montage, Notar, Grunderwerbsteuer)",
      "+ nachträgliche Anschaffungskosten",
      "= Anschaffungskosten"
    ],
    beispiel: "Maschine 50.000 € netto, 3 % Skonto, Fracht 1.200 €, Fundament 4.000 €, Kreditzinsen 900 €. AK = 50.000 − 1.500 + 1.200 + 4.000 = 53.700 €. Die Zinsen bleiben draußen und sind sofort Aufwand.",
    falle: "Die Kosten der Betriebsbereitschaft gehören dazu (Montage, Probelauf), laufende Betriebskosten nicht." },

  { id: "m03-10", thema: "Cashflow", typ: "formel",
    frage: "Wie ermittelst du den operativen Cashflow indirekt?",
    antwort: "Ausgehend vom Jahresergebnis werden alle nicht zahlungswirksamen Aufwendungen und Erträge sowie die Veränderungen des Working Capital korrigiert.",
    formel: [
      "Jahresüberschuss",
      "+ Abschreibungen  − Zuschreibungen",
      "+ Zunahme  − Abnahme langfristiger Rückstellungen",
      "− Zunahme  + Abnahme von Vorräten und Forderungen",
      "+ Zunahme  − Abnahme von Verbindlichkeiten aus L+L",
      "± Ergebnis aus Anlagenabgängen (gegenläufig)",
      "= Cashflow aus laufender Geschäftstätigkeit"
    ],
    schritte: [
      "Vorzeichenregel merken: Eine Zunahme auf der Aktivseite bindet Geld → Abzug.",
      "Eine Zunahme auf der Passivseite setzt Geld frei → Zurechnung.",
      "Gewinne aus Anlagenverkäufen herausrechnen – sie gehören in den Investitionsbereich."
    ],
    falle: "Ein hoher operativer Cashflow bei stagnierendem Gewinn kann schlicht daher kommen, dass Lieferantenrechnungen nicht bezahlt wurden. Cashflow-Qualität immer gegen die Working-Capital-Veränderung prüfen." },

  { id: "m03-11", thema: "Cashflow-Rechnung", typ: "begriff",
    frage: "In welche drei Bereiche gliedert sich die Kapitalflussrechnung, und was verrät die Kombination der Vorzeichen?",
    antwort: "**Operativ** (laufende Geschäftstätigkeit), **Investition** (Anlagenkäufe und -verkäufe), **Finanzierung** (Eigen- und Fremdkapitalzuflüsse, Tilgungen, Ausschüttungen).\nMuster: operativ positiv, investiv negativ, finanziell negativ = gesundes, wachsendes Unternehmen, das aus eigener Kraft investiert und Schulden tilgt. Operativ negativ, finanziell stark positiv = das Geschäft trägt sich nicht selbst und wird über Kapitalzufuhr am Leben gehalten.",
    merksatz: "Die drei Vorzeichen erzählen die Geschichte des Jahres in drei Zeichen." },

  { id: "m03-12", thema: "Stille Reserven", typ: "denkmuster",
    frage: "Wie entstehen stille Reserven und warum interessieren sie den Bilanzanalysten?",
    antwort: "Sie entstehen, wenn Aktiva unter ihrem tatsächlichen Wert (Unterbewertung) oder Passiva über ihrem tatsächlichen Wert (Überbewertung) angesetzt sind – durch Anschaffungskostenprinzip, hohe Abschreibungen, vorsichtige Rückstellungsbemessung oder Ansatzverbote (etwa für selbst geschaffene Marken).\nSie bedeuten: Das ausgewiesene Eigenkapital unterschätzt die Substanz. Ihre Auflösung erzeugt Gewinn, ohne dass operativ etwas passiert wäre.",
    beispiel: "Ein 1985 gekauftes Grundstück steht mit 200.000 € in der Bilanz, ist heute 3 Mio. € wert. Wird es verkauft, entsteht ein außerordentlicher Ertrag von 2,8 Mio. €.",
    falle: "Ein plötzlich starkes Jahresergebnis immer auf die Ergebnisquelle prüfen: operativ verdient oder aus Reserven gehoben? Nur Ersteres ist nachhaltig." },

  { id: "m03-13", thema: "HGB und IFRS", typ: "begriff",
    frage: "Welche unterschiedlichen Zwecke verfolgen HGB- und IFRS-Abschlüsse?",
    antwort: "Das **HGB** ist gläubigerschutzorientiert: Vorsichtsprinzip, Ausschüttungsbemessung, enge Verbindung zur Steuerbilanz. Die **IFRS** sind investororientiert: möglichst entscheidungsnützliche Information (decision usefulness), stärkere Zeitwertbewertung, umfangreichere Angabepflichten, keine Ausschüttungsbemessungsfunktion.",
    beispiel: "Selbst geschaffene immaterielle Vermögenswerte der Entwicklungsphase dürfen nach IFRS aktiviert werden, nach HGB besteht für Marken, Drucktitel und Kundenlisten ein Ansatzverbot.",
    merksatz: "HGB fragt: Was darf ausgeschüttet werden? IFRS fragt: Was muss der Investor wissen?" },

  { id: "m03-14", thema: "Bilanzanalyse", typ: "denkmuster",
    frage: "In welcher Reihenfolge liest du einen Jahresabschluss, wenn du wenig Zeit hast?",
    antwort: "Nicht bei der Bilanzsumme anfangen, sondern bei der Frage, woher das Geld kommt und wohin es geht.",
    schritte: [
      "Umsatz- und Ergebnisentwicklung über drei Jahre – Richtung wichtiger als Niveau.",
      "Operativer Cashflow gegen Jahresüberschuss: Deckt sich der Gewinn mit dem Geldzufluss?",
      "Working Capital: Wachsen Vorräte und Forderungen schneller als der Umsatz?",
      "Kapitalstruktur: Eigenkapitalquote und Fristenkongruenz.",
      "Anhang: außerordentliche Posten, Haftungsverhältnisse, Bewertungsänderungen.",
      "Erst dann Kennzahlen bilden – sie sind die Zusammenfassung, nicht der Einstieg."
    ],
    merksatz: "Erst die Geschichte, dann die Kennzahl." },

  { id: "m03-15", thema: "Gewinn und Liquidität", typ: "case",
    frage: "Wie erklärst du dem Geschäftsführer diesen Widerspruch, und was schlägst du vor?",
    szenario: "Ein Handelsunternehmen weist für das Jahr einen Jahresüberschuss von 480.000 € aus. Gleichzeitig ist das Bankkonto von +150.000 € auf −390.000 € gerutscht. Der Umsatz stieg um 40 %, die Vorräte von 900.000 € auf 1,7 Mio. €, die Forderungen von 600.000 € auf 1,25 Mio. €, die Lieferantenverbindlichkeiten blieben nahezu unverändert.",
    hinweis: "Rechne den operativen Cashflow indirekt aus den genannten Veränderungen.",
    antwort: "Das Unternehmen wächst sich in die Illiquidität hinein. Der Gewinn ist echt, steckt aber im Working Capital.\nÜberschlag: 480.000 − 800.000 (Vorratsaufbau) − 650.000 (Forderungsaufbau) + 0 (Lieferanten) ≈ **−970.000 €** operativer Cashflow vor Abschreibungen. Genau das erklärt den Kontostand.\nMaßnahmen, nach Wirkungsgeschwindigkeit: Forderungslaufzeit senken (Mahnwesen, Skonto, Vorkasse für Neukunden), Lieferantenziele verhandeln, Lagerreichweite über ABC-Klassen begrenzen, Wachstumstempo an die Finanzierungsfähigkeit koppeln oder gezielt Working-Capital-Linie aufnehmen.",
    check: [
      "Erkannt, dass Gewinn und Zahlungsstrom verschiedene Größen sind",
      "Working-Capital-Aufbau als Ursache identifiziert",
      "Größenordnung des negativen Cashflows überschlagen",
      "Vorzeichenlogik richtig angewandt (Aktivaufbau bindet Geld)",
      "Mindestens drei konkrete Gegenmaßnahmen genannt",
      "Wachstumstempo als eigentliche Stellgröße angesprochen"
    ],
    falle: "Profitables Wachstum ist die häufigste Insolvenzursache junger Unternehmen. Jeder zusätzliche Umsatzeuro muss vorfinanziert werden.",
    merksatz: "Umsatz ist Eitelkeit, Gewinn ist Vernunft, Liquidität ist Realität." },

  { id: "m03-16", thema: "Bilanzveränderungen", typ: "case",
    frage: "Wie wirken die Vorgänge jeweils auf Bilanzsumme, Eigenkapitalquote und Jahresergebnis?",
    szenario: "Ein Unternehmen (Bilanzsumme 4 Mio. €, Eigenkapital 1,2 Mio. €) tätigt vier Vorgänge: (a) Aufnahme eines Darlehens über 500.000 €, (b) Tilgung von Lieferantenverbindlichkeiten über 200.000 € per Bank, (c) Kauf einer Maschine über 300.000 € auf Ziel, (d) Bildung einer Gewährleistungsrückstellung über 100.000 €.",
    hinweis: "Erst den Typ der Bilanzveränderung bestimmen, dann die Quote nachrechnen.",
    antwort: "(a) Bilanzverlängerung: Summe 4,5 Mio., EK-Quote fällt von 30 % auf 26,7 %, Ergebnis unverändert.\n(b) Bilanzverkürzung: Summe 3,8 Mio., EK-Quote steigt auf 31,6 %, Ergebnis unverändert.\n(c) Bilanzverlängerung: Summe 4,3 Mio., EK-Quote fällt auf 27,9 %, Ergebnis unverändert (erst die spätere Abschreibung wirkt).\n(d) Aufwandsbuchung: Ergebnis und Eigenkapital sinken um 100.000 €, Bilanzsumme bleibt bei 4 Mio., EK-Quote fällt auf 27,5 %.\nKernmuster: Nur (d) berührt die GuV. Die anderen drei sind reine Vermögensumschichtungen – trotzdem verändern sie die Kennzahlen deutlich.",
    check: [
      "Alle vier Vorgänge dem richtigen Veränderungstyp zugeordnet",
      "Erkannt, dass nur die Rückstellung erfolgswirksam ist",
      "Eigenkapitalquote jeweils korrekt neu berechnet",
      "Unterschied zwischen Bilanzwirkung und Erfolgswirkung sauber getrennt",
      "Bei (c) erkannt, dass die Ergebniswirkung erst über die Abschreibung eintritt"
    ],
    falle: "Kennzahlen lassen sich am Bilanzstichtag durch reine Umschichtungen verbessern (Window Dressing) – Tilgung kurz vor dem Stichtag, Neuaufnahme kurz danach." }

]});
