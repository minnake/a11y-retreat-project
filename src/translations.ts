import { Language, TranslationKeys } from "./types"

const translations: Record<Language, TranslationKeys> = {
  en: {
    heading: "Population structure by Postal code area and Information",
    getStatistics: "Get Statistics",
    postalCode: "Postal code",
    postalCodeError: "Invalid postal code",
  },
  fi: {
    heading: "Asukasrakenne muuttujina Postinumeroalue ja Tiedot",
    getStatistics: "Hae tiedot",
    postalCode: "Postinumero",
    postalCodeError: "Vääränlainen postinumero",
  },
}

export default translations
