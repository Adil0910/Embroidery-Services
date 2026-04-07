import React, { useState } from "react";
import text from "../../text";

function Hero() {
  const [lang, setLang] = useState<"en" | "bn">("en");

  const toggleLanguage = () => {
    setLang(lang === "en" ? "bn" : "en");
  };

  return (
    <div className="main-hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>{text[lang].title}</h1>
        <h3>{text[lang].subtitle}</h3>
        <button  onClick={() =>
    window.open(
      "https://wa.me/918090280134?text=Hello%20I%20need%20embroidery%20service",
      "_blank"
    )
  }>{text[lang].button}</button>

        <button className="lang-btn" onClick={toggleLanguage}>
          {lang === "en" ? "বাংলা" : "English"}
        </button>
      </div>
    </div>
  );
}

export default Hero;