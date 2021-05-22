export const actions = [
  {
    title: 'H1', id: 'h1',
    command: ({ editor, range }) => {editor.chain().focus().deleteRange(range).toggleHeading({ level: 1 }).run()},
  }, {
    title: 'H2', id: 'h2',
    command: ({ editor, range }) => {editor.chain().focus().deleteRange(range).toggleHeading({ level: 2 }).run()},
  }, {
    title: 'H3', id: 'h3',
    command: ({ editor, range }) => {editor.chain().focus().deleteRange(range).toggleHeading({ level: 3 }).run()},
  }, {
    title: 'Bullet list', id: 'bulletlist',
    command: ({ editor, range }) => {editor.chain().focus().deleteRange(range).toggleBulletList().run()},
  }, {
    title: 'Align left', id: 'leftAlign',
    command: ({ editor, range }) => {editor.chain().focus().deleteRange(range).setTextAlign('left').run()},
  }, {
    title: 'Align center', id: 'centerAlign',
    command: ({ editor, range }) => {editor.chain().focus().deleteRange(range).setTextAlign('center').run()},
  }, {
    title: 'Align right', id: 'rightAlign',
    command: ({ editor, range }) => {editor.chain().focus().deleteRange(range).setTextAlign('right').run()},
  }, {
    title: 'Blockquote', id: 'blockquote',
    command: ({ editor, range }) => {editor.chain().focus().deleteRange(range).toggleBlockquote().run()},
  }, {
    title: 'Minor major', id: 'minorMajor',
    command: ({ editor, range }) => {editor.chain().focus().deleteRange(range).toggleBlockquote().run()},
  }, {
    title: '50/50', id: '5050',
    command: ({ editor, range }) => {editor.chain().focus().deleteRange(range).toggleBlockquote().run()},
  }, {
    title: 'Major minor', id: 'majorMinor',
    command: ({ editor, range }) => {editor.chain().focus().deleteRange(range).toggleBlockquote().run()},
  },
]