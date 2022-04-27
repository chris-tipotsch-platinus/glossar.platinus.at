---
id: Virtualisierung
titel: Virtualisierung
tags: [Begriff, IM]
---

# Virtualisierung

#### Was ist Virtualisierung?

Bei Virtualisierung handelt es sich um eine **Abstraktion physischer IT-Ressourcen**. Abstrahieren lassen sich Hardware- und Software-Komponenten. Eine im  Rahmen der Virtualisierung erstellte IT-Komponente wird als *virtuelle* oder *logische Komponente* bezeichnet und kann genauso verwendet werden wie ihr physisches Pendant.

Der zentrale Vorteil der Virtualisierung ist die **Abstraktionsschicht** zwischen der physischen Ressource und dem virtuellen Abbild. Diese ist  Grundlage diverser Cloud-Services, die im Unternehmensalltag zunehmend  an Bedeutung gewinnen. Abzugrenzen ist Virtualisierung von den (z. T.  sehr ähnlichen) Konzepten *Simulation* und *Emulatio*n.

Wer sich mit Virtualisierung beschäftigt, stößt unweigerlich auf die Begriffe *Simulation* und *Emulation*, die oft synonym verwendet werden, sich technisch jedoch sowohl voneinander als auch vom Konzept der Virtualisierung unterscheiden.

- **Simulation:** Als Simulation bezeichnet man die vollständige Nachbildung eines Systems mittels Software. „Vollständig“ heißt in diesem Fall, dass nicht nur die Funktionen im Zusammenspiel mit anderen Systemen imitiert,  sondern alle Systemkomponenten sowie deren innere Logik nachgestellt  werden. Simulatoren kommen zur Anwendung, um Programme, die eigentlich  für ein bestimmtes System entwickelt wurden, zu Analysezwecken auf einem anderen System kompilieren zu können. Simulation ermöglicht es  beispielsweise, Software für antiquierte Großrechner auf modernen  Rechenplattformen auszuführen. Im Gegensatz zur Emulation ist Simulation nicht für den Praxiseinsatz vorgesehen. Als Beispiel bietet sich der  Flug-Simulator an. Dieser simuliert einen Flug, bringt den Piloten aber  nicht ans Ziel. Ein populärer Simulator ist der [iPhone Simulator in XCode](https://www.youtube.com/watch?v=e7XBvDPkkCs). Er kommt beispielsweise zum Einsatz, um das Design mobiler Webseiten auf dem Desktop zu testen.
- **Emulation:** Während Simulation darauf abzielt, Systeme nachzubilden, stellt Emulation die Funktionen von Hardware- oder Software-Komponenten bereit, nicht jedoch deren innere Logik. Ziel der Emulation ist es, mit dem  nachgebildeten System dieselben Ergebnisse zu erzielen wie mit dem  realen Pendant. Im Gegensatz zum Simulator kann ein Emulator das  nachgebildete System daher komplett ersetzen. Ein Flug-Simulator, der den Piloten tatsächlich ans gewünschte Ziel bringt, wäre somit ein Flug-Emulator. Ein prominentes Software-Projekt, das diesem Konzept  entspricht, ist der [Android Emulator in Android Studio](https://developer.android.com/studio/run/emulator.html).



Virtualisierung ist die Bezeichnung für die Erzeugung virtueller, d. h. nicht physikalischer, Ressourcen auf einem Computersystem. Hierbei  wird durch die Emulation von Hardware, eines Datenspeichers, eines  Betriebssystems oder von Netzwerkresourcen eine zusätzliche Abstraktionsschicht zwischen einer Applikation (zum Beispiel einem  Betriebssystem) und einer Ressource (zum Beispiel der Hardware, über die  üblicherweise das Betriebssystem die exklusive Kontrolle hat)  hergestellt. Mittels dieser Abstraktionsschicht werden also der Anwendung andere physische Gegebenheiten vorgegeben als tatsächlich vorhanden sind, indem die eigentliche Hardware durch diese Schicht  emuliert wird. Man unterscheidet zwischen Software- und  Hardwarevirtualisierung.

Ein Beispiel für die Software Virtualisierung ist die **Betriebssystem Virtualisierung**. Innerhalb eines  geschlossenen Containers (jails) wird eine virtuelle Laufzeitumgebung  für Computerprogramme zur Verfügung gestellt, die eine Teilmenge des  Gastbetriebssystems darstellt. Hierbei ist es im Gegensatz zur System  Virtualisierung durch einen Hypervisor allerdings nicht möglich ein anderes Betriebssystem als das Wirtssystem zu betreiben. Insbesondere  können in den Containern keine anderen Kernel bzw. Treiber geladen  werden.

Ein anderes Beispiel ist die **Anwendung-Virtualisierung**  (application virtualization). Dabei werden die Server- oder Desktopanwendungen, ohne einer lokalen Installation zu bedürfen, lokal  ausgeführt. Die virtuelle Anwendung wird eingebettet in eine virtuelle Umgebung, die Dateien, Registry-Einträge und andere Komponenten zur Verfügung stellt. Diese werden von der Anwendung benötigt, damit  Konflikte mit dem Betriebssystem oder anderen Applikationen vermieden  werden.

Ein Beispiel für die **System Virtualisierung** auf der Hardwareebene ist die Partitionierung einer einfachen großen Ressource  wie des Festplattenspeichers oder der Netzbandbreite in mehrere kleine Ressourcen gleichen Typs. Das wird insbesondere bei Storage Networks auch als Zoning bezeichnet.



#### Welche Typen der Virtualisierung gibt es?

Im RZ liegt der Fokus auf die Servervirtualisierung. Viele andere IT-Infrastrukturelemente können ebenfalls virtualisiert werden  und bieten signifikante Vorteile für IT-Manager (insbesondere) und das Unternehmen als Ganzes. In diesem Abschnitt werden die folgenden Arten von Virtualisierung angesprochen:

- Desktopvirtualisierung - Virtual Desktop Infrastructure (VDI) 
- Netzvirtualisierung - Software-Defined Networking (SDN)
- Speichervirtualisierung
- Datenvirtualisierung
- Anwendungsvirtualisierung
- RZ-Virtualisierung
- CPU-Virtualisierung
- GPU-Virtualisierung
- Linux-Virtualisierung
- Cloud-Virtualisierung



**Virtualisierung** kommt zwar häufig für die Bereitstellung der Infrastruktur als Cloud-Service zum Einsatz, ist aber keine zwingende Voraussetzung. Um die  Infrastruktur mandantenfähig anzubieten, stellt die Virtualisierung eines von mehreren Modellen dar. Hardwareressourcen können den Mandanten auch exklusiv reserviert werden. Infrastructure as a Service wird von vielen namhaften IT-Unternehmen wie IBM, Microsoft, Oracle oder Amazon angeboten.

:::info

<h2>Virtualization as a Service (VaaS) ist ein Teil von IaaS, der eine effizientere Nutzung der physischen Computer-Hardware ermöglicht und die Grundlage für das Cloud Computing darstellt. </h2>

:::

Bei der Virtualisierung wird Software verwendet, um eine  Abstraktionsebene über der Computer-Hardware zu schaffen, die es  ermöglicht, die Hardware-Elemente eines einzelnen Computers -  Prozessoren, Arbeitsspeicher, Speicher und mehr - in mehrere virtuelle  Computer zu unterteilen, die allgemein als virtuelle Maschinen (VMs)  bezeichnet werden. Jede VM führt ihr eigenes Betriebssystem (OS) aus und verhält sich wie ein eigenständiger Computer, obwohl sie nur auf einem  Teil der zugrunde liegenden Computer-Hardware ausgeführt wird.

