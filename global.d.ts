import type {
  PlatformaticApp,
  PlatformaticDBMixin,
  PlatformaticDBConfig,
  Entity,
  Entities,
  EntityHooks,
} from '@platformatic/db'
import { EntityTypes, Bom, Drawing, Note } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Bom' | 'Drawing' | 'Note'>(
      schemaId: T
    ): {
      $id: string
      title: string
      description: string
      type: string
      properties: {
        [x in keyof EntityTypes[T]]: { type: string; nullable?: boolean }
      }
      required: string[]
    }
  }
}

interface AppEntities extends Entities {
  bom: Entity<Bom>
  drawing: Entity<Drawing>
  note: Entity<Note>
}

interface AppEntityHooks {
  addEntityHooks(entityName: 'bom', hooks: EntityHooks<Bom>): any
  addEntityHooks(entityName: 'drawing', hooks: EntityHooks<Drawing>): any
  addEntityHooks(entityName: 'note', hooks: EntityHooks<Note>): any
}

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<PlatformaticDBConfig> &
      PlatformaticDBMixin<AppEntities> &
      AppEntityHooks
  }
}
