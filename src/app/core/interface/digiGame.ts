export interface DigiGame {
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
export interface DigiSomeReview {
  id: number
  invoice_id: number
  type: string
  date: string
  dateUtc: string
  info: string
  comment: string
}
export interface DigiReview{
  retval: number
  retdesc: string
  totalPages: number
  totalItems: number
  totalGood: number
  totalBad: number
  review: DigiSomeReview[]
}
export interface HashReviewItem {
  answer: DigiReview,
  date: Date
}
export interface HashReview {
  [key: string]: HashReviewItem
 }
