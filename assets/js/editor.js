import { createDomEditor, createDomManager, createStateFromContent } from 'remirror/dom'
import { fromHtml, toHtml, getRemirrorJSON } from 'remirror/core'
import { WysiwygPreset } from 'remirror/preset/wysiwyg'

export const InitEditor = {
  initContent() { return this.el.dataset.content },
  mounted() {
    const menuEl = document.querySelector('#menuBar')
    const element = document.querySelector('#editor')
    const save = document.querySelector('#save')
    const manager = createDomManager([new WysiwygPreset()])
    const editor = createDomEditor({ manager, element })
    const prev = JSON.parse(this.initContent())
    // console.log(JSON.parse(this.initContent()))

    createStateFromContent({content: prev})

    // this.handleEvent("loadContentFromDb", ({content}) => {
    //   console.log('LOADER', content)
    // })

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