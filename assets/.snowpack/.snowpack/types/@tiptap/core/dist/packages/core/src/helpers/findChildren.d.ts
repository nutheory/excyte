import { Node as ProseMirrorNode } from 'prosemirror-model';
import { Predicate } from '../types';
declare type NodeWithPos = {
    node: ProseMirrorNode;
    pos: number;
};
export default function findChildren(node: ProseMirrorNode, predicate: Predicate): NodeWithPos[];
export {};
