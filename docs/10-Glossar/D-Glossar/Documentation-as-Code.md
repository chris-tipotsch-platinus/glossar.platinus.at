---
id: Doc-as-Code 
titel: Documentation-as-Code
tags: [Begriffe, BPM, IM, PM, Dokumentation, Web]
---

# Documentation-as-Code

*Webbasierter Dokumentations-Methode für verteilte Teams für technische Informationen*. 

------

## Was ist Doc-as-Code?

Mit dem Ansatz: **Dokumentation als Code** ([Docs as Code](https://www.writethedocs.org/guide/docs-as-code/)) wird die technische Dokumentation mit ähnlichen Boardmitteln wie auch der Quellcode von Software erstellt und gepflegt: Im selben Texteditor oder einer IDE (integrated  Development Environment), als reiner Text, versioniert im Software-Repository (meist [GIT](https://git-scm.com/) oder GitHub, GitLab). 

Mergen (zusammenfassen) und branchen (verteilen) Sie die Dokumentation genau wie Quellcode. Statt binäre Dokumente per E-Mail zu versenden und  Versionsnummern und Namenskürzel an die Dateinamen zu hängen, checken Sie Ihre Dokumentation per Commit und Push in GIT ein, mit derselben  Branching-Strategie, mit der auch die Software entwickelt wird. Das Dokumentationsteam verfügrt ober geeigneten Werkzeuge und die Motivation zur Erstellung und Pflege von Dokumentation wird durch eine klar definierte Dokumentationsstruktur auch gleich besser. Mit diesem Ansatz kann ein  breites Spektrum technischer Dokumentation abdecken werden. So können beispielsweise Tutorials, Software-Handbücher, Architekturdokumentation, Entwicklerdokumentation bei der Lösungsentwicklung oder auch zahlreiche Betriebsdokumentation abgebildet und verwaltet werden. Für diesen Ansatz hat sich im Netz der Begriff *Docs-as-Code* etabliert – also Dokumentation genauso wie Quellcode behandeln.



## Was sind Erfolgsfaktoren bei der Zusammenarbeit nach dem Doc-as-Code Ansatz?

Checkliste für die Zusammenarbeit nach dem **Docs-as-Code-Ansatz**:

1. **Mindset schaffen - Dokumentations-Kultur fördern**. Bei den Projektmitglieder muss durch Schulungen ein Bewusstsein für das „Begleitprodukt Dokumentation“ sowie der Praktiken im Dokumentatinsmanagement geschaffen werden. Dabei sind die Anforderungen zB. aus der ISO9000 zur Dokumentenlenkung, der DSGVO, des Schutzes von geistigen Eigentums (*Interlectual Properties*) und der Nutzen der Dokumentation zu erläutern. 
   - Doku-Training - Awareness: Know-Why, Know-What and Know-How zu Dokumentationsmanagement.
   - Doku-Training - DSGVO mit Datenschutz und Informationsklassifizierung.
   - Doku-Training - ISO9000 zu Dokumentenlenkung, Informationsaufbewahrungspflichten, Unterweisungspflichten, ...
   
2. **Ruleset schaffen - Dokumentations-Konzepte definieren.** Bei den Projektmitglieder und den Anwendern muss ein Verständnis über die Dokumentationsziele und Inhalte, sowie den Dokumentationsprozesse und der involvierten funktionalen Rollen geschaffen werden.  Zur Arbeitsvorbereitung  gehören dabei:
   1. die <u>Erstellung, Überarbeitung und Abstimmung der Praktiken zu Dokumentenlenkung</u> mit den funktionalen Rollen Autor (Dokumenten-Ersteller), Reviewer (Dokumenten-Prüfer), Dokumenten-Owner (Dokumenten-Caretaker), Dokumenten-Benutzer, Dokumentations-Manager. Ua.a sind die Richtlinien zur Informationsklassifizierung und dem personenbezogenen Datenschutz zu klären.  
   2. die <u>Erstellung, Überarbeitung und Abstimmung der Dokumentationsstrukturen</u>. Je nach Dokumententyp ist es zweckmässig sogenannte Dokumentenvorlagen (Templates, Dokumentationsarchitektur) zur inhaltlichen Strukturierung zu erstellen und bereitzustellen. Das Dokumentationskonzept legt die Struktur - den sogenannten inhaltlichen Aufbau der Dokumentation fest. Diese Struktur dient als Checkliste was, wo und wie zu dokumentieren ist. In der Praxis werden leider sehr häufig keine Vorgaben und Vorlagen (*Templates*) zur Dokumentation bereitgestellt. Einer sauber durchdachte Dokumentationsstruktur kann erheblich zu Steigerung der Qualität der technischen Dokumentation und zur (zielgruppenspezifischen) Anwenderzufriedenheit beitragen. 
   3. die <u>Erstellung. Überarbeitung und Abstimmung eines Styleguides</u>. Die Definition des Brandings, der Logos sowie von Teaserbildern beeinflusst das Look and Feel der Content-Präsentation. **Vorgegebene Dokumentations-Styleguide** helfen dabei, eine hohe „innere Qualität“  der Dokumentationsquellen für die automatisierte Verarbeitung sicherzustellen. Im Styleguide werden ua. die Formatierungen, die Dateienbezeichnung und Ablagestrukturen sowie der Schreibstil definiert.  siehe [A1-Branding-Guide](https://brand.a1.group/styleguides/styleguide-digital/) 



3. **Skill-Set schaffen - Dokumentations-Befähigung sicherstellen**. Bei den Projektmitglieder muss durch Schulungen ein effizienter Umgang mit den Dokumentationswerkzeuge und den Abläufen erreicht werden.
   1. Doku-Training - Foundation zur Schaffung eines Überblickes zu den Dokumentationsrichtlinien und Dokumentationskonzepten.
   2. Doku-Training - Praktiker für Autoren, Reviewer und Anwender zur Sicherstellung, dass die Dokumenation des Zweck und die Anwendungserfordernisse erfüllen.
   3. Doku-Training - Expert zur Vertiefung in der Praktiken des Dokumentations-Managements.  
   
4. **Tool-Set schaffen - Dokumentations-Tools bereitstellen**. Bei den Projektmitglieder muss durch Schulungen ein effizienter Umgang mit den Dokumentationswerkzeuge erreicht werden. Zur Arbeitsvorbereitung  beim <u>Setup und der Konfiguration des Dokumentations-Toolsets</u> zur die Erstellung, Verwaltung und Publizierung des Contents in den gewünschten Ausgabeformates (html, PDF, ...) für die Autoren, Dokumentations-Reviewer und Dokumenten-Owner gehören ua.: 
   1. <u>Dokumentations-Editors</u> zur Erstellung von Dokumenten im Textform als Markdown oder als Markdown oder AsciiDoc-Dateien. Die Verwendung eines plain-text-Formats anstelle der Binärformate typischer Textverarbeitungen oder Office-Anwendungen. Nur so können Sie Ihre Dokumentation tatsächlich wie Code behandeln und automatisiert weiterverarbeitet werden. Die Nutzung des leichtgewichtige und seit vielen Jahren bewährte Markup-Format Asciidoc wird als Grundlage sehr häufig empfohlen. Im Gegensatz zum ebenfalls weit verbreiteten Markdown handelt es sich beim Markup-Format AsciiDoc um einen wirklichen Standard, ohne Fragmentierung durch unterschiedliche Dialekte. Asciidoc ist sowohl einfach als auch funktional mächtig und Sie können damit  alle Arten von Dokumentation erstellen, bei Bedarf sogar Bücher damit schreiben. Für dass Markup-Format AsciiDoc gibt es einen Open-Source-Konverter namens Asciidoctor, der Asciidoc in verschiedene Zielformate (etwa HTML oder DocBook, PDF) konvertieren kann und auf verschiedenen Plattformen läuft.
   2. <u>Dokumentations-Repositories</u> als Versionsmanagement-Tool zur Verwaltung und Freigabe der Dokumentations-Assets. Bei Bedarf können auch Rückmeldungen / Feedbacks über dieses Tool abgewickelt werden. Ein **gemeinsames Dokumentations-Repository** für eine teamübergreifende Zusammenarbeit ist Grundvoraussetzung. Das Doc-Repository kann mit gängigen Versionsverwaltungtools wie etwa Markup-Format git, GitHub oder GitLab erreicht werden. Über das Versionsverwaltungtool ist jederzeit nachvollziehbar, wer, wann, welchen Content eingepflegt hat. Prüfungen und Freigaben sind sehr gut nachvollziehbar. Damit werden die Grundanforderungen der ISO9000 an die Informationslenkung bzw. Dokumentenlenkung erfüllt. 
   3. <u>Dokumentations-Generators</u> zur Prüfung der Inhalte und Styles. Dieses Tool benötigt der Autor als auch der Dokumenten-Reviewer. 
   4. <u>Dokumentations-Portal</u> zur Veröffentlicheung der Dokumentations-Assets.
   5. <u>Dokumentations-Analytics</u> zur Messung der Zugriffe und zur Beurteilung des Nutzens zu den Dokumentations-Assets.
   6. <u>Dokumentations-Community</u> zur Erfassung von Rückmeldungen (Issues, Feedback, Review) und Verbesserungen zur Dokumentation.



## Wie sehen die Schritte bei Doc-as-Code Ansatz aus?

Zur Ableitung der Schritte ist ein grundsätzlcihe Verständnis über den [Dokumenten-Lebenzyklus](/docs/Glossar/D-Glossar/Dokumentenlebenszyklus/) und die [Dokumentenlenkung](/docs/Glossar/D-Glossar/Dokumentenlenkung/) sinnvoll. 

1. **Dokumentationsquellen durch den Autor erstellen und „einchecken“**: Verschiedene Beteiligte bei IT-Projekten, etwa das Entwicklungsteam oder die Enterprise-Architekten oder Technical Writer, erstellen jeweils Teile der Dokumentation, sowohl in Textform als Markdown oder AsciiDoc-Dateien, als auch Diagramme (Bilder) und falls erforderlich anderen Medien (Video, Sound, Files). Durch das Versionsmanagement-Tool Git ist das  Versionsmanagement und die Zusammenführung der verschiedenen „Sources“  in das Tool bereit eingebaut. Durch das "Einckecken" der Dokumentationsquellen ist eine kollerabotive Teamarbeit sichergestellt. 
2. **Dokumentationsquellen durch den Reviewer prüfen und „mergen“**: Im Zug des inhaltlichen Reviews erfolgt eine Prüfung und ein Feedback  zu den eingereichten Änderungen. Ist die Prüfung erfolgreich werden die  aktualisierten „Sources“ in dem „Main-Branches“ der Versionsverwaltung  zusammengeführt. Damit stehen dann die jeweiligen Quellen für den  „Build“-Prozess" zur Verfügung. 
3. **Dokumentationsformate durch den Dokumenten-Owner generieren** : Ein (manuelle und/oder automatisierte) Build-Prozess zur Generierung  der gewünschten Dokumentationsformate (html, PDF, Confluence, …)  kombiniert und konvertiert die einzelnen Dokumentationsteile zu den gewünschten Zielformaten. Nach erfolgreicher Erstellung der Zielformate können die Ergebnisse dann zur Freigabe vorgelegt sowie anschliessend veröffentlichen werden. 
4. **Dokumentation nutzen, updaten und Rückmeldungen liefern**: Der Anwender kann dann die bereitgestellte Dokumentation für seine Zweck nutzen. Durch die Feedback-Funktion, kann auch direkt eine Rückmeldung zur Dokumenattion eingebracht werden. 
5. **Dokumentennutzung messen und auswerten.** Um die Wirksamkeit der Dokumentation und deren Nutzung zu beurteilen, werden sogenannte Analytical-Tools eingesetzt. Die Messen die Anzahl der Zugriffe, Verweildauer, eben deren Nutzung. Auswertung daraus liefern Rückschlüsse, welche Teile der Dokumentation besonders genutzt wurden. 



### Quick Links

- Source = https://techwritingmatters.com/2020/05/writing-docs-as-code
- Asciidoctor - https://asciidoctor.org/,
- GIT- https://git-scm.com/
- DocBook - https://docbook.org/
- A1-Branding-Guide - https://brand.a1.group/styleguides/styleguide-digital/
