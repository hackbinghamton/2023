import styles from "./index.module.css";

import Head from "next/head";

import NavBarReturn from "../components/NavBarReturn";
import Schedule from "../components/Schedule";

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
        <title>HackBU 2023 Schedule</title>
      </Head>
      <NavBarReturn />
      <Schedule standalone="true" />
    </div>
  );
}

export default Home;
