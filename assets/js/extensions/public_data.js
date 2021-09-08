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
      const adminBox = document.createElement('div')
      const label = document.createElement('label')
      const button = document.createElement('button')
      dom.classList.add('admin-box')
      adminBox.classList.add('border', 'border-gray-600', 'bg-cyan-100', 'font-sans', 'rounded', 'mb-1', 'px-2', 'py-1', 'w-32')
      label.classList.add('block', 'text-sm', 'text-gray-600')
      button.classList.add('block', 'text-base', 'text-cyan-600', 'font-bold')
      label.innerHTML = "Agent Only"
      button.innerHTML = "Full live data"
      button.addEventListener('click', (e) => {
        // axios.get(`https://parser-external.geo.moveaws.com/suggest?client_id=rdc-x&input=${encodeURIComponent(address)}`)
        //   .then(res => {
        //     const pId = res.data.autocomplete[0].mpr_id
            window.viewerHook.base.pushEventTo('#moreInfoPanel', 'get-more-info', { lId }, reply => {
              console.log("reply", reply)
            })
        // })
      })
      adminBox.append(label, button)
      dom.append(adminBox)
      return {
        dom,
      }
    }
  }
})