---
id: Anforderungen
titel: Anforderungen
tags: [IT-Begriff]
---

# Anforderungen - Requirements

Der zentrale Begriff im *Requirements Engineering* sind die **Anforderungen** – auch als *Requirements* bezeichnet. Diese können folgendermaßen definiert werden:

1.  „Anforderungen sind Aussagen über eine Eigenschaft oder Leistung eines Produktes, eines Prozesses oder der am Prozess beteiligten Personen.“
2.  „Eine Anforderung ist eine Bedingung oder Fähigkeit, die ein Benutzer benötigt, um ein Problem zu lösen oder ein Ziel zu erreichen.“
3.  „Eine Anforderung ist eine Eigenschaft, über die ein Produkt verfügen muss, um für die Interessenvertreter von Nutzen zu sein.“

:::info

**Anforderungen** sind Aussagen über zu erfüllende  igenschaften oder zu erbringende Leistungen eines Systems (bzw. Produkts), eines Prozesses oder der am Prozess beteiligten Menschen. Typischerweise umfassen sie Informationen darüber, warum ein System entworfen wird, was dieses System leisten soll und welche Einschränkungen dabei einzuhalten sind.

:::



## Klassifikation von Anforderungen

Bei den Anforderungen selbst kann wiederum zwischen verschiedenen Anforderungstypen, wie etwa Produkt- und Prozessanforderungen unterschieden werden. Anforderungen gibt es viele – typischerweise  werden in Projekten folgende Anforderungen betrachtet:

1.  **Product requirements**
2.  **Quality requirements** is “a condition or capability that will be used to assess conformance  by validating the acceptability of an attribute for the quality of a  result.”
3.  **Project requirements** are defined as “the actions, processes, or other conditions the project needs to meet.” These requirements focus on aspects of project  execution.
4.  **Domain requirements**



#### Product requirements

Product requirements are the primary focus and can be further categorized with additional qualifying terms.

1.  ***Business Requirements\***. Describe the higher-level needs of the organization as a whole, such as business issues or opportunities, and reasons why a project has been  undertaken.
2.  ***Stakeholder Requirements\***. Describe the needs of a stakeholder or stakeholder group, where the  term stakeholder is used broadly to reflect the role of anyone with a  material interest in the outcome of an initiative, and could include  customers, suppliers, and partners, as well as internal business roles.
3.  ***Solution or Service Requirements\***. Describe the features, functions, and characteristics of a product,  service, or result that will meet the business and stakeholder  requirements. Solution requirements are further grouped into functional  and nonfunctional requirements.
   1.  ***Functional Requirements\***. Describe the behaviors of the product. 
   2.  ***Nonfunctional Requirements\***. Describe the environmental conditions or qualities required for the product to be effective.
4.  ***Transition Requirements\***. Describe temporary capabilities, such as data conversion and training  requirements, and operational changes needed to transition from the  current state to the future state.



Ziel ist es dabei, eine möglichst umfassende Sammlung anzugeben, um  deutlich zu machen, welche Aspekte in einer Systementwicklung  möglicherweise eine Rolle spielen. Welche dieser Aspekte für ein  konkretes Projekt tatsächlich von Belang sind, kann anhand dieser  „Checkliste“ dann von Fall zu Fall entschieden werden. Detaillierte  Anhaltspunkte über verschiedene Typen von Anforderungen enthält die in [IEE 90] gegebene Definition des Begriffs Anforderungsspezifikation.



### Funktionale Anforderungen

**Funktionale Anforderungen** Output = function(Input)  beziehen sich auf die funktionellen Aspekte eines Systems. Sie ergeben  sich als Antworten auf die Fragen „Was tut das System?„, „Was soll es  aufgrund der Aufgabenstellungen können?“. Dabei unterscheidet man üblicherweise bezüglich:

-  Eingaben (Daten, Ereignisse, Stimuli) und deren Einschränkungen;
-  Funktionen, die das System ausführen können soll (Umformung von Daten, Verhaltensweisen abhängig von  Stimuli), beschrieben durch extern sichtbare Effekte, d.h. aus der Sicht des Benutzers oder der Systemumgebung;
-  Ausgaben (Daten, Fehlermeldungen, Reaktionen des Systems).

Häufig werden auch relevante Systemzustände sowie das Verhalten des  Systems und seiner Umgebung im Zusammenhang mit den funktionalen  Anforderungen genannt. Auch Angaben über die Struktur eines Systems und  seiner funktionellen Bestandteile werden gelegentlich subsumiert.

Das Referenzmodell ITIL verwendet zur Beschreibung von Services u.a.  auch den Begriff: Utility - was sinngemäß einer funktionalen  Beschreibung gleichkommt.



### Nicht-funktionale Anforderungen

Nicht-funktionale Anforderungen lassen sich qualitativ unterscheiden in

1. **Qualitätsattribute der gewünschten Funktionen** ergeben sich als Antwort auf die Frage „Wie soll das geplante System  die gestellten Aufgaben erfüllen?“. Beispiele solcher Qualitätsattribute sind:
   1.  Ausführungsverhalten (Verarbeitung  unter Echtzeitbedingungen, Auslastung von Ressourcen, Genauigkeit,  Antwortzeiten, Durchsatz, Speicherbedarf)
   2.  „Verlässlichkeit“ (dependability), d.h. Zuverlässigkeit, Ausfallsicherheit, Robustheit
   3.  sonstige softwaretechnische  Qualitätskriterien (z.B. Wartbarkeit, Portabilität, Adaptierbarkeit,  Kompatibilität mit vorhandenen Komponenten).
2. **Anforderungen an das implementierte System als Ganzes** umfassen alle Vorgaben und Eigenschaften, die das zu erstellende Zielsystem und seine Komponenten betreffen. Dazu gehören: 
   1.  Realisierung in Software und/oder Hardware
   2.  räumliche Verteilung von Komponenten 
   3.  verfügbare oder zu verwendende Geräte 
   4.  einzuhaltende Schnittstellen (mit anderen Teilsystemen) 
   5.  Qualität und Verständlichkeit der Systemdokumentation 
   6.  Überlebensfähigkeit bei Störungen, Katastrophen usw. 
   7.  physikalische Sicherheit (safety)  (zulässige Grenzwerte, Standards für Anschlussverbindungen, abschaltbare Endgeräte, Verwahrung sicherheitsrelevanter Daten) 
   8.  operationelle Sicherheit (security)  (Methoden, die für Verschlüsselung, Modularisierung und Beschränkung von Datenübertragungen verwendet werden sollen oder die Verfügbarkeit  sensitiver Daten betreffen) 
   9.  menschliche Faktoren (Benutzerfreundlichkeit, Qualifikation des Bedienpersonals).
3.  **Vorgaben für die Durchführung der Systemerstellung** (**process requirements**) enthalten spezifische Angaben und Einschränkungen darüber, wie und  unter welchen Umständen das System erstellt werden soll. Hierunter  fallen: 
   1.  Projektorganisation, Managementstruktur, Geschäftspolitik.
   2.  Art der Entwicklung (z.B. ein  Produkt zu einem bestimmten Zeitpunkt, Auslieferung fertiger Teile für  Feldtests, iterative Entwicklung mit Prototypen). 
   3.  Vorgehensweise bei der Entwicklung  (z.B. V-Modell, Agile Methoden, Extrem -Programming, Spiral-Modell usw.) und damit verbundene Dokumente.
   4.  zu verwendende Hilfsmittel (Methoden, Beschreibungsmittel, Werkzeuge).
   5.  zur Verfügung stehende Ressourcen  (Maschinenzeit/Kapazität/Konfiguration, verfügbares Personal, Termine  und sonstige zeitliche Beschränkungen, Kosten).
   6.  Umfang des Projekts (Anzahl der zu erstellenden Prototypen und Versionen; Zeitplanung für Auslieferung und Installation).
   7.  Prioritäten und Änderbarkeit  (essentielle und wünschenswerte, kritische und weniger kritische  Anforderungen): grundlegende Annahmen; relative Bedeutung einzelner  Anforderungen; Identifikation derjenigen Faktoren, bei denen Änderungen  möglich oder wahrscheinlich sind (Ordnung entsprechend  Änderungswahrscheinlichkeit, Identifikation alternativer Anforderungen).
   8.  Maßnahmen zur Qualitätssicherung (im Hinblick auf Wartbarkeit, Erweiterbarkeit, Portabilität, Flexibilität,  Wiederverwendbarkeit von Teilen, Aufwärtskompatibilität, Lebensdauer,  Integration in Produktfamilie): zu verwendende Standards für die  Qualitätskontrolle, Meilensteine und Begutachtungsverfahren  (einschließlich Durchführbarkeitsstudien), Akzeptanzkriterien  (benchmarks).
   9.  zu berücksichtigende Konventionen, Vorschriften, Richtlinien, Normen des Anwendungsbereichs. 
   10.  gewünschte Art der Dokumentation der Systemerstellung
   11.  ökonomische Aspekte der  Systementwicklung (Kostenziele und Richtlinien): Abwägungen (tradeoffs)  (Verwendung vorhandener Komponenten oder Neuentwicklung, kostenabhängige oder funktionsabhängige Planung, Einbeziehung von outsourcing).  Kostenrahmen bezüglich Entwicklung/Auslieferung für einzelne  Entwicklungsstufen, Zwischenziele oder Prototypen. Kosten für jedes  Exemplar des Zielsystems.allgemeine Marktüberlegungen.
   12.  politische Einschränkungen (gesetzliche Vorschriften, Copyright).
4. **Anforderungen an Prüfung, Einführung, Betreuung und Betrieb**. Über die bisherigen Arten von Anforderungen hinaus, gibt es noch  solche, die Auskunft geben über Bedingungen und Vereinbarungen, die sich auf die Installation des Systems beim Kunden und seinen Gebrauch  beziehen.
   1.  Abnahmebedingungen, Freigabe, Endprüfung.
   2.  Betriebsbeschränkungen:  Benutzungshäufigkeit und -dauer (aus der Sicht von Personalausstattung,  Wartung und verfügbaren Ressourcen).
   3.  Kontrolle (z.B. per Fernzugriff, lokal, keine), verfügbare Personalausstattung. Zugreifbarkeit für die Wartung.
   4.  physikalische Einschränkungen und Umweltbedingungen (Größe, Gewicht, Temperatur, Stromversorgung, Strahlung, Feuchtigkeit).
   5.  Qualifikation des Bedienpersonals (Ausbildung, notwendige Fähigkeiten).
   6.  Konfigurationsmanagement.
   7.  Wartung (benötigtes Personal, vertragliche Vereinbarungen über Art und Umfang der Fehlerbehebung).
   8.  Kundendienst (Wartung, Änderung, Garantie, Archivierung, Ersatzteile).
   9.  Schulung und Ausbildung für den Gebrauch des Systems.

Nicht-funktionale Anforderungen weisen – im Vergleich zu funktionalen  Anforderungen – auch einige Besonderheiten auf. Sie werden häufig  ignoriert (“das weiß man ja“) und wenn überhaupt, dann meist nicht  präzise formuliert. Oft sind dabei spezifische Stakeholder (z.B.  Sicherheitsexperten oder Ergonomiespezialisten) zu berücksichtigen,  häufig sind sie in firmen- oder branchenspezifischen Standards und  Normen bereits vordefiniert und – wegen ihrer allgemeinen Bedeutung –  auch projektübergreifend wiederverwendbar.

:::info

Nicht-funktionale Anforderungen an ein System setzen zumindest die  elementare Kenntnis über das funktionale Verhalten voraus. Wenn nicht  einmal bekannt ist, was ein System eigentlich können soll, ist es  natürlich schwierig, etwas darüber auszusagen, wie dieses getan werden  soll. Daher steht häufig das funktionale Verhalten im Mittelpunkt,  während zusätzliche Forderungen an das fertige Produkt zweitrangig,  marginal oder oft gar nicht behandelt werden. Auch Forderungen bezüglich der Durchführung des Projektes werden meist in den Bereich des  Projektmanagements verbannt und somit als nicht zum eigentlichen  Requirements-Engineering gehörig abgestempelt.

:::