import styles from "./index.module.css";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Build from "../components/Build";

function Home() {
    return (
        <div className={styles.container}>
            <title>HackBU 2022</title>
            <NavBar />
            <Hero />
            <Build />
        </div>
    )
}

export default Home;