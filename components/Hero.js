import Image from "next/image";

import styles from "./hero.module.css";

import constants from "../public/constants.js";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h1 className={styles.heroTitle}>
          Hack. <br /> Be You.
        </h1>
        <p
          className={styles.heroSubtitle}
          dangerouslySetInnerHTML={{ __html: constants.HERO_SUBTITLE }}
        ></p>
        <button
          className={styles.register}
          onClick={() => window.open(constants.REGISTRATION_LINK)}
        >
          Register Now
        </button>
      </div>
      <div className={styles.rightContainer}>
        <Image
          src={constants.HERO_IMAGE}
          alt="HackBU 2023 Hackathon"
          priority
        />
      </div>
    </div>
  );
}

export default Hero;
