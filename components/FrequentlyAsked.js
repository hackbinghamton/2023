import styles from "./frequentlyasked.module.css";
import Collapsible from "./Collapsible";

import constants from "../public/constants.js";

function FrequentlyAsked() {
  return (
    <div className={styles.container} id="faq">
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.collapsibles}>
        {Object.keys(constants.FREQUENTLY_ASKED_QUESTIONS).map(
          (question, index) => (
            <Collapsible
              title={question}
              body={constants.FREQUENTLY_ASKED_QUESTIONS[question]}
              isOpen={index === 0}
              last={
                index ===
                Object.keys(constants.FREQUENTLY_ASKED_QUESTIONS).length - 1
              }
            />
          )
        )}
      </div>
    </div>
  );
}

export default FrequentlyAsked;
