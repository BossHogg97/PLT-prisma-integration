import { z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'


// BOM - custom domain
const BomItem = {
  uuid: z.string(),
  item: z.string(),
  path: z.string(),
  parent: z.string(),
  description: z.string(),
  level: z.number()
}

const searchParameter = z.object({
  description: z.string().optional(),
  item: z.string().optional()
})
  
const responseBomItemArray = z.array(z.object({
  ...BomItem
}))

// Tag - custom domain
const Tag = {
  code: z.string()
}

const responseTagArray = z.array(z.object({
  ...Tag
}))

export type SearchParameter = z.infer<typeof searchParameter>

export const { schemas: bomSchemas, $ref } = buildJsonSchemas(
  {
    responseBomItemArray,
    responseTagArray,
    searchParameter,
  },
  {
    $id: 'bomSchemas'
  }
)