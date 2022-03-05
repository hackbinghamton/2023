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
            <div className="banner">HackBU 2022 is now over! Thank you for coming!</div>
            <style jsx>{` 
                .banner {height: 35px;
                background-color: #804d00;
                width: 100%;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                }
                
            `}</style>
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