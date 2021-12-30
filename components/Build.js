import styles from "./build.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faPencilRuler, faCode, faCogs } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Build() {
    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <div className={styles.itemContainer}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faPencilRuler} size="6x"/>
                        <div className={styles.iconText}>Design</div>
                    </div>
                    <div className={styles.containerText}>If you're a designer, you are able to bring your knowledge of visual principles and aesthetics to HackBU. Collaborating with developers will allow all parties to flourish, building beautiful and functional hacks.</div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faCode} size="6x"/>
                        <div className={styles.iconText}>Code</div>
                    </div>
                    <div className={styles.containerText}>
                        Programmers galore! Without programmers we wouldn't be much of a hackathon. Whether your interest lie in mobile, web, machine learning, artificial intelligence, virtual reality, artificial reality, or any of the other possible direction, we want you at HackBU. You do not need experience in any of these, all that matters is you have the drive.
                    </div>
                </div>
                <div className={styles.itemContainer}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faCogs} size="6x"/>
                        <div className={styles.iconText}>Create</div>
                    </div>
                    <div className={styles.containerText}>
                        Most important, be creative. Do you have some outlandish idea that you don't think you could ever make? Create it at HackBU! We want nothing more than to help you unleash the creativity inside you, we'll take care of the rest.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Build