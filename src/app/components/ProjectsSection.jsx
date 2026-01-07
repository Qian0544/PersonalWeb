"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio-nettside",
    description: "Min personlige portfolio-nettside - oppdateres jevnlig",
    image: "/images/projects/1.png",
    tag: ["Alle", "Web"],
    gitUrl: "/",
    previewUrl: "https://qianzhao.no/",
  },
  {
    id: 2,
    title: "Europeisk studenthybelbytteplattform",
    description: "En nettplattform som gjør det mulig for europeiske studenter å bytte hybler når de er på utveksling eller reiser",
    image: "/images/projects/2.png",
    tag: ["Alle", "Web"],
    gitUrl: "/",
    previewUrl: "https://eurodormswap.com/",
  },
  {
    id: 3,
    title: "Nettside for vaskefirma",
    description: "Offisiell nettside for et vaskefirma i Nittedal (Norge)",
    image: "/images/projects/3.png",
    tag: ["Alle", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.dagligrenholdnittedal.no/",
  },
  {
    id: 4,
    title: "App for økonomistyring",
    description: "Smart økonomiapp utviklet med Blazor-rammeverket",
    image: "/images/projects/4.png",
    tag: ["Alle", "Mobil"],
    gitUrl: "https://github.com/Qian0544/PersonalFinanceTrack/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "System for studentpreferanser og studiepar-matching",
    description: "Pedagogisk verktøy for å analysere studenters emneprioritering og legge til rette for studiepartnere i grunnskolen",
    image: "/images/projects/5.png",
    tag: ["Alle", "Web"],
    gitUrl: "https://github.com/Qian0544/webpage-for-kindergarden-questionnaire",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Lydtegneverktøy",
    description: "Et kreativt spill som konverterer brukertegninger til tilsvarende instrumentlyder",
    image: "/images/projects/6.png",
    video: "/videos/projects/6.mp4",
    tag: ["Alle", "Mobil"],
    gitUrl: "https://github.com/Qian0544/1-InteractiveMedia/tree/main/SoundDrawingTool",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Alle");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mine prosjekter
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Alle"
          isSelected={tag === "Alle"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobil"
          isSelected={tag === "Mobil"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              videoUrl={project.video} 
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;