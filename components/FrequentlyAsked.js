import styles from "./frequentlyasked.module.css";
import Collapsible from "./Collapsible";
function FrequentlyAsked() {
    return (
        <div className={styles.container} id="faq">
            <h1 className={styles.title}>Frequently Asked Questions</h1>
            <div className={styles.collapsibles}>
                    <Collapsible  
                        title="What is HackBU?" 
                        body="HackBU is a student-run organization at Binghamton University. We aim to create a community where students can explore technology outside the classroom. We mentor students, hold weekly workshops, and, most importantly, share our interest in programming and problem-solving."
                        isOpen={true}/>
                    <Collapsible  
                        title="What happens at a hackathon?"
                        body='At a hackathon, "hackers" form teams with the intention of creating the best type of program (e.g. web app, iPhone app) or hardware hack within a certain period of time.'/>
                    <Collapsible
                        title="Who can attend?"
                        body="This event is open to all students 18 and older. You don't need to be a computer science major or even a Binghamton University student to participate!" />
                    <Collapsible
                        title="How much does it cost?"
                        body="HackBU is a free event! This means that all you'll need is a computer to work on, an internet connection, and an idea! In fact, we'll be giving you free swag at the end of the hackathon for participating!" />
                    <Collapsible
                        title="Do I need a team or idea to sign up?"
                        body="No! We recommend registering with friends, but there will be opportunities to brainstorm with and meet other participants at the hackathon." />
                    <Collapsible 
                        title="What if I'm a newbie?"
                        body="This is going to be our most beginner-friendly event yet. We are going to have workshops both before and during the hackathon in order to get you in a position to be able to work on a project. We are hoping for any student of any major to be able to participate in our hackathon." />
                    
            </div>
        </div>
    )
}

export default FrequentlyAsked;