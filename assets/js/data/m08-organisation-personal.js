BWL.addModul({
  id: "m08",
  name: "Organisation, Personal & Führung",
  beschreibung: "Wie Aufgaben verteilt, Entscheidungen koordiniert und Menschen so gesteuert werden, dass die Anreize nicht das Gegenteil bewirken.",
  karten: [

  { id: "m08-01", thema: "Aufbau und Ablauf", typ: "begriff",
    frage: "Was regelt die Aufbau-, was die Ablauforganisation?",
    antwort: "Die **Aufbauorganisation** bildet das statische Gerüst: Aufgabenanalyse und -synthese führen zu Stellen, Abteilungen, Instanzen und Weisungsbeziehungen – das Organigramm. Die **Ablauforganisation** regelt die dynamische Seite: Welche Arbeitsschritte laufen in welcher Reihenfolge, mit welchen Terminen, an welchem Ort, durch wen.",
    schritte: [
      "Aufgabenanalyse: Gesamtaufgabe in Teilaufgaben zerlegen (nach Verrichtung, Objekt, Rang, Phase, Zweckbeziehung).",
      "Aufgabensynthese: Teilaufgaben zu Stellen bündeln.",
      "Stellen zu Abteilungen zusammenfassen und Leitungssystem festlegen."
    ],
    falle: "Prozesse folgen selten dem Organigramm. Genau an den Abteilungsgrenzen entstehen Liege- und Abstimmungszeiten – deshalb setzt Prozessorganisation den Ablauf vor den Aufbau." },

  { id: "m08-02", thema: "Leitungssysteme", typ: "denkmuster",
    frage: "Vergleiche Einlinien-, Stab-Linien-, Mehrlinien- und Matrixsystem.",
    antwort: "**Einliniensystem**: jede Stelle hat genau einen Vorgesetzten – klar, aber lange Dienstwege und Überlastung der Spitze.\n**Stab-Linien-System**: Linie wird um Stäbe ohne Weisungsbefugnis ergänzt – Entlastung durch Spezialisten, aber Konfliktpotenzial zwischen Fachwissen (Stab) und Entscheidungsmacht (Linie).\n**Mehrliniensystem**: Spezialisierung der Weisung (Funktionsmeisterprinzip) – kurze Wege, aber Kompetenzkonflikte.\n**Matrixorganisation**: zwei gleichberechtigte Dimensionen (z. B. Funktion und Produkt) – hohe Problemlösungsqualität und direkte Abstimmung, aber institutionalisierte Konflikte und hoher Kommunikationsaufwand.",
    schritte: [
      "Frage: Wie hoch ist der Koordinationsbedarf zwischen den Dimensionen?",
      "Hoher Bedarf und komplexes Umfeld rechtfertigen eine Matrix.",
      "Voraussetzung ist eine geklärte Konfliktregelung – sonst entscheidet Hierarchie durch die Hintertür."
    ],
    falle: "Die Matrix ist kein Kompromiss, sondern ein bewusst gewählter Dauerkonflikt. Sie funktioniert nur, wenn Eskalationswege und Ressourcenhoheit vorab festgelegt sind." },

  { id: "m08-03", thema: "Organisationsformen", typ: "denkmuster",
    frage: "Wann ist eine funktionale, wann eine divisionale Organisation überlegen?",
    antwort: "**Funktional** (Gliederung nach Verrichtung: Beschaffung, Produktion, Vertrieb): Spezialisierungsvorteile, Skaleneffekte, geringe Redundanz. Geeignet bei schmalem, homogenem Programm und stabilem Umfeld. Nachteil: keine eindeutige Ergebnisverantwortung, die Spitze wird zum Koordinationsengpass.\n**Divisional** (Gliederung nach Objekt: Produktgruppen, Regionen, Kundensegmente): eigenständige Bereiche mit Ergebnisverantwortung, marktnäher, entlastet die Spitze. Nachteil: Doppelfunktionen, Ressortegoismus, Verrechnungspreisprobleme.",
    schritte: [
      "Heterogenität des Programms prüfen.",
      "Umfelddynamik prüfen.",
      "Bei hoher Heterogenität und Dynamik divisional, sonst funktional.",
      "Zentrale Dienste dort belassen, wo Skaleneffekte den Koordinationsverlust überwiegen."
    ],
    merksatz: "Funktional maximiert Effizienz, divisional maximiert Marktnähe." },

  { id: "m08-04", thema: "Delegation", typ: "denkmuster",
    frage: "Was besagt das Kongruenzprinzip der Delegation?",
    antwort: "Aufgabe, Kompetenz und Verantwortung müssen deckungsgleich sein (AKV). Wer eine Aufgabe erhält, braucht die Befugnisse, sie zu erfüllen – und trägt dann auch die Verantwortung für das Ergebnis.",
    beispiel: "Ein Projektleiter soll Termine verantworten, hat aber keine Weisungsbefugnis über die zugeteilten Mitarbeitenden und kein eigenes Budget: klassische Inkongruenz, die zwangsläufig in Eskalation oder Resignation endet.",
    falle: "Verantwortung lässt sich delegieren, die **Führungsverantwortung** aber nicht – die vorgesetzte Stelle bleibt für Auswahl, Anweisung und Kontrolle verantwortlich.",
    merksatz: "Keine Verantwortung ohne Kompetenz." },

  { id: "m08-05", thema: "Motivationstheorien", typ: "begriff",
    frage: "Was besagen Maslows Bedürfnispyramide und Herzbergs Zwei-Faktoren-Theorie, und wo widersprechen sie sich?",
    antwort: "**Maslow**: Bedürfnisse in fünf Stufen (physiologisch, Sicherheit, sozial, Wertschätzung, Selbstverwirklichung); eine höhere Stufe motiviert erst, wenn die darunter befriedigt ist. Die ersten vier sind Defizit-, die letzte ist ein Wachstumsbedürfnis.\n**Herzberg**: Zufriedenheit und Unzufriedenheit sind keine Gegenpole, sondern zwei Dimensionen. **Hygienefaktoren** (Gehalt, Arbeitsbedingungen, Führungsstil, Sicherheit) verhindern Unzufriedenheit, motivieren aber nicht. **Motivatoren** (Leistungserlebnis, Anerkennung, Arbeitsinhalt, Verantwortung, Entwicklung) erzeugen Zufriedenheit.",
    beispiel: "Eine Gehaltserhöhung beseitigt Unzufriedenheit über Bezahlung – der Effekt verpufft nach wenigen Monaten. Erweiterter Aufgabenzuschnitt wirkt dauerhafter.",
    falle: "Beide Theorien sind empirisch nur schwach bestätigt und in Prüfungen dennoch Standard. Wichtiger als die Stufen ist die Schlussfolgerung: Geld ist eine notwendige, aber keine hinreichende Bedingung." },

  { id: "m08-06", thema: "Führungsstile", typ: "denkmuster",
    frage: "Was besagt der situative Führungsansatz und warum verdrängt er die Stiltypologien?",
    antwort: "Es gibt keinen generell überlegenen Führungsstil; die Wirksamkeit hängt von der Situation ab – vor allem vom Reifegrad der Geführten (Können und Wollen), von der Aufgabenstruktur und vom Zeitdruck.\nHersey und Blanchard leiten daraus vier Stile ab: **Anweisen** (geringe Reife), **Verkaufen/Überzeugen**, **Partizipieren** und **Delegieren** (hohe Reife). Mit steigender Reife nimmt die Aufgabenorientierung ab und später auch die Beziehungsorientierung.",
    schritte: [
      "Reifegrad je Person und je Aufgabe getrennt einschätzen.",
      "Stil daran anpassen, nicht an der eigenen Präferenz.",
      "Bei neuen Aufgaben bewusst einen Schritt zurückgehen."
    ],
    falle: "Ein kooperativer Stil bei einer Person, die die Aufgabe nicht beherrscht, wird als Führungsversagen erlebt – und autoritäre Ansage bei Erfahrenen als Entmündigung." },

  { id: "m08-07", thema: "Personalbedarf", typ: "formel",
    frage: "Wie ermittelst du den Netto-Personalbedarf?",
    antwort: "Vom Brutto-Personalbedarf (was gebraucht wird) wird der voraussichtliche Personalbestand abgezogen, korrigiert um Zu- und Abgänge.",
    formel: [
      "Bruttopersonalbedarf = (Arbeitsmenge · Zeit je Einheit) ÷ (Arbeitszeit je Person · Leistungsgrad)",
      "Nettopersonalbedarf = Bruttobedarf − (aktueller Bestand + feststehende Zugänge − feststehende Abgänge)"
    ],
    beispiel: "12.000 Vorgänge je Jahr, 45 Minuten je Vorgang = 9.000 Stunden. Nettoarbeitszeit je Kraft 1.550 Stunden → Bruttobedarf 5,8, also 6 Stellen. Bestand 5, ein Abgang, keine Zugänge → Nettobedarf 2 Einstellungen.",
    falle: "Die Nettoarbeitszeit ist nicht die Vertragsarbeitszeit: Urlaub, Krankheit, Schulung und Verteilzeiten sind abzuziehen – häufig 15–20 %." },

  { id: "m08-08", thema: "Personalbeschaffung", typ: "denkmuster",
    frage: "Interne oder externe Beschaffung – wie wägst du ab?",
    antwort: "**Intern**: geringere Kosten, kürzere Einarbeitung, bekannte Leistung, Motivationswirkung durch Aufstiegsperspektive, geringeres Fehlbesetzungsrisiko. Aber: Betriebsblindheit, Folgevakanz, begrenzte Auswahl, mögliche Rivalität.\n**Extern**: frische Impulse, breitere Auswahl, sofort verfügbares Spezialwissen. Aber: höhere Kosten, längere Einarbeitung, Auswahlrisiko, Demotivation intern übergangener Kandidaten.",
    schritte: [
      "Ist die Kompetenz intern vorhanden oder in angemessener Zeit aufbaubar?",
      "Soll die Position bewusst einen Kulturwandel anstoßen? → extern.",
      "Folgevakanz mitdenken: Interne Besetzung verschiebt die Lücke nur.",
      "Signalwirkung auf die Belegschaft berücksichtigen."
    ] },

  { id: "m08-09", thema: "Anreizsysteme", typ: "denkmuster",
    frage: "Welche Anforderungen muss ein wirksames Anreizsystem erfüllen?",
    antwort: "**Beeinflussbarkeit** (die Zielgröße muss im Verantwortungsbereich liegen), **Messbarkeit und Manipulationsresistenz**, **Zielkongruenz** mit dem Unternehmensziel, **Transparenz und Verständlichkeit**, **Wesentlichkeit** der Anreizhöhe und **Zeitbezug**, der die Langfristwirkung erfasst.",
    schritte: [
      "Zielgröße wählen, die dem Unternehmenserfolg entspricht, nicht der leichten Messbarkeit.",
      "Prüfen, wie sich die Kennzahl manipulieren ließe – und diesen Weg schließen.",
      "Mehrere Kennzahlen kombinieren, damit keine Dimension einseitig optimiert wird.",
      "Auszahlungszeitpunkt an den Wirkungshorizont koppeln (Bonusbank, Sperrfristen)."
    ],
    falle: "Umsatzprovisionen ohne Margenbezug erzeugen Rabattschlachten. Stückprämien ohne Qualitätsbezug erzeugen Ausschuss. Jede eindimensionale Kennzahl wird optimiert – auf Kosten aller nicht gemessenen Dimensionen.",
    merksatz: "Was du misst und bezahlst, bekommst du. Auch wenn du etwas anderes gemeint hast." },

  { id: "m08-10", thema: "Koordinationsinstrumente", typ: "begriff",
    frage: "Welche Instrumente koordinieren arbeitsteilige Aufgaben?",
    antwort: "**Persönliche Weisung** (hierarchisch, flexibel, aber Kapazitätsgrenze der Instanz), **Selbstabstimmung** (horizontal, motivationsfördernd, zeitaufwendig), **Programme und Verfahrensregeln** (Standardisierung von Abläufen, entlastet bei Routine), **Pläne** (Vorgabe von Zielen und Ressourcen), **Verrechnungspreise und interne Märkte** sowie **Kultur und geteilte Werte** als weiches Koordinationsinstrument.",
    schritte: [
      "Routineaufgaben über Programme koordinieren.",
      "Neuartige Aufgaben über Selbstabstimmung.",
      "Ressourcenkonflikte über Pläne und Preise.",
      "Weisung als Rückfallebene für Konflikte, nicht als Standard."
    ] },

  { id: "m08-11", thema: "Change Management", typ: "denkmuster",
    frage: "Wie verläuft ein Veränderungsprozess nach Lewin und woher kommt Widerstand?",
    antwort: "Drei Phasen: **Unfreezing** (Veränderungsbereitschaft schaffen, Problembewusstsein erzeugen), **Moving** (neue Verfahren einführen, begleiten, qualifizieren), **Refreezing** (Stabilisierung, damit kein Rückfall erfolgt).\nWiderstand entsteht selten aus Bosheit, sondern aus Verlustangst (Status, Kompetenz, Beziehungen), fehlender Einsicht in die Notwendigkeit, mangelndem Zutrauen oder schlechten Erfahrungen mit früheren Projekten.",
    schritte: [
      "Widerstand als Information behandeln, nicht als Störung.",
      "Betroffene früh beteiligen – Beteiligung erzeugt Verpflichtung.",
      "Verluste offen benennen statt zu beschönigen.",
      "Frühe sichtbare Erfolge schaffen.",
      "Die neue Praxis in Kennzahlen, Anreizen und Prozessen verankern."
    ],
    falle: "Ohne Refreezing kehren Organisationen unter Stress in alte Muster zurück – gerade dann, wenn die neue Arbeitsweise am nötigsten wäre." },

  { id: "m08-12", thema: "Fluktuation", typ: "formel",
    frage: "Wie berechnest du die Fluktuationsquote und welche Kosten hängen daran?",
    antwort: "Die Quote setzt die Abgänge ins Verhältnis zum durchschnittlichen Personalbestand. Die Kosten umfassen Austritt (Abwicklung, Wissensverlust), Vakanz (Überstunden, Leistungsminderung), Beschaffung (Anzeigen, Auswahl, Vergütung von Vermittlern) und Einarbeitung (Minderleistung, Betreuungsaufwand).",
    formel: ["Fluktuationsquote = Abgänge im Jahr ÷ ø Personalbestand · 100"],
    beispiel: "Faustwerte für die Wiederbesetzung liegen je nach Qualifikation bei 0,5 bis 1,5 Jahresgehältern. Bei 40 Abgängen und 50.000 € Durchschnittsgehalt sind das 1 bis 3 Mio. € – meist verteilt über Konten, in denen es niemand sieht.",
    falle: "Nicht jede Fluktuation ist schlecht. Entscheidend ist, wer geht: Der Verlust von Leistungsträgern in Schlüsselfunktionen ist etwas völlig anderes als eine normale Abgangsrate in leicht besetzbaren Rollen." },

  { id: "m08-13", thema: "Anreizsysteme", typ: "case",
    frage: "Was läuft schief, und wie baust du das System um?",
    szenario: "Ein Vertriebsteam wird mit 4 % Provision auf den erzielten Umsatz vergütet. Nach zwei Jahren stellt die Geschäftsführung fest: Der Umsatz ist um 22 % gestiegen, das Betriebsergebnis um 8 % gesunken. Die durchschnittliche Rabatthöhe ist von 4 % auf 11 % geklettert, und der Anteil des margenschwächsten Produkts am Umsatz hat sich verdoppelt.",
    hinweis: "Welche Größe wird belohnt – und welche wäre die richtige?",
    antwort: "Das System belohnt Umsatz, das Unternehmen lebt vom Deckungsbeitrag. Rabatte kosten den Vertrieb fast nichts: Ein Nachlass von 10 % senkt die Provision um 10 %, den Deckungsbeitrag aber je nach Marge um ein Vielfaches. Zugleich ist das margenschwache Produkt am leichtesten zu verkaufen – der Anreiz lenkt genau dorthin.\nUmbau: Bemessungsgrundlage vom Umsatz auf den **Deckungsbeitrag** umstellen, sodass jeder gewährte Rabatt unmittelbar die eigene Vergütung trifft. Ergänzend: Rabattkompetenzen mit Genehmigungsstufen, produktbezogene Gewichtung oder Zielprämien für strategische Produkte, ein Neukundenanteil als zweite Komponente sowie eine Halte- oder Rückforderungsklausel bei Storno und Zahlungsausfall.\nÜbergang gestalten: Die Umstellung senkt zunächst die Verdienstmöglichkeiten, deshalb Parallelrechnung über eine Übergangsphase, transparente Simulation für jeden Mitarbeitenden und Anpassung der Zielwerte, damit gute Leistung nicht bestraft wird.",
    check: [
      "Umsatz als falsche Bemessungsgrundlage identifiziert",
      "Hebelwirkung des Rabatts auf den Deckungsbeitrag erklärt",
      "Produktmixverschiebung als zweiten Anreizeffekt erkannt",
      "Deckungsbeitrag als neue Bemessungsgrundlage vorgeschlagen",
      "Mindestens zwei ergänzende Komponenten genannt (Rabattkompetenz, Neukunden, Storno-Klausel)",
      "Übergangsgestaltung und Akzeptanz mitgedacht"
    ],
    falle: "Die naheliegende Reaktion – Rabatte einfach verbieten – bekämpft das Symptom. Solange die Provision am Umsatz hängt, sucht sich der Anreiz einen anderen Weg." },

  { id: "m08-14", thema: "Matrixorganisation", typ: "case",
    frage: "Wie beurteilst du die Situation und was empfiehlst du?",
    szenario: "Ein Maschinenbauer hat eine Matrix aus vier Funktionsbereichen und drei Produktlinien eingeführt. Nach neun Monaten berichten Projektleiter, dass Zusagen der Fachbereiche nicht eingehalten werden; Fachvorgesetzte klagen, ihre Leute seien überlastet und arbeiteten an zu vielen Projekten gleichzeitig. Entscheidungen dauern länger als vorher.",
    hinweis: "Wo genau ist die Kongruenz von Aufgabe, Kompetenz und Verantwortung verletzt?",
    antwort: "Die Symptome sind typisch für eine Matrix ohne geklärte Ressourcenhoheit. Die Produktlinien tragen Ergebnisverantwortung, verfügen aber nicht über die Ressourcen – ein Verstoß gegen das Kongruenzprinzip. Weil niemand die Gesamtlast steuert, werden mehr Projekte gestartet als das System durchsetzen kann; nach Little steigt damit zwangsläufig die Durchlaufzeit, ohne dass mehr fertig wird.\nEmpfehlung:\n1. Ressourcenhoheit explizit regeln – etwa feste Kapazitätszusagen je Produktlinie und Quartal statt Verhandlung im Einzelfall.\n2. Anzahl paralleler Projekte begrenzen und priorisierte Reihenfolge festlegen; ein Projekt zurückstellen ist eine Entscheidung, kein Scheitern.\n3. Eskalationsweg mit Fristen definieren, damit Konflikte nicht liegen bleiben; ein Gremium mit beiden Dimensionen entscheidet.\n4. Zielsysteme beider Dimensionen aufeinander abstimmen – solange Fachbereiche nach Auslastung und Projekte nach Termintreue gemessen werden, ist der Konflikt eingebaut.\n5. Erst wenn all das nicht greift, die Matrix zugunsten einer eindeutigen Führungsdimension aufgeben.",
    check: [
      "Verletzung des Kongruenzprinzips benannt",
      "Fehlende Ressourcenhoheit als Kern des Problems identifiziert",
      "Überlast durch zu viele Parallelprojekte erkannt (Durchlaufzeit statt Durchsatz)",
      "Konkrete Regelung für Kapazitätszusagen vorgeschlagen",
      "Eskalationsmechanismus mit Fristen gefordert",
      "Widersprüchliche Zielsysteme als Ursache benannt",
      "Rückbau der Matrix erst als letzte Option"
    ],
    merksatz: "Eine Matrix ohne geregelte Ressourcenhoheit ist nur ein Organigramm mit zwei Chefs." },

  { id: "m08-15", thema: "Leitungsspanne", typ: "denkmuster",
    frage: "Wovon hängt die sinnvolle Leitungsspanne ab, und was bewirkt ihre Veränderung?",
    antwort: "Die Leitungsspanne ist die Zahl der einer Instanz direkt unterstellten Stellen. Sie darf umso größer sein, je gleichartiger und standardisierter die Aufgaben sind, je qualifizierter und selbstständiger die Mitarbeitenden arbeiten, je besser die Informationssysteme sind und je geringer der Abstimmungsbedarf untereinander ist.\nEine größere Spanne führt zu flacheren Hierarchien: kürzere Informationswege, schnellere Entscheidungen, geringere Leitungskosten – aber weniger Betreuung, weniger Kontrolle und weniger Aufstiegsstufen.",
    formel: ["Zahl der Hierarchieebenen ≈ log(Mitarbeitende) ÷ log(Leitungsspanne)"],
    beispiel: "1.000 Mitarbeitende bei einer Spanne von 5 ergeben rund 4,3 Ebenen, bei einer Spanne von 10 nur noch 3. Jede eingesparte Ebene verkürzt jeden Entscheidungsweg.",
    falle: "Flache Hierarchien werden gern als modern verkauft. Sie funktionieren nur, wenn Entscheidungskompetenz tatsächlich nach unten wandert – sonst entsteht dieselbe Zentralisierung mit überlasteten Führungskräften." }

]});
