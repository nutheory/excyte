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
          return {
            video: element.getAttribute('data-video-json')
          }
        }
      }
    }
  },

  parseHTML() {
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
      const v = JSON.parse(HTMLAttributes.video)
      const dom = document.createElement('div')
      const video = document.createElement('video')
      video.id = "mux-default"
      video.classList.add('video-js', 'vjs-16-9')
      video.controls = "controls"
      video.preload = "auto"
      video.width = "100%"
      dom.append(video)
      const player = videojs(video, {
        "timelineHoverPreviews": true,
        "plugins": {
          "mux": {
            "data": {
              "env_key": "8annq75bglotovm9k0asdh112",
              "video_title": "My Great Video"
            }
          }
        }
      })
      player.src({ type: 'video/mux', src: v.stream_id })
      return {
        dom,
      }
    }
  },
})