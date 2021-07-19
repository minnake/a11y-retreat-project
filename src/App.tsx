import React, { useState, MouseEvent } from "react"
import statisticsService from "./services/statistic-service"
import translations from "./translations"
import { Language, StatisticsData } from "./types"

const App = () => {
  const [data, setData] = useState<StatisticsData>({ values: [], label: "" })
  const [lang, setLang] = useState<Language>("en")
  const getStatistics = async () => {
    const info = await statisticsService.getStatistics("00100", lang)
    setData(info)
  }
  const handleLanguageToggle = (event: MouseEvent<HTMLElement>) => {
    const langToSet = event.currentTarget.id === "fi" ? "fi" : "en"
    setLang(langToSet)
  }
  return (
    <>
      <header>
        <h1>{translations[lang].heading}</h1>
        <div className="row">
          <div className="button" id="en" onClick={handleLanguageToggle}>
            En
          </div>
          <div className="button" id="fi" onClick={handleLanguageToggle}>
            Fi
          </div>
        </div>
      </header>
      <main>
        <button onClick={getStatistics}>{translations[lang].getStatistics}</button>
        <table>
          <caption>{data.label}</caption>
          <tr>
            <td>Label</td>
            <td>Value</td>
          </tr>
          {data.values.map((item) => (
            <tr key={item.label}>
              <td>{item?.label}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </table>
      </main>
    </>
  )
}

export default App
