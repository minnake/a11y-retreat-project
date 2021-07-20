import React, { useState, MouseEvent } from "react"
import statisticsService from "./services/statistic-service"
import translations from "./translations"
import { Language, StatisticsData } from "./types"

const App = () => {
  const [data, setData] = useState<StatisticsData>({ values: [], label: "" })
  const [lang, setLang] = useState<Language>("en")
  const [postalCode, setPostalCode] = useState<string>("")
  const [error, setError] = useState<string>("")

  const getStatistics = async () => {
    if (postalCode && /\d{5}/.test(postalCode)) {
      setError("")
      const info = await statisticsService.getStatistics(postalCode, lang)
      if (info.error) {
        setError(info.error)
      } else {
        setData(info)
      }
    } else {
      setError(translations[lang].postalCodeError)
    }
  }
  const handleLanguageToggle = (event: MouseEvent<HTMLElement>) => {
    const langToSet = event.currentTarget.id === "fi" ? "fi" : "en"
    setLang(langToSet)
  }
  const handlePostalCodeChange = (event: { target: { value: string } }) => {
    setPostalCode(event.target.value)
  }
  return (
    <>
      <header>
        <h1>{translations[lang].heading}</h1>
        <div className="row center">
          <div className="button" id="en" onClick={handleLanguageToggle}>
            En
          </div>
          <div className="button" id="fi" onClick={handleLanguageToggle}>
            Fi
          </div>
        </div>
      </header>
      <main>
        <div>
          <span>{translations[lang].postalCode}</span>
        </div>
        <div>
          <input value={postalCode} onChange={handlePostalCodeChange} />
        </div>
        {error && <div className="error">{error}</div>}
        <button onClick={getStatistics}>{translations[lang].getStatistics}</button>
        <table>
          <caption>{data.label}</caption>
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
