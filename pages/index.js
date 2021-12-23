import Image from "next/image"
import HackBU from "/hackbu.svg"
import styles from "./index.module.css";

function Home() {
    return (
        <div className={styles.container}>
            <HackBU 
            className={styles.logo}
            height={150}
            width={150}
            />
            <h2>Our website is still getting off the ground...</h2>
            <h3>In the meantime, register!</h3>

            <button className={styles.button}>Register here</button>
        </div>
    )
}

export default Home;