import { NodeType } from 'prosemirror-model';
import { Command, RawCommands } from '../types';
declare module '@tiptap/core' {
    interface Commands {
        resetNodeAttributes: {
            /**
             * Resets node attributes to the default value.
             */
            resetNodeAttributes: (typeOrName: string | NodeType, attributes: string | string[]) => Command;
        };
    }
}
export declare const resetNodeAttributes: RawCommands['resetNodeAttributes'];
