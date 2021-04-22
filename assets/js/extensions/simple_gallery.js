import { Node, mergeAttributes } from '@tiptap/core'
import BigPicture from 'bigpicture'

export default Node.create({
  name: 'simpleGallery',

  group: 'block',

  content: 'inline*',

  parseHTML() {
    return [
      {
        tag: 'simple-gallery',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['simple-gallery', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      // Markup
      /*
        <div class="node-view">
          <span class="label">Node view</span>

          <div class="content"></div>
        </div>
      */

      const dom = document.createElement('div')
      dom.classList.add('simple-gallery')

      const label = document.createElement('span')
      label.classList.add('label')
      label.innerHTML = 'Node view'
      label.contentEditable = false

      const content = document.createElement('div')
      content.classList.add('content')

      dom.append(label, content)

      return {
        dom,
        contentDOM: content,
      }
    }
  },
})