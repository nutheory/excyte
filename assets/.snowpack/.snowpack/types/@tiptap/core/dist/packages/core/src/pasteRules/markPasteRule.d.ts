import { Plugin } from 'prosemirror-state';
import { MarkType } from 'prosemirror-model';
export default function (regexp: RegExp, type: MarkType, getAttrs?: (match: any) => any): Plugin;
