import React from 'react'
import text from '../../text'
import { useState } from 'react';

function About() {
    const [lang, setLang] = useState<"en" | "bn">("en");
  
    const toggleLanguage = () => {
      setLang(lang === "en" ? "bn" : "en");
    };

  return (
    <div className='about-main'>
      <div className='ab-1'>
        <div className='imagebox'>
        <img className='about-img' src='img/engineer.jpeg'/>
        <h3 className='abouth3'>Eng. Zafrul Hasan</h3>
        </div>
        <div className='imagebox'>
        <img className='about-img' src='img/engineer2.jpeg'/>
        <h3 className='abouth3'>Eng. MD Shandaar</h3>
        </div>
      </div>
      <div className='ab-2'>
        <h3 className='text-h3'>{text[lang].about}</h3>

 <button className="lang-btn" onClick={toggleLanguage}>
          {lang === "en" ? "বাংলা" : "English"}
        </button>
      </div>

    </div>
  )
}

export default About;