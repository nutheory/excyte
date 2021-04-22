import { Command, RawCommands, Content } from '../types';
declare module '@tiptap/core' {
    interface Commands {
        setContent: {
            /**
             * Replace the whole document with new content.
             */
            setContent: (content: Content, emitUpdate?: Boolean, parseOptions?: Record<string, any>) => Command;
        };
    }
}
export declare const setContent: RawCommands['setContent'];
