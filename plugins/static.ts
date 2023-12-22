/// <reference path="../global.d.ts" />
import fastifyStatic from '@fastify/static'
import type { FastifyInstance } from 'fastify'
import { join } from 'path'

/**
 * Delivery Static Files Fastest with Fastify. This page is accessible at /public/
 *
 * @see https://github.com/fastify/fastify-static
 * https://backend.cafe/how-to-build-a-pokedex-with-platformatic
 * https://github.com/Eomm/pokedex/blob/main/platformatic.db.json
 */

/** @param {import('fastify').FastifyInstance} app */
export default async function (fastify: FastifyInstance, opts) {
  const publicPath = join(process.cwd(), '/public')

  void fastify.register(fastifyStatic, {
    root: publicPath,
    prefix: '/public',
    decorateReply: true,
    index: false,
    prefixAvoidTrailingSlash: true,
    list: {
      format: 'html',
      render: (dirs, files) => {
        return `
    <html><body>
    <ul>
      ${dirs.map((dir) => `<li><a href="${dir.href}">${dir.name}</a></li>`).join('\n  ')}
    </ul>
    <ul>
      ${files
        .map((file) => `<li><a href="${file.href}" target="_blank">${file.name}</a></li>`)
        .join('\n  ')}
    </ul>
    </body></html>
    `
      },
    },
  })

  const publicFolder = join(publicPath)
  fastify.log.debug(`Registered plugin static`)
  fastify.log.info(`Public folder: ${publicFolder}`)
}
