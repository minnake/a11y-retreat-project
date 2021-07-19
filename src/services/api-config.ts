import { ApiConfigKeys } from "./../types"
import { Language } from "../types"

const config: Record<Language, ApiConfigKeys> = {
  en: {
    url: "https://pxnet2.stat.fi:443/PXWeb/api/v1/en/Postinumeroalueittainen_avoin_tieto/2021/paavo_pxt_12ey.px",
  },
  fi: {
    url: "https://pxnet2.stat.fi:443/PXWeb/api/v1/fi/Postinumeroalueittainen_avoin_tieto/2021/paavo_pxt_12ey.px",
  },
}

export default config
