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
      },
      title: {
        default: null,
        parseHTML: element => {
          return {
            title: element.getAttribute('data-title')
          }
        }
      },
      city: {
        default: null,
        parseHTML: element => {
          return {
            city: element.getAttribute('data-addr-city')
          }
        }
      },
      number: {
        default: null,
        parseHTML: element => {
          return {
            number: element.getAttribute('data-addr-number')
          }
        }
      },
      street: {
        default: null,
        parseHTML: element => {
          return {
            street: element.getAttribute('data-addr-street')
          }
        }
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'showcase-gallery',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['showcase-gallery', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      if (HTMLAttributes.images === null) {return true}
      const images = JSON.parse(HTMLAttributes.images)
      const id = HTMLAttributes.id
      const dom = document.createElement('div')
      const titleWrapper = document.createElement('div')
      const icon = document.createElement('div')
      titleWrapper.classList.add("title")
      icon.classList.add("icon")
      icon.innerHTML = 
        `<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>`

      titleWrapper.innerHTML = 
        `<h3 class="bg-color sub-header-color">${HTMLAttributes.title}</h3><br />
        <h2 class="bg-color header-color">${HTMLAttributes.number} ${HTMLAttributes.street}</h2><br />
        <h3 class="bg-color header-color">${HTMLAttributes.city}</h3><br />`

      const init = images.map((imag, idx) => {
        let link = document.createElement('a')
        link.setAttribute("href", imag.media_url)
        link.setAttribute("data-gallery", `gallery_${id}`)
        if (imag.short_description) {
          link.setAttribute("data-description", imag.short_description)
        }
        link.classList.add("glightbox", "preview")
        link.style.backgroundImage = `url(${images[idx].media_url})`
        if (idx === 0) {
          link.classList.add("main-photo")
          link.append(icon)
          link.append(titleWrapper)
          dom.append(link)
        } else if (idx > 0 && idx < 4) {
          dom.append(link)
        } else {
          const hiddenItem = document.createElement('div')
          hiddenItem.classList.add('hidden')
          hiddenItem.append(link)
          dom.append(hiddenItem)
        }
      })

      dom.classList.add("showcase-gallery")
      
      return {
        dom,
      }
    }
  },
})