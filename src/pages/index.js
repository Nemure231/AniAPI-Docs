import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="img/aniapi_logo.png" className="hero__logo"></img>
        <h3 className="hero__subtitle">{siteConfig.tagline}</h3>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const wrappers = [
    {
      name: 'AniAPI.NET',
      author: 'Dazorn96',
      github: 'https://github.com/AniAPI-Team/AniAPI.NET',
      language: 'C#',
      bgColor: '#783bd2',
      fgColor: '#fff'
    },
    {
      name: 'AniAPI.js',
      author: 'MattPlays',
      github: 'https://github.com/MattPlays/AniAPI.js',
      language: 'JS',
      bgColor: '#f7df1e',
      fgColor: '#000'
    },
    {
      name: 'AniAPI Java SDK',
      author: 'censodev',
      github: 'https://github.com/censodev/aniapi-java-sdk',
      language: 'Java',
      bgColor: '#68BD45',
      fgColor: '#fff'
    }
    /*
    REFER TO THIS EXAMPLE. PLEASE LEAVE IT HERE, DO NOT CLEAR IT!
    {
      name: 'the wrapper name',
      author: 'the wrapper author',
      github: 'the wrapper repository github url',
      language: 'the wrapper programming language',
      bgColor: 'refer to https://brandcolors.net/ to find the best color',
      fgColor: 'an high-contrast color in order to read the content'
    }
    */
  ];

  const apps = [
    /*
    REFER TO THIS EXAMPLE. PLEASE LEAVE IT HERE, DO NOT CLEAR IT!
    {
      name: 'the application name',
      description: 'a short description of the application',
      preview: 'an image of the application preview',
      url: 'url to download/use the app'
    }
    */
  ];

  return (
    <Layout
      title=""
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main className={styles.indexMain}>
        <section className={`${styles.homeSection} ${styles.introSection}`}>
          <div className="container">
            <p>
              <b>AniAPI</b> is an open-source REST API for anime streaming lovers.<br />
              You can focus on making your app while we care about all the things.
            </p>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/AniAPI-Team"
              target="_blank">
              Learn more
            </Link>
            <Link
              className="button button--primary button--lg"
              to="/docs/">
              Get started
            </Link>
          </div>
        </section>
        <section className={`${styles.homeSection} ${styles.wrapperSection}`}>
          <h1>Use the language you love</h1>
          <div className={styles.wrappers}>
            {wrappers.length === 0 && (
              <div>No wrappers for the moment.</div>
            )}
            {wrappers.map((w, i) => {
              return (
                <a className={styles.wrapper}
                  key={i}
                  href={w.github}
                  target="_blank"
                  style={{
                    backgroundColor: w.bgColor,
                    color: w.fgColor
                  }}>
                  <h2>{w.name}</h2>
                  <div>
                    {w.author} • {w.language}
                  </div>
                </a>
              );
            })}
          </div>
          <p>
            Help contribute by making a wrapper in your favourite programming language.<br />
            <b>Made a wrapper? <a href="https://github.com/AniAPI-Team/AniAPI-Docs/edit/main/src/pages/index.js" target="_blank">Edit this page!</a></b>
          </p>
        </section>
        <section className={`${styles.homeSection} ${styles.showcaseSection}`}>
          <div className="container">
            <h1>Apps using AniAPI</h1>
            <div className={styles.apps}>
              {apps.length === 0 && (
                <div>No applications for now.</div>
              )}
              {apps.map((a, i) => {
                return (
                  <a className={styles.app}
                    key={i}
                    href={a.url}
                    target="_blank"
                    style={{
                      backgroundImage: `url(${a.preview})`
                    }}>
                    <div className={styles.appInfo}>
                      <h3>{a.name}</h3>
                      <p>{a.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/AniAPI-Team/AniAPI-Docs/edit/main/src/pages/index.js"
              target="_blank">
              Add your app
            </Link>
          </div>
        </section>
        <section className={`${styles.homeSection} ${styles.communitySection}`}>
          <h1>Join the community</h1>
          <Link to="https://discord.gg/xQjZx5aWkR"
            target="_blank">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#fff" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
          </Link>
        </section>
        <section className={`${styles.homeSection} ${styles.supportersSection}`}>
          <div className="container">
            <h1>Our supporters</h1>
            <p>AniAPI is able to reach out more developers with good performances thanks to our patrons...</p>
            <div className={styles.supportersTiers}>
              <div className={styles.supportersTier}>
                <h3>Kawaii's</h3>
                <span>Nick Geel</span>
              </div>
              <div className={styles.supportersTier}>
                <h3>Onii/Onee-chan's</h3>
                <span>-</span>
              </div>
              <div className={styles.supportersTier}>
                <h3>Senpai's</h3>
                <span>-</span>
              </div>
            </div>
            <div className={styles.supportersTiers}>
              <div className={styles.supportersTier}>
                <h3>Sensei's</h3>
                <span>-</span>
              </div>
              <div className={styles.supportersTier}>
                <h3>Deredere's</h3>
                <span>-</span>
              </div>
              <div className={styles.supportersTier}>
                <h3>Waifu's</h3>
                <span>-</span>
              </div>
            </div>
            <Link
              className="button button--secondary button--lg"
              to="https://www.patreon.com/aniapi"
              target="_blank">
              Support us
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
