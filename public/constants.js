import heroImage from "../public/assets/heroImage.webp";

import HackBU from "/hackbu.svg";

// Import all the sponsor logos into here, and then add them into the sponsors array
import JPMorgan from "../public/assets/logos/jpmorgan.png";
import Raymond from "../public/assets/logos/raymond.png";
import RubyLaw from "../public/assets/logos/ruby-law.png";
import Wolfram from "../public/assets/logos/wolfram.png";
import KoffmanIncubator from "../public/assets/logos/koffmanIncubator.png";
import WatsonCollege from "../public/assets/logos/WatsonCollege.png";
import CAE from "../public/assets/logos/CAE.png"
import AIS from "../public/assets/logos/ais.png"

const SAT = "2023-02-04"
const SUN = "2023-02-05"
const TZ = "-05:00"

module.exports = {
  HACKBU_LOGO: HackBU,
  SHOULD_SHOW_BANNER: false,
  BANNER_TEXT: "HackBU 2023 Registration Coming Soon!",
  REGISTRATION_LINK:
    "https://forms.gle/wGzvu9qc5zj9ppAK9",
  HERO_SUBTITLE:
    "HackBU 2023 is <b>Binghamton University's</b> 10th annual student-run hackathon. This year’s hackathon will be hosted from February 4th-5th, in person at Binghamton University's Innovative Technologies Complex.",
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
  SPONSORS: [JPMorgan, Raymond, RubyLaw, Wolfram, KoffmanIncubator, CAE, AIS, WatsonCollege],
  SCHEDULE: [
    {
      datetime: new Date(`${SAT}T11:00${TZ}`),
      name: "OCCT shuttle to ITC begins (runs every 10 minutes; last departure is ~12:50)",
      location: "University Union"
    },
    {
      datetime: new Date(`${SAT}T11:00${TZ}`),
      name: "Doors open, check-in begins",
      location: "<a href=\"https://goo.gl/maps/YvZFvfeiAe17bU5x5\">Innovative Technology Complex: Center of Excellence</a>"
    },
    {
      datetime: new Date(`${SAT}T11:00${TZ}`),
      name: "Coffee put out",
      location: "Rotunda"
    },
    {
      datetime: new Date(`${SAT}T12:15${TZ}`),
      name: "Opening Ceremony",
      location: "Symposium Hall"
    },
    {
      datetime: new Date(`${SAT}T13:00${TZ}`),
      name: "Hacking begins!",
      location: ""
    },
    {
      datetime: new Date(`${SAT}T13:30${TZ}`),
      name: "Lunch served",
      location: "Rotunda"
    },
    {
      datetime: new Date(`${SAT}T14:00${TZ}`),
      name: "Team forming and brainstorming",
      location: "Rotunda"
    },
    {
      datetime: new Date(`${SAT}T15:00${TZ}`),
      name: "Snacks and Monster Energy drinks put out",
      location: "Rotunda"
    },
    {
      datetime: new Date(`${SAT}T15:00${TZ}`),
      name: "Python Workshop",
      location: "Symposium Hall"
    },
    {
      datetime: new Date(`${SAT}T15:00${TZ}`),
      name: "Web Development Workshop",
      location: "ES-1413"
    },
    {
      datetime: new Date(`${SAT}T16:00${TZ}`),
      name: "Terminals + Git Workshop",
      location: "Symposium Halll"
    },
    {
      datetime: new Date(`${SAT}T18:00${TZ}`),
      name: "Dinner served",
      location: "Rotunda"
    },
    {
      datetime: new Date(`${SAT}T18:30${TZ}`),
      name: "<a href=\"https://www.jpmorgan.com/\">JP Morgan</a> Tech Talk",
      location: "TBD"
    },
    {
      datetime: new Date(`${SAT}T20:00${TZ}`),
      name: "<a href=\"http://shpe.binghamtonsa.org/\">Society of Hispanic Professional Engineers</a> Event",
      location: "Symposium Hall"
    },
    {
      datetime: new Date(`${SUN}T00:00${TZ}`),
      name: "Midnight snack served",
      location: "Rotunda"
    },
    {
      datetime: new Date(`${SUN}T00:00${TZ}`),
      name: "ES-2008 Quiet Hours start",
      location: "ES-2008"
    },
    {
      datetime: new Date(`${SUN}T02:00${TZ}`),
      name: "Cards with Soren",
      location: "ES-1413"
    },
    {
      datetime: new Date(`${SUN}T07:00${TZ}`),
      name: "ES-2008 Quiet Hours end",
      location: "ES-2008"
    },
    {
      datetime: new Date(`${SUN}T07:00${TZ}`),
      name: "Early morning cartoons with Chris",
      location: "Symposium Hall"
    },
    {
      datetime: new Date(`${SUN}T08:30${TZ}`),
      name: "Coffee put out",
      location: "Rotunda"
    },
    {
      datetime: new Date(`${SUN}T09:00${TZ}`),
      name: "Breakfast served",
      location: "Rotunda"
    },
    {
      datetime: new Date(`${SUN}T10:00${TZ}`),
      name: "Fireside Chat with <a href=\"https://wit-bu.mailchimpsites.com/\">Women in Tech</a>",
      location: "TBD"
    },
    {
      datetime: new Date(`${SUN}T12:00${TZ}`),
      name: "Hacking ends!",
      location: ""
    },
    {
      datetime: new Date(`${SUN}T12:00${TZ}`),
      name: "Lunch served",
      location: "Rotunda"
    },
    {
      datetime: new Date(`${SUN}T12:30${TZ}`),
      name: "T-shirts handed out",
      location: "Rotunda"
    },
    {
      datetime: new Date(`${SUN}T13:15${TZ}`),
      name: "All teams report for demos",
      location: "Rotunda"
    },
    {
      datetime: new Date(`${SUN}T13:30${TZ}`),
      name: "Round 1 of judging begins",
      location: "Rotunda"
    },
    {
      datetime: new Date(`${SUN}T14:30${TZ}`),
      name: "Round 2 of judging begins",
      location: "Rotunda"
    },
    {
      datetime: new Date(`${SUN}T15:15${TZ}`),
      name: "OCCT shuttle to University Union begins (runs every 20 minutes; last departure is 5:15)",
      location: "Symposium Hall"
    },
    {
      datetime: new Date(`${SUN}T15:15${TZ}`),
      name: "Slideshow Karaoke",
      location: "Symposium Hall"
    },
    {
      datetime: new Date(`${SUN}T15:45${TZ}`),
      name: "Closing Ceremony",
      location: "Symposium Hall"
    },
  ]
};
