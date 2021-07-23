import React from "react"
import { StatisticsData } from "../types"

interface TableProps {
  data: StatisticsData
}

const Table = ({ data }: TableProps) => {
  return (
    <table>
      <caption>{data.label}</caption>
      {data.values.map((item) => (
        <tr key={item.label}>
          <td>{item?.label}</td>
          <td>{item.value}</td>
        </tr>
      ))}
    </table>
  )
}

export default Table
