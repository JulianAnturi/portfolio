/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Julian Anturi",
  title: "Hi all, I'm Julian",
  subTitle: emoji(
    "Fullstack developer 🚀 with experience in designing, developing, and deploying modern web applications using technologies such as Laravel, React, PostgreSQL, among others. I specialize in building robust APIs, scalable systems, and efficient frontend and backend solutions."

  ),
  resumeLink:
    "https://docs.google.com/document/d/1TOV7Zl1FIPGrqdvB0il3bh-AqWR43V7h/edit?usp=sharing&ouid=107351949120474977323&rtpof=true&sd=true",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/JulianAnturi",
  linkedin: "https://www.linkedin.com/in/julian-anturi-953938126/",
  gmail: "julian.david897@gmail.com",
  gitlab: "https://gitlab.com/julidavi777",
  docker: "https://hub.docker.com/repositories/julidavi777",
  display: true // Set to true to display this section
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "I really love developing apps on my free times",
 skills: [
    emoji(
      "⚡ My  daily work flow includes tools like, Neovim, Linux, planner version control as Git, upgrading my environments to achieve a better productivity and accurance on every project"

    ),
    emoji("⚡ I have Developed an product using computer vision implemented by YOLOV8"),
    emoji(
      "⚡ Integrating services as  Firebase/ AWS / Digital Ocean"
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
schools: [
    {
      schoolName: "National Learning Service SENA",
      logo: require("./assets/images/sena.png"),
      subHeader: "Design, implementation and maintenance of telecommunications systems",
      duration: "July 2016 - July 2018",
      desc: "Technology Degree",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "National Learning Service SENA",
      logo: require("./assets/images/sena.png"),
      subHeader: "Analysis and development of information systems",
      duration: "July 2020 - July 2022",
      desc: "Technology Degree.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Ibero-American University Corporation",
      logo: require("./assets/images/ibero.png"),
      subHeader: "Software Engineering",
      duration: "August 2024 - Currently",
      desc: "Engineering.",
      descBullets: [
        "I am currently in the fifth semester",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};



// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Laravel / PHP", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Nodejs",
      progressPercentage: "65%"
    },
    {
      Stack: "Reactjs",
      progressPercentage: "60%"
    },
    {
      Stack: "FastAPI",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};
// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Developer",
      company: "Bitsoluciones",
      companylogo: require("./assets/images/anal.jpg"),
      date: "December 2023 – April 2025",
      desc: "Company dedicated to artificial intelligence",
      descBullets: [
        "Developed an API capable of automatically recognizing product images.",
        "Used YOLOv8 for training object detection models.",
        "The frontend was developed in React, providing a modern and dynamic interface for users.",
        "The main backend was built with Laravel, responsible for managing system logic and client requests.",
        "Implemented an additional service in FastAPI, specialized in real-time image and video processing and analysis.",
        "Collaborated on a WhatsApp mass messaging software built with Node.js",
        "Images and videos are stored in Amazon S3, and the system is deployed on EC2",
        "Developed an internal system to maintain datasets internally and inventoried"
      ]
    },
    {
      role: "Fullstack Developer",
      company: "Educadavid",
      companylogo: require("./assets/images/educadavid.jpg"),
      date: "May 2021 – October 2022",
      desc: "Company dedicated to Education with creativity and strategy, improving individual and common processes.",
      descBullets: [
        "Developed a PHP-based LMS (Learning Management System) learning platform.",
        "The system includes an ICFES-type question and answer module, ideal for academic simulation preparation.",
        "Designed functionalities that allow students to practice autonomously and receive immediate feedback.",
        "In addition to development, taught reinforcement classes in engineering areas, providing personalized support to students who required it.",
        "The platform was designed to improve academic performance and facilitate access to interactive educational resources."
      ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
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
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/travel_club.png"),
      projectName: "TravelClub",
      projectDesc: "System that allows creating tours, for those who want to travel, they can search and schedule a tour to travel",
      projectTechTitle: "Technologies",
      projectTechList: ["html-5", "css3", "nodejs", "sql-database"],

      footerLink: [
        {
          name: "view here",
          url: "https://travel-club-yrqq.onrender.com"
        }

      ]
    },
    {
      image: require("./assets/images/node_farm.png"),
      projectName: "Node farm",
      projectDesc: "This is a system where you can visualize vegetables from a farm",
      projectTechTitle: "Technologies",
      projectTechList: ["html-5", "css3", "nodejs"],

      footerLink: [
        {
          name: "view here",
          url: "https://travel-club-yrqq.onrender.com"
        }

      ]
    },
    {
      image: require("./assets/images/biblioteca.png"),
      projectName: "Library",
      projectDesc: "This project is about how books can be lent in a library, being a library administrator",
      projectTechTitle: "Technologies",
      projectTechList: ["reactjs", "laravel", "sql-database", "docker"],
      footerLink: [
        {
          name: "view here",
          url: "https://biblioteca-sooty.vercel.app",
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {

 achievementsCards: [
    {
      title: "SENA Certifications",
      subtitle:
        "Certificates provided by SENA",
      image: require("./assets/images/sena.png"),
      imageAlt: "SENA",
      footerLink: [
        {
          name: "Software Developer",
          url: "https://drive.google.com/file/d/1UfadjWNJ2UbvTC8ivWegEmdEGrzNPSaL/view?usp=sharing"
        },
        {
          name: "Telecommunications Networks",
          url: "https://drive.google.com/file/d/1dgi_-rKUBKguZ48NUDoBAmdShdnNV8Gx/view?usp=sharing"
        },
      ]
    },
    {
      title: "English Certifications",
      subtitle:
        "Certificate provided by Busuu",
      image: require("./assets/images/busuu.jpg"),
      imageAlt: "Busuu logo",
      footerLink: [
        {
          name: "B1 Certificate",
          url: "https://api.busuu.com/anon/certificates/6cb3dea67dc122cc5d935678070f5695?lid=tbzdtf1p6k4k&utm_source=CRM&utm_group=ES&utm_medium=EMAIL_TRANSACTION&utm_campaign=TRANSACTION_CERTIFICATE_END_LEVEL_ROW"
        }
      ]
    },

    {
      title: "Laravel Library",
      subtitle: "I developed my own Laravel library to easily install multiple services and perform CRUDs, increasing development speed",
      image: require("./assets/images/composer.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Functionality Demonstration", url: "https://drive.google.com/file/d/1AxQBmmjv9V7i6UkM4c4YORVoct8bDz47/view" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ],
    },
  ],

      display: true // Set false to hide this section, defaults to true
}

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const  contactInfo = {
  // title: "Contactame",
  title: emoji("Contactame ☎️"),
  subtitle:
    "You can call or type via whatsapp",
  number: "+57-3016513482",
  email_address: "julian.david897@gmail.com",
  display: true
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
