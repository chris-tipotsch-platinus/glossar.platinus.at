---
id: Hosting
title: Hosting
tags: [Begriffe, IM]
---

# Host-Discovery

Host-Discovery bezeichnet Maßnahmen und Methoden, um alle erreichbaren Systeme in einem Netzwerk zu identifizieren. 

In der Regel versucht man IT-Komponenten zu identifizieren, die über eine **IP-Adresse erreichbar sind**.

Während man im ersten Schritt versucht alle Hosts eines Netzwerks zu identifzieren (*Network Scan*), erfolgt im Anschluss die detaillierte Untersuchung eines Host, um dessen Hardware, Betriebssystem, laufende Dienste und offene Ports herauszufinden (*Host Scan*).

Ein guter Netzwerk-Administrator weiß, welche Hosts sich im eigenen Netzwerk befinden. In einem kleinen lokalen Netzwerk  wird man sich allerdings keine Mühe machen, eine Liste händisch zu  pflegen. Insbesondere deshalb, weil Clients ihre IPv4-Adresse in der  Regel per DHCP bekommen. Doch gerade deshalb ist es wichtig, Mittel und  Wege zu kennen, um alle genutzte IP-Adressen zu ermitteln. Es geht dabei auch um die Fragestellung „Welche Geräte sind im lokalen Netzwerk  aktiv?“. Auf der anderen Seite möchte man als Administrator vielleicht  feststellen, welche IP-Adressen generell vergeben sind, um zum Beispiel  eine freie IP-Adresse fest vergeben zu können.

## Übersicht: Methoden und Tools für Host-Discovery

Um sich einen Überblick über alle im lokalen Netzwerk befindlichen IP-Hosts zu machen gibt es verschiedene Tools. Das heißt, für das Host-Discovery gibt es mehrere Wege. Probieren Sie die verschiedenen Tools aus und vergleichen Sie die Ergebnisse.

1.  Host-Discovery mit ARP (Network Scan)
2.  Host-Discovery mit IP (Network Scan)
3.  Host-Discovery mit ARP-SCAN (Network Scan)
4.  Host-Discovery mit Netdiscover (Network Scan)
5.  Host-Discovery mit NMAP (Host und Network Scan)
6.  Host-Discovery mit FPING (Host und Network Scan)
7.  Host-Discovery mit Ping mit Windows und Linux

Host-Discovery beschränkt sich nicht auf diese Tools. Denkbar wäre die Nutzung weiterer Tools.



### Root-Rechte

Es empfiehlt sich mit Root-Rechten zu arbeiten.

```
sudo -i
# vorherigen Sitzung mit "exit" zurückkehren.
exit
```

### Host-Discovery mit ARP (Network Scan)

„arp“ ist ein Kommandozeilen-Tool, dass standardmäßig vorhanden sein  sollte. Es sollte sowohl unter Windows, Linux als auch macOS  funktionieren. „arp“ ist ein vielseitiges Tool, mit dem man den  ARP-Cache abfragen kann. Mit dem Einsatz der richtigen Optionen, bekommt man die richtigen Informationen aller erreichbaren Hosts, die auf Schicht 2 des OSI-Schichtenmodells miteinander verbunden sind.

```
arp
arp -n
arp -a
```

### Host-Discovery mit IP (Network Scan)

Das Tool „ip“ ist praktisch bei jedem Linux standardmäßig dabei. Das  heißt, man braucht es nicht nachträglich zu installieren. Es gehört zur  Grundausstattung. Um an die IP-Adressen aller Hosts im gleichen Netzwerk zu kommen gibt es verschiedene Möglichkeiten. Ob  die Ausgabe von „ip“ sinnvoll und aussagekräftig ist hängt von der  Netzwerk-Umgebung ab. Es gibt Situationen, bei denen „ip“ nur sehr  wenige Hosts liefert, obwohl es  eindeutig mehr sein müssten. In der Regel wird „ip“ nicht alle  IP-Adressen auflistet. „ip“ hat allerdings den Vorteil, dass es auch  dann IP-Adressen liefert, wenn andere Tools versagen. Zum Beispiel, weil der Netzwerk-Administrator den aktiven Datenverkehr entsprechender  Tools verhindert. „ip“ agiert rein passiv und ermittelt die Informationen, die im  ARP-Cache enthalten sind. Der Inhalt des ARP-Caches bildet sich aus dem  allgemeinen Netzwerk-Verkehr, der auf dem betreffenden Host eingeht. Die folgenden Befehle listen alle IPv4- und IPv6-Adressen und die dazugehörige MAC-Adressen auf:

```
ip -4 neighbor show
ip -4 n
ip -6 neighbor show
ip -6 n
```

### Host-Discovery mit ARP-SCAN (Network Scan)

ARP-Scan ist eine Möglichkeit um Host  auf Schicht 2 (OSI-Schichtenmodell) in einem Ethernet-Netzwerk oder WLAN (nach IEEE 802.11) zu finden. Installieren, falls es noch nicht  installiert ist.

```
apt-get install arp-scan
```

Anschließend lässt man einen Netzwerk-Scan durchlaufen. Der dauert in  der Regel nur ein paar Sekunden. Bei größeren Netzwerken (Klasse A und  B) sollte man das besser lassen. Es sei denn, man ist dazu befugt.

```
arp-scan --localnet
arp-scan -l
```

Mit ARP-Scan werden im aktuellen Subnetz an alle IP-Adressen einen ARP-Request. Das Ergebnis ist eine Liste aller antwortenden Hosts. Betrachten Sie die Ausgabe als Momentaufnahmen, die sich nach  mehrmaliger Wiederholung ändern kann. ARP-SCAN erzeugt eine nahezu  vollständige Liste, die sich leicht in eine Excel-Tabelle einfügen  lässt.

Für eine übersichtliche Darstellung aller Hosts in einem bestimmten Subnetz mit MAC-Adresse und Interface-Hersteller eignet sich folgendes Kommando:

```
arp-scan -vN -I eth0 192.168.1.0/24
# Darstellung aller Hosts, deren Hardware eine bestimmte Hersteller-Kennung hat (hier Raspberry Pi):
arp-scan -vN -I eth0 192.168.1.0/24 | grep "b8:27:eb"
```

### Host-Discovery mit Netdiscover (Network Scan)

Netdiscover ist ein Tool für das Host Discovery unbekannter Netze. Es hat einen aktiven und einen passiven Modus. Der  passive Modus ist deshalb interessant, weil das Tool dann keinen  Datenverkehr erzeugt, sondern einfach nur lauscht. Netdiscover stammt noch aus einer Zeit, als Wardriving cool war und man  von offenen und ungeschützten WLANs möglichst schnell eine Liste  erreichbarer Geräte haben wollte. Heute ist Wardriving kein Thema mehr,  weil es keine offenen WLANs mehr gibt. Und deshalb ist Netdiscover auch  in Vergessenheit geraten.

Trotzdem ist Netdiscover gerade wegen seinem passiven Modus für verstecktes Host Discovery interessant. Denn man kann Netdiscover nicht nur in WLANs, sondern auch in geswitchten Netzwerken einsetzen.

```
# Netdiscover installieren (falls nicht vorhanden):
apt-get install netdiscover

Netdiscover im passiven Modus:

netdiscover -i eth0 -p
netdiscover -i wlan0 -p
```

Im passiven Modus sammelt Netdiscover ARP-Requests/-Replys ein. Bis man eine vollständig Liste aller Hosts bekommt, kann es natürlich einige Zeit dauern. Das hängt im  wesentlichen vom Datenverkehr im lokalen Netzwerk ab. Allerdings ist das die unauffälligste Methode, um im verborgenen Host Discovery zu betreiben. Die Ausführung von Netdiscover beendet man mit Strg + C.

```
# Netdiscover im aktiven Modus:
netdiscover -i eth0 -r 192.168.1.0/24
netdiscover -i wlan0 -r 192.168.1.0/24 -c 3
```

Im aktiven Modus sendet Netdiscover selbst ARP-Pakete aus, um Geräte zu  finden. Dabei sollte man die Suche auf ein bestimmtes Subnetz mit der  Option „-r“ eingrenzen. Weil in WLANS eher mal Paketverluste auftreten  können, lässt man Netdiscover den Scan mit der Option „-c 3“ dreimal  durchführen.

### Host-Discovery mit NMAP (Host und Network Scan)

NMAP ist ein Netzwerk-Scanner, der beispielsweise anzeigt, welche Teilnehmer sich noch im lokalen Netzwerk befinden.

```
# Installieren, falls NMAP noch nicht installiert ist.
apt-get install nmap
```

NMAP ist sehr flexibel und erwartet die Angabe einer IP-Adresse, eines IP-Adressblocks oder eines Hostnamens. Es kann also nicht nur die Teilnehmer des eigenen lokalen Netzwerks  ermitteln, sondern auch darüber hinaus. Der Adressbereich des lokalen  Netzwerks ist nicht immer gleich. Hier nehmen wir an, dass es  192.168.1.0 ist. Hier wollen wir den Adressblock von 192.168.1.1 bis  192.168.1.255 scannen:

```
nmap -sP -oG - 192.168.1.0/24
```

Dieses NMAP-Kommando ist ein TCP-Ping-Scan („-sP“). Es ist eigentlich  kein Ping-Scan, sondern eher eine sinnvolle Erweiterung zu einem  klassischen Ping. Der TCP-Ping-Scan kombiniert den klassischen Ping  (ICMP-Echo) mit dem TCP-SYN- und TCP-ACK-Scan auf die Ports 443 und 80.  Befindet sich der Host im eigenen  Subnetz, dann arbeitet der TCP-Ping-Scan nicht mit ICMP-Nachrichten,  sondern mit ARP-Requests. Die Kommando-Option „-oG -“ sorgt für eine  übersichtliche Darstellung.

Dieses NMAP-Kommando versucht alle IP-Adressen im Adressblock zu  kontaktieren und erzeugt dann eine Liste aller erreichbaren IP-Adressen  mit den Hostnamen der Computer. Diese Liste ist allerdings unvollständig und kann deshalb nur als Momentaufnahme angesehen werden.

```
nmap -sP -sn -oG - 192.168.1.0/24
```

Die Option „-sn“ führt den Scan ohne Port-Scan aus. Weniger bekannt ist  die NMAP-Option „-sL“. Zumindest wird sie in einschlägigen Anleitungen,  Tutorials und der Literatur selten erwähnt. Eigentlich unverständlich,  denn der List-Scan von NMAP ist eine ziemlich coole Sau.

```
nmap -sL 192.168.1.0/24
```

Der List-Scan zählt einfach alle IP-Adressen im angegebenen Subnetz auf und führt für jede Adresse eine Reverse-DNS-Abfrage durch. Ein Grund für diesen Scan ist den IP-Adressbereich auf Korrektheit zu prüfen, bevor man sich an falschen Hosts zu schaffen macht. Man kann den Ping-Schritt auch auslassen, indem man  den Ping ausschaltet („-sL -PN“). Das besonders Tolle dabei ist, dass es nichts unverdächtigeres gibt, als DNS-Datenverkehr. Außerdem werden die Hosts nicht direkt kontaktiert und können somit auch nicht bemerken, dass sie ausspioniert werden.

Die Hostnamen selber geben häufig Auskunft über die Funktion eines Hosts. Man kann auf diese Weise schneller lohnenswerte Ziele identifizieren.  Eine Variante davon ist das folgende Kommando, bei dem eine  Namensauflösung im lokalen Netzwerk durchgeführt wird.

```
nmap -sP -PN -R --dns-servers {DNS-SERVER} 192.168.1.0/24 | grep -i .local
```

Alle NMAP-Kommandos sind, wenn sie im lokalen Netzwerk angewendet  werden, nicht besonders zuverlässig. Gemeint ist, dass das Ergebnis  nicht alle Hosts auflistet. Bei der  Ausführung der Kommandos sieht das Ergebnis immer wieder anders aus. Das Ergebnis ist also nur eine Momentaufnahme. Deshalb empfiehlt es sich in einem lokalen IP-Netzwerk parallel mit „arp“, „ip“ oder „arp-scan“ zu  arbeiten. Diese Kommandos sind beim Auffinden aller Hosts zuverlässiger.

### Host-Discovery mit FPING (Network Scan)

FPING sendet mehrere ICMP-Echo-Requests ins Netzwerk. Im Gegensatz zu  anderen Ping-Kommandos arbeitet es mit parallelen Pings, weshalb PFING  Ergebnis schneller liefert.

```
# Installieren, falls es noch nicht installiert ist.
apt-get install fping
```

FPING ermittelt IP-Adressen und Hostnamen:

```
fping -aAnqs -g 192.168.1.0/24 -r 1
```

## Fazit: ARP, IP, NMAP, ARP-SCAN, Netdiscover oder FPING

Alle Tools arbeiten unterschiedlich, weil sie für unterschiedliche  Zwecke entwickelt wurden. Das Kommando IP arbeitet passiv und entnimmt  seine Informationen aus dem ARP-Cache des Hosts an dem man das Kommando ausführt. Das kann die erste Aktion sein, um  ein Netzwerk verdeckt auszukundschaften. Meistens liefert IP nicht viele Adressen. Manchmal ist IP aber auch das einzige Tool das funktioniert,  wenn im Netzwerk Mechanismen arbeiten, die aktives Host-Discovery verhindern. NMAP ermittelt IP-Adressen und dazugehörige Hostnamen. Dazu muss NMAP aktiv verschiedene Anfragen ins Netzwerk schicken und  die Antworten auswerten. Das nimmt einige Zeit in Anspruch. Da die  Arbeitsweise von NMAP bekannt ist, lässt sich die Arbeit mit NMAP durch  Filter und IDS unterbinden.

ARP-SCAN und Netdiscover arbeiten auf der MAC-Schicht und ermitteln  MAC-Adressen und die dazugehörigen IPv4-Adressen. Dabei stellt ARP-SCAN  und Netdiscover (aktiver Modus) einfach ARP-Anfragen ins Netzwerk und  wertet die Antworten aus. Diese Arbeitsweise ist weniger auffällig als  NMAP, weil ARP-Anfragen in einem Netzwerk normal sind. Der aktive Modus  von Netdiscover ist dabei nicht besser als ARP-SCAN. Netdiscover ist nur wegen seinem passiven Modus interessant, um unentdeckt zu bleiben.  Allerdings kann es mehrere Stunden dauern, bis eine vollständige Liste  zusammen kommt. Absolut unschlagbar ist Netdiscover in WLANs.

FPING ist nichts weiter als ein Ping, der auf ICMP-Echo-Requests  basiert. Dabei erzeugt auch FPING Netzwerk-Verkehr, der gefiltert werden kann.

Beim Host-Discovery ist das Tool das richtige, dass die gewünschten Informationen liefert.  Die Frage ist, brauche ich neben der IP-Adresse auch den Hostnamen oder die MAC-Adresse des Hosts. Dabei muss man berücksichtigen, dass die Informationen der  verschiedenen Tools ganz unterschiedliche Qualitäten haben können. Zum  Beispiel bei der Zuordnung von MAC-Adresse zum Gerätehersteller und auch bei der Ermittlung des Hostnamens.

Wichtig ist auch, egal welches Tool oder Kommando, es ist immer eine  Momentaufnahme eines Netzwerks, das sich jederzeit ändern kann. In der  Regel muss man sich mehrerer Tools und jedes Tool mehrmals bedienen, um  umfassende und qualifizierte Information zu bekommen.