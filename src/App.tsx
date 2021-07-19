import React, { useState } from "react"
import statisticsService from "./services/statistic-service"
import { StatisticsData } from "./types"

const App = () => {
  const [data, setData] = useState<StatisticsData>({ values: [], label: "" })
  const getStatistics = async () => {
    const info = await statisticsService.getStatistics("00100")
    setData(info)
  }
  return (
    <>
      <header>
        <h1>Population structure by Postal code area and Information</h1>
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
