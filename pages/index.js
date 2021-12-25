import HackBU from "/hackbu.svg"
import styles from "./index.module.css";

import NavBar  from "../components/NavBar";

function Home() {
    return (
        <div className={styles.container}>
            <title>HackBU 2022</title>
            <NavBar />
            <div className={styles.hero}>
                <div className={styles.heroText}>
                    <p>Hack.</p>
                    <p>Be You.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;