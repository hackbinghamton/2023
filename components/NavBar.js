import styles from "./NavBar.module.css";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import constants from "../public/constants.js";

export default function NavBar() {
  const [active, setActive] = useState(0);

  return (
    <navbar className={styles.container}>
      <constants.HACKBU_LOGO height={75} width={75} />
      <div className={styles.navItems}>
        <Link
          to="build"
          smooth={true}
          className={`${styles.navItem} ${active == 1 ? styles.active : ""}`}
          onClick={() => setActive(1)}
        >
          About Us
        </Link>
        <Link to="faq" smooth={true}
            className={`${styles.navItem} ${active == 2 ? styles.active : ""}`}
            onClick={() => setActive(2)}>
            FAQ
        </Link>
        <Link to="sponsors" smooth={true}
            className={`${styles.navItem} ${active == 3 ? styles.active : ""}`}
            onClick={() => setActive(3)}>
            Sponsors
        </Link>
        <Link to="schedule" smooth={true}
            className={`${styles.navItem} ${active == 4 ? styles.active : ""}`}
            onClick={() => setActive(4)}>
            Schedule
        </Link>
      </div>
      <button
        className={styles.register}
        onClick={() => window.open(constants.REGISTRATION_LINK)}
      >
        Register!
      </button>
  </navbar>
  );
}
