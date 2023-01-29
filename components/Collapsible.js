import styles from "./collapsible.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"; 
import { useState } from "react";

function Collapsible(props) {

    const [isOpen, setIsOpen] = useState(props.isOpen || false);

    return (
        <div className={styles.container}>
            <div className={styles.title} onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} size="lg" className={styles.titleIcon}/>
                <div className={styles.titleText}>{props.title}</div>
            </div>
            <div 
            className={styles.content}
            style={{  
                        transform: isOpen ? "scaleY(1)" : "scaleY(0)",
                        height: isOpen ? "100%" : "0",
                        paddingBottom: isOpen ? "50px" : "0"
                        }}>
                <div className={styles.vertLine}></div>
                <div className={styles.contentText}>
                    {props.body}
                </div>
            </div>
            {!props.last ? <hr className={styles.line}/> : <></>}

        </div>
    )
}

export default Collapsible;
