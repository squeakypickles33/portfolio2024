/* Change this file to edit personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Derek Williams",
  title: "Hi all, I'm Derek",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1s4sv-8OXpgK0B94UwmhlE6bWm4fr8_ZC/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/squeakypickles33",
  linkedin: "https://www.linkedin.com/in/derekwwilliams/",
  gmail: "dwilliams33dw@gmail.com",
  facebook: "https://www.facebook.com/derekthatsme",
  instagram: "https://www.instagram.com/ddubyadubya/",
  // gitlab: "https://gitlab.com/",
  // medium: "https://medium.com/@dwilliams33dw",
  // stackoverflow: "https://stackoverflow.com/users/",
  // Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks ( Single Page Applications )"),
    emoji(
      "⚡ Integration of third party services such as TailwindCSS / AWS / OAuth"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "mongo",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "trello",
      fontAwesomeClassname: "fab fa-trello"
    },
    {
      skillName: "squarespace",
      fontAwesomeClassname: "fab fa-squarespace"
    },
    {
      skillName: "wix",
      fontAwesomeClassname: "fab fa-wix"
    },
    {
      skillName: "slack",
      fontAwesomeClassname: "fab fa-slack"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "salesforce",
      fontAwesomeClassname: "fab fa-salesforce"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Community College of the Air Force",
      logo: require("./assets/images/s-l400.jpeg"),
      subHeader: "Associate in Applied Science - Logistics",
      duration: "December 2017",
      desc: "Comprehensive knowledge of supply chain principles, inventory management techniques, warehousing strategies, and distribution network optimization, with adept management of complex logistical challenges to ensure timely delivery, cost-effectiveness, and waste reduction..",
      // descBullets: [""]
    },
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/NCAZST-230-01__11291.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2018 - Current",
      desc: "Currently, taking courses about Software Engineering, Web Security, Operating Systems, etc.",
      // descBullets: [""]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "",
      companylogo: require("./assets/images/hack-reactor-circle-logo.png"),
      date: "June 2018 – Present",
      desc: "",
      descBullets: [
        ""
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "A FEW RECENT PROJECTS",
  projects: [
    {
      image: require("./assets/images/findFriends.gif"),
      projectName: "PetCentral",
      projectDesc: "A full-stack social networking application with secure authentication, profile management, messaging features, forums, friend-finding, and search functionality.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/SA-BlueOcean/PetCentral/blob/dev/README.md"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/k6test.png"),
      projectName: "Atelier System Design",
      projectDesc: "End-to-end development and optimization of a scalable API and database for an existing application, ensuring peak performance and successful deployment.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Triton-SDC-6/Atelier-Products"
        }
      ]
    },
    {
      image: require("./assets/images/AtelierDemo.gif"),
      projectName: "ECommerce Atelier",
      projectDesc: "A comprehensive e-commerce application with product details, cart functionality, image gallery, ratings, reviews, and Q&A.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Quidditch-Queue-Handlers/FEC-Project-Atelier/blob/main/README.md"
        }
      ]
    }
  ],
  display: true // Set false to hide this projects section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Software Engineering Immersive Course",
      subtitle:
        "Adept in JavaScript, React, Express, Mongo, and MySQL in an Agile environment, solo coding, pair programming, and team collaboration.",
      image: require("./assets/images/hack-reactor-circle-logo.png"),
      imageAlt: "Hack Reactor Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1I9T6A8azhWfDp2FsR5cw3nOyGflUj-hh/view?usp=sharing"

        }
      ]
    },
    {
      title: "National Society of Collegiate Scholars",
      subtitle:
        "A select group of students who embodied the spirit of commitment to scholarship, leadership, and service, all built upon a foundation of integrity. Connected with like-minded peers, refined leadership skills, and gained meaningful community service experience.",
      image: require("./assets/images/nscs.png"),
      imageAlt: "NSCS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1wGnzkHk8Sy5A-0d8Zb2m3DY_CiD8MrlQ/view?usp=sharing"

        }
      ]
    }
  ],
  display: true // Set false to hide this achievements section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learned.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this blogs section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-608-216-3174",
  email_address: "dwilliams33dw@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};