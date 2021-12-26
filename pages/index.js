import styles from "./index.module.css";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

function Home() {
    return (
        <div className={styles.container}>
            <title>HackBU 2022</title>
            <NavBar />
            <Hero />
        </div>
    )
}

export default Home;