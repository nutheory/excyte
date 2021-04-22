import { Schema, Node as ProseMirrorNode, Fragment } from 'prosemirror-model';
import { Content } from '../types';
export declare type CreateNodeFromContentOptions = {
    slice?: boolean;
    parseOptions?: Record<string, any>;
};
export default function createNodeFromContent(content: Content, schema: Schema, options?: CreateNodeFromContentOptions): string | ProseMirrorNode | Fragment;
