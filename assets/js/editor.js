import { createDomEditor, createDomManager } from 'remirror/dom'
import { WysiwygPreset } from 'remirror/preset/wysiwyg'

export const InitEditor = {
  mounted() {
    const menuEl = document.querySelector('#menuBar')
    const element = document.querySelector('#editor')
    const manager = createDomManager([new WysiwygPreset()])
    const editor = createDomEditor({ manager, element })

    editor.addHandler('change', () => console.log('your editor has changed'))

    menuEl.querySelector('.toggleBold').addEventListener('mousedown', (e) => {
      e.preventDefault()
      editor.commands.toggleBold()
    })

    menuEl.querySelector('.toggleItalic').addEventListener('mousedown', (e) => {
      e.preventDefault()
      editor.commands.toggleItalic()
    })

  }
}