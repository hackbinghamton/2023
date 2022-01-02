import styles from "./index.module.css";

import Head from "next/head";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Build from "../components/Build";
import FrequentlyAsked from "../components/FrequentlyAsked.js";
import Sponsors from "../components/Sponsors";

function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>HackBU 2022</title>
            </Head>
            <NavBar />
            <Hero />
            <Build />
            <FrequentlyAsked />
            <Sponsors />
        </div>
    )
}

export default Home;