import styles from "./frequentlyasked.module.css";
import Collapsible from "react-collapsible";
function FrequentlyAsked() {
    return (
        <div className={styles.container} id="faq">
            <h1 className={styles.title}>Frequently Asked Questions</h1>
            <div className={styles.collapsibles}>
                <div>
                    <Collapsible 
                        trigger="What is HackBU?" 
                        triggerClassName={styles.trigger} 
                        triggerOpenedClassName={styles.triggerOpened}
                        transitionTime={200}
                        open={true}
                        className={styles.collapsible}
                        openedClassName={styles.collapsible}
                        easing="ease-in">
                        <div className={styles.collapseContent}>
                            HackBU is a student-run organization at Binghamton University. We aim to create a community where students can explore technology outside the classroom. We mentor students, hold weekly workshops, and, most importantly, share our interest in programming and problem-solving.
                        </div>
                    </Collapsible>
                    <Collapsible 
                        trigger="What happens at a hackathon?" 
                        triggerClassName={styles.trigger} 
                        triggerOpenedClassName={styles.triggerOpened}
                        transitionTime={200}
                        className={styles.collapsible}
                        openedClassName={styles.collapsible}
                        easing="ease-in">
                        <div className={styles.collapseContent}>
                            At a hackathon, "hackers" form teams with the intention of creating the best type of program (e.g. web app, iPhone app) or hardware hack within a certain period of time.
                        </div>
                    </Collapsible>
                     <Collapsible 
                        trigger="Do I need a team or idea to sign up?" 
                        triggerClassName={styles.trigger} 
                        triggerOpenedClassName={styles.triggerOpened}
                        transitionTime={200}
                        className={styles.collapsible}
                        openedClassName={styles.collapsible}
                        easing="ease-in">
                        <div className={styles.collapseContent}>
                            No! We recommend registering with friends, but there will be opportunities to brainstorm with and meet other participants at the hackathon.
                        </div>
                    </Collapsible>
                </div>
                <div>
                    <Collapsible 
                        trigger="Who can attend?" 
                        triggerClassName={styles.trigger} 
                        triggerOpenedClassName={styles.triggerOpened}
                        transitionTime={200}
                        className={styles.collapsible}
                        open={true}
                        openedClassName={styles.collapsible}
                        easing="ease-in">
                        <div className={styles.collapseContent}>
                            This event is open to all students 18 and older. You don't need to be a computer science major or even a Binghamton University student to participate!
                        </div>
                    </Collapsible>
                    <Collapsible 
                        trigger="What if I'm a newbie?" 
                        triggerClassName={styles.trigger} 
                        triggerOpenedClassName={styles.triggerOpened}
                        transitionTime={200}
                        className={styles.collapsible}
                        openedClassName={styles.collapsible}
                        easing="ease-in">
                        <div className={styles.collapseContent}>
                            Don't worry, beginners are welcome! Come to HackBU's weekly workshops where we teach you how to code. Additionally, we will be hosting a few introductory workshops during the hackathon to help you get started.
                        </div>
                    </Collapsible>
                    <Collapsible 
                        trigger="Will there be food?" 
                        triggerClassName={styles.trigger} 
                        triggerOpenedClassName={styles.triggerOpened}
                        transitionTime={200}
                        className={styles.collapsible}
                        openedClassName={styles.collapsible}
                        easing="ease-in">
                        <div className={styles.collapseContent}>
                           Unfortunately, as the event is virtual this year, food and snacks will not be provided.
                        </div>
                    </Collapsible>
                </div>
            </div>
        </div>
    )
}

export default FrequentlyAsked;