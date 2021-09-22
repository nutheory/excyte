import Heading from '@tiptap/extension-heading'
import TableCell from '@tiptap/extension-table-cell'
import Link from '@tiptap/extension-link'
import Paragraph from '@tiptap/extension-paragraph'

export const ExcyteHeading = Heading.extend({
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
      level: {
        default: 1,
        rendered: false,
      },
    }
  },
})

export const ExcyteParagraph = Paragraph.extend({
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
    }
  },
})

export const ExcyteLink = Link.extend({
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
      href: {
        default: null,
      },
      target: {
        default: this.options.HTMLAttributes.target,
      },
    }
  },
})


export const ExcyteTableCell = TableCell.extend({
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
      colspan: {
        default: 1,
      },
      rowspan: {
        default: 1,
      },
      colwidth: {
        default: null,
        parseHTML: element => {
          const colwidth = element.getAttribute('colwidth')
          const value = colwidth
            ? [parseInt(colwidth, 10)]
            : null

          return value
        },
      },
    }
  },
})