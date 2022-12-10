export interface NewGame {
  id: number
  id_seller: number
  name: string
  info: string
  add_info: string
  collection: string
  base_currency: string
  base_price: number
  price_usd: number
  price_rub: number
  price_eur: number
  price_uah: number
  cnt_sell: number
  cnt_sell_hidden: number
  cnt_return: number
  cnt_return_hidden: number
  in_stock: number
  num_in_stock: number
  num_in_lock: number
  owner_id: number
  release_date: null
  sale_info: {
    common_base_price: number
    common_price_usd: number
    common_price_rur: number
    common_price_eur: number
    common_price_uah: number
    sale_begin: Date
    sale_end: Date
    sale_percent: number
  }
}








export interface Variants {
  value: number;
  text: string;
  default: number;
  modify: string;
  modify_type: string;
  modify_value: number;
}
export interface Initial {
  RUB: number;
  USD: number;
  EUR: number;
  UAH: number;
  mBTC: number;
  mLTC: number;
}
export interface Default {
  RUB: number;
  USD: number;
  EUR: number;
  UAH: number;
  mBTC: number;
  mLTC: number;
}
export interface Prices {
  initial: Initial;
  default: Default;
}
export interface Currencies {
  currency: string;
  code: string;
  price: number;
}
export interface Payment_methods {
  name: string;
  currencies: Currencies[];
}
export interface Prices_unit {
  unit_name: string;
  unit_amount: number;
  unit_amount_desc: string;
  unit_currency: string;
  unit_cnt: number;
  unit_cnt_min: number;
  unit_cnt_max: number;
  unit_cnt_desc: string;
  unit_fixed: number[];
  unit_only_int: number;
}
export interface Preview_imgs {
  id: number;
  url: string;
  width: number;
  height: number;
}
export interface Preview_videos {
  type: string;
  id: string;
  preview: string;
}
export interface Text {
  date: Date;
  size: number;
}
export interface File {
  date: Date;
  size: number;
  name: string;
  trial: number;
}
export interface Breadcrumbs {
  id: number;
  name: string;
  products_cnt: number;
}
export interface DiscountsOne {
  summa: number;
  percent: number;
}
export interface Discounts {
  desc: string;
  percent: number;
  price: number;
}
export interface Units {
  desc: string;
  price: number;
  discounts: Discounts[];
}
export interface Present {
  id: number;
  name: string;
}
export interface Options {
  name: string;
  label: string;
  comment: string;
  type: string;
  required: number;
  variants: Variants[];
}
export interface Statistics {
  sales: number;
  refunds: number;
  good_reviews: number;
  bad_reviews: number;
  sales_hidden: number;
  refunds_hidden: number;
  good_reviews_hidden: number;
  bad_reviews_hidden: number;
}
export interface Seller {
  id: number;
  name: string;
}
export interface Sale_info {
  common_base_price: number;
  common_price_usd: number;
  common_price_rub: number;
  common_price_eur: number;
  common_price_uah: number;
  sale_end: Date;
  sale_percent: number;
}
export interface Game2 {
  retval: number;
  retdesc: string;
  queryId: string;
  product: {
    id: number;
    id_prev: number;
    id_next: number;
    name: string;
    price: number;
    currency: string;
    is_available: number;
    url: string;
    info: string;
    add_info: string;
    release_date: Date;
    agency_fee: number;
    agency_sum: number;
    agency_id: number;
    collection: string;
    propertygood: number;
    show_rest: number;
    num_in_stock: number;
    num_in_lock: number;
    pwyw: number;
    label: string;
    prices: Prices;
    payment_method: Payment_methods[];
    prices_unit: Prices_unit;
    preview_imgs: Preview_imgs[];
    preview_videos: Preview_videos[];
    type: string;
    text: Text;
    file: File;
    category_id: number;
    breadcrumbs: Breadcrumbs[];
    discounts: DiscountsOne[];
    units: Units;
    present: Present;
    gift_commiss: number;
    options: Options[];
    options_check: number;
    statistics: Statistics;
    seller: Seller;
    sale_info: Sale_info;
  };
}
