/* Sammelstelle für die Inhaltsmodule.
   Jedes Modul ruft BWL.addModul({...}) auf. Reihenfolge = Lernreihenfolge neuer Karten.

   Kartenfelder:
     id        eindeutig, Präfix = Modul
     thema     Feinthema für Filter und Anzeige
     typ       "begriff" | "denkmuster" | "formel" | "case"
     frage     die Abfrage
     szenario  optionaler Sachverhalt (vor allem bei Cases)
     hinweis   optionaler Stups, abrufbar vor dem Auflösen
     antwort   Kern der Lösung
     schritte  nummerierte Denkschritte
     formel    String oder Liste von Formelzeilen
     beispiel   Rechen- oder Anwendungsbeispiel
     check     Selbstcheck-Kriterien (Cases)
     falle     typischer Denkfehler
     merksatz  verdichtete Merkhilfe
*/
window.BWL = window.BWL || {};
BWL.module = [];
BWL.addModul = function (def) { BWL.module.push(def); };
