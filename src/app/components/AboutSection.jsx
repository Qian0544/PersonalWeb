"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { HiExternalLink } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();
  const { lang } = useLanguage();
  const t = translations[lang].about;

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  const renderEducation = () => (
    <ul className="list-disc pl-2">
      <div className="grid grid-cols-1 gap-6">
        {t.education.map((entry, i) => (
          <div key={i}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
              <h3 className="font-semibold text-white">{entry.title}</h3>
              <span className="text-gray-400 text-sm">{entry.location}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
              <p className="text-gray-400 text-sm">{entry.grade}</p>
              <p className="text-gray-400 text-sm">{entry.period}</p>
            </div>
            {entry.subjects && (
              <p className="text-gray-400 text-sm">{entry.subjects}</p>
            )}
          </div>
        ))}
      </div>
    </ul>
  );

  const renderSkills = () => (
    <ul className="list-disc pl-2">
      <div className="grid grid-cols-1 gap-4">
        {t.skills.map((skill, i) => (
          <div key={i}>
            <h3 className="font-semibold text-white mb-1">{skill.title}</h3>
            <p className="text-gray-400 text-sm lg:text-base">{skill.content}</p>
          </div>
        ))}
      </div>
    </ul>
  );

  const renderRecommendations = () => (
    <div className="grid grid-cols-1 gap-6">
      {t.recommendations.map((rec, i) => (
        <div key={i}>
          <a href={`/view?file=${rec.file}`} target="_blank" rel="noopener noreferrer" className="group">
            <h3 className="font-semibold text-white mb-2 hover:text-primary-400 transition-colors flex items-center gap-2">
              {rec.title}
              <HiExternalLink className="w-4 h-4" />
            </h3>
          </a>
          <p className="text-gray-400 text-sm lg:text-base italic border-l-2 border-primary-500 pl-4">
            {rec.quote}
          </p>
        </div>
      ))}
    </div>
  );

  const tabContent = {
    education: renderEducation(),
    skills: renderSkills(),
    Recognitions: renderRecommendations(),
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about" width={500} height={300} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-base lg:text-lg">{t.bio1}</p>
          <p className="text-base lg:text-lg mt-4">{t.bio2}</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}{t.tabs.education}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}{t.tabs.skills}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Recognitions")}
              active={tab === "Recognitions"}
            >
              {" "}{t.tabs.recognitions}{" "}
            </TabButton>
          </div>
          <div className="mt-8">{tabContent[tab]}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
