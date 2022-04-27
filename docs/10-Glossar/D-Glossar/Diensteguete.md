---
id: Dienstguete
titel: Dienstgüte
tags: [Begriffe, IM]
---

# Dienstgüte - Quality of Service (QoS)

![QoS](/img/QoS-Modell-der-ITU.png)

Unter **Netzwerk-Dienstgüte**, **Quality of Service (QoS)**, versteht man alle Verfahren, die den Datenfluss in lokalen Netzen (LAN) und Weitverkehrsnetzen (WAN) so beeinflussen, dass der Dienst mit einer festgelegten Qualität beim Empfänger ankommt. Es handelt sich also um die Charakterisierung eines Dienstes, der für den Nutzer unmittelbar »sichtbar« ist und dessen Qualität er messen kann. Technisch handelt es sich um eine Parametrisierung von Protokollen zur Bestimmung des Übertragungsverhaltens für bestimmte Dienste.

Im Zusammenhang mit der Dienstgüte sei auf die historische Entwicklung der Netze und Dienste hingewiesen, die sich von der Übertragung zeitunkritischer Daten, wie sie bei Filetransfer oder der Übertragung von E-Mails anfallen, hin zu Netzen mit zeitkritischen Daten entwickelt haben: Internettelefonie, Webkonferenzen und Live-Streaming bestimmen maßgeblich die Datenstruktur.

:::note

Um den Anforderungen an die Übertragung von zeitkritischen Daten gerecht zu werden, mussten die die Übertragung beeinflussenden Faktoren wie die Latenz, der Jitter, der Paketverlust, die Bandbreite oder die Verfügbarkeit in definierten Grenzen gehalten werden. 

:::

Da es für die Dienstgüte keine allgemein gültige Definition gibt,  entstanden mehrere Interpretationen, die nicht immer miteinander in  Einklang stehen. So hat die internationale Fernmeldeunion (ITU) eine Definition erarbeitet, ebenso das Internet Engineering Task Force (IETF) und das ATM-Forum. Aber auch von der Open Systems Interconnection (OSI) gibt es eine Aussage zur Dienstgüte. 

1. Die internationale Fernmeldeunion (ITU) hat ein hierarchisches QoS-Modell entwickelt, das die technischen Aspekte eines Dienstes ebenso berücksichtigt wie die Verfügbarkeit und die Bedienung der Endgeräte. Darüber hinaus hat die ITU-T in der Empfehlung Y.1541 acht QoS-Klassen für verschiedene Anwendungen definiert. 
2. Die IETF hat für die Echtzeitübertragung im Internet mehrere Ansätze entwickelt. Dazu gehören das Protokoll IPv6, in dessen Header das Flow-Label-Feld definiert wurde. Daneben gibt es die Priorisierung des Datenverkehrs mittels DiffServ und die Reservierung der Bandbreite mittels IntServ. Mit diesen Verfahren können Echtzeitdaten auch über IPv4 transportiert werden, wobei die Verbindungen in Klassen aufgeteilt und die Ressourcen für eine bestimmte Klasse reserviert sind. Darüber hinaus kommt Multi-Protocol Label Switching (MPLS) zur Priorisierung des Datenverkehrs auf dem kürzesten Weg zum Einsatz, Subnet Bandwidth Manager (SBM) für globales QoS und Queuing für die priorisierte Verarbeitung von Echtzeitdaten. 
3. Bei ATM werden mit der Dienstgüte die Service- Parameter einer ATM-Verbindung spezifiziert. Dazu gehören u.a. die Zellenverlustrate und die Zellenverzögerung. 
4. Bei der Open Systems Interconnection (OSI) werden im OSI-Referenzmodell bestimmte Dienste definiert, die von der Vermittlungsschicht der übergeordneten Transportschicht angeboten werden. Bei den OSI-Protokollen der Transportschicht werden mit dem Verbindungsaufbau Dienstgüteparameter vereinbart. 
