import styles from "./index.module.css";

import Head from "next/head";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Build from "../components/Build";
import FrequentlyAsked from "../components/FrequentlyAsked.js";
import Sponsors from "../components/Sponsors";

import constants from "../public/constants.js";

function Home() {
  return (
    <div className={styles.container}>
      {constants.SHOULD_SHOW_BANNER && (
        <div className="banner">{constants.BANNER_TEXT}</div>
      )}
      <style jsx>{`
        .banner {
          height: 45px;
          background-color: #804d00;
          width: 100%;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-family: "Roboto Mono", monospace;
          font-weight: 350;
        }
      `}</style>
      <Head>
        <title>HackBU 2023</title>
      </Head>
      <NavBar />
      <Hero />
      <Build />
      <FrequentlyAsked />
      <Sponsors />
    </div>
  );
}

export default Home;
