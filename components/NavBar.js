import HackBU from "/hackbu.svg"
import styles from "./NavBar.module.css";
import { useState } from "react";

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
              <div className={`${styles.navItem} ${active == 1 ? styles.active : ""}`} onClick={() => handleClick(1)}><a>About Us</a></div>
              <div className={`${styles.navItem} ${active == 2 ? styles.active : ""}`} onClick={() => handleClick(2)}>Schedule</div>
              <div className={`${styles.navItem} ${active == 3 ? styles.active : ""}`} onClick={() => handleClick(3)}>Sponsors</div>
              <div className={`${styles.navItem} ${active == 4 ? styles.active : ""}`} onClick={() => handleClick(4)}>FAQ</div>
          </div>
          <button className={styles.register}>
              Register!
          </button>
        </div>
    )
}