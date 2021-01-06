import { createDomEditor, createDomManager } from 'remirror/dom'
import { fromHtml, toHtml, getRemirrorJSON } from 'remirror/core'
import { CorePreset } from 'remirror/preset/core'
import { WysiwygPreset } from 'remirror/preset/wysiwyg'
import { PositionerExtension } from 'remirror/extension/positioner'
import { TextAlignExtension } from 'remirror/extension/text-align'

export const InitEditor = {
  mounted() {
    const corePreset = new CorePreset({ rootContent: 'block*' })
    const wysiwygPreset = new WysiwygPreset()
    const positioner = new PositionerExtension()
    const textAlign = new TextAlignExtension()
    const menuEl = document.querySelector('#menuBar')
    const element = document.querySelector('#editor')
    const save = document.querySelector('#save')
    const manager = createDomManager([corePreset, wysiwygPreset, textAlign])
    const editor = createDomEditor({ manager, element })

    this.handleEvent("loadContentFromDb", ({content}) => {
      console.log('LOADER', content.doc)
      editor.setContent(content.doc)
    })

    save.addEventListener('click', (e) => {
      let st = editor.getState()
      let htmlString = toHtml({ node: st.doc, schema: st.schema })
      let res = getRemirrorJSON(st)
      this.pushEventTo('#editor-form', 'editor-save', res, (reply) => {
        if (htmlString !== undefined){
          console.log('saved', reply)
        }
      })
    })

    element.addEventListener('input', (ch) => {
      let st = editor.getState()
      let htmlString = toHtml({ node: st.doc, schema: st.schema })
      let res = getRemirrorJSON(st)
      this.pushEventTo('#editor-form', 'editor-update', res, (reply) => {
        if (htmlString !== undefined){
          console.log('reply', reply)
        }
      })
    })

    // Text Effects
    menuEl.querySelector('.toggleBold').addEventListener('mousedown', (e) => {
      e.preventDefault()
      editor.commands.toggleBold()
    })

    menuEl.querySelector('.toggleItalic').addEventListener('mousedown', (e) => {
      e.preventDefault()
      editor.commands.toggleItalic()
    })

    menuEl.querySelector('.toggleUnderline').addEventListener('mousedown', (e) => {
      e.preventDefault()
      editor.commands.toggleUnderline()
    })

    menuEl.querySelector('.toggleStrikethrough').addEventListener('mousedown', (e) => {
      e.preventDefault()
      editor.commands.toggleStrike()
    })

    menuEl.querySelector('.toggleBlockquote').addEventListener('mousedown', (e) => {
      e.preventDefault()
      editor.commands.toggleBlockquote()
    })

    menuEl.querySelector('.alignRight').addEventListener('mousedown', (e) => {
      e.preventDefault()
      editor.commands.setTextAlign({style: {'text-align': 'right'}})
    })


  },
  destroyed(){
    
  }
}