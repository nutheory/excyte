import { Node, mergeAttributes } from '@tiptap/core'
import Glightbox from 'glightbox'

export default Node.create({
  name: 'simpleGallery',

  group: 'block',

  content: 'block+',

  addAttributes() {
    return {
      images: {
        default: null,
        parseHTML: element => {
          return {
            images: element.getAttribute('data-media-json')
          }
        }
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="simple-gallery"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, {'data-type': 'simple-gallery'}), 0]
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      if (HTMLAttributes.images === "{{ listing.media }}") {return true}
      console.log("JSON", HTMLAttributes.images)
      const images = JSON.parse(HTMLAttributes.images)

      const dom = document.createElement('div')
      dom.classList.add("simple-gallery", "w-full")

      const init = images.map((imag, idx) => {
        let link = document.createElement('a')
        link.setAttribute("href", imag.media_url)
        link.setAttribute("data-gallery", "gallery")
        link.setAttribute("data-description", imag.short_description)
        link.classList.add("glightbox")

        let img = document.createElement('img')
        img.setAttribute("src", imag.media_url)
        img.setAttribute("alt", "image")

        if (idx === 0) {
          const main = document.createElement('div')
          main.classList.add('col-span-4')
          link.append(img)
          main.append(link)
          dom.append(main)
        } else if (idx > 0 && idx < 5) {
          const gridItem = document.createElement('div')
          link.append(img)
          gridItem.append(link)
          dom.append(gridItem)
        } else {
          const hiddenItem = document.createElement('div')
          hiddenItem.classList.add('hidden')
          link.append(img)
          hiddenItem.append(link)
          dom.append(hiddenItem)
        }
      })

      return {
        dom,
      }
    }
  },
  onFocus({ editor, event }) {
    let lightbox = Glightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      selector: ".glightbox"
    })
  }
})