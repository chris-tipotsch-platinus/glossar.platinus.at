---
id: Doc-as-Code 
title: Documentation-as-Code
tags: [Begriffe, BPM, IM, PM, Dokumentation, Web]
---

# Documentation-as-Code

*Webbasierter Dokumentations-Methode für verteilte Teams für technische Informationen*. 

------

## Was ist Doc-as-Code?

:::info

<h3>Mit dem Doc-as-Code-Ansatzes wird die technische Dokumentation mit ähnlichen Boardmitteln mittels IDEs (Integrated Development Environment) wie auch der Quellcode von Software im Doc-Repository erstellt, gespeichert, geprüft, freigegeben, versioniert sowie fortlaufend gepflegt. </h3>

:::

Als Boardmitteln für das **Document-Repository** und integrierter Versionverwaltung (*Version Control*) wird in der Praxis meist [GIT](https://git-scm.com/), [Gitea](https://gitea.io/) [GitHub](https://github.com/) oder [GitLab](https://about.gitlab.com/) angewendet. 

1. Als erster Schritt sind die Ziele, Erwartungen, Rollen und die Dokumentationsstruktur zu klären. 
   Wer ist Autor? Wer ist Reviewer? Wer ist Approver? Wer ist Informationmanager? Die Motivation zur Erstellung und Pflege von Dokumentation wird durch eine klar definierte Dokumentationsstruktur bzw. Dokumentationskonzeptes gleich besser.  
2. Als zweiter Schritt sind die Ressourcen und Tools für die Bearbeitung nach dem Doc-as-Code-Ansatz zu klären. 
   Wie erfolgt das Clonen und Einchecken von Textdateien in das Doc-Repository? Welche Editoren für die Bearbeitung der Textdateien sollen verwendet werden? Welche Tools sollen für die Bearbeitung des weiteren digitalen Contents wie Bilder, Grafiken, Fotos, Videos, Diagrammen, etc. verwendet werden? Das Dokumentationsteam verfügt über geeigneten und abgestimmte Werkzeuge. 
3. Als dritter Schritt ist der Zugang (Access) zum Dokumenten-Datenspeicher (*Doc-Repository*) oder Teilen davon mit dem Document-Caretaker zu klären. Welche Rechte zur Bearbeitung welcher Objekte bekommen welche Rollen?  
4. Aus dem Dokumenten-Datenspeicher (*Doc-Repository*) werden idR. ganze Dokumentation mit Ihren Textbausteinen über <u>clone</u> auf dem lokalen Rechner herunterkopieren und der jeweils aktuelle Tagesstand (bei verteilten Doku-Teams) mittels <u>fetch</u> (holen) abgeglichen. Das Verteilen von  Dokumentationen erfolgt dabei genau wie Software-Quellcode. Das Dokumentationsteam kann dadurch verteilt arbeiten. 
5. Aus dem Dokumenten-Datenspeicher (*Doc-Repository*) werden mittel Zweigen (*Branches*) die benötigten Bearbeitungsäste erstellt. Dies bildet eine Grundlage für eine verteile Teamarbeit bei mehreren Document-Authors und dem "check-in" durch den Document-Reviewer und Document-Approver. Um aktiv Änderungen einzubringen kann idR. vom Main-Kanal ein eigener Zweig (*Branch*) durch den Author erstellt werden. Die Textbausteine bzw. die Dokumentation wird genauso wie Software-Quellcode behandelt. In Git wird dieser Schritt <u>branchen</u> (verteilen) bezeichnet. 
6. Wenn die Bearbeitung aus Sicht der Autoren abgeschlossen ist erfolg ein <u>push</u> (einchecken) der Änderungen in den jeweiligen Entwicklungs-/ bzw. Bearbeitungsast. Statt binäre Dokumente per E-Mail zu versenden und Versionsnummern und Namenskürzel an die Dateinamen zu hängen, checken Sie Ihre Dokumentation per <u>Push</u> ein (*Commit* in GIT, mit derselben Branching-Strategie, mit der auch die Software entwickelt wird). 
7. Durch einen <u>Pull Request</u> oder <u>Merge Request</u> wir die formelle und inhaltliche Prüfung beim Document-Reviewer angestossen. Bei erfolgreichen Review and Approvel werden die geänderten Textbausteine in den Main-Ast aufgenommen. Jede Änderung, Prüfung, Freigaben ist somit inhaltlich und zeitlich nachvollziehbar. 

Mit diesem Ansatz kann ein breites Spektrum technischer Dokumentation abdecken werden. So können beispielsweise Organisationshandbücher, Tutorials, Software-Handbücher, Architekturdokumentation, Entwicklerdokumentation bei der Lösungsentwicklung oder auch zahlreiche Betriebsdokumentation abgebildet und verwaltet werden. Für diesen Ansatz hat sich im Netz der Begriff [Docs as Code](https://www.writethedocs.org/guide/docs-as-code/) etabliert – also Dokumentation genauso wie Quellcode behandeln.



## Was sind Erfolgsfaktoren bei der Zusammenarbeit nach dem Doc-as-Code Ansatz?

Checkliste für die Zusammenarbeit nach dem **Docs-as-Code-Ansatz**:

### Mindset schaffen 

:::info

**Dokumentationskultur fördern - Bewußtsein bei den Beteiligen und Betroffenen für die Sinnhaftigkeit und Notwendigkeit einer Dokumentation schaffen.**

:::

Beim Dokumentationsteam, den Stakeholdern, Projektmitarbeitern und Prozessmitarbeitern muss durch Schulungen und Ausprobieren in einer "Sandbox" ein Bewusstsein (Awareness) für das „Begleitprodukt Dokumentation“ sowie moderner Dokumentations-Praktiken im digitalen Dokumentationsmanagement geschaffen werden. Dabei sind die Anforderungen an die Dokumentenlenkung aus der ISO9000 und der ISO27000, den Anfoderungen des Datenschutzes aus der DSGVO, sowie des Schutzes von geistigen Eigentums (*Interlectual Properties*) und dem Nutzerkreis der Dokumentation zu erläutern. 

- Doku-Training - Awareness: Know-Why, Know-What and Know-How zu [Dokumentationsmanagement](/docs/Glossar/D-Glossar/Dokumentationsmanagement/).
- Doku-Training - DSGVO mit Datenschutz und [Informationsklassifizierung](/docs/Glossar/I-Glossar/Informationsklassifizierung/), Urheberrecht, Nutzungs- und Verwertungsrechte. 
- Doku-Training - ISO9000 zu [Dokumentenlenkung](/docs/Glossar/D-Glossar/Dokumentenlenkung/), Informationsaufbewahrungspflichten, Unterweisungspflichten, ...



#### Sinnhaftigkeit einer Dokumentation 

Gegner der Dokumentation begründen ihre Meinung oft damit, dass Dokumentation zu viel Zeit kostet. Diese Ressourcen fehler wiederum an anderer Stelle. Weiters bringt Dokumentation enorme Kosten bei der Erstellung und Wartung mit sich. Ist eine Dokumentation nicht einfach und leicht verständlich, könne diese eher zu Missverständnissen führen als zu einer klaren Information.

Andererseits kann sich die Sinnhaftigkeit von Dokumentation begründen, dass sie kommunikationsunterstützend wirkt und dadurch explizites Wissen weitergegeben und so erhalten werden kann. Darüber hinaus werde so die Nachvollziehbarkeit und Historie von Prozessen und Projektes (zB. in Form von Tagebüchern) festgehalten, was wiederum Analysedaten für zeitliche Verzögerungen oder Änderungen bieten kann. Dokumentation bringt eine wesentliche Erleichterung in der Beauskunftung, Qualitätssicherung, Beweisführung und Evaluierung. Dokumentation führt grundsätzlich zu einer effizienteren Weiterentwicklung  und besseren Zusammenarbeit.

1. **Dokumentation dient der Information und Nachvollziehbarkeit** der geleisteten Arbeit. Aufzeichnung des Prozessablaufs stellt die Grundlage für die entsprechende Auskunftserteilung dar. Dokumentation dienen der Kommunikation.<br />
2. **Dokumentation dient der Qualitätssicherung**. Die Dokumentation stellt eine Gedächtnisstütze dar und ist so auch Hilfsmittel für die Analysen/Reflexion, die Kontrollen und Grundlage die allfälliger Nacharbeiten/Mängelbehebungen. Dokumentation dienen der Beweissicherung
3. **Dokumentation dient der Evaluation** der eigenen Tätigkeit und darüber hinaus der grundlegenden Wirksamkeitsforschung (Evaluation). Diese Rechenschaft kann durch den Empfänger eingefordert werden. Dokumentation dienen auch der Rechenschaftslegung.

#### Notwendigkeit von Dokumentationen

Auch wenn es keine direkte gesetzlichen Verpflichtungen zur Dokumentation gibt, so kann sie vor allem im Bereich von Haftungsfragen eine enorme  Rolle spielen. So kann sich auch die Geschäftsführung oder Führungskräfte eines Unternehmens durch eine Dokumentation vor Haftungsrisiken schützen. Denn Führungskräfte haben nach einigen Gesetzen Verpflichtungen nachzukommen, die sie nur durch bestehende Dokumentationen erfüllen kann:

- Gesetz zur Kontrolle und Transparenz im Unternehmensbereich (KonTraG)
- Spätestens aber bei vertraglichen Verpflichtungen zum Nachweis bestimmter Dokumentationen oder für den Erhalt von Zertifizierungen, kann man der Pflicht, Dokumente zu erstellen oder vorzuhalten, nicht mehr entgehen. Vor allem im Bereich der ISO 9001, der ISO 27001. 



### Ruleset schaffen

:::info

**Dokumentations-Konzepte mit der Dokumenzationsstruktur und -inhalten definieren.** 

:::

**Regelwerk schaffen - Dokumentationskonzepte definieren.** Beim Dokumentationsteam, Projektmitarbeitern und Prozessmitarbeitern und den Anwendern muss ein Verständnis über die Dokumentationsziele und Inhalte/Struktur, sowie den Dokumentationsprozesse und der involvierten funktionalen Rollen geschaffen werden.  Zur Arbeitsvorbereitung  gehören dabei:

1. die <u>Erstellung, Überarbeitung und Abstimmung der Praktiken zu Dokumentenlenkung</u> mit den funktionalen Rollen 
   1. Dokumenten-Empfänger (Document-User, Dokumenten-Benutzer, Dokumenten-Kunde, Dokumenten-Anwender), 
   2. Dokumenten-Verantwortlicher (Document-Owner, Documenten-Caretaker, Dokumenten-Verwerter), 
   3. Dokumenten-Autor (Document-Author, Dokumenten-Ersteller, Urheber), 
   4. Dokumenten-Prüfer (Document-Reviewer, Dokumenten-Inspektor, Dokumenten-Auditor), 
   5. Dokumenten-Manager (Document-Manager, Dokumenten-Verwalter). 
2. die <u>Erstellung, Überarbeitung und Abstimmung der Dokumentationsstrukturen</u>. Je nach [Dokumententyp](docs/Glossar/D-Glossar/Dokumententypen/) ist es zweckmässig sogenannte Dokumentenvorlagen (Templates, Dokumentationsarchitektur) zur inhaltlichen Strukturierung zu erstellen und bereitzustellen. Das [Dokumentationskonzept](/docs/Glossar/D-Glossar/Dokumentationskonzept/) legt die Struktur - den sogenannten inhaltlichen Aufbau der Dokumentation fest. Diese Struktur dient als Checkliste was, wo und wie zu dokumentieren ist. In der Praxis werden leider sehr häufig keine Vorgaben und Vorlagen (*Templates*) zur Dokumentation bereitgestellt. Einer sauber durchdachte Dokumentationsstruktur kann erheblich zu Steigerung der Qualität der technischen Dokumentation und zur (zielgruppenspezifischen) Anwenderzufriedenheit beitragen. 
3. die <u>Erstellung. Überarbeitung und Abstimmung eines Styleguides</u>. Die Definition des Brandings, der Logos sowie von Teaserbildern beeinflusst das Look and Feel der Content-Präsentation. **Vorgegebene Dokumentations-Styleguide** helfen dabei, eine hohe „innere Qualität“  der Dokumentationsquellen für die automatisierte Verarbeitung sicherzustellen. Im Styleguide werden ua. die Formatierungen, die Dateienbezeichnung und Ablagestrukturen sowie der Schreibstil definiert.  siehe [A1-Branding-Guide](https://brand.a1.group/styleguides/styleguide-digital/) 



### Skill-Set schaffen 

:::info

**Dokumentationsbefähigung im  Dokumentationsteam, Projektmitarbeitern, Prozessmitarbeitern sowie den Anwendern sicherstellen und Verhaltensveränderung absichern.**

:::

**People Readiness schaffen - Dokumentationsfähigkeiten und ausreichend Ressourcen sicherstellen**. Beim Dokumentationsteam, Projektmitarbeitern und Prozessmitarbeitern muss durch Schulungen ein effizienter Umgang mit den Dokumentationswerkzeuge und den Abläufen erreicht werden. Die skann aber erst gelingen, wenn ausreichend Ressourcen für die Dokumentationsfunktion abgestellt werden. 

1. Doku-Training - Foundation zur Schaffung eines Überblickes zu den Dokumentationsrichtlinien und Dokumentationskonzepten.
2. Doku-Training - Praktiker für Autoren, Reviewer und Anwender zur Sicherstellung, dass die Dokumenation des Zweck und die Anwendungserfordernisse erfüllen.
3. Doku-Training - Expert zur Vertiefung in der Praktiken des Dokumentations-Managements.  



### Tool-Set schaffen

:::info

**Dokumentationstools bereitstellen, betreiben, betreuen und beweisen **.

:::

Die **4Bs** stehen für **B**ereitstellung, **B**etrieb, **B**etreuung und **B**eweis der IT-Lösungen für das Dokumentationsmanagement.

**Tool-Set schaffen - Dokumentations-Tools bereitstellen und betreiben**. Beim Dokumentationsteam, Projektmitarbeitern und Prozessmitarbeitern muss durch Schulungen ein effizienter Umgang mit den Dokumentationswerkzeuge erreicht werden. Zur Arbeitsvorbereitung beim <u>Setup und der Konfiguration des Dokumentations-Toolsets</u> zur die Erstellung, Verwaltung und Publizierung des Contents in den gewünschten Ausgabeformates (html, PDF, eBooks, ...) für die Autoren, Reviewer und Owner gehören ua.: 

1. <u>Markdown-Editors</u> zur Erstellung von Dokumenten im Textform als Markdown oder als Markdown oder AsciiDoc-Dateien. Die Verwendung eines plain-text-Formats anstelle der Binärformate typischer Textverarbeitungen oder Office-Anwendungen. Nur so können Sie Ihre Dokumentation tatsächlich wie Code behandeln und automatisiert weiterverarbeitet werden. Die Nutzung des leichtgewichtige und seit vielen Jahren bewährte Markup-Format Asciidoc wird als Grundlage sehr häufig empfohlen. Im Gegensatz zum ebenfalls weit verbreiteten Markdown handelt es sich beim Markup-Format AsciiDoc um einen wirklichen Standard, ohne Fragmentierung durch unterschiedliche Dialekte. Asciidoc ist sowohl einfach als auch funktional mächtig und Sie können damit  alle Arten von Dokumentation erstellen, bei Bedarf sogar Bücher damit schreiben. Für dass Markup-Format AsciiDoc gibt es einen Open-Source-Konverter namens Asciidoctor, der Asciidoc in verschiedene Zielformate (etwa HTML oder DocBook, PDF) konvertieren kann und auf verschiedenen Plattformen läuft.
2. <u>Dokumenten-Repositories</u> als Versionsmanagement-Tool zur Verwaltung und Freigabe der Dokumentations-Assets. Bei Bedarf können auch Rückmeldungen / Feedbacks über dieses Tool abgewickelt werden. Ein **gemeinsames Dokumentations-Repository** für eine teamübergreifende Zusammenarbeit ist Grundvoraussetzung. Das Doc-Repository kann mit gängigen Versionsverwaltungtools wie etwa Markup-Format git, GitHub oder GitLab erreicht werden. Über das Versionsverwaltungtool ist jederzeit nachvollziehbar, wer, wann, welchen Content eingepflegt hat. Prüfungen und Freigaben sind sehr gut nachvollziehbar. Damit werden die Grundanforderungen der ISO9000 an die Informationslenkung bzw. Dokumentenlenkung erfüllt. 
3. <u>Dokumentations-Generators</u> zur Prüfung der Inhalte und Styles. Dieses Tool benötigt der Autor als auch der Reviewer. 
4. <u>Dokumentations-Portal</u> zur Veröffentlicheung der Dokumentations-Assets.
5. <u>Dokumentations-Analytics</u> zur Messung der Zugriffe und zur Beurteilung des Nutzens zu den Dokumentations-Assets.
6. <u>Dokumentations-Community</u> zur Erfassung von Rückmeldungen (Issues, Feedback, Review) und Verbesserungen zur Dokumentation.



## Wie sehen die Schritte bei Doc-as-Code Ansatz aus?

Voraussetzung: Doc-Infrastruktur ist vorhanden. Die Teilnehmer sind mit den Doc-Werkzeugen vertraut. Die Doc-Struktur ist definiert. 

Zur Ableitung der Schritte ist ein grundsätzliche Verständnis über den [Dokumenten-Lebenzyklus](/docs/Glossar/D-Glossar/Dokumentenlebenszyklus/) und die [Dokumentenlenkung](/docs/Glossar/D-Glossar/Dokumentenlenkung/) sinnvoll. 

1. **Dokumentationsquellen durch den Autor erstellen und „einchecken“**: Verschiedene Beteiligte bei IT-Projekten, etwa das Entwicklungsteam oder die Enterprise-Architekten oder Technical Writer, erstellen jeweils Teile der Dokumentation, sowohl in Textform als Markdown oder AsciiDoc-Dateien, als auch Diagramme (Bilder) und falls erforderlich anderen Medien (Video, Sound, Files). Durch das Versionsmanagement-Tool Git ist das  Versionsmanagement und die Zusammenführung der verschiedenen „Sources“  in das Tool bereit eingebaut. Durch das "Einckecken" der Dokumentationsquellen ist eine kollerabotive Teamarbeit sichergestellt. 
2. **Dokumentationsquellen durch den Reviewer prüfen und „mergen“**: Im Zug des inhaltlichen Reviews erfolgt eine Prüfung und ein Feedback  zu den eingereichten Änderungen. Ist die Prüfung erfolgreich werden die  aktualisierten „Sources“ in dem „Main-Branches“ der Versionsverwaltung  zusammengeführt. Damit stehen dann die jeweiligen Quellen für den  „Build“-Prozess" zur Verfügung. 
3. **Dokumentationsformate durch den Dokumenten-Owner freigeben und generieren** : Ein (manuelle und/oder automatisierte) Build-Prozess zur Generierung  der gewünschten Dokumentationsformate (html, PDF, Confluence, …)  kombiniert und konvertiert die einzelnen Dokumentationsteile zu den gewünschten Zielformaten. Nach erfolgreicher Erstellung der Zielformate können die Ergebnisse dann zur Freigabe vorgelegt sowie anschliessend veröffentlichen werden. 
4. **Dokumentation nutzen, updaten und Rückmeldungen liefern**: Der Anwender kann dann die bereitgestellte Dokumentation für seine Zweck nutzen. Durch die Feedback-Funktion, kann auch direkt eine Rückmeldung zur Dokumentation eingebracht werden. 
5. **Dokumentennutzung messen und auswerten.** Um die Wirksamkeit der Dokumentation und deren Nutzung zu beurteilen, werden sogenannte Analytical-Tools eingesetzt. Die Messen die Anzahl der Zugriffe, Verweildauer, eben deren Nutzung. Auswertung daraus liefern Rückschlüsse, welche Teile der Dokumentation besonders genutzt wurden. 



### Quick Links

- Source = https://techwritingmatters.com/2020/05/writing-docs-as-code
- Asciidoctor - https://asciidoctor.org/,
- GIT- https://git-scm.com/
- DocBook - https://docbook.org/
- A1-Branding-Guide - https://brand.a1.group/styleguides/styleguide-digital/



## Doc-Tool Set nach dem Doc-as-Code-Ansatz

### Dokumenten-Repository auf Git-Server

für die zentrale Speicherung und Verwaltung der digitalen Dokumentations-Assets sowie für das Versionsmanagement nach dem Doc-as-Code-Ansatz ist ein Dokumenten-Repository IT-Service erforderlich. Alle IT-Services bauen auf dem Konzept von [GIT](https://git-scm.com/) auf. Das Dokumentationsteam muss einen Zugriff auf das gemeinsames Dokumentations-Repository für eine teamübergreifende Zusammenarbeit haben. Mit GIT werden die Grundanforderungen der ISO9000 und ISO27000 hinsichtlich der Nachvollziehbarkeit bei Änderungen, Prüfungen und Freigaben erfüllt. 

1. [Gitea](https://gitea.io/) 
2. [GitBucket](https://gitbucket.github.io/)
3. [GitHub](https://github.com/) 
4. [GitLab](https://about.gitlab.com/) 



### Git-Client auf lokalen Rechner 

für die bequeme Synchronisation und Versionskontrolle vom Git-Repository-Server auf den lokalen Rechner ist ein [Git-Client](https://www.hostinger.com/tutorials/best-git-gui-clients/) erforderlich. 

1. [Github-Desktop](https://desktop.github.com/) für GitHub-Server
2. [MS Visual Studio Code](https://code.visualstudio.com/) mit Plugins für Markdown



### Markdown-Editors auf lokalen Rechner

zur Erstellung und Bearbeitung von digitalen Dokumenten im Textform wird ein Markdown-Editor auf dem lokalen Rechner benötigt. Für die Speicherung der Quelltexte wird häufig das [Markdown](https://www.markdownguide.org/) (.md) oder [AsciiDoc](https://asciidoc.org/)-Format verwendet. 

1. [Joplin](https://joplinapp.org/) is an open source note-taking app
2. [Typora-Editor](https://typora.io/) - bis [Version 0.11.18](https://typora.io/releases/all/) frei nutzbar
3. [MS Visual Studio Code](https://code.visualstudio.com/) mit Plugins für Markdown
4. Online Markdown Editor = https://markdown-editor.github.io/ 



### Dokumentations-Generators auf Production-Server

zur formellen Prüfung der Inhalte und Styles sowie zur Produkten des digitalen Contents im gewünschten Ausgabeformat wie etwa html für Websites, PDF-Format für Printdokumente, eBooks, etc. Dieses Tool ist zur laufenden Überprüfung der Ausgabe auch für den Autor und dem Reviewer hilfreich. Muss aber nicht unbedingt vorhanden sein.  

1. [Docusaurus](https://docusaurus.io/) - statischer Website Generator für technische Dokumentationen. 
2. [Docsify](https://docsify.js.org/) - zum Testen der Markdown-Strukturen auf dem lokalen Rechner



### Dokumentations-Portal auf Web-Server

zur Veröffentlichung der Dokumentations-Assets. Abhängig vom Ausgabeformat und den Anforderungen hinsichtlich den Zugriffsberichtigungen kommen hier unterschiedliche Lösungen zu Anwendung.

1. Webserver für html-Ausgaben. [nginx](https://nginx.org/) is an HTTP and reverse proxy server. 



### Dokumentations-Analytics auf Analyticy-Server

zur Messung der Zugriffe und zur Beurteilung des Nutzens zu den Dokumentations-Assets. Auf der Website des Dokumentenportal müssen die Datenschutz-Richtlichtlinie über die Anwendung von Analytics-Werkzeugen hinweisen. 

1. [Plausible](https://plausible.io/) is lightweight and open source web analytics. Arbeitet mit Docusaurus zusammen.



### Dokumentations-Community auf Kommunikations-Server

zur Erfassung von Rückmeldungen (Issues, Feedback, Review) und Verbesserungen zur Dokumentation.

1. CHAT-Service
