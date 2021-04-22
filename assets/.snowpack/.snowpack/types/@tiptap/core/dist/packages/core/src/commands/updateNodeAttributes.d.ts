import { NodeType } from 'prosemirror-model';
import { Command, RawCommands } from '../types';
declare module '@tiptap/core' {
    interface Commands {
        updateNodeAttributes: {
            /**
             * Update attributes of a node.
             */
            updateNodeAttributes: (typeOrName: string | NodeType, attributes: Record<string, any>) => Command;
        };
    }
}
export declare const updateNodeAttributes: RawCommands['updateNodeAttributes'];
