import { Node, mergeAttributes } from '@tiptap/core'

export default Node.create({
  name: 'collapsable',

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
      style: {
        default: null,
        parseHTML: element => {
          return {
            style: element.getAttribute('style')
          }
        }
      },
      id: {
        default: null,
        parseHTML: element => {
          return {
            id: element.getAttribute('id')
          }
        }
      },
      title: {
        default: null,
        parseHTML: element => {
          return {
            title: element.getAttribute('title')
          }
        }
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'collapsable',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes), 0]
  },


  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const dom = document.createElement('div')
      const header = document.createElement('div')
      const headerButton = document.createElement('button')
      const title = document.createElement('h3')
      const content = document.createElement('div')
      const contentWrapper = document.createElement('div')
      const buttonState = document.createElement('div')
      buttonState.innerHTML =
        `<svg class="w-6 h-6 accent-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 9l-7 7-7-7"></path>
        </svg>`
      dom.setAttribute('class', HTMLAttributes.class)
      dom.setAttribute('x-data', '{open: window.isLg}')
      headerButton.setAttribute('x-on:click', 'open = !open')
      headerButton.classList.add('flex')
      title.innerHTML = HTMLAttributes.title
      title.classList.add('sub-header-color')
      buttonState.setAttribute('x-bind:class', "open ? 'transform rotate-180' : ''")
      buttonState.classList.add('px-3')
      contentWrapper.setAttribute('x-show', 'open')
      contentWrapper.setAttribute('x-transition:enter', 'transition-transform transition-opacity ease-out duration-300')
      contentWrapper.setAttribute('x-transition:enter-start', 'opacity-0 transform -translate-y-2')
      contentWrapper.setAttribute('x-transition:enter-end', 'opacity-100 transform translate-y-0')
      contentWrapper.setAttribute('x-transition:leave', 'transition ease-in duration-300')
      contentWrapper.setAttribute('x-transition:leave-end', 'opacity-0 transform -translate-y-3')
      content.classList.add('mb-6')

      headerButton.append(title, buttonState)
      header.append(headerButton)
      contentWrapper.append(content)
      dom.append(header, contentWrapper)

      return {
        dom,
        contentDOM: content,
      }
    }
  }
})