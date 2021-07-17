import { Node, mergeAttributes } from '@tiptap/core'

export default Node.create({
  name: 'contact',

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
      name: {
        default: null,
        parseHTML: element => {
          return {
            name: element.getAttribute('name')
          }
        }
      },
      content: {
        default: null,
        parseHTML: element => {
          return {
            content: element.getAttribute('content')
          }
        }
      },
      type: {
        default: null,
        parseHTML: element => {
          return {
            type: element.getAttribute('type')
          }
        }
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'contact',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes), 0]
  },


  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const dom = document.createElement('div')
      const button = document.createElement('button')
      const innerStruct = document.createElement('div')
      const icon = document.createElement('div')
      const content = document.createElement('div')
      const label = document.createElement('label')
      const value = document.createElement('p')
      const formatPhone = (phone) => {
        const newStr = phone.replace(/[ _]/g, '').replace(/\sext\.$/, '').trim()
        const phoneTest = new RegExp(/^((\+1)|1)? ?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})( ?(ext\.? ?|x)(\d*))?$/)
        const results = phoneTest.exec(newStr)
        if (results !== null && results.length > 8) {
          return "(" + results[3] + ") " + results[4] + "-" + results[5] + (typeof results[8] !== "undefined" && results[8].length > 0 ? " x" + results[8] : "")
        } else {
          return newStr
        }
      }

      if (HTMLAttributes.type === 'url') {
        button.setAttribute('x-on:click', `window.open('tel:${HTMLAttributes.content}', '_self')`)
        label.innerHTML = HTMLAttributes.name
        value.innerHTML = HTMLAttributes.content
        icon.innerHTML =
          `<svg class="w-10 h-10 accent-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
          </svg>`
      } else if (HTMLAttributes.type === 'phone') {
        button.setAttribute('x-on:click', `window.open('tel:${HTMLAttributes.content}', '_self')`)
        label.innerHTML = HTMLAttributes.name
        value.innerHTML = formatPhone(HTMLAttributes.content)
        icon.innerHTML =
          `<svg class="w-10 h-10 accent-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>`
      } else if (HTMLAttributes.type === 'email') {
        button.setAttribute('x-on:click', `window.open('mailto:${HTMLAttributes.content}', '_self')`)
        label.innerHTML = HTMLAttributes.name
        value.innerHTML = HTMLAttributes.content
        icon.innerHTML =
          `<svg class="w-10 h-10 accent-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>`
      } else {
        value.innerHTML = HTMLAttributes.content
        icon.innerHTML =
          `<svg class="w-10 h-10 accent-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>`
      }
      
      innerStruct.classList.add('flex')
      icon.classList.add('pt-1')
      content.classList.add('ml-4', 'text-left')
      label.classList.add('text-sm', 'uppercase')
      value.classList.add('font-bold')
      content.append(label, value)
      innerStruct.append(icon, content)
      button.append(innerStruct)
      dom.append(button)

      return {
        dom,
      }
    }
  }
})