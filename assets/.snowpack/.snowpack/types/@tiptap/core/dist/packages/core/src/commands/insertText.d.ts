import { Command, RawCommands } from '../types';
declare module '@tiptap/core' {
    interface Commands {
        insertText: {
            /**
             * Insert a string of text at the current position.
             */
            insertText: (value: string) => Command;
        };
    }
}
export declare const insertText: RawCommands['insertText'];
