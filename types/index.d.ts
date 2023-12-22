import { Bom } from './Bom'
import { Drawing } from './Drawing'
import { Note } from './Note'
import { Setting } from './Setting'

interface EntityTypes {
  Bom: Bom
  Drawing: Drawing
  Note: Note
  Setting: Setting
}

export { EntityTypes, Bom, Drawing, Note, Setting }
