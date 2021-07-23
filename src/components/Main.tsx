import React, { useState } from "react"
import statisticsService from "../services/statistic-service"
import translations from "../translations"
import { Language, StatisticsData } from "../types"

import ErrorMessage from "./ErrorMessage"
import Input from "./Input"
import Table from "./Table"

interface MainProps {
  lang: Language
}

const Main = ({ lang }: MainProps) => {
  const [data, setData] = useState<StatisticsData>({ values: [], label: "" })
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

  const handlePostalCodeChange = (event: { target: { value: string } }) => {
    setPostalCode(event.target.value)
  }
  return (
    <main>
      <Input
        label={translations[lang].postalCode}
        value={postalCode}
        handleOnChange={handlePostalCodeChange}
      />
      <ErrorMessage error={error} />
      <button className="submit-button" onClick={getStatistics}>
        {translations[lang].getStatistics}
      </button>
      <Table data={data} />
    </main>
  )
}

export default Main
