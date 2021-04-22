import { Command, Mark } from '@tiptap/core';
export interface LinkOptions {
    openOnClick: boolean;
    HTMLAttributes: Record<string, any>;
}
declare module '@tiptap/core' {
    interface Commands {
        link: {
            /**
             * Set a link mark
             */
            setLink: (attributes: {
                href: string;
                target?: string;
            }) => Command;
            /**
             * Toggle a link mark
             */
            toggleLink: (attributes: {
                href: string;
                target?: string;
            }) => Command;
            /**
             * Unset a link mark
             */
            unsetLink: () => Command;
        };
    }
}
export declare const pasteRegex: RegExp;
export declare const pasteRegexWithBrackets: RegExp;
export declare const Link: Mark<LinkOptions>;
