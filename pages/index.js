import HackBU from "/hackbu.svg"
import styles from "./index.module.css";

function Home() {
    return (
        <div className={styles.container}>
            <title>HackBU 2022</title>
            <HackBU 
            className={styles.logo}
            height={150}
            width={150}
            />
            <h2>Our website is still getting off the ground...</h2>
            <h3>In the meantime, register!</h3>

            <button className={styles.button}>
                <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfZ1m70qcPM2ZRTBkXSNUzwqMAFnjZNSmYQq_WcOFGfdPNXrA/viewform?usp=sf_link"
                    className={styles.link}
                >
                    Click to register
                </a>
            </button>
        </div>
    )
}

export default Home;