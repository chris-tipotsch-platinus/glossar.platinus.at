---
id: Dokumentenlebenszyklus
title: Dokumentenlebenszyklus 
tags: [Begriffe, IM, IT-Dokumentation]
---

# Dokumentenlebenszyklus 

*Document Lifecycle*

------

Dokumente durchlaufen einen Lebenzyklus. Der Dokumentenlebenszyklus bildet u.a eine wesentliche Grundlage für die [Dokumentenlenkung](/docs/Glossar/D-Glossar/Dokumentenlenkung/).



![Dokumentenlenkung_Lebenszyklus-Dokument](/img/Dokumentenlenkung_Lebenszyklus-Dokument.png)

Abbildung [Dokumentenlenkung_Lebenszyklus-Dokument](/img/Dokumentenlenkung_Lebenszyklus-Dokument.png)

## Auslöser

Auslöser/Trigger für den Dokumentenmanagement-Prozess sind ein (mündlicher oder schriftlicher) Auftrag zur Lieferung und Verwaltung eines bestimmtes Dokumentes. Idealerweise ist das Dokument im [Dokumentationskonzept](/docs/Glossar/D-Glossar/Dokumentationskonzept/) des jeweiligen [Dokumentenbereiches](/docs/Glossar/D-Glossar/Dokumentenklasse/) enthalten. 



## Prozessschritte

Allgemein durchläuft ein Dokument anhängig von den geforderten Dokumentenlenkungsstufen folgende Schritte:

### Dokumentenlieferung - Delivery 

1. **Dokument erstellen**. Bei Bedarf muss/kann eine neues Dokument in das Dokumentationskonzept eingeordnet werden. Dabei werden der Zweck und die Metadaten des Dokumentes beschrieben sowie die [Qualitätsmerkmale](/docs/Glossar/I-Glossar/Informationsqualitaet/) definiert. 
2. **Dokument bearbeiten**. In diesem Schritt wird das Dokument inhaltlich bearbeitet und das implizites Wissen der Autoren und Wissensträger in explizites Wissen transformiert. 
3. **Dokument prüfen**. Dabei kann zwischen der inhaltlichen und der formellen Prüfung unterschieden werden. Informelle Prüfungen erfolgen häufig in Form von Peer-Reviews. Bei formellen Prüfungen bzw. Inspektionen werden zusätzlich Prüfprotokolle mit den Prüfobjekten und Prüfkriterien zur Nachweisführung erstellt. 
4. **Dokument freigeben**. Das Dokument ist  vom Dokumentenverantwortlichen nachweislich freizugeben. Dabei sind die Gültigkeit sowie das Freigabedatum und die Lebensdauer des Dokuments bzw. die Wiedervorlage festzulegen. 
5. **Dokument produzieren**. Im Zuge des [Doc-as-Code-Ansatzes](/docs/Glossar/D-Glossar/Doc-as-Code/) wird nach der formellen Prüfung und Freigabe das Dokument bzw. die gelenkte Information im entsprechenden Formaten (html, PDF, ...) / Medien (Print, Digital) produziert und für die Veröffentlichung bereitgestellt.
6. **Dokument publizieren**. Das produzierte Dokument wird entsprechend des Freigabedatums publiziert bzw. veröffentlicht. Insbesondere rechnungslegungsbezogene Informationen (Publizitätspflicht, Offenlegungspflicht) sind nachweislich zu veröffentlichen. Bei Bedarf kann es sein, dass Informationen zu einem bestimmten Datum, ZB. Produktveröffentlichungen, Go-Live-Infos, etc. veröffentlicht werden. 
7. **Dokument verteilen.** Bei der Verteilung von Dokumenten können unterschiedliche Ansätze gewählt werden. Der "<u>Pull-Ansatz</u>" sieht vor, dass sie der Dokumentenempfänger das Dokument selbst abholt - als zieht. Moderne Dokumentenmanagementsysteme stellen idR. Funktionen zur automatischen Benachrichtung (Notification) zur Verfügung. Die  Benachrichtungseinstellungen können vom Dokumentenempfänger selbtst konfiguriert werden. Der "<u>Push-Ansatz"</u> sieht vor, dass der Dokumentenempfänger über Änderungen des Dokument aktiv informiert / benachrichtigt wird. 
   1. Dokument lesen. Abhängig von der Dokumentenlenkungsstufen kann es erforderlich sein, dass der Dokumentenempfänger die Übermittlung des Dokumentes bestätigen muss. Moderne Dokumentenmanagementsysteme stellen idR. Funktionen zur Nachweisbestätigung "Dokument gelesen und zur Kenntnis genommen."  zur Verfügung. 
   2. Dokument schulen. Abhängig von der Dokumentenlenkungsstufen kann es erforderlich sein, dass der Dokumentenempfänger eine Unterweisung bzw. Schulung des Dokumentes bestätigen muss. Moderne Dokumentenmanagementsysteme stellen idR. Funktionen zur Nachweisbestätigung "Dokument gelesen, Unterweisung erfolgt und zur Kenntnis genommen."  zur Verfügung. 

![Dokumentenmanagement-Prozess](/img/platinus-BPMN-Kollaborationsdiagramme_Dokumentenmanagement.png) 

Abbildung [Dokumentenmanagement-Prozess](/img/platinus-BPMN-Kollaborationsdiagramme_Dokumentenmanagement.png) (Quelle = platinus)



### Dokumentenverwaltung - Usage 

1. **Dokument anwenden**. In dieser Phase wird das Dokument von den Dokumentenempfänger genutzt. Moderne Dokumentenmanagementsysteme stellen idR. Funktionen für Rückmeldungen/Feedbacks/Verbesserungen zur Verfügung. Die Dokumentenempfänger bzw. Dokumentennutzer sollen aktiv aufgefordert werden, im Sinne der kontinuierlichen Verbesserung (KVP) - konstruktive Rückmeldungen zum Nutzen und der Qualität des Dokumenten beizutragen. Dieser Input bildet u.a. eine Input für die Revision des Dokumentes und ist auch ein Indikator für die "Organisationskultur"
2. **Dokument verwalten.** In dieser Phase werden Verwaltungsaufgaben wie Änderungen hinsichtlich Nutzerkreis, Änderungen bei der Informationsklassifizierung, Anfragen zum Datenschutz und Analysen und Auswertungen zur Nutzung des Dokumentes bearbeitet. Moderne Dokumentenmanagementsysteme stellen idR. Funktionen zur Dokumentenanylse zur Verfügung. Dabei werden u.a. Daten zur Anzahl der Aufrufe, Dauer der Nutzung, Perioden der Nutzung, etc. in Log-Files (Aufzeichungen) gesammelt und für Analysen bereitgestellt. 
3. **Dokument archivieren**. Auch Dokumenten haben ein End-of-Life. In dieser Phase wird: 
   1. durch die Wiedervorlage zur Überarbeitung des Dokumenten der Prozess neu angestossen und der Revisionsstand archivert,
   2. durch DSGVO-Anfragen das dokument deaktivert bzw. gelöscht. 



## Abschluss

Abschluss des Dokumentenmanagement-Prozess ist die Archivierung und der Dokumentenlebenszyklus-Status = End-Of-Life des jeweiligen Dokumentes.



## Ergänzungen

### Typische funktionale Rollen im Dokumentenlebenzyklus 

1. Dokumentenverantwortlichen (Document Caretaker, Document Owner)
2. Dokumentenersteller (Autor, Writer)
3. Dokumentenbearbeiter (Co-Autor, Mitgestalter)
4. Dokumentenprüfer (Reviewer)
5. Doumentenfreigeber (Approver)
6. Dokumentenempfänger (Dokumentenleser, Dokumentenanwender, Dokumentennutzer, Document User)
7. Dokumentenmanager (Document Manager, Dokumentenlenker, Informationsmanager, Wissensgebietsmanager)

