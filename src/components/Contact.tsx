import React, { useState } from "react";
import contactText from "../../contactText";

type Language = keyof typeof contactText;

function Contact() {
  const [lang, setLang] = useState<Language>("en");

  const toggleLanguage = () => {
    setLang(lang === "en" ? "bn" : "en");
  };

  return (
    <div className="contact">
      <h2>{contactText[lang].title}</h2>

      <p>{contactText[lang].desc}</p>

      <div className="contact-buttons">
        <a
          href="https://wa.me/918090280134?text=Hello%20I%20want%20service"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="whatsapp-btn">
            {contactText[lang].whatsapp}
          </button>
        </a>

        <a href="tel:8090280134">
          <button className="call-btn">
            {contactText[lang].call}
          </button>
        </a>
         <a href="tel:9163414764">
          <button className="call-btn">
            {contactText[lang].calln}
          </button>
        </a>
         <button className="btn-c" onClick={toggleLanguage}>
        {lang === "en" ? "বাংলা" : "English"}
      </button>
      </div>

     
    </div>
  );
}

export default Contact;