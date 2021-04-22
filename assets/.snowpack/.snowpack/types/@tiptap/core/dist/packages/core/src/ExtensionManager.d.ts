import { Schema } from 'prosemirror-model';
import { Plugin } from 'prosemirror-state';
import { Editor } from './Editor';
import { Extensions, RawCommands } from './types';
export default class ExtensionManager {
    editor: Editor;
    schema: Schema;
    extensions: Extensions;
    splittableMarks: string[];
    constructor(extensions: Extensions, editor: Editor);
    private sort;
    get commands(): RawCommands;
    get plugins(): Plugin[];
    get attributes(): import("@tiptap/core").ExtensionAttribute[];
    get nodeViews(): any;
    get textSerializers(): any;
}
