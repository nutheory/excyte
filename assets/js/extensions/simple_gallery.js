import { Node, mergeAttributes } from '@tiptap/core'
import Glightbox from 'glightbox'

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
      console.log("Editor", editor)
      console.log("node", node)
      console.log("HTMLAttributes", HTMLAttributes)
      console.log("decorations", decorations)

      // Markup
      /*
        <div class="node-view">
          <span class="label">Node view</span>

          <div class="content"></div>
        </div>
      */

      const dom = document.createElement('div')
      dom.classList.add('simple-gallery')

      const img = document.createElement('img')
      img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'
      img.dataset.bp = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'
      dom.appendChild(img)

      const label = document.createElement('span')
      label.classList.add('label')
      label.innerHTML = 'Node view'
      label.contentEditable = false

      const content = document.createElement('div')
      content.classList.add('content')

      dom.append(label, content)

      // BigPicture({
      //   el: document.querySelector('.simple-gallery'),
      //   gallery: '.simple-gallery',
      // })

      return {
        dom,
        contentDOM: content,
      }
    }
  },
})