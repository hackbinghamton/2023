import styles from "./NavBar.module.css";
import constants from "../public/constants.js";
import config from "../next.config.js"

export default function NavBarReturn() {
  return (
    <navbar className={styles.container}>
      <constants.HACKBU_LOGO height={75} width={75} />
      <div className={styles.navItems}>
        <a
          href={config.basePath}
          className={styles.navItem}
        >
          Return to hackathon homepage
        </a>
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
