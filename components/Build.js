import styles from "./build.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faPencilRuler, faCode, faCogs } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

function Build() {
    return (
        <div className={styles.container} id="build">
            <h1 className={styles.title}>What can you build in 24 hours?</h1>
            <Carousel autoPlay={true} dynamicHeight={false} infiniteLoop={true} interval={5000} showStatus={false} showIndicators={false}>
                <CarouselItem
                    title="Design"
                    icon={faPencilRuler}
                    description="If you're a designer, you are able to bring your knowledge of visual principles and aesthetics to HackBU. Collaborating with developers will allow all parties to flourish, building beautiful and functional hacks."
                />
                <CarouselItem
                    title="Code"
                    icon={faCode}
                    description="Programmers galore! Without programmers we wouldn't be much of a hackathon. Whether your interest lie in mobile, web, machine learning, artificial intelligence, virtual reality, artificial reality, or any of the other possible direction, we want you at HackBU. You do not need experience in any of these, all that matters is you have the drive."
                />
                <CarouselItem 
                    title="Create"
                    icon={faCogs}
                    description="Most important, be creative. Do you have some outlandish idea that you don't think you could ever make? Create it at HackBU! We want nothing more than to help you unleash the creativity inside you, we'll take care of the rest."
                />
            </Carousel>

        </div>
    )
}

function CarouselItem(props) {
    return (
    <div className={styles.itemContainer}>
        <div className={styles.iconContainer}>
            <div className={styles.iconText}>{props.title}</div>
                <FontAwesomeIcon 
                    color="rgba(226, 183, 36, 0.6)" 
                    icon={props.icon} 
                    size="4x"/>
            </div>
            <div className={styles.containerText}>{props.description}</div>
        </div>
    );
}

export default Build