import React, { useState, MouseEvent } from "react"
import statisticsService from "./services/statistic-service"
import { StatisticsData } from "./types"

const App = () => {
  const [data, setData] = useState<StatisticsData>({ values: [], label: "" })
  const [lang, setLang] = useState<"en" | "fi">("en")
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
        <h1>Population structure by Postal code area and Information</h1>
        <button id="en" onClick={handleLanguageToggle}>
          En
        </button>
        <button id="fi" onClick={handleLanguageToggle}>
          Fi
        </button>
      </header>
      <main>
        <button onClick={getStatistics}>Get Statistics</button>
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
