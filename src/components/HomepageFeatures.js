import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Suche',
    Svg: require('../../static/img/search.svg').default,
    description: (
      <>
        Mit der integrierten Suchfunktion gelangen Sie schnell zu Ihren Begriffen.
        Der <a href="/docs/Begriffe-Home/">Navigationsbaum</a> unterstützt Sie beim stöbern zu den Glossareinträgen.
      </>
    ),
  },
  {
    title: 'Feeback',
    Svg: require('../../static/img/feedback.svg').default,
    description: (
      <>
        Beiträge und Rückmeldungen zum Fachglossar sind herzlich willkommen.
        Einmeldung für registrierte Benutzer über den <a href="https://project-CHAT.platinus.at">CHAT-Service </a>oder als Backup
        über email an glossar@platinus.at
      </>
    ),
  },
  {
    title: 'Dokumentenlenkung',
    Svg: require('../../static/img/document.svg').default,
    description: (
      <>
        Erstellen, prüfen, freigeben, publizieren, verteilen, zurückziehen des Glossareinträgen
         werden in der <a href="/Dokumentenlenkung/">Dokumentenlenkung</a> beschrieben.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
