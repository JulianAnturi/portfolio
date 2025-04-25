/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import { check } from "prettier";
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
  title: "Hola, soy Julian",
  subTitle: emoji(
    "Desarrollador fullstack 🚀 con experiencia en el diseño, desarrollo e implementación de aplicaciones web modernas utilizando tecnologías como Laravel, React, PostgreSQL, entre otras. Me especializo en la construcción de APIs robustas, sistemas escalables y soluciones eficientes tanto en frontend como en backend."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/JulianAnturi",
  linkedin: "https://www.linkedin.com/in/julian-anturi-953938126/",
  gmail: "julian.david897@gmail.com",
  gitlab: "https://gitlab.com/julidavi777",
  docker: "https://hub.docker.com/repositories/julidavi777",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Que hago?",
  subTitle: "Me gusta Desarrollar aplicaciones web, en mi tiempo libre",
  skills: [
    emoji(
      "⚡ Mi flujo de trabajo diario incluye herramientas como Neovim, Linux, un planner y control de versiones con Git, optimizando mis entornos para lograr una mayor productividad y precisión en cada proyecto."

    ),
    emoji("⚡ Desarrolle un producto utilizando computer vision implementado la tecnología yolov8"),
    emoji(
      "⚡ Integración de servicios como Firebase/ AWS / Digital Ocean"
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
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
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
      schoolName: "Servicio de Aprendizaje SENA",
      logo: require("./assets/images/sena.png"),
      subHeader: "Diseño,  implementación y mantenimiento de sistemas de telecomunicaciones  ",
      duration: "Julio 2016 - Julio 2018",
      desc: "Tecnologo",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Servicio de Aprendizaje SENA",
      logo: require("./assets/images/sena.png"),
      subHeader: "Analisis y desarrollo de sistemas de información",
      duration: "Julio 2020 - Julio 2022",
      desc: "Tecnologo.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Corporación Universitaria Iberoamericana",
      logo: require("./assets/images/ibero.png"),
      subHeader: "Ingenieria de software",
      duration: "Agosto 2024 - Actualmente",
      desc: "Ingeniería.",
      descBullets: [
        "Me encuentro en el quinto semestre",
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
      role: "Desarrollador Fullstack",
      company: "Analytix Data",
      companylogo: require("./assets/images/anal.jpg"),
      date: "Diciembre 2023 – Abril 2025",
      desc: "Empresa dedicada a la inteligencia artificial",
      descBullets: [
        "Se desarrolló una API capaz de reconocer imágenes de productos de forma automatizada.",
        "Se utilizó YOLOv8 para el entrenamiento de modelos de detección de objetos.",
        "El frontend fue desarrollado en React, brindando una interfaz moderna y dinámica para los usuarios.",
        "El backend principal se construyó con Laravel, encargado de gestionar la lógica del sistema y las peticiones de los clientes.",
        "Se implementó un servicio adicional en FastAPI, especializado en el procesamiento y análisis de imágenes y videos en tiempo real.",
        "Colaboré un software de mensajeria masiva por whatsapp hecha con Nodejs",
        "las imágenes y videos se almacenan en amazonS3, y el sistema esta subido EC2",
        "Se desarrolló un sistema interno para mantener los datasets de forma interna e inventariada"
      ]
    },
    {
      role: "Desarrollador Fullstack",
      company: "Educadavid",
      companylogo: require("./assets/images/educadavid.jpg"),
      date: "Mayo 2021 – Octubre 2022",
      desc: "Empresa dedicada a la Educación con creatividad y estrategia mejorando procesos individuales y comunes.",
      descBullets: [
        "Se desarrolló una plataforma de aprendizaje tipo LMS (Learning Management System) basada en PHP.",
        "El sistema incluye un módulo de preguntas y respuestas tipo ICFES, ideal para la preparación de simulacros académicos.",
        "Se diseñaron funcionalidades que permiten a los estudiantes practicar de manera autónoma y recibir retroalimentación inmediata.",
        "Además del desarrollo, se impartieron clases de refuerzo en áreas de ingeniería, brindando apoyo personalizado a los estudiantes que lo requerían.",
        "La plataforma fue pensada para mejorar el rendimiento académico y facilitar el acceso a recursos educativos interactivos."
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
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Proyectos",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/travel_club.png"),
      projectName: "TravelClub",
      projectDesc: "Sistema que permite crear toures, para aquellos que quieren pasear, pueden buscar y agendar un tour para viajar",
      projectTechTitle: "Tecnologías",
      projectTechList: ["html-5", "css3", "nodejs", "sql-database"],

      footerLink: [
        {
          name: "ver aquí",
          url: "https://travel-club-yrqq.onrender.com"
        }

      ]
    },
    {
      image: require("./assets/images/node_farm.png"),
      projectName: "Node farm",
      projectDesc: "Este es un sistema, donde se pueden visualizar verduras de una granja",
      projectTechTitle: "Tecnologías",
      projectTechList: ["html-5", "css3", "nodejs"],

      footerLink: [
        {
          name: "ver aquí",
          url: "https://travel-club-yrqq.onrender.com"
        }

      ]
    },
    {
      image: require("./assets/images/biblioteca.png"),
      projectName: "Biblioteca",
      projectDesc: "Este proyecto trata de como se puede prestar libros en una librería, siendo un adimistrador de biblioteca",
      projectTechTitle: "Tecnologías",
      projectTechList: ["reactjs", "laravel", "sql-database", "docker"],
      footerLink: [
        {
          name: "ver aquí",
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
  title: emoji("Logros y Certificaciones 🏆"),
  // subtitle:
  //   "Logros y Certificaciones que he logrado!",

  achievementsCards: [
    {
      title: "Certificaciones SENA",
      subtitle:
        "Certificados proporcionado por el SENA",
      image: require("./assets/images/sena.png"),
      imageAlt: "SENA",
      footerLink: [
        {
          name: "Desarrollador de software",
          url: "https://drive.google.com/file/d/1UfadjWNJ2UbvTC8ivWegEmdEGrzNPSaL/view?usp=sharing"
        },
        {
          name: "Redes de telecomunicaciones",
          url: "https://drive.google.com/file/d/1dgi_-rKUBKguZ48NUDoBAmdShdnNV8Gx/view?usp=sharing"
        },
      ]
    },
    {
      title: "Certificaciones de ingles",
      subtitle:
        "Certificado proporcionado por busuu",
      image: require("./assets/images/busuu.jpg"),
      imageAlt: "Busuu logo",
      footerLink: [
        {
          name: "Certificado B1",
          url: "https://api.busuu.com/anon/certificates/6cb3dea67dc122cc5d935678070f5695?lid=tbzdtf1p6k4k&utm_source=CRM&utm_group=ES&utm_medium=EMAIL_TRANSACTION&utm_campaign=TRANSACTION_CERTIFICATE_END_LEVEL_ROW"
        }
      ]
    },

    {
      title: "Librería de laravel",
      subtitle: "Desarrollé mi propia librería en laravel para instalar multiples servicios de forma sencilla y realizar CRUD's, aumentando la velocidad de desarrollo",
      image: require("./assets/images/composer.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Demostración del funcionamiento", url: "https://drive.google.com/file/d/1AxQBmmjv9V7i6UkM4c4YORVoct8bDz47/view" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

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

const contactInfo = {
  title: emoji("Contactame ☎️"),
  subtitle:
    "Me puedes llamar o hablar por whatsapp",
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
