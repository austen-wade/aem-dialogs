import { RTEChar } from "./fields/RichText";

export const RTE_CONFIGS = {
    chars: [
        { entity: "&amp;copy;", name: "copyright" },
        { entity: "&amp;copy;", name: "copyright" },
        { entity: "&amp;euro;", name: "euro" },
        { entity: "&amp;reg;", name: "registered" },
        { entity: "&amp;trade;", name: "trademark" },
    ],
    formats: [
        { description: "Paragraph", tag: "p" },
        { description: "Heading 1", tag: "h1" },
        { description: "Heading 2", tag: "h2" },
        { description: "Heading 3", tag: "h3" },
        { description: "Heading 4", tag: "h4" },
        { description: "Heading 5", tag: "h5" },
        { description: "Heading 6", tag: "h6" },
        { description: "Quote", tag: "blockquote" },
        { description: "Preformatted", tag: "pre" },
    ],
};
