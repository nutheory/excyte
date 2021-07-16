// import { Node, mergeAttributes } from '@tiptap/core'

// export default Node.create({

//   name: 'header',

//   group: 'block',

//   content: 'block+',

//   addAttributes() {
//     return {
//       images: {
//         default: null,
//         parseHTML: element => {
//           return {
//             images: element.getAttribute('data-media-json')
//           }
//         }
//       },
//       id: {
//         default: null,
//         parseHTML: element => {
//           return {
//             id: element.getAttribute('data-listing-id')
//           }
//         }
//       }
//     }
//   },

//   parseHTML() {
//     return [
//       {
//         tag: 'div[data-type="showcaseGallery"]',
//       },
//     ]
//   },

//   renderHTML({ HTMLAttributes }) {
//     return ['div', mergeAttributes(HTMLAttributes, {'data-type': 'showcaseGallery'}), 0]
//   },

//   addNodeView() {
//     return ({ editor, node, getPos, HTMLAttributes, decorations, extension }) => {
//     const dom = document.createElement('div')
//     const eye_candy = document.createElement('div')

//     eye_candy.innerHTML =
//       `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
//       </svg>`