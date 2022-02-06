import styles from "./sponsors.module.css";
import Image from "next/image";
import Link from "next/link";

import Raymond from "../public/assets/logos/raymond.png";
import RubyLaw from "../public/assets/logos/ruby-law.png";
import AIS from "../public/assets/logos/ais.png";
import JPMorgan from "../public/assets/logos/jpmorgan.png";

function Sponsors() {
    return (
        <div id="sponsors" className={styles.container}>
            <h1 className={styles.title}>Our Sponsors</h1>
            <div className={styles.sponsors}>
                <div className={styles.imageContainer}><Image src={RubyLaw} /></div>
                <div className={styles.imageContainer}><Image src={Raymond} /></div>
                 <div className={styles.imageContainer}><Image src={JPMorgan} /></div>
                  <div className={styles.imageContainer}><Image src={AIS} /></div>
            </div>
            <Link href="/sponsorship_packet.pdf" alt="Sponsorship Packet" target="_blank">
                <button className={styles.button}>Interested in Sponsoring?</button>
            </Link>
        </div>
    )
}

export default Sponsors;