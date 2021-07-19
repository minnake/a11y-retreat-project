import { StatisticsData } from "./../types"
import axios from "axios"
import { GetStatisticsResponse } from "../types"

const mapValues = (data: GetStatisticsResponse): StatisticsData => {
  const { category } = data.dimension.Tiedot
  const values = Object.keys(category.index).map((item) => {
    return {
      value: data.value[category.index[item]],
      label: category.label[item],
      unit: category.unit[item],
    }
  })
  const label = Object.values(data.dimension.Postinumeroalue.category.label)[0]
  return { label, values }
}

const getStatistics = async (postalCode: string) /* : Promise<GetStatisticsResponse> */ => {
  try {
    const data = await axios.post<GetStatisticsResponse>(
      "https://pxnet2.stat.fi:443/PXWeb/api/v1/en/Postinumeroalueittainen_avoin_tieto/2021/paavo_pxt_12ey.px",
      {
        query: [
          {
            code: "Postinumeroalue",
            selection: {
              filter: "item",
              values: [postalCode],
            },
          },
        ],
        response: {
          format: "json-stat2",
        },
      },
    )

    return mapValues(data.data)
  } catch (e) {
    console.log(e)
    return { values: [], label: "" }
  }
}

const statisticsService = { getStatistics }

export default statisticsService
