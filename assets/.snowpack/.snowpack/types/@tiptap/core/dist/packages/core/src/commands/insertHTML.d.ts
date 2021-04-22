import { Command, RawCommands } from '../types';
declare module '@tiptap/core' {
    interface Commands {
        insertHTML: {
            /**
             * Insert a string of HTML at the current position.
             */
            insertHTML: (value: string) => Command;
        };
    }
}
export declare const insertHTML: RawCommands['insertHTML'];
