import { Node, mergeAttributes } from '@tiptap/core'

export default Node.create({
  name: 'divider',

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
      type: {
        default: null,
        parseHTML: element => {
          return {
            type: element.getAttribute('type')
          }
        }
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'divider',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
      const dom = document.createElement('div')
      const line = document.createElement('div')
      line.classList.add('mt-3', 'border-t-2', 'mx-auto', 'w-2/5',  'accent-color')
      dom.append(line)
      // const left = document.createElement('div')
      // const leftLine = document.createElement('div')
      // const right = document.createElement('div')
      // const rightLine = document.createElement('div')
      // const icon = document.createElement('div')
      // if (HTMLAttributes.type === 'cma') {
      //   icon.innerHTML = `
      //     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 accent-svg-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      //       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      //     </svg>
      //   `
      // } else if (HTMLAttributes.type === 'showcase') {
      //   icon.innerHTML = `
      //     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 accent-svg-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      //       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      //     </svg>
      //   `
      // } else if (HTMLAttributes.type === 'buyer_tour') {
      //   icon.innerHTML = `
      //     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 accent-svg-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      //       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      //       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      //     </svg>
      //   `
      // }

      // dom.classList.add('flex', 'w-full')
      // left.classList.add('flex-1')
      // leftLine.classList.add('mt-3', 'mr-3', 'border-t', 'accent-color')
      // right.classList.add('flex-1')
      // rightLine.classList.add('mt-3', 'ml-3', 'border-t', 'accent-color')
      // icon.classList.add('w-6', 'h-6')
      // left.append(leftLine)
      // right.append(rightLine)
      // dom.append(left)
      // dom.append(icon)
      // dom.append(right)

      return {
        dom,
      }
    }
  }
})