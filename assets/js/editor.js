import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  HardBreak,
  Heading,
  BulletList,
  OrderedList,
  ListItem,
  Bold,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export const InitEditor = {
  mounted() {
    const thisHook = this
    const elem = thisHook.el.querySelector("#documentEditor")
    console.log('thisEDDDD333', thisHook)
    new Vue ({
      el: "#documentEditor",
      template: '#document-editor-template',
      components: {
        Editor,
        EditorContent,
        EditorMenuBar,
      },
      data () {
        console.log('thisEDDDData', thisHook)
        return{
          editor: new Editor({
            extensions: [
              new Blockquote(),
              new HardBreak(),
              new Heading({ levels: [1, 2, 3] }),
              new BulletList(),
              new OrderedList(),
              new ListItem(),
              new Bold(),
              new Italic(),
              new Link(),
              new Strike(),
              new Underline(),
              new History(),
            ],
            content: `
              <h1>Yay Headlines!</h1>
              <p>All these <strong>cool tags</strong> are working now.</p>
            `,
          }),
        }
      },
      created() {
        thisHook.handleEvent("loadContentFromDb", ({content}) => {
          this.editor.setContent(content)
        })
      }
    })
  }
//   {
//   "type": "doc",
//   "content": [
//     {
//       "type": "paragraph",
//       "content": [
//         {
//           "type": "text",
//           "text": "hfjgfjfg"
//         },
//         {
//           "type": "text",
//           "marks": [
//             {
//               "type": "bold"
//             }
//           ],
//           "text": "jfjgf"
//         }
//       ]
//     }
//   ]
// }
}
