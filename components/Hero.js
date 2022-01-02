import Image from "next/image"

import styles from "./hero.module.css"

import heroImage from "../public/assets/heroImage.webp"

import constants from "../public/constants.js"


function Hero() {

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <h1 className={styles.heroTitle}>Hack. <br /> Be You.</h1>
                <p className={styles.heroSubtitle}>HackBU 2022 is <b>Binghamton University’s</b> 9th annual student-run hackathon. This year’s virtual hackathon will be hosted from February 5th-6th, over on our Discord server.</p>
                <button 
                    className={styles.register} 
                    onClick={() => window.open(constants.REGISTRATION_LINK)}
                >Register Now</button>
            </div>
            <Image 
                src={heroImage} 
                alt="HackBU 2022 Hackathon"
                height={850}
                width={1100}
            />
        </div>
    )
}

export default Hero