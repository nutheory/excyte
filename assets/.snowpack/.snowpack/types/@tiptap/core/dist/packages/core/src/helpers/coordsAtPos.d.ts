import { EditorView } from 'prosemirror-view';
export default function coordsAtPos(view: EditorView, pos: number, end?: boolean): {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
