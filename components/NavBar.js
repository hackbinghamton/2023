import HackBU from "/hackbu.svg"
import styles from "./NavBar.module.css";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import constants from "../public/constants.js"

export default function NavBar() {

    const [active, setActive] = useState(0);

    function handleClick(i) {
        setActive(i);
    }

    return (
        <div className={styles.container}>
            <HackBU 
                height={75}
                width={75}
            />
          <div className={styles.navItems}>
                <Link 
                    to="build" 
                    smooth={true} 
                    className={`${styles.navItem} ${active == 1 ? styles.active : ""}`} onClick={() => handleClick(1)}>
                  <a>About Us</a>
                </Link>
                <Link
                    to="faq"
                    smooth={true}>
                    <div 
                        className={`${styles.navItem} ${active == 2 ? styles.active : ""}`} 
                        onClick={() => handleClick(2)}>
                        FAQ
                    </div>
                </Link>
                <Link
                    to="sponsors"
                    smooth={true}>
                    <div className={`${styles.navItem} ${active == 3 ? styles.active : ""}`} onClick={() => handleClick(3)}>
                        Sponsors
                    </div>
                </Link>
          </div>
          <button 
                className={styles.register}
                onClick={() => window.open(constants.REGISTRATION_LINK)}
            >
              Register!
          </button>
        </div>
    )
}