import styles from "./sponsors.module.css";
import Image from "next/image";
import Link from "next/link";

import Raymond from "../public/assets/logos/raymond.png";
import RubyLaw from "../public/assets/logos/ruby-law.png";

function Sponsors() {
    return (
        <div id="sponsors" className={styles.container}>
            <h1 className={styles.title}>Our Sponsors</h1>
            <hr className={styles.line}/>
            <div className={styles.sponsors}>
                <Image src={RubyLaw} />
                <Image src={Raymond} />
            </div>
            <Link href="/sponsorship_packet.pdf" alt="Sponsorship Packet" target="_blank">
                <button className={styles.button}>Interested in Sponsoring?</button>
            </Link>
        </div>
    )
}

export default Sponsors;