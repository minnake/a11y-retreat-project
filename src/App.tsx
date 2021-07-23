import React, { useState, MouseEvent } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import translations from "./translations"
import { Language } from "./types"

const App = () => {
  const [lang, setLang] = useState<Language>("en")

  const handleLanguageToggle = (event: MouseEvent<HTMLElement>) => {
    const langToSet = event.currentTarget.id === "fi" ? "fi" : "en"
    setLang(langToSet)
  }
  return (
    <>
      <Header heading={translations[lang].heading} handleLanguageToggle={handleLanguageToggle} />
      <Main lang={lang} />
    </>
  )
}

export default App
