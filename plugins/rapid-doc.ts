// @ts-check
/// <reference path="./global.d.ts"

/** @param {import('fastify').FastifyInstance} app */
module.exports = async (app, opts) => {
  app.log.info('Registered plugin rapid-doc')

  app.get('/doc', async (req, reply) => {
    return reply.sendFile('/doc.html')
  })
}
