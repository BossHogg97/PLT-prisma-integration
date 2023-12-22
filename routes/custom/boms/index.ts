import type { FastifyPluginAsync } from 'fastify'

import { getTags, searchBomData } from './bom.controller'
import { bomSchemas, $ref } from './bom.schema'

export const customRoutes: FastifyPluginAsync = async (fastify): Promise<void> => {
  for (const schema of bomSchemas) {
    fastify.addSchema(schema)
  }

  // Route for search data inside bom by [description or item]
  fastify.post('/search', {
    schema: {
      summary: 'Search bom data',
      tags: ['Custom BOM API'],
      description: 'Get bom items by description or item name',
      querystring: $ref('searchParameter'),
      response: {
        200: {
          ...$ref('responseBomItemArray'),
          description: 'Success'
        },
      }
    },
    handler: searchBomData,
  }),
  
  // Route for retrieve a list of all tags available inside bom
  fastify.get('/tag', {
    schema: {
      summary: 'Get tags',
      tags: ['Custom BOM API'],
      description: 'Get an array of all tags in bom',
      response: {
        200: {
          ...$ref('responseTagArray'),
          description: 'Success'
        }
      }
    },
    handler: getTags,
  })
}
