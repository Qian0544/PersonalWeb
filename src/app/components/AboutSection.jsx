"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { HiDownload } from "react-icons/hi";

const TAB_DATA = [

  {
    title: "Utdanning",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
              <h3 className="font-semibold text-white">UTVEKSLING – University of Sydney Technology</h3>
              <span className="text-gray-400 text-sm">Australia</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
              <p className="text-gray-400 text-sm">Snittkarakter: A</p>
              <p className="text-gray-400 text-sm">07/2025 - 12/2025</p>
            </div>
            <p className="text-gray-400 text-sm">
              Emner: Interaktive medier, bildebehandling, C-programmering, applikasjonsutvikling med .NET
            </p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
              <h3 className="font-semibold text-white">BACHELOR I DATAVITENSKAP – Handelshøyskolen BI</h3>
              <span className="text-gray-400 text-sm">Norge</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
              <p className="text-gray-400 text-sm">Snittkarakter: A</p>
              <p className="text-gray-400 text-sm">08/2023 - 06/2026</p>
            </div>
            <p className="text-gray-400 text-sm">
              Emner: Maskinlæring, datautvinning og visualisering, databaser, statistikk med programmering, webutvikling
            </p>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
              <h3 className="font-semibold text-white">BACHELOR I ENGELSK – SiChuan University of Science and Engineering</h3>
              <span className="text-gray-400 text-sm">Kina</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
              <p className="text-gray-400 text-sm">Snittkarakter: B</p>
              <p className="text-gray-400 text-sm">08/2015 - 06/2019</p>
            </div>
          </div>
        </div>
      </ul>
    ),
  },

  {
    title: "Ferdigheter",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h3 className="font-semibold text-white mb-1">Programmering</h3>
            <p className="text-gray-400 text-sm lg:text-base">Python, C#, C, JavaScript</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Webutvikling</h3>
            <p className="text-gray-400 text-sm lg:text-base">Nextjs, Django, Flask, .NET, HTML/CSS, Bootstrap, Blazor</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Databaser</h3>
            <p className="text-gray-400 text-sm lg:text-base">SQL Server, MySQL, PostgreSQL, ER-modellering</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Verktøy</h3>
            <p className="text-gray-400 text-sm lg:text-base">p5.js, git, API</p>
          </div>
        </div>
      </ul>
    ),
  },
  {
    title: "Anbefalinger",
    id: "Recognitions",
    content: (
      <div className="grid grid-cols-1 gap-6">
        <div>
          <a
            href="/recommendations/professor-emil-recommendation.pdf"
            download="Professor_Emil_Recommendation.pdf"
            className="group"
          >
            <h3 className="font-semibold text-white mb-2 hover:text-primary-400 transition-colors flex items-center gap-2">
              Anbefalingsbrev fra professor Emil
              <HiDownload className="w-4 h-4" />
            </h3>
          </a>
          <p className="text-gray-400 text-sm lg:text-base italic border-l-2 border-primary-500 pl-4">
            «During my four years as an assistant professor at BI Norwegian Business School in Oslo, I have lectured hundreds of students, 
            both on the bachelor's and the master's level. Qian Zhao belong to the top one percent of students I have encountered during 
            these five years.»
          </p>
        </div>
        <div>
          <a
            href="/recommendations/professor-weiting-recommendation.pdf"
            download="Professor_Weiting_Recommendation.pdf"
            className="group"
          >
            <h3 className="font-semibold text-white mb-2 hover:text-primary-400 transition-colors flex items-center gap-2">
              Anbefalingsbrev fra professor Weiting
              <HiDownload className="w-4 h-4" />
            </h3>

          </a>
          <p className="text-gray-400 text-sm lg:text-base italic border-l-2 border-primary-500 pl-4">
            «During our collaboration, Qian has shown her adaptability and responsibility. On several occasions, 
            when urgent situations required her assistance—such as stepping in to support another group—she responded 
            promptly and offered timely help. Because of her reliability and willingness to provide help, I believe that she will work well in a team.»
          </p>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="bilde om meg" width={500} height={300} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Om meg</h2>
          <p className="text-base lg:text-lg">
          Jeg er en webutvikler med stor lidenskap for å skape interaktive og responsive webapplikasjoner. 
          Jeg synes design handler om mer enn bare å få ting til å se bra ut – det handler om å løse reelle problemer 
          og skape brukervennlige, intuitive opplevelser.
          </p>
          <p className="text-base lg:text-lg mt-4">
          Jeg lærer raskt og har et samarbeidsorientert tankesett.
           Jeg er alltid på utkikk etter muligheter til å utvikle meg videre, både faglig og personlig, 
           og ser frem til å bidra med mine ferdigheter og engasjement i ditt neste prosjekt.
          </p>
          <div className="flex flex-row justify-start mt-8">

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Utdanning{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Ferdigheter{" "}

            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Recognitions")}
              active={tab === "Recognitions"}
            >
              {" "}
              Anbefalinger{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;