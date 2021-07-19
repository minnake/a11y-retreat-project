export interface StatisticsUnit {
  base: string
  decimals: number
}

interface CategoryItem<T> {
  [key: string]: T
}

interface Dimension {
  category: {
    index: CategoryItem<number>
    label: CategoryItem<string>
    unit: CategoryItem<StatisticsUnit>
  }
}

export interface GetStatisticsResponse {
  size: number[]
  value: number[]
  dimension: {
    Tiedot: Dimension
    Postinumeroalue: Dimension
  }
}

export interface DataItem {
  value: number
  label: string
  unit: StatisticsUnit
}

export interface StatisticsData {
  label: string
  values: DataItem[]
}
