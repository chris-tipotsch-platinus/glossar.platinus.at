---
id: SLA
titel: SLA
tags: [Begriffe]
---

# SLA - Dienstgütevertrag

Das *Service Level Agreement (SLA)* ist eine Vereinbarung zwischen einem IT Service Provider und einem Kunden. Das *Operational Level Agreement (OLA)* ist eine Vereinbarung zwischen einem IT Service Provider und einem anderen Teil derselben Organisation über die Lieferung von IT-Services.

Die beiden  ITIL-Dokumenttypen 'Service Level Agreement (SLA)' bzw. ein 'Operational Level Agreement (OLA)' verwenden identische Strukturen. Die folgenden  Angaben zu den Service Level Agreements gelten daher gleichermaßen für  die OLAs.

Dabei ist ein wichtiger Punkt zu beachten: Wenn ein SLA vereinbart wird, fungiert der Service Level Manager als Erbringer von Leistungen für den Kunden; bei einem OLA dagegen sind beide Vertragsparteien Teile der Service-Provider-Organisation.

Das *Service Level Agreement* erweitert die Definition des Services aus dem Servicekatalog. Es bestimmt im Einzelnen die Service-Level-Ziele, die gegenseitigen Verantwortlichkeiten sowie andere Anforderungen für einen speziellen Service und einen bestimmten Kunden oder eine bestimmte Kundengruppe. Der Schwerpunkt liegt hierbei auf der Festlegung der Anforderungen aus  Sicht des Kunden. Das SLA-Dokument entwickelt sich während des  Service-Design-Prozesses aus den [Service-Level-Anforderungen (Service Level Requirements, SLR).

In vielen Fällen wird eine SLA-Struktur mit verschiedenen Typen verwendet, um doppelte Inhalte und häufige Änderungen zu vermeiden.

- Unternehmens-Ebene (enthält Regelungen, die alle Kunden innerhalb eines Unternehmens betreffen).
- Kunden-Ebene (enthält Regelungen, die für einen bestimmten Kunden  oder eine Kundengruppe im Unternehmen gelten, unabhängig von den  genutzten Services).
- Service-Ebene (enthält spezifische Regelungen für bestimmte Services).



## Service Level Agreement - Inhalte

*Ein Service Level Agreement (SLA) enthält in der Regel die folgenden Informationen (die effektive inhaltliche Ausgestaltung hängt vom jeweiligen Servicetyp ab):*

#### Bezeichnung des Services

#### Freigabeinformationen

(mit Ort und Datum) 

1. Service Level Manager
2. Verantwortlicher Vertreter des Service-Kunden

#### Laufzeit des Vertrages

1. Beginn- und Endedatum
2. Regelungen bezüglich Verlängerung und Beendigung der Vereinbarung (ggf. auch Regeln für eine vorzeitige Vertragsbeendigung).

#### Beschreibung/ angestrebtes Kundenergebnis

1. Nutzen aus Geschäftssicht.
2. Kundenseitige Business-Prozesse/ Aktivitäten, die vom Service unterstützt werden.
3. Link auf die Serivebeschreibung mit Utility and Warranty
   1. Angestrebtes Ergebnis in Bezug auf Utility (Nutzen, z.B.:  "Außendienstmitarbeiter haben jederzeit und von jedem Ort aus Zugriff  auf die Unternehmensanwendungen xxx und yyy").
   2. Angestrebtes Ergebnis in Bezug auf Warranty (Gewährleistung, z.B.:  "Hohe Verfügbarkeit während der Bürozeiten in den Lokationen ...").

#### Kommunikation zwischen Kunde und Service-Provider

1. Verantwortliche Kontaktperson auf Kundenseite mit Kontaktdaten.
2. Zuständiger Business Relationship Manager auf Seite des Service-Providers mit Kontaktdaten.
3. Berichtswesen (Inhalte und Intervalle der vom Service-Provider zu erstellenden Service-Berichte).
4. Verfahren zur Behandlung von Ausnahmen und Beschwerden (z.B. im  Falle einer Beschwerde bereitzustellende Informationen, vereinbarte  Antwortzeiten, Eskalations-Prozedur).
5. Kundenzufriedenheits-Umfragen (Beschreibung des Verfahrens zur regelmäßigen Ermittlung der Kundenzufriedenheit).
6. Service-Reviews (Beschreibung des Verfahrens zum regelmäßigen Durchführen von Service-Reviews mit Beteiligung des Kunden).

#### Service- und Asset-Kritikalität

1. Liste unternehmenskritischer Assets in Zusammenhang mit diesem Service
   1. Vital Business Functions (VBFs, unternehmenskritische Geschäftsprozesse), die von dem Service unterstützt werden
   2. Sonstige kritische Assets, die im Rahmen des Services genutzt werden (z.B. bestimmte Arten von Geschäftsdaten)
2. Geschätzter Schaden für das Unternehmen durch Verlust des Services  oder von Assets (ausgedrückt in finanziellen Beträgen oder unter  Verwendung eines Klassifizierungsschemas)

#### Servicezeiten

1. Zeiten, zu denen der Service zur Verfügung stehen muss
2. Ausnahmen (z.B. Wochenenden, Feiertage)

#### Erforderliche Support-Typen und -Levels

1. Vor-Ort-Support
   1. Bereich/ Standorte
   2. User-Typen
   3. Zu unterstützende Anwendungen und Infrastrukturkomponenten
   4. Reaktions- und Lösungszeiten (nach Prioritäten, Definition von Prioritäten z.B. für die Einordnung von Incidents)
2. Remote Support
   1. Bereich/ Standorte
   2. User-Typen (User-Gruppen mit Zugang zum Service)
   3. Zu unterstützende Anwendungen und Infrastrukturkomponenten
   4. Reaktions- und Lösungszeiten (nach Prioritäten, Definition von Prioritäten z.B. für die Einordnung von Incidents)

#### Service-Level-Anforderungen/ -Ziele

1. Verfügbarkeitsziele und -verpflichtungen
   1. Bedingungen, unter denen der Service als nichtverfügbar gilt (z.B. falls der Service an verschiedenen Standorten erbracht wird).
   2. Ziele im Hinblick auf Verfügbarkeit (genaue Festlegung der Art und  Weise, wie die vereinbarten Availability Levels auf der Grundlage der  vereinbarten Servicezeiten und Ausfallzeiten berechnet werden).
   3. Ziele im Hinblick auf Zuverlässigkeit (von einigen Kunden gefordert, in der Regel definiert als MTBF (Mean Time Between Failures –  durchschnittliche Zeit zwischen zwei Ausfällen) oder MTBSI (Mean Time  Between Service Incidents – durchschnittliche Zeit zwischen zwei Service Incidents))
   4. Ziele im Hinblick auf Wartbarkeit (von einigen Kunden gefordert, in  der Regel definiert als MTRS (Mean Time to Restore Service –  durchschnittliche Zeit bis zur Wiederherstellung des Services)).
   5. Downzeiten für Wartung (Anzahl erlaubter Downzeiten, Ankündigungsfristen).
   6. Einschränkungen bei der Wartung, z.B. erlaubte Wartungsfenster,  saisonale Wartungbeschränkungen und Verfahrensweisen bei der Ankündigung geplanter Service-Unterbrechungen.
   7. Definitionen von Major Incidents sowie Notfall-Changes und -Releases zur Behebung dringender Problemen, einschließlich Verfahrensweise bei  der Ankündigungen von ungeplanten Serviceunterbrechungen.
   8. Anforderungen an das Availability-Reporting.
2. Capacity/ Performance-Ziele und -Verpflichtungen
   1. Benötigte Kapazität (Ober-/Untergrenze) für den Service, z.B.
      1. Anzahl und Art von Transaktionen
      2. Anzahl User und User-Typen
      3. Business-Zyklen (täglich, wöchentlich) und saisonale Schwankungen
   2. Antwortzeiten der Anwendungen.
   3. Anforderungen an die Skalierbarkeit (Annahmen über die mittel- und  langfristige Zunahme der Auslastung und Inanspruchnahme des Services).
   4. Anforderungen in Bezug auf das Capacity- und Performance-Reporting.
3. Verpflichtungen in Bezug auf Service Continuity (Verfügbarkeit des Services im Katastrophenfall)
   1. Zeitraum, innerhalb dessen ein festgelegter Service Level wieder erreicht sein muss
   2. Zeitraum, innerhalb dessen normale Service Levels wiederhergestellt sein müssen

#### Technische Standards/ Spezifikation der Service-Schnittstelle

Verpflichtende technische Standards und technische Spezifikation der Service-Schnittstelle

#### Verantwortlichkeiten

1. Pflichten des Service Providers
2. Pflichten des Kunden (Vertragspartner)
3. Verantwortlichkeiten der Service-Nehmer (z.B. in Bezug auf IT-Sicherheit).
4. IT-Sicherheitsaspekte, die bei der Nutzung des Services zu beachten  sind (ggf. Verweis auf die entsprechenden IT-Sicherheitsrichtlinien).

#### Preismodell

1. Basispreis für die Serviceerbringung.
2. Regelungen für Vertragsstrafen/ Rückverrechnungen.

#### Change-Historie zu diesem Vertrag

#### Liste der Anhänge und Verweise

(z.B. auf eine mitgeltende SLA-Master-Vereinbarung) 

#### Glossar

(falls erforderlich)
