"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const socialLinks = [
  { icon: FaGithub, url: "http://github.com/Qian0544", label: "GitHub" },
  { icon: FaLinkedin, url: "http://www.linkedin.com/in/qian-zhao-590789293/", label: "LinkedIn" },
  { icon: FaWhatsapp, url: "http://wa.me/+4793995384", label: "WhatsApp" },
  { icon: FaInstagram, url: "http://instagram.com/qian_amiao", label: "Instagram" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang].navbar;

  const navLinks = [
    { title: t.about, path: "#about" },
    { title: t.projects, path: "#projects" },
    { title: t.contact, path: "#contact" },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="flex gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary-400 transition-colors"
                aria-label={social.label}
              >
                <Icon className="h-6 w-6 md:h-7 md:w-7" />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded transition-colors ${
                lang === "en"
                  ? "text-white border border-primary-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setLang("no")}
              className={`px-2 py-0.5 rounded transition-colors ${
                lang === "no"
                  ? "text-white border border-primary-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              NO
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Desktop nav links */}
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
