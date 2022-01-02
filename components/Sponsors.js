import styles from "./sponsors.module.css";
import Image from "next/image";

import Raymond from "../public/assets/logos/raymond.png";
import RubyLaw from "../public/assets/logos/ruby-law.png";

function Sponsors() {
    return (
        <div id="sponsors" className={styles.container}>
            <h1 className={styles.title}>HackBU would not be possible without our sponsors</h1>
            <hr className={styles.line}/>
            <div className={styles.sponsors}>
                <Image src={RubyLaw} />
                <Image src={Raymond} />
            </div>
            <button 
                className={styles.button}
                onClick={() => window.open("https://drive.google.com/file/d/1O6bA-nZA-0abM6rv95LJXwXb628VZ1iA/view?usp=sharing")}>Interested in Sponsoring?</button>
        </div>
    )
}

export default Sponsors;