BWL.addModul({
  id: "m01",
  name: "Grundlagen & konstitutive Entscheidungen",
  beschreibung: "Ökonomisches Prinzip, Ziele, Rechtsform, Standort – die Weichenstellungen, die man später nur teuer korrigiert.",
  karten: [

  { id: "m01-01", thema: "Ökonomisches Prinzip", typ: "begriff",
    frage: "Welche drei Ausprägungen hat das ökonomische Prinzip – und was ist die Bedingung dafür, dass eine davon überhaupt sinnvoll ist?",
    antwort: "Minimalprinzip (gegebener Output mit minimalem Input), Maximalprinzip (gegebener Input, maximaler Output) und Extremumprinzip (bestmögliches Verhältnis von Input zu Output).",
    schritte: [
      "Prüfe: Welche Größe ist **fixiert**? Genau die ist der Ausgangspunkt.",
      "Die andere Größe wird optimiert.",
      "Ist keine Größe fixiert, bleibt nur das Extremumprinzip – und das ist ohne weitere Zielfunktion unbestimmt."
    ],
    falle: "„Mit minimalem Aufwand maximalen Ertrag“ ist kein ökonomisches Prinzip, sondern ein leeres Versprechen: Zwei Größen lassen sich nicht gleichzeitig optimieren, eine muss vorgegeben sein.",
    merksatz: "Erst fragen, was feststeht – dann optimieren." },

  { id: "m01-02", thema: "Produktionsfaktoren", typ: "begriff",
    frage: "Wie gliedert Gutenberg die betrieblichen Produktionsfaktoren?",
    antwort: "In drei **Elementarfaktoren** – objektbezogene menschliche Arbeit, Betriebsmittel und Werkstoffe – sowie den **dispositiven Faktor** (Geschäfts- und Betriebsleitung, Planung, Organisation, Kontrolle).",
    beispiel: "Fließbandarbeit = Elementarfaktor Arbeit. Die Entscheidung, welches Produkt überhaupt auf das Band kommt = dispositiver Faktor.",
    falle: "Kapital und Boden sind die volkswirtschaftlichen Faktoren. In der BWL steht stattdessen der dispositive Faktor im Zentrum – er ist der einzige, der die anderen kombiniert." },

  { id: "m01-03", thema: "Sach- und Formalziele", typ: "denkmuster",
    frage: "Was unterscheidet Sachziele von Formalzielen – und warum ist die Trennung für die Argumentation wichtig?",
    antwort: "**Sachziele** beschreiben das konkrete Leistungsprogramm (was, wie viel, in welcher Qualität, wo, wann). **Formalziele** sind die übergeordneten Erfolgsziele, an denen der Sachzielvollzug gemessen wird: Produktivität, Wirtschaftlichkeit, Rentabilität, Liquidität.",
    schritte: [
      "Sachziel = die Handlung („Wir bauen ein zweites Werk“).",
      "Formalziel = der Maßstab („… weil die Umsatzrendite steigen soll“).",
      "Jede Maßnahme sauber gegen ein Formalziel prüfen – sonst begründest du Aktivität statt Erfolg."
    ],
    falle: "Sachziele klingen in Klausuren nach einer Antwort, sind aber keine Begründung. „Marktanteil erhöhen“ ist ohne Bezug zu Rentabilität oder Liquidität kein ökonomisches Argument." },

  { id: "m01-04", thema: "Zielbeziehungen", typ: "denkmuster",
    frage: "Welche drei Beziehungen können zwischen zwei Unternehmenszielen bestehen, und wie gehst du mit der problematischsten um?",
    antwort: "**Komplementär** (ein Ziel fördert das andere), **konkurrierend** (Zielkonflikt) und **indifferent** (kein Zusammenhang). Bei Zielkonflikten braucht es eine Entscheidungsregel.",
    schritte: [
      "Konflikt benennen statt wegdiskutieren.",
      "Ein Ziel zur **Hauptbedingung** machen, das andere als **Nebenbedingung** mit Mindestniveau fixieren.",
      "Oder gewichten und in eine Kennzahl zusammenführen.",
      "Ergebnis auf Sensitivität prüfen: Kippt die Entscheidung bei kleiner Gewichtsänderung?"
    ],
    beispiel: "Lieferbereitschaft hoch halten und Lagerkosten senken sind konkurrierend. Lösung: Servicegrad auf 97 % als Nebenbedingung fixieren, dann Kosten minimieren.",
    merksatz: "Zielkonflikte löst man nicht durch Formulierungskunst, sondern durch eine Nebenbedingung." },

  { id: "m01-05", thema: "Magisches Dreieck", typ: "denkmuster",
    frage: "Warum stehen Rentabilität, Liquidität und Sicherheit in einem Spannungsverhältnis?",
    antwort: "Rentable Mittelverwendung bindet Kapital langfristig und senkt damit die Liquidität. Hohe Liquiditätsreserven verdienen kaum etwas und drücken die Rentabilität. Sicherheit kostet Rendite (Diversifikation, Eigenkapitalpuffer, Absicherungsgeschäfte).",
    schritte: [
      "Bei jeder Finanzentscheidung alle drei Ecken abfragen.",
      "Priorität klären: Liquidität ist **kurzfristig** immer die harte Nebenbedingung – Illiquidität beendet das Spiel sofort, mangelnde Rentabilität erst langfristig.",
      "Erst danach zwischen Rendite und Sicherheit abwägen."
    ],
    falle: "Ein Unternehmen kann hochprofitabel sein und trotzdem insolvent gehen. Gewinn ist eine Periodenrechnung, Liquidität ein Zeitpunktproblem.",
    merksatz: "Rentabilität ist das Ziel, Liquidität die Existenzbedingung." },

  { id: "m01-06", thema: "Rechtsformwahl", typ: "denkmuster",
    frage: "Nach welchen Kriterien wird eine Rechtsform ausgewählt?",
    antwort: "Haftung, Kapitalaufbringung und -zugang, Leitungsbefugnis, Gewinn- und Verlustbeteiligung, Steuerbelastung, Publizitäts- und Prüfungspflichten, Mitbestimmung, Gründungsaufwand und Rechtsformkosten sowie Nachfolge- und Übertragbarkeitsfragen.",
    schritte: [
      "Haftungsbedarf klären: Wie groß ist das operative Risiko im Verhältnis zum Privatvermögen?",
      "Kapitalbedarf und Investorenkreis prüfen – braucht es fungible Anteile?",
      "Steuerbelastung im Vergleich rechnen (Transparenz- vs. Trennungsprinzip).",
      "Aufwand und laufende Kosten gegen den Nutzen stellen.",
      "Nachfolge und Exit mitdenken."
    ],
    merksatz: "Haftung, Kapital, Steuern, Leitung, Aufwand – in dieser Reihenfolge." },

  { id: "m01-07", thema: "Personen- vs. Kapitalgesellschaft", typ: "begriff",
    frage: "Worin unterscheiden sich Personen- und Kapitalgesellschaften in Haftung, Besteuerung und Leitung grundsätzlich?",
    antwort: "**Personengesellschaft**: mindestens ein Gesellschafter haftet unbeschränkt und persönlich; Selbstorganschaft (Gesellschafter führen); Transparenzprinzip – der Gewinn wird direkt bei den Gesellschaftern besteuert (Einkommensteuer), die Gesellschaft zahlt Gewerbesteuer.\n**Kapitalgesellschaft**: eigene juristische Person, Haftung auf das Gesellschaftsvermögen beschränkt; Fremdorganschaft möglich; Trennungsprinzip – Körperschaft- plus Gewerbesteuer auf Ebene der Gesellschaft, Kapitalertragsteuer bei Ausschüttung.",
    falle: "Die Haftungsbeschränkung ist in der Praxis oft weniger wert als gedacht: Banken verlangen von kleinen GmbHs regelmäßig persönliche Bürgschaften der Gesellschafter." },

  { id: "m01-08", thema: "GmbH & Co. KG", typ: "begriff",
    frage: "Welches Konstruktionsproblem löst die GmbH & Co. KG?",
    antwort: "Sie verbindet die Haftungsbeschränkung der Kapitalgesellschaft mit der Struktur der Personengesellschaft: Komplementärin (Vollhafterin) ist eine GmbH, sodass faktisch keine natürliche Person unbeschränkt haftet, während die Besteuerung dem Transparenzprinzip folgt und die Kommanditisten flexibel beteiligt werden können.",
    falle: "Der Preis ist doppelter Verwaltungsaufwand: zwei Gesellschaften, zwei Jahresabschlüsse, zwei Registerakten." },

  { id: "m01-09", thema: "Produktivität, Wirtschaftlichkeit, Rentabilität", typ: "formel",
    frage: "Wie grenzt du Produktivität, Wirtschaftlichkeit und Rentabilität voneinander ab?",
    antwort: "Produktivität ist ein **Mengenverhältnis**, Wirtschaftlichkeit ein **Wertverhältnis**, Rentabilität ein **Erfolg-zu-Kapital-Verhältnis**.",
    formel: [
      "Produktivität = Ausbringungsmenge ÷ Einsatzmenge",
      "Wirtschaftlichkeit = Ertrag ÷ Aufwand   (oder: Soll-Kosten ÷ Ist-Kosten)",
      "Rentabilität = Gewinn ÷ eingesetztes Kapital"
    ],
    beispiel: "Eine Maschine produziert 20 statt 18 Stück je Stunde: Produktivität steigt. Kostet sie dabei überproportional mehr Energie, kann die Wirtschaftlichkeit trotzdem sinken.",
    falle: "Produktivitätssteigerung ist kein Selbstzweck – sie sagt nichts über Preise und Kosten und damit nichts über den Erfolg." },

  { id: "m01-10", thema: "Standortwahl", typ: "denkmuster",
    frage: "Wie strukturierst du eine Standortentscheidung?",
    antwort: "Über die Standortfaktoren entlang der Wertkette: beschaffungsorientiert (Material, Arbeitskräfte, Energie), fertigungsorientiert (Grundstück, Infrastruktur, Umweltauflagen), absatzorientiert (Kundennähe, Kaufkraft, Wettbewerb) und staatlich (Steuern, Subventionen, Regulierung, Rechtssicherheit).",
    schritte: [
      "K.-o.-Kriterien zuerst prüfen – Standorte, die diese verletzen, fliegen sofort raus.",
      "Die verbleibenden Faktoren in quantifizierbare (Kosten, Steuern) und qualitative (Rechtssicherheit, Fachkräfteangebot) trennen.",
      "Quantifizierbares in einer Vollkostenrechnung je Standort zusammenführen.",
      "Qualitatives über eine Nutzwertanalyse mit gewichteten Punkten ergänzen.",
      "Ergebnis gegen die Unumkehrbarkeit prüfen: Standortentscheidungen sind langfristig gebunden."
    ],
    merksatz: "Erst ausschließen, dann rechnen, dann bewerten." },

  { id: "m01-11", thema: "Stakeholder", typ: "denkmuster",
    frage: "Was unterscheidet den Shareholder- vom Stakeholder-Ansatz, und wie verbindet man beide praktisch?",
    antwort: "Der Shareholder-Ansatz macht die Steigerung des Eigentümerwerts zum Oberziel; der Stakeholder-Ansatz betrachtet alle Anspruchsgruppen (Kunden, Mitarbeitende, Lieferanten, Fremdkapitalgeber, Staat, Öffentlichkeit) als zu berücksichtigende Interessen.\nPraktisch löst man den Konflikt über Zeithorizonte: Ansprüche wichtiger Stakeholder sind langfristig Nebenbedingungen der Wertsteigerung – wer sie verletzt, verliert Mitarbeitende, Kunden oder die gesellschaftliche Lizenz zum Betrieb.",
    schritte: [
      "Anspruchsgruppen auflisten.",
      "Nach Macht und Betroffenheit einordnen.",
      "Hohe Macht und hohe Betroffenheit = aktiv managen, Rest beobachten."
    ] },

  { id: "m01-12", thema: "Betrieb, Unternehmen, Firma", typ: "begriff",
    frage: "Was bezeichnen Betrieb, Unternehmen und Firma jeweils genau?",
    antwort: "**Betrieb**: die technisch-organisatorische Einheit, in der Produktionsfaktoren zur Leistungserstellung kombiniert werden. **Unternehmen**: die rechtlich-finanzielle Einheit, Träger von Rechten und Pflichten, marktwirtschaftlich autonom und gewinnorientiert. **Firma**: nur der Name, unter dem ein Kaufmann seine Geschäfte betreibt und unterschreibt (§ 17 HGB).",
    falle: "„Firma“ im Alltagssinn als Synonym für Unternehmen ist in der Klausur ein Punktabzug – die Firma ist ausschließlich der Name." },

  { id: "m01-13", thema: "Wertschöpfung", typ: "formel",
    frage: "Was misst die Wertschöpfung und wie wird sie berechnet?",
    antwort: "Sie misst den vom Unternehmen selbst geschaffenen Wertzuwachs – also die Leistung abzüglich aller von außen bezogenen Vorleistungen. Sie entspricht genau der Summe, die an die Beteiligten verteilt werden kann.",
    formel: [
      "Entstehungsrechnung: Wertschöpfung = Gesamtleistung − Vorleistungen − Abschreibungen",
      "Verteilungsrechnung: Wertschöpfung = Löhne + Zinsen + Steuern + Gewinn"
    ],
    merksatz: "Wertschöpfung ist der Kuchen, nicht der Umsatz – Umsatz enthält fremde Zutaten." },

  { id: "m01-14", thema: "Bedürfnis, Bedarf, Nachfrage", typ: "begriff",
    frage: "Wie hängen Bedürfnis, Bedarf und Nachfrage zusammen?",
    antwort: "Ein **Bedürfnis** ist ein empfundener Mangel. Trifft es auf Kaufkraft und richtet sich auf ein konkretes Gut, wird daraus ein **Bedarf**. Tritt der Bedarf tatsächlich am Markt auf, ist es **Nachfrage**.",
    beispiel: "Mobilitätsbedürfnis → Bedarf nach einem Kleinwagen (weil das Budget nur dafür reicht) → tatsächlicher Kauf beim Händler.",
    falle: "Marktpotenzialschätzungen scheitern meist an dieser Kette: Es wird die Zahl der Bedürftigen gezählt, nicht die der Zahlungsfähigen und -willigen." },

  { id: "m01-15", thema: "Rechtsformwahl", typ: "case",
    frage: "Welche Rechtsform empfiehlst du – und mit welcher Begründungslogik?",
    szenario: "Zwei Ingenieurinnen gründen ein Unternehmen für Prüfstandssoftware. Startkapital 60.000 €, davon 40.000 € Eigenmittel. Sie rechnen im dritten Jahr mit Wagniskapital, wollen Mitarbeitende später beteiligen und haften wegen möglicher Produkthaftungsfälle ungern privat. In den ersten beiden Jahren werden Verluste erwartet.",
    hinweis: "Denke an Haftungsrisiko, Fungibilität der Anteile für Investoren und daran, wo anfängliche Verluste steuerlich am meisten wert sind.",
    antwort: "Zielbild ist die **GmbH**, weil Produkthaftungsrisiko und geplante Investorenrunde beide für eine Kapitalgesellschaft mit übertragbaren Geschäftsanteilen sprechen. Für die Verlustphase ist die Kehrseite zu benennen: Im Trennungsprinzip bleiben Anfangsverluste in der Gesellschaft hängen und wirken sich erst später über Verlustvortrag aus, während eine Personengesellschaft sie sofort mit anderen Einkünften der Gründerinnen verrechnen ließe. Wer diesen Effekt heben will, startet als GbR/OHG und wandelt vor der Finanzierungsrunde um – das kostet Umwandlungsaufwand und ist nur sinnvoll, wenn nennenswerte andere Einkünfte vorhanden sind.",
    check: [
      "Haftungsrisiko als erstes Kriterium erkannt und mit dem Produktrisiko begründet",
      "Investorenfähigkeit der Anteile angesprochen (Übertragbarkeit, Beteiligungsprogramme)",
      "Steuerliche Behandlung der Anfangsverluste als Gegenargument erkannt",
      "Trennungs- vs. Transparenzprinzip korrekt zugeordnet",
      "Empfehlung mit Vorbehalt formuliert, statt eine Rechtsform absolut zu setzen"
    ],
    falle: "Wer nur „GmbH wegen Haftung“ schreibt, verschenkt die Hälfte der Punkte. Die Kunst ist, den Zielkonflikt zu benennen und die Empfehlung an eine Bedingung zu knüpfen." },

  { id: "m01-16", thema: "Ökonomisches Prinzip", typ: "case",
    frage: "Wie prüfst du diese Aussage ökonomisch?",
    szenario: "Ein Werkleiter berichtet stolz: „Wir haben die Ausschussquote von 3,0 % auf 0,4 % gesenkt. Damit arbeiten wir deutlich wirtschaftlicher.“",
    hinweis: "Was wurde gemessen – eine Menge oder ein Wert? Und was hat die Senkung gekostet?",
    antwort: "Die Aussage vermischt Produktivität mit Wirtschaftlichkeit. Eine niedrigere Ausschussquote ist zunächst nur eine Mengenaussage. Wirtschaftlich ist die Maßnahme erst, wenn die eingesparten Fehlerkosten die Kosten der Qualitätsmaßnahme übersteigen – zusätzliche Prüfstationen, langsamere Taktung, Personal.\nRichtig wird die Prüfung als Grenzbetrachtung geführt: Was kostet die letzte Zehntelprozent-Verbesserung, und was spart sie? Qualitätskosten verhalten sich typischerweise progressiv, Fehlerkosten degressiv – das Optimum liegt fast nie bei null Fehlern.",
    check: [
      "Produktivitäts- von Wirtschaftlichkeitsaussage getrennt",
      "Nach den Kosten der Maßnahme gefragt, nicht nur nach dem Nutzen",
      "Grenzbetrachtung statt Durchschnittsbetrachtung angesetzt",
      "Erkannt, dass das Optimum in der Regel vor der Nullfehlerquote liegt"
    ],
    merksatz: "Jede Verbesserungsmeldung mit der Gegenfrage prüfen: Was hat sie gekostet?" }

]});
