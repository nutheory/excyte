import { Node, mergeAttributes } from '../../_snowpack/pkg/@tiptap.core.v2.0.0-beta.13.js'
import BigPicture from '../../_snowpack/pkg/bigpicture.v2.5.3.js'

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
    return () => {
      // Markup
      /*
        <div class="node-view">
          <span class="label">Node view</span>

          <div class="content"></div>
        </div>
      */

      const dom = document.createElement('div')
      dom.classList.add('simple-comp')

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