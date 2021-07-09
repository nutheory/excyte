import { Node, mergeAttributes } from '@tiptap/core'
import videojs from '@mux/videojs-kit'
import '@mux/videojs-kit/dist/index.css'

export default Node.create({

  name: 'simpleVideo',

  group: 'block',

  content: 'block+',

  addAttributes() {
    return {
      video: {
        default: null,
        parseHTML: element => {
          console.log("Boo", element)
          return {
            video: element.getAttribute('data-video-url')
          }
        }
      }
    }
  },

  parseHTML() {
    console.log("Parse")
    return [
      {
        tag: 'div[data-type="simpleVideo"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, {'data-type': 'simpleVideo'}), 0]
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      if (HTMLAttributes.video === null) {return true}
      
      const dom = document.createElement('div')
      const video = document.createElement('video')
      // const source = document.createElement('source')
      // source.src = HTMLAttributes.video
      // source.type = "video/mux"
      video.classList.add('video-js', 'vjs-16-9')
      video.controls = "controls"
      video.preload = "auto"
      video.width = "100%"
      video.append(source)
      dom.append(video)

      return {
        dom,
      }
    }
  },
})