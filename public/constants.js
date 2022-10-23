import heroImage from "../public/assets/heroImage.webp";

import HackBU from "/hackbu.svg";

// Import all the sponsor logos into here, and then add them into the sponsors array
import Raymond from "../public/assets/logos/raymond.png";
import RubyLaw from "../public/assets/logos/ruby-law.png";
import AIS from "../public/assets/logos/ais.png";
import JPMorgan from "../public/assets/logos/jpmorgan.png";

module.exports = {
  HACKBU_LOGO: HackBU,
  SHOULD_SHOW_BANNER: true,
  BANNER_TEXT: "HackBU 2022 is now over! Thank you for coming!",
  REGISTRATION_LINK:
    "https://docs.google.com/forms/d/e/1FAIpQLSfIo5WLncUne0X6dr6xBKQ9SwHYDcFu1RBD55RPvBvkmTEopw/viewform",
  HERO_SUBTITLE:
    "HackBU 2022 is <b>Binghamton University’s</b> 9th annual student-run hackathon. This year’s virtual hackathon will be hosted from February 5th-6th, over on our Discord server.",
  HERO_IMAGE: heroImage,
  FREQUENTLY_ASKED_QUESTIONS: {
    "What is HackBU?":
      "HackBU is a student-run organization at Binghamton University. We aim to create a community where students can explore technology outside the classroom. We mentor students, hold weekly workshops, and, most importantly, share our interest in programming and problem-solving.",

    "What happens at a hackathon?":
      'At a hackathon, "hackers" form teams with the intention of creating the best type of program (e.g. web app, iPhone app) or hardware hack within a certain period of time.',

    "Who can attend?":
      "This event is open to all students 18 and older. You don't need to be a computer science major or even a Binghamton University student to participate!",

    "How much does it cost?":
      "HackBU is a free event! This means that all you'll need is a computer to work on, an internet connection, and an idea! In fact, we'll be giving you free swag at the end of the hackathon for participating!",

    "Do I need a team or idea to sign up?":
      "No! We recommend registering with friends, but there will be opportunities to brainstorm with and meet other participants at the hackathon.",

    "What if I'm a newbie?":
      "This is going to be our most beginner-friendly event yet. We are going to have workshops both before and during the hackathon in order to get you in a position to be able to work on a project. We are hoping for any student of any major to be able to participate in our hackathon.",
  },
  SPONSORS: [Raymond, RubyLaw, AIS, JPMorgan],
};
