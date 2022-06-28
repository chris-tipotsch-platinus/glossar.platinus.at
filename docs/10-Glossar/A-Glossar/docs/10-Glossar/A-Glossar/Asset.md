* * *

id: Asset
titel: Asset
tags: \[Begriffe\]

* * *

# IT-Asset

:::info

An **IT Asset** is a piece of software, hardware or service within an information technology environment. IT assets are integral components of the organization’s systems and network infrastructure. Tracking of IT assets within an IT Asset Management System can be crucial to the operational or financial success of an enterprise.

:::

## Begriffe

**Asset tags** are a unique identifier for assets within your system.

**Asset-Status** are used to describe the state of the asset.

- ****Deployable**:** These assets can be checked out. Once they are assigned, they will assume a meta status of Deployed.
    - Ready2Deploy
    - Deployed
- **Pending**: These assets can not yet be assigned to anyone, often used for items that are out for repair, but are expected to return to circulation.
    - - Out4Configuration
        - Out4Diagnosis
        - Out4Repair
- **Undeployable**: These assets cannot be assigned to anyone.
    - Broken-not fixable
    - Lost/Stolen
- **Archived**: These assets cannot be checked out, and will only show up in the Archived view. This is useful for retaining information about assets for budgeting/historic purposes but keeping them out of the day-to-day asset list.
    - Archived

**Asset-Model.** Every asset needs an asset model Asset models are important because they carry certain attributes which are inherited by the assets you create, such as depreciation type, end of life, and whether or not to show MAC address fields on the asset.

**Asset-Categories** describe the general type of asset or accessory. Categories are important because they contain attributes that are inherited by both the assets and accessories that belong to them.

**Custom fields** allow you to track additional information about your assets that the default asset attributes don't cover. Fieldsets--> Fields. ZB Fieldset *Computer* hat Fields *RAM, CPU, OS.* Das Fieldset wird einem Asset-Mode oder Categorie zugewiesen.

## IT-Asset-Kategorien

Jedes IT-Asset wird einem IT-Asset Objekttypen - auch IT-Asset Kategorie genannt - zugeordnet.

Typische IT-Asset-Hauptkategorien sind:

1.  **IT-DataCenter** beschreibt Information über Rechenzentrum-Facilities, Verkabelungslösungen und Gebäudetechnik eines Data-Centers.
2.  **IT-Hardware** wird mittels Inventaraufkleber eindeutig für die Identifikation gekennzeichnet. Bei HW ist es wichtig zu wissen, wo der Standort ist, diese vor Diebstahl und/oder Beschädigung zu schützen. HW benötigt Information über die Handhabung eines Austausche und/oder der Entsorgung (Harddisk-Shredder, Entsorgungs-Richtlinien).
3.  **IT-Software** muss die Softwarepaket und die Quellen für Patches/Upgrades sowie technischen Produktinformationen zur Installation, Benutzung und Administration bereitstellen. Weiter sind bei Bedarf Maßnahmen zum Kopierschutz umzusetzen.
4.  **IT-Lizenzen** stellen sicher, dass überprüfbare Compliance-Nachweise zum Anspruch und zur Nutzung der Software vorliegen.
5.  ****IT-Services**** beschreibt die Funktionen (*utility*) und die Leistungsversprechen (war*r*anty) der jeweiligen technical und business IT-Services. Dabei wird zwischen IaaS - IT-Infrastructure as a Service, DaaS - Device as a Service (Digital Workplaces), SaaS - Software as a Service (Applikationen) unterschieden.
6.  **IT-Dokumentation** umfasst digitalen Content.
7.  **IT-Medien** umfasst digitalen Medien-Content.
8.  **IT-User** umfasst die IT-Anwender.

Innerhalb der IT-Asset-Kategorien gibt es noch weitere Gruppen.

1.  **IT-Datacenter** beschreibt Information über Rechenzentrum-Facilities, Verkabelungslösungen und Gebäudetechnik eines Data-Centers.
    1.  Datacenter-Basisdaten
    2.  Datacenter-Objektbuch
        1.  Anlagenbuch Stromversorgung / Notstrom
        2.  Anlagebuck IKT Verkabelung
        3.  Anlagenbuch HKLS
        4.  Anlagenbuch Access
    3.  Datacenter-Control-Center / NOC
2.  **IT-Hardware** wird mittels Inventaraufkleber eindeutig für die Identifikation gekennzeichnet. Bei HW ist es wichtig zu wissen, wo der Standort ist, diese vor Diebstahl und/oder Beschädigung zu schützen. HW benötigt Information über die Handhabung eines Austausche und/oder der Entsorgung (Harddisk-Shredder, Entsorgungs-Richtlinien). Die HW-Komponenten können mittels Autodiscovery ermittelt werden. 
    1.  HW-Kits (vordefinierte HW-Packages)
    2.  HW-Komponenten zu
        1.  Netzwerk
        2.  Server
        3.  Storage
        4.  Input
        5.  Output
        6.  Others
    3.  HW-Zubehör (Accessories)
        1.  Input-Zubehör (Tastatur, Maus,...)
        2.  Output-Zubehör (Webcam, Mobile Harddisk,...)
    4.  HW-Verbrauchsmaterial (Consumables)
        1.  Toner für Laserdrucker
        2.  Papier für Printer
        3.  ...
3.  **IT-Software** muss die Softwarepaket und die Quellen für Patches/Upgrades sowie technischen Produktinformationen zur Installation, Benutzung und Administration bereitstellen. Weiter sind bei Bedarf Maßnahmen zum Kopierschutz umzusetzen. Die Software wird meist in einem Versionsverwaltungssystem (GIT) verwaltet.
    1.  System-Software (Betriebssysteme)
    2.  Standard-Software (Of-the-Shelf, Apps)
    3.  Applikations-Software (Software mit spezifischen Anpassungen)
    4.  Individual-Software (Eigenentwicklungen)
4.  **IT-Lizenzen** stellen sicher, dass überprüfbare Compliance-Nachweise zum Anspruch und zur Nutzung der Software vorliegen.
    1.  User-Lizenzen sind mit Anwendern verknüpft
    2.  Device-Lizenzen sind mit Hardware, Geräten verknüpft
    3.  Other-Lizenzen
5.  ****IT-Services**** beschreibt die Funktionen (*utility*) und die Leistungsversprechen (war*r*anty) der jeweiligen technical und business IT-Services.
    1.  **IaaS - IT-Infrastructure as a Service.** IaaS werden aus der Release Management Perspektive häufig in mehrere Umgebungen unterteilt. Zu den klassischen Umgebungen zählen: Entwicklungsumgebung, Buildumgebungen (Test-/ Integration), Stagingumgebungen (Pre-Production, Schulung, Demo, Backup) und Produktivumgebugen (Live, Produktion). Mit den Cloudumgebungen können verteilter Systeme und hypride Umgebungen abgebildet werden.
        1.  DCaaS - Datacenter as a Servive. RZ-Dienste stellen die Räumlichkeit und Facilities für einen sicheren und stabilen Betrieb zur Verfügung. Mit dem Datacenter wird auch die Location definiert, wo sich die physischen Assets befinden. 
        2.  NWaaS - Network as a Service. IT-Netzwerke-Dienste werden für den Datenaustausch zwischen verschiedenen Netzteilnehmern (Nodes) benötigt.
        3.  PaaS - Platform as a Service - IT-Processing-Dienste. Systemplatformen verknüpft diversen IT-Komponenten wie HW-Assets und SW-Assets sowie plattformrelevante technical IT-Services (IT-Monitoring-Services, IT-Backup-Services, IT-Timesynchronisation-Services, …).
            1.  CaaS - Container as a Service
            2.  VMaaS - Virtual Maschine as a Service
        4.  STaas- Storage as a Service - IT-Speicher-Dienste
        5.  MWaaS -Middleware as a Service - IT-Middleware-Dienste (Integration)
        6.  SECaaS - Securoity as a Service - IT-Security-Dienste
        7.  IOaaS - Input-Output as a Service - IT-Input-Output-Dienste
    2.  **DaaS - Device as a Service (Digital Workplaces)**
    3.  **SaaS - Software as a Service (Applikationen)**
        1.  Enabling SaaS - anwendungsunabhängige Softwarelösungen (Funktionsbezogene Lösungen wie Office, Collaboration, BA, CMS, CAD, GIS, ...)
        2.  Process SaaS - anwendungsabhängige Softwarelösungen (F&
        3.  Business SaaS - branchen-/fachspezifische Softwarelösungen
6.  **IT-Dokumentation** umfasst digitalen Content. Beim Doc-as-Code-Ansatz wird die Dokumentation in einem Versionsverwaltungssystem (GIT) verwaltet.
    1.  Dokumenten mit Zuordnung zur IT-Lebenszyklus-Perspektive 
        1.  IT-Rahmendokumentation
        2.  IT-Asset-Dokumentation
        3.  IT-Change-Dokumentation (Projekte)
        4.  IT-Run-Dokumentation (Betrieb)
        5.  IT-Archiv
    2.  Dokumentation mit Zuordnung zur Objektsicht / Anwendung (TAGs)
7.  **IT-Medien** umfasst digitalen Medien-Content.
    1.  Grafiken
    2.  Fotos
    3.  Videos
    4.  Musik