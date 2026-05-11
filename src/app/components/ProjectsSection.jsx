"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const projectUrls = [
  { gitUrl: "/", previewUrl: "http://qianzhao.no/" },
  { gitUrl: "/", previewUrl: "http://eurodormswap.com/" },
  { gitUrl: "/", previewUrl: "http://www.dagligrenholdnittedal.no/" },
  { gitUrl: "http://github.com/Qian0544/PersonalFinanceTrack/", previewUrl: "/" },
  { gitUrl: "http://github.com/Qian0544/webpage-for-kindergarden-questionnaire", previewUrl: "/" },
  {
    gitUrl: "http://github.com/Qian0544/1-InteractiveMedia/tree/main/SoundDrawingTool",
    previewUrl: "/",
    video: "/videos/projects/6.mp4",
  },
];

const projectImages = [
  "/images/projects/1.png",
  "/images/projects/2.png",
  "/images/projects/3.png",
  "/images/projects/4.png",
  "/images/projects/5.png",
  "/images/projects/6.png",
];

const projectTagKeys = [
  ["all", "web"],
  ["all", "web"],
  ["all", "web"],
  ["all", "mobile"],
  ["all", "web"],
  ["all", "mobile"],
];

const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const tagLabels = [
    { key: "all", label: t.tags.all },
    { key: "web", label: t.tags.web },
    { key: "mobile", label: t.tags.mobile },
  ];

  const projectsData = t.items.map((item, i) => ({
    ...item,
    image: projectImages[i],
    video: projectUrls[i].video,
    gitUrl: projectUrls[i].gitUrl,
    previewUrl: projectUrls[i].previewUrl,
    tags: projectTagKeys[i],
  }));

  const filteredProjects = projectsData.filter((p) => p.tags.includes(activeTag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {t.title}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {tagLabels.map(({ key, label }) => (
          <ProjectTag
            key={key}
            onClick={() => setActiveTag(key)}
            name={label}
            isSelected={activeTag === key}
          />
        ))}
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
