"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">{t.title}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">{t.description}</p>
        <div className="socials flex flex-row gap-2">
          <Link href="mailto:qianzhao0544@gmail.com">
            <MdEmail className="h-12 w-12 text-white hover:text-primary-400 transition-colors" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">{t.successMsg}</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                {t.emailLabel}
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                {t.subjectLabel}
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={t.subjectPlaceholder}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                {t.messageLabel}
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={t.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {t.sendBtn}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
