const translations = {
  en: {
    navbar: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I am",
      roles: ["Qian", "Web Developer", "Data Engineer", "Software Developer"],
      description:
        "I work to transform complex problems into functional and thoughtful solutions. My passion is developing data-driven web applications that create value.",
      contactBtn: "Contact me",
      downloadCV: "Review CV",
    },
    achievements: [
      { metric: "Students taught", value: "200", postfix: "+" },
      { metric: "Projects completed", value: "20", postfix: "+" },
      { metric: "Years of experience", value: "3", postfix: "+" },
    ],
    about: {
      title: "About Me",
      bio1: "I am a web developer with a great passion for creating interactive and responsive web applications. For me, design is about more than just making things look good – it's about solving real problems and creating user-friendly, intuitive experiences.",
      bio2: "I learn quickly and have a collaborative mindset. I am always looking for opportunities to develop further, both professionally and personally, and look forward to contributing with my skills and dedication to your next project.",
      tabs: {
        education: "Education",
        skills: "Skills",
        recognitions: "Recommendations",
      },
      education: [
        {
          title: "EXCHANGE – University of Sydney Technology",
          location: "Australia",
          grade: "Grade average: A",
          period: "07/2025 - 12/2025",
          subjects:
            "Subjects: Interactive media, image processing, C programming, application development with .NET",
        },
        {
          title: "BACHELOR IN DATA SCIENCE – BI Norwegian Business School",
          location: "Norway",
          grade: "Grade average: A",
          period: "08/2023 - 06/2026",
          subjects:
            "Subjects: Machine learning, data mining and visualization, databases, statistics with programming, web development",
        },
        {
          title: "BACHELOR IN ENGLISH – SiChuan University of Science and Engineering",
          location: "China",
          grade: "Grade average: B",
          period: "08/2015 - 06/2019",
        },
      ],
      skills: [
        { title: "Programming", content: "Python, C#, C, JavaScript" },
        { title: "Web Development", content: "Nextjs, Django, Flask, .NET, HTML/CSS, Bootstrap, Blazor" },
        { title: "Databases", content: "SQL Server, MySQL, PostgreSQL, ER modeling" },
        { title: "Tools", content: "p5.js, git, API" },
      ],
      recommendations: [
        {
          title: "Recommendation letter from Professor Emil",
          file: "/recommendations/professor-emil-recommendation.pdf",
          filename: "Professor_Emil_Recommendation.pdf",
          quote:
            "«During my four years as an assistant professor at BI Norwegian Business School in Oslo, I have lectured hundreds of students, both on the bachelor's and the master's level. Qian Zhao belong to the top one percent of students I have encountered during these five years.»",
        },
        {
          title: "Recommendation letter from Professor Weiting",
          file: "/recommendations/professor-weiting-recommendation.pdf",
          filename: "Professor_Weiting_Recommendation.pdf",
          quote:
            "«During our collaboration, Qian has shown her adaptability and responsibility. On several occasions, when urgent situations required her assistance—such as stepping in to support another group—she responded promptly and offered timely help. Because of her reliability and willingness to provide help, I believe that she will work well in a team.»",
        },
      ],
    },
    projects: {
      title: "My Projects",
      tags: { all: "All", web: "Web", mobile: "Mobile" },
      items: [
        {
          title: "React Portfolio Website",
          description: "My personal portfolio website – updated regularly",
        },
        {
          title: "European Student Dorm Swap Platform",
          description:
            "A web platform enabling European students to swap dorms when on exchange or traveling",
        },
        {
          title: "Cleaning Company Website",
          description: "Official website for a cleaning company in Nittedal (Norway)",
        },
        {
          title: "Personal Finance App",
          description: "Smart finance app developed with the Blazor framework",
        },
        {
          title: "Student Preference and Study Partner Matching System",
          description:
            "Educational tool for analyzing students' subject priorities and facilitating study partners in primary school",
        },
        {
          title: "Sound Drawing Tool",
          description:
            "A creative game that converts user drawings into corresponding instrument sounds",
        },
      ],
    },
    contact: {
      title: "Let's connect",
      description:
        "I am currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I will get back to you as soon as possible!",
      emailLabel: "Your email",
      subjectLabel: "Subject",
      subjectPlaceholder: "Hello",
      messageLabel: "Message",
      messagePlaceholder: "Let's talk about...",
      sendBtn: "Send message",
      successMsg: "Email sent!",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },

  no: {
    navbar: {
      about: "Om",
      projects: "Prosjekter",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hei, jeg er",
      roles: ["Qian", "Webutvikler", "Dataingeniør", "Programvareutvikler"],
      description:
        "Jeg jobber med å gjøre komplekse problemstillinger om til funksjonelle og gjennomtenkte løsninger. Min lidenskap er å utvikle datadrevne webapplikasjoner som skaper verdi.",
      contactBtn: "Kontakt meg",
      downloadCV: "Se CV",
    },
    achievements: [
      { metric: "Studenter undervist", value: "200", postfix: "+" },
      { metric: "Prosjekter fullført", value: "20", postfix: "+" },
      { metric: "Års erfaring", value: "3", postfix: "+" },
    ],
    about: {
      title: "Om meg",
      bio1: "Jeg er en webutvikler med stor lidenskap for å skape interaktive og responsive webapplikasjoner. For meg, design handler om mer enn bare å få ting til å se bra ut – det handler om å løse reelle problemer og skape brukervennlige, intuitive opplevelser.",
      bio2: "Jeg lærer raskt og har et samarbeidsorientert tankesett. Jeg er alltid på utkikk etter muligheter til å utvikle meg videre, både faglig og personlig, og ser frem til å bidra med mine ferdigheter og engasjement i ditt neste prosjekt.",
      tabs: {
        education: "Utdanning",
        skills: "Ferdigheter",
        recognitions: "Anbefalinger",
      },
      education: [
        {
          title: "UTVEKSLING – University of Sydney Technology",
          location: "Australia",
          grade: "Snittkarakter: A",
          period: "07/2025 - 12/2025",
          subjects:
            "Emner: Interaktive medier, bildebehandling, C-programmering, applikasjonsutvikling med .NET",
        },
        {
          title: "BACHELOR I DATAVITENSKAP – Handelshøyskolen BI",
          location: "Norge",
          grade: "Snittkarakter: A",
          period: "08/2023 - 06/2026",
          subjects:
            "Emner: Maskinlæring, datautvinning og visualisering, databaser, statistikk med programmering, webutvikling",
        },
        {
          title: "BACHELOR I ENGELSK – SiChuan University of Science and Engineering",
          location: "Kina",
          grade: "Snittkarakter: B",
          period: "08/2015 - 06/2019",
        },
      ],
      skills: [
        { title: "Programmering", content: "Python, C#, C, JavaScript" },
        { title: "Webutvikling", content: "Nextjs, Django, Flask, .NET, HTML/CSS, Bootstrap, Blazor" },
        { title: "Databaser", content: "SQL Server, MySQL, PostgreSQL, ER-modellering" },
        { title: "Verktøy", content: "p5.js, git, API" },
      ],
      recommendations: [
        {
          title: "Anbefalingsbrev fra professor Emil",
          file: "/recommendations/professor-emil-recommendation.pdf",
          filename: "Professor_Emil_Recommendation.pdf",
          quote:
            "«During my four years as an assistant professor at BI Norwegian Business School in Oslo, I have lectured hundreds of students, both on the bachelor's and the master's level. Qian Zhao belong to the top one percent of students I have encountered during these five years.»",
        },
        {
          title: "Anbefalingsbrev fra professor Weiting",
          file: "/recommendations/professor-weiting-recommendation.pdf",
          filename: "Professor_Weiting_Recommendation.pdf",
          quote:
            "«During our collaboration, Qian has shown her adaptability and responsibility. On several occasions, when urgent situations required her assistance—such as stepping in to support another group—she responded promptly and offered timely help. Because of her reliability and willingness to provide help, I believe that she will work well in a team.»",
        },
      ],
    },
    projects: {
      title: "Mine prosjekter",
      tags: { all: "Alle", web: "Web", mobile: "Mobil" },
      items: [
        {
          title: "React Portfolio-nettside",
          description: "Min personlige portfolio-nettside - oppdateres jevnlig",
        },
        {
          title: "Europeisk studenthybelbytteplattform",
          description:
            "En nettplattform som gjør det mulig for europeiske studenter å bytte hybler når de er på utveksling eller reiser",
        },
        {
          title: "Nettside for vaskefirma",
          description: "Offisiell nettside for et vaskefirma i Nittedal (Norge)",
        },
        {
          title: "App for økonomistyring",
          description: "Smart økonomiapp utviklet med Blazor-rammeverket",
        },
        {
          title: "System for studentpreferanser og studiepar-matching",
          description:
            "Pedagogisk verktøy for å analysere studenters emneprioritering og legge til rette for studiepartnere i grunnskolen",
        },
        {
          title: "Lydtegneverktøy",
          description:
            "Et kreativt spill som konverterer brukertegninger til tilsvarende instrumentlyder",
        },
      ],
    },
    contact: {
      title: "Ta kontakt",
      description:
        "Jeg er for tiden på utkikk etter nye muligheter, og innboksen min er alltid åpen. Enten du har et spørsmål eller bare vil si hei, svarer jeg så fort som mulig!",
      emailLabel: "Din e-post",
      subjectLabel: "Emne",
      subjectPlaceholder: "Hei",
      messageLabel: "Melding",
      messagePlaceholder: "La oss snakke om...",
      sendBtn: "Send melding",
      successMsg: "E-post sendt!",
    },
    footer: {
      rights: "Alle rettigheter forbeholdt.",
    },
  },
};

export default translations;
