import styles from "./sponsors.module.css";
import Image from "next/image";
import Link from "next/link";

import constants from "../public/constants.js";

function Sponsors() {
  return (
    <div id="sponsors" className={styles.container}>
      <h1 className={styles.title}>Our Sponsors</h1>
      <div className={styles.sponsors}>
        {constants.SPONSORS.map((sponsor, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image src={sponsor} />
          </div>
        ))}
      </div>
      <Link
        href="/sponsorship_packet.pdf"
        alt="Sponsorship Packet"
        target="_blank"
      >
        <button className={styles.button}>Interested in Sponsoring?</button>
      </Link>
    </div>
  );
}

export default Sponsors;
