
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','985'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','d87'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','e9b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','148'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','2e2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0df'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','bb1'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','c91'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','7ab'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','64a'),
    exact: true
  },
  {
    path: '/blog/tags/blog',
    component: ComponentCreator('/blog/tags/blog','d88'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome','829'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','46f'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags','97f'),
    exact: true
  },
  {
    path: '/docs/tags/availability',
    component: ComponentCreator('/docs/tags/availability','048'),
    exact: true
  },
  {
    path: '/docs/tags/begriff',
    component: ComponentCreator('/docs/tags/begriff','9ea'),
    exact: true
  },
  {
    path: '/docs/tags/begriffe',
    component: ComponentCreator('/docs/tags/begriffe','1f6'),
    exact: true
  },
  {
    path: '/docs/tags/bom',
    component: ComponentCreator('/docs/tags/bom','0d8'),
    exact: true
  },
  {
    path: '/docs/tags/bpm',
    component: ComponentCreator('/docs/tags/bpm','6d8'),
    exact: true
  },
  {
    path: '/docs/tags/compliance',
    component: ComponentCreator('/docs/tags/compliance','1eb'),
    exact: true
  },
  {
    path: '/docs/tags/dokumentation',
    component: ComponentCreator('/docs/tags/dokumentation','0ac'),
    exact: true
  },
  {
    path: '/docs/tags/glossar',
    component: ComponentCreator('/docs/tags/glossar','dda'),
    exact: true
  },
  {
    path: '/docs/tags/handbuch',
    component: ComponentCreator('/docs/tags/handbuch','1bc'),
    exact: true
  },
  {
    path: '/docs/tags/im',
    component: ComponentCreator('/docs/tags/im','446'),
    exact: true
  },
  {
    path: '/docs/tags/it-begriff',
    component: ComponentCreator('/docs/tags/it-begriff','be9'),
    exact: true
  },
  {
    path: '/docs/tags/it-dokumentation',
    component: ComponentCreator('/docs/tags/it-dokumentation','0dc'),
    exact: true
  },
  {
    path: '/docs/tags/it-glossar',
    component: ComponentCreator('/docs/tags/it-glossar','a11'),
    exact: true
  },
  {
    path: '/docs/tags/kb',
    component: ComponentCreator('/docs/tags/kb','4fc'),
    exact: true
  },
  {
    path: '/docs/tags/metadaten',
    component: ComponentCreator('/docs/tags/metadaten','543'),
    exact: true
  },
  {
    path: '/docs/tags/open-source',
    component: ComponentCreator('/docs/tags/open-source','406'),
    exact: true
  },
  {
    path: '/docs/tags/pm',
    component: ComponentCreator('/docs/tags/pm','68b'),
    exact: true
  },
  {
    path: '/docs/tags/prozessmanagement',
    component: ComponentCreator('/docs/tags/prozessmanagement','376'),
    exact: true
  },
  {
    path: '/docs/tags/rechtlichen-regelwerke',
    component: ComponentCreator('/docs/tags/rechtlichen-regelwerke','3eb'),
    exact: true
  },
  {
    path: '/docs/tags/sw',
    component: ComponentCreator('/docs/tags/sw','7f6'),
    exact: true
  },
  {
    path: '/docs/tags/technische-dokumentation',
    component: ComponentCreator('/docs/tags/technische-dokumentation','147'),
    exact: true
  },
  {
    path: '/docs/tags/unternehmensexternen-regelwerken',
    component: ComponentCreator('/docs/tags/unternehmensexternen-regelwerken','2a4'),
    exact: true
  },
  {
    path: '/docs/tags/unternehmensinternen-regelwerke',
    component: ComponentCreator('/docs/tags/unternehmensinternen-regelwerke','73b'),
    exact: true
  },
  {
    path: '/docs/tags/verfugbarkeit',
    component: ComponentCreator('/docs/tags/verfugbarkeit','8d7'),
    exact: true
  },
  {
    path: '/docs/tags/web',
    component: ComponentCreator('/docs/tags/web','0f5'),
    exact: true
  },
  {
    path: '/docs/tags/web-browser',
    component: ComponentCreator('/docs/tags/web-browser','bbf'),
    exact: true
  },
  {
    path: '/docs/tags/web-client',
    component: ComponentCreator('/docs/tags/web-client','ad9'),
    exact: true
  },
  {
    path: '/docs/tags/webseite',
    component: ComponentCreator('/docs/tags/webseite','3b7'),
    exact: true
  },
  {
    path: '/docs/tags/website',
    component: ComponentCreator('/docs/tags/website','d94'),
    exact: true
  },
  {
    path: '/docs/tags/wm',
    component: ComponentCreator('/docs/tags/wm','a75'),
    exact: true
  },
  {
    path: '/Dokumentenlenkung',
    component: ComponentCreator('/Dokumentenlenkung','f56'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','5ef'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','023'),
    routes: [
      {
        path: '/docs/Begriffe-Home',
        component: ComponentCreator('/docs/Begriffe-Home','bc5'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/ABPMP',
        component: ComponentCreator('/docs/Glossar/A-Glossar/ABPMP','ffa'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/Anforderungen',
        component: ComponentCreator('/docs/Glossar/A-Glossar/Anforderungen','ca1'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/Anleitung',
        component: ComponentCreator('/docs/Glossar/A-Glossar/Anleitung','7a0'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/Anweisung',
        component: ComponentCreator('/docs/Glossar/A-Glossar/Anweisung','798'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/Anwender',
        component: ComponentCreator('/docs/Glossar/A-Glossar/Anwender','6f3'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/Artefakte',
        component: ComponentCreator('/docs/Glossar/A-Glossar/Artefakte','ad9'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/Asset',
        component: ComponentCreator('/docs/Glossar/A-Glossar/Asset','679'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/Asset-Repository',
        component: ComponentCreator('/docs/Glossar/A-Glossar/Asset-Repository','20d'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/Aufbauorganisation',
        component: ComponentCreator('/docs/Glossar/A-Glossar/Aufbauorganisation','8fa'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/Aufbewahrungsfristen',
        component: ComponentCreator('/docs/Glossar/A-Glossar/Aufbewahrungsfristen','215'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/Aufzeichnungen',
        component: ComponentCreator('/docs/Glossar/A-Glossar/Aufzeichnungen','c91'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/Aufzeichnungspflicht',
        component: ComponentCreator('/docs/Glossar/A-Glossar/Aufzeichnungspflicht','bd8'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/Ausfallzeit',
        component: ComponentCreator('/docs/Glossar/A-Glossar/Ausfallzeit','320'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/A-Glossar/BPM',
        component: ComponentCreator('/docs/Glossar/A-Glossar/BPM','6df'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/Bedarf',
        component: ComponentCreator('/docs/Glossar/B-Glossar/Bedarf','3c2'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/Benchmarking',
        component: ComponentCreator('/docs/Glossar/B-Glossar/Benchmarking','6ac'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/Benutzer',
        component: ComponentCreator('/docs/Glossar/B-Glossar/Benutzer','a8e'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/Best-Practice',
        component: ComponentCreator('/docs/Glossar/B-Glossar/Best-Practice','71e'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/Besucher',
        component: ComponentCreator('/docs/Glossar/B-Glossar/Besucher','9e1'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/Betriebszeit',
        component: ComponentCreator('/docs/Glossar/B-Glossar/Betriebszeit','0a3'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/Beziehungskapital',
        component: ComponentCreator('/docs/Glossar/B-Glossar/Beziehungskapital','67c'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/Bottleneck',
        component: ComponentCreator('/docs/Glossar/B-Glossar/Bottleneck','918'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/BPI',
        component: ComponentCreator('/docs/Glossar/B-Glossar/BPI','810'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/BPI',
        component: ComponentCreator('/docs/Glossar/B-Glossar/BPI','376'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/BPM',
        component: ComponentCreator('/docs/Glossar/B-Glossar/BPM','cfa'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/BPM-Competency-Model',
        component: ComponentCreator('/docs/Glossar/B-Glossar/BPM-Competency-Model','c1e'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/BPM-Experte',
        component: ComponentCreator('/docs/Glossar/B-Glossar/BPM-Experte','e9d'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/BPM-KB',
        component: ComponentCreator('/docs/Glossar/B-Glossar/BPM-KB','8c6'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/BPM-Rahmenkonzept',
        component: ComponentCreator('/docs/Glossar/B-Glossar/BPM-Rahmenkonzept','2d9'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/B-Glossar/BPMN',
        component: ComponentCreator('/docs/Glossar/B-Glossar/BPMN','5e3'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/C-Glossar/CaaS',
        component: ComponentCreator('/docs/Glossar/C-Glossar/CaaS','ef0'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/C-Glossar/Change',
        component: ComponentCreator('/docs/Glossar/C-Glossar/Change','056'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/C-Glossar/Compliance',
        component: ComponentCreator('/docs/Glossar/C-Glossar/Compliance','234'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/C-Glossar/CoP',
        component: ComponentCreator('/docs/Glossar/C-Glossar/CoP','963'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dashboard',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dashboard','138'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Diataxis-Framework',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Diataxis-Framework','4b4'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dienstguete',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dienstguete','6d5'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dienstguetevereinbarung',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dienstguetevereinbarung','a91'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Doc-as-Code',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Doc-as-Code','5a7'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dokumentation',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dokumentation','293'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dokumentationsarchitektur',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dokumentationsarchitektur','ac4'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dokumentationskonzept',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dokumentationskonzept','959'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dokumentationslandkarte-IT',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dokumentationslandkarte-IT','4e0'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dokumentationslebenzyklus',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dokumentationslebenzyklus','922'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dokumentationsmanagement',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dokumentationsmanagement','1bf'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dokumente',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dokumente','7a4'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dokumentenklasse',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dokumentenklasse','f62'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dokumentenlebenszyklus',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dokumentenlebenszyklus','b97'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dokumentenlenkung',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dokumentenlenkung','d38'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dokumentenmanagement',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dokumentenmanagement','3a8'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/D-Glossar/Dokumententypen',
        component: ComponentCreator('/docs/Glossar/D-Glossar/Dokumententypen','50c'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/E-Glossar/Einfluss',
        component: ComponentCreator('/docs/Glossar/E-Glossar/Einfluss','5c5'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/E-Glossar/Empowerment',
        component: ComponentCreator('/docs/Glossar/E-Glossar/Empowerment','e0e'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/F-Glossar/Faehigkeiten',
        component: ComponentCreator('/docs/Glossar/F-Glossar/Faehigkeiten','406'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/F-Glossar/Feature',
        component: ComponentCreator('/docs/Glossar/F-Glossar/Feature','07d'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/F-Glossar/Fehler',
        component: ComponentCreator('/docs/Glossar/F-Glossar/Fehler','da8'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/F-Glossar/Fehlertoleranz',
        component: ComponentCreator('/docs/Glossar/F-Glossar/Fehlertoleranz','d65'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/F-Glossar/FTE',
        component: ComponentCreator('/docs/Glossar/F-Glossar/FTE','e2b'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/F-Glossar/Funktionalität',
        component: ComponentCreator('/docs/Glossar/F-Glossar/Funktionalität','d81'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/G-Glossar/Geschaeftsmodell',
        component: ComponentCreator('/docs/Glossar/G-Glossar/Geschaeftsmodell','963'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/G-Glossar/geschaeftsprozess',
        component: ComponentCreator('/docs/Glossar/G-Glossar/geschaeftsprozess','c54'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/G-Glossar/geschaeftsprozessmanagement',
        component: ComponentCreator('/docs/Glossar/G-Glossar/geschaeftsprozessmanagement','695'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/G-Glossar/geschaeftsprozessmodell',
        component: ComponentCreator('/docs/Glossar/G-Glossar/geschaeftsprozessmodell','396'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/H-Glossar/Handbuch',
        component: ComponentCreator('/docs/Glossar/H-Glossar/Handbuch','eec'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/H-Glossar/Hochverfuegbarkeit',
        component: ComponentCreator('/docs/Glossar/H-Glossar/Hochverfuegbarkeit','e98'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/H-Glossar/Hosting',
        component: ComponentCreator('/docs/Glossar/H-Glossar/Hosting','5cc'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/H-Glossar/HTTPS',
        component: ComponentCreator('/docs/Glossar/H-Glossar/HTTPS','04d'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/H-Glossar/Humankapital',
        component: ComponentCreator('/docs/Glossar/H-Glossar/Humankapital','069'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/I-Glossar/IaaS',
        component: ComponentCreator('/docs/Glossar/I-Glossar/IaaS','601'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/I-Glossar/Informationsicherheit',
        component: ComponentCreator('/docs/Glossar/I-Glossar/Informationsicherheit','99f'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/I-Glossar/Informationsqualitaet',
        component: ComponentCreator('/docs/Glossar/I-Glossar/Informationsqualitaet','b13'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/I-Glossar/Interoperabilitaet',
        component: ComponentCreator('/docs/Glossar/I-Glossar/Interoperabilitaet','038'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/I-Glossar/Intranet',
        component: ComponentCreator('/docs/Glossar/I-Glossar/Intranet','69e'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/I-Glossar/IPS',
        component: ComponentCreator('/docs/Glossar/I-Glossar/IPS','748'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/I-Glossar/IT-Service',
        component: ComponentCreator('/docs/Glossar/I-Glossar/IT-Service','0e2'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/I-Glossar/IT-Sicherheit',
        component: ComponentCreator('/docs/Glossar/I-Glossar/IT-Sicherheit','c51'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/K-Glossar/Kanban',
        component: ComponentCreator('/docs/Glossar/K-Glossar/Kanban','c25'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/K-Glossar/konfliktarten',
        component: ComponentCreator('/docs/Glossar/K-Glossar/konfliktarten','93c'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/L-Glossar/Latenz',
        component: ComponentCreator('/docs/Glossar/L-Glossar/Latenz','186'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/L-Glossar/Laufzeit',
        component: ComponentCreator('/docs/Glossar/L-Glossar/Laufzeit','e17'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/L-Glossar/Lean-Management',
        component: ComponentCreator('/docs/Glossar/L-Glossar/Lean-Management','78a'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/L-Glossar/Leitlinie',
        component: ComponentCreator('/docs/Glossar/L-Glossar/Leitlinie','8a1'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/L-Glossar/Linux',
        component: ComponentCreator('/docs/Glossar/L-Glossar/Linux','667'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/M-Glossar/Major-Risk',
        component: ComponentCreator('/docs/Glossar/M-Glossar/Major-Risk','cfb'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/M-Glossar/Markdown',
        component: ComponentCreator('/docs/Glossar/M-Glossar/Markdown','ec4'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/M-Glossar/MTBF',
        component: ComponentCreator('/docs/Glossar/M-Glossar/MTBF','a52'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/M-Glossar/MTTR',
        component: ComponentCreator('/docs/Glossar/M-Glossar/MTTR','565'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/N-Glossar/Netzwerksicherheit',
        component: ComponentCreator('/docs/Glossar/N-Glossar/Netzwerksicherheit','f97'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/O-Glossar/Open-Source-Software',
        component: ComponentCreator('/docs/Glossar/O-Glossar/Open-Source-Software','dd7'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/O-Glossar/Organisationsentwicklung',
        component: ComponentCreator('/docs/Glossar/O-Glossar/Organisationsentwicklung','ba2'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/O-Glossar/Organisationshandbuch',
        component: ComponentCreator('/docs/Glossar/O-Glossar/Organisationshandbuch','265'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/O-Glossar/Outtasking',
        component: ComponentCreator('/docs/Glossar/O-Glossar/Outtasking','ffc'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/P-Glossar/PaaS',
        component: ComponentCreator('/docs/Glossar/P-Glossar/PaaS','e54'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/P-Glossar/Performance',
        component: ComponentCreator('/docs/Glossar/P-Glossar/Performance','d79'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/P-Glossar/platinus-prozessreferenzmodell',
        component: ComponentCreator('/docs/Glossar/P-Glossar/platinus-prozessreferenzmodell','3e5'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/P-Glossar/PM-Paradigmen',
        component: ComponentCreator('/docs/Glossar/P-Glossar/PM-Paradigmen','648'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/P-Glossar/Portfolio',
        component: ComponentCreator('/docs/Glossar/P-Glossar/Portfolio','b4a'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/P-Glossar/Preismodell',
        component: ComponentCreator('/docs/Glossar/P-Glossar/Preismodell','0e3'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/P-Glossar/Product-Backlog',
        component: ComponentCreator('/docs/Glossar/P-Glossar/Product-Backlog','ae4'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/P-Glossar/Projektinformationeng',
        component: ComponentCreator('/docs/Glossar/P-Glossar/Projektinformationeng','41a'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/P-Glossar/Provider',
        component: ComponentCreator('/docs/Glossar/P-Glossar/Provider','612'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/P-Glossar/Prozessdiagramme',
        component: ComponentCreator('/docs/Glossar/P-Glossar/Prozessdiagramme','247'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/P-Glossar/prozesslandkarte',
        component: ComponentCreator('/docs/Glossar/P-Glossar/prozesslandkarte','500'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/P-Glossar/Prozessreifegrad',
        component: ComponentCreator('/docs/Glossar/P-Glossar/Prozessreifegrad','0c5'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/P-Glossar/Prozessreifegradmodelle',
        component: ComponentCreator('/docs/Glossar/P-Glossar/Prozessreifegradmodelle','423'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/R-Glossar/Projektrisiko',
        component: ComponentCreator('/docs/Glossar/R-Glossar/Projektrisiko','7df'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/R-Glossar/Rechenzentrum',
        component: ComponentCreator('/docs/Glossar/R-Glossar/Rechenzentrum','eb1'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/R-Glossar/Recovery',
        component: ComponentCreator('/docs/Glossar/R-Glossar/Recovery','46a'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/R-Glossar/Requirements-Engineering',
        component: ComponentCreator('/docs/Glossar/R-Glossar/Requirements-Engineering','50f'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/R-Glossar/Ressourcenkalender',
        component: ComponentCreator('/docs/Glossar/R-Glossar/Ressourcenkalender','628'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/R-Glossar/Richtlinie',
        component: ComponentCreator('/docs/Glossar/R-Glossar/Richtlinie','cf2'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/R-Glossar/Rightshifting',
        component: ComponentCreator('/docs/Glossar/R-Glossar/Rightshifting','6f9'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/R-Glossar/Rollen-Canvas',
        component: ComponentCreator('/docs/Glossar/R-Glossar/Rollen-Canvas','7e5'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/R-Glossar/Rollenmodell',
        component: ComponentCreator('/docs/Glossar/R-Glossar/Rollenmodell','fc7'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/R-Glossar/Rollensteckbrief',
        component: ComponentCreator('/docs/Glossar/R-Glossar/Rollensteckbrief','5dc'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/S-Glossar/SaaS',
        component: ComponentCreator('/docs/Glossar/S-Glossar/SaaS','449'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/S-Glossar/Servicekatalog',
        component: ComponentCreator('/docs/Glossar/S-Glossar/Servicekatalog','ccb'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/S-Glossar/Serviceportfolio',
        component: ComponentCreator('/docs/Glossar/S-Glossar/Serviceportfolio','68a'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/S-Glossar/Sicherheitskette',
        component: ComponentCreator('/docs/Glossar/S-Glossar/Sicherheitskette','e94'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/S-Glossar/SLA',
        component: ComponentCreator('/docs/Glossar/S-Glossar/SLA','f74'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/S-Glossar/Software',
        component: ComponentCreator('/docs/Glossar/S-Glossar/Software','6f9'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/S-Glossar/Stakeholder',
        component: ComponentCreator('/docs/Glossar/S-Glossar/Stakeholder','a08'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/S-Glossar/Stakeholder',
        component: ComponentCreator('/docs/Glossar/S-Glossar/Stakeholder','033'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/S-Glossar/Standardsoftware',
        component: ComponentCreator('/docs/Glossar/S-Glossar/Standardsoftware','1d2'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/S-Glossar/Strukturkapital',
        component: ComponentCreator('/docs/Glossar/S-Glossar/Strukturkapital','e9c'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/S-Glossar/Systemkapital',
        component: ComponentCreator('/docs/Glossar/S-Glossar/Systemkapital','f42'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/S-Glossar/Systemsoftware',
        component: ComponentCreator('/docs/Glossar/S-Glossar/Systemsoftware','694'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/U-Glossar/UC',
        component: ComponentCreator('/docs/Glossar/U-Glossar/UC','388'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/U-Glossar/USV',
        component: ComponentCreator('/docs/Glossar/U-Glossar/USV','0e9'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/V-Glossar/Verfuegbarkeit',
        component: ComponentCreator('/docs/Glossar/V-Glossar/Verfuegbarkeit','58a'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/V-Glossar/Verfuegbarkeitsklassen',
        component: ComponentCreator('/docs/Glossar/V-Glossar/Verfuegbarkeitsklassen','b80'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/V-Glossar/Virtualisierung',
        component: ComponentCreator('/docs/Glossar/V-Glossar/Virtualisierung','fd1'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/V-Glossar/VM',
        component: ComponentCreator('/docs/Glossar/V-Glossar/VM','502'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/V-Glossar/VPN',
        component: ComponentCreator('/docs/Glossar/V-Glossar/VPN','93c'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/W-Glossar/Web-Browser',
        component: ComponentCreator('/docs/Glossar/W-Glossar/Web-Browser','9fe'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/W-Glossar/Web-Client',
        component: ComponentCreator('/docs/Glossar/W-Glossar/Web-Client','c26'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/W-Glossar/Webseite',
        component: ComponentCreator('/docs/Glossar/W-Glossar/Webseite','eff'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/W-Glossar/Webserver',
        component: ComponentCreator('/docs/Glossar/W-Glossar/Webserver','61f'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/W-Glossar/Website',
        component: ComponentCreator('/docs/Glossar/W-Glossar/Website','77c'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/W-Glossar/Wissensbilanz',
        component: ComponentCreator('/docs/Glossar/W-Glossar/Wissensbilanz','1f4'),
        exact: true,
        sidebar: "Sidebar10"
      },
      {
        path: '/docs/Glossar/Z-Glossar/Zugriffszeiten',
        component: ComponentCreator('/docs/Glossar/Z-Glossar/Zugriffszeiten','71a'),
        exact: true,
        sidebar: "Sidebar10"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','3f5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
