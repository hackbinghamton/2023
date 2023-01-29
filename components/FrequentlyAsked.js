import styles from "./frequentlyasked.module.css";
import Collapsible from "./Collapsible";

import constants from "../public/constants.js";

function FrequentlyAsked() {
  return (
    <div className={styles.container} id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className={styles.collapsibles}>
        {Object.keys(constants.FREQUENTLY_ASKED_QUESTIONS).map(
          (question, index) => (
            <Collapsible
              key={index}
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
