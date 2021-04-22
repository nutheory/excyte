import { NodeType } from 'prosemirror-model';
import { Command, RawCommands } from '../types';
declare module '@tiptap/core' {
    interface Commands {
        insertNode: {
            /**
             * Insert a node at the current position.
             */
            insertNode: (typeOrName: string | NodeType, attributes?: Record<string, any>) => Command;
        };
    }
}
export declare const insertNode: RawCommands['insertNode'];
