"use client";
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>QIAN</span>
        <p className="text-slate-600">{t.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
