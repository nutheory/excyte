import { Node, mergeAttributes } from '@tiptap/core'
import axios from 'axios'

export default Node.create({
  name: 'publicData',

  group: 'block',

  content: 'block+',

  addAttributes() {
    return {
      class: {
        default: null,
        parseHTML: element => {
          return {
            class: element.getAttribute('class')
          }
        }
      },
      listingId: {
        default: null,
        parseHTML: element => {
          return {
            listingId: element.getAttribute('data-listing-id')
          }
        }
      },
      address: {
        default: null,
        parseHTML: element => {
          return {
            address: element.getAttribute('data-address')
          }
        }
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'public-data',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['public-data', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const address = HTMLAttributes.address
      const lId = HTMLAttributes.listingId
      const dom = document.createElement('div')
      const button = document.createElement('button')
      button.innerHTML = "Showing Information"
      button.addEventListener('click', (e) => {
        axios.get(`https://parser-external.geo.moveaws.com/suggest?client_id=rdc-x&input=${encodeURIComponent(address)}`)
          .then(res => {
            const pId = res.data.autocomplete[0].mpr_id
            window.viewerHook.base.pushEventTo('#moreInfoPanel', 'get-more-info', { pId, lId }, reply => {
              console.log("reply", reply)
            })
          })
      })
      dom.append(button)
      return {
        dom,
      }
    }
  }
})