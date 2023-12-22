// Fastify Import
import { FastifyReply, FastifyRequest } from "fastify"

// Utility Import
import { PrismaClient } from "@prisma/client"

// Schema Import
import type { SearchParameter } from './bom.schema'

/**
 * Handler for search data inside BOM by [description] or [item]
 * @param request FastifyRequest. In this case include only [QueryString] object used for manage query parameters
 * @param reply FastifyReplay
 */
export const searchBomData = async (request: FastifyRequest<{ Querystring: SearchParameter}>, reply: FastifyReply) => {
  // Init prisma client
  const prisma = new PrismaClient()

  // Get query parameters
  const queryParams = request.query

  const queryRes = await prisma.boms.findMany({
      select: { item: true, parent: true, description: true, level: true, uuid: true, path: true },
      where: {
        OR: [
          {
            description: {
              startsWith: queryParams.description,
            },
          },
          {
            item: {
              startsWith: queryParams.item,
            },
          },
        ],
      },
      take: 99999,
    })

  reply.send(queryRes)
}

/**
 * Handler for get a list of all tags currently loaded inside bom
 * @param request FastifyRequest. It contain the information of server and fastify instancre
 * @param reply FastifyReplay
 */
export const getTags = async (request: FastifyRequest, reply: FastifyReply) => {
  // Retrive platformatic instance
  const { db, sql } = request.server.platformatic
  
  const queryRes = await db.query(sql`
    SELECT TAG as code, ST.ITEM_VALUE AS value FROM BOMS \
      INNER JOIN SETTINGS ST ON ST.ITEM_CODE = BOMS.TAG \
      WHERE ST.SET_CODE = 'TAGS' \
      GROUP BY TAG, ST.ITEM_VALUE \
      ORDER BY ST.ITEM_VALUE
    `)
  
    reply.send(queryRes)
}