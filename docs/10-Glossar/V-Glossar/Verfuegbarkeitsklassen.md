---
id: Verfuegbarkeitsklassen
titel: Verfügbarkeitsklassen
tags: [Begriff, IM, Verfügbarkeit]
---

# Verfügbarkeitsklassen

Klassifizierung von hochverfügbaren Systemen 

------

Ab welchem Punkt ein System als hochverfügbar anzusehen ist, wird je  nach Definition der Verfügbarkeit unterschiedlich beantwortet. Eine erste Hilfe bietet die Einteilung in sogenannte Verfügbarkeitsklassen, hierfür bieten sich zwei bekannte Verfahren an. Einmal die  Klassifizierung nach der **Availability Environment Classification** (AEC),  aufgestellt von der Harvard Research Group (HRG) und eine Einteilung in **Verfügbarkeitsklassen im „9er System“,** basierend auf der erreichten  Verfügbarkeit im Jahres- oder Monatsmittel (in Prozent), hierbei wird im Regefall der Grad der erreichten 9en, beginnend bei 99% (Klasse 2)  verwendet. Die maximal tolerierbare Ausfallzeit hilft dabei, die eigenen Anforderungen an ein System zu definieren und somit den erforderlichen  Grad der Hochverfügbarkeit eines Systems bereits in der Planungsphase  festzulegen. 



## Verfügbarkeitsklassen (nach „9er System“)

Der Einteilung der Verfügbarkeitsklassen (VK) nach diesem System liegt die maximal zulässige Dauer der Ausfallzeit in vereinbarten Zeitintervallen – im Regelfall pro Monat oder Jahr – zu Grunde. Die  Anzahl der Neunen in prozentualer Angabe der Verfügbarkeit, kennzeichnet hier die Verfügbarkeitsklasse. Nach diesem Verfahren spricht man bei 99 Prozent von einer Verfügbarkeitsklasse 2. Im Regelfall spricht man bei  einer Verfügbarkeit von 99,9 Prozent (Klasse 3) oder höher von einem  hochverfügbaren System.

| VK   | Verfügbarkeit | Max. Ausfallzeit pro Jahr      |
| ---- | ------------- | ------------------------------ |
| 2    | 99 %          | < 3 Tage 15 Stunden 40 Minuten |
| 3    | 99,9 %        | < 8 Stunden 46 Minuten         |
| 4    | 99,99 %       | < 53 Minuten                   |
| 5    | 99,999 %      | < 6 Minuten                    |
| 6    | 99, 9999 %    | weniger als 1 Minute           |

Grundlage der Berechnung: 365 Tage und 24 Stunden pro Tag; die entsprechende maximale Ausfallzeit ist aufgerundet.

### Das 9er System des BSI

Erwähnenswert ist zudem die Klassifizierung des BSI (Bundesamt für  Sicherheit in der Informationstechnik), dass auf einem 9er-System  beruht, jedoch zur besseren Abgrenzung verschiedener Szenarien die  Verfügbarkeitsklasse 0 hinzugefügt hat. Wie beim klassischen 9er-System, dienen auch beim System des BSI die Neunen als Unterscheidungsmerkmal.  Allerdings ergibt sich durch die Hinzunahme der Verfügbarkeitsklasse 0  eine Verschiebung im Vergleich zum klassischen 9er-System und es ist  nicht mehr die tatsächliche Anzahl der Neunen ausschlaggebend für die  Nummerierung der Verfügbarkeitsklasse. Da das BSI-System als  Mindeststandard für alle Rechenzentren des Bundes gilt, wird dieser  ebenfalls häufig in der Privatwirtschaft angewendet, um Verfügbarkeiten  entsprechend zu Klassifizieren.

| VK   | Verfügbarkeit                   | Max. Ausfallzeit pro Jahr                               |
| ---- | ------------------------------- | ------------------------------------------------------- |
| 0    | Ohne zugesicherte Verfügbarkeit |                                                         |
| 1    | 99,0 %                          | < 3 Tage 15 Stunden 40 Minuten                          |
| 2    | 99,9 %                          | < 8 Stunden 46 Minuten                                  |
| 3    | 99,99 %                         | < 53 Minuten                                            |
| 4    | 99,999 %                        | < 6 Minuten                                             |
| 5    | Disaster Tolerant               | Funktion muss unter allen Umständen gewährleistet sein. |

Bei 7 x 24 Std. Betriebszeit

 

## Availability Environment Classification (AEC)

Die Harvard Research Group klassifiziert die Hochverfügbarkeit in der Availability Environment Classification (AEC). Sechs Klassen (AEC-0 bis AEC-5) ermöglichen dabei eine transparente und schnelle Zuordnung der  Anforderungen an einzelne Komponenten oder ein ganzes System.

 

| HRG-Klasse | Bezeichnung       | Erklärung                                                    |
| ---------- | ----------------- | ------------------------------------------------------------ |
| AEC-0      | Conventional      | Funktion darf unterbrochen werden und Datenintegrität ist nicht essentiell |
| AEC-1      | Highly Reliable   | Funktion darf zwar unterbrochen werden, die Datenintegrität muss jedoch immer gewährleistet sein |
| AEC-2      | High Availability | Funktion darf zur Hauptbetriebszeit nur minimal oder innerhalb festgelegter Zeiten unterbrochen werden |
| AEC-3      | Fault Resilient   | Funktion darf maximal außerhalb festgelegter Betriebszeiten / Hauptbetriebszeiten unterbrochen werden. |
| AEC-4      | Fault Tolerant    | Funktion muss jederzeit aufrechterhalten werden, 24/7-Betrieb (24 Stunden, 7 Tage die Woche). |
| AEC-5      | Disaster Tolerant | Funktion muss auch unter ungewöhnlichen Umständen (z.B. im Katastrophenfall) gewährleistet sein |