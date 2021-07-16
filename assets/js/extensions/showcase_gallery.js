import { Node, mergeAttributes } from '@tiptap/core'
import Glightbox from 'glightbox'

export default Node.create({

  name: 'showcaseGallery',

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
      },
      id: {
        default: null,
        parseHTML: element => {
          return {
            id: element.getAttribute('data-listing-id')
          }
        }
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="showcaseGallery"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, {'data-type': 'showcaseGallery'}), 0]
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      if (HTMLAttributes.images === null) {return true}
      const images = JSON.parse(HTMLAttributes.images)
      const id = HTMLAttributes.id
      const dom = document.createElement('div')
      const main_photo = document.createElement('div')
      const gallery_preview = document.createElement('div')

      dom.classList.add("showcase-gallery")
      main_photo.classList.add("main-photo")
      main_photo.style.backgroundImage = `url(${images[0].media_url})`
      dom.append(main_photo)

      const init = images.map((imag, idx) => {
        let link = document.createElement('a')
        link.setAttribute("href", imag.media_url)
        link.setAttribute("data-gallery", `gallery_${id}`)
        if (imag.short_description) {
          link.setAttribute("data-description", imag.short_description)
        }
        link.classList.add("glightbox", "preview")
    
        if (idx === 0) {
          const main = document.createElement('div')
          main.classList.add('hidden')
          main.append(link)
          dom.append(main)
        } else if (idx > 0 && idx < 4) {
          link.style.backgroundImage = `url(${images[idx].media_url})`
          dom.append(link)
        } else {
          const hiddenItem = document.createElement('div')
          hiddenItem.classList.add('hidden')
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