/**
 * Bom
 * A Bom
 */
declare interface Bom {
  uuid?: string
  createdAt: string
  description: string
  descriptionEn: string
  descriptionWbe: string
  id: number
  item: string
  level: number
  parent: string
  path: string
  pathId: string
  plantId: string
  quantity: number
  revision: string
  selection: string
  spareIndex: string
  tN: number
  type: string
  updatedAt?: string | null
  wbe: string
}
export { Bom }
