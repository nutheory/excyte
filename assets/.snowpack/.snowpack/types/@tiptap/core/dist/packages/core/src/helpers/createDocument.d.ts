import { Schema, Node as ProseMirrorNode } from 'prosemirror-model';
import { Content } from '../types';
export default function createDocument(content: Content, schema: Schema, parseOptions?: Record<string, any>): ProseMirrorNode;
