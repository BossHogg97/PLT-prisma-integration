/**
 * Entity related to Settings table
 */
declare interface Setting {
  set_code: string
  item_code: string
  item_value: string
  createdAt: string
  updatedAt?: string | null
}

export { Setting }
