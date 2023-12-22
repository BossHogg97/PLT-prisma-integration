/// <reference path="../global.d.ts" />
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

// console.log('PROCESS.ENV\r\n', process.env)

declare module 'fastify' {
  interface FastifyInstance {
    example: string
  }
}

export default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {
  // removing the welcome page and redirect to swagger page
  fastify.get('/', async (request, reply) => {
    reply.redirect('/doc')
  })
}
