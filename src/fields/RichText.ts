import { AemNode } from "../AemNode";
import { RTE_CONFIGS } from "../Defaults";
import { ResourceType } from "../types";
import { FieldOptions } from "./Field";

export interface RTEChar {
    entity: string;
    name: string;
}

export interface RTEFormat {
    description: string;
    tag: string;
}

export interface RichTextOptions extends FieldOptions {
    useFixedInlineToolbar?: boolean;
    rteChars: RTEChar[];
    rteFormats: RTEFormat[];
}

export class RichText extends AemNode {
    options: RichTextOptions = {
        rteChars: [...RTE_CONFIGS.chars],
        rteFormats: [...RTE_CONFIGS.formats],
    };

    constructor(tag = "text", options?: RichTextOptions) {
        super(tag, ResourceType.RICH_TEXT);

        if (options && !options.name) {
            options.name = tag;
        }

        for (const key in options) {
            this.addProp(key, options[key as keyof RichTextOptions]);
        }
    }

    addChar(char: RTEChar) {
        this.options.rteChars.push(char);
    }

    addFormat(format: RTEFormat) {
        this.options.rteFormats.push(format);
    }

    generateConfig(): AemNode[] {
        const { rteChars, rteFormats } = this.options;
        //#region CHARS

        const charsNode = new AemNode("chars").child(
            rteChars.map((entity) => {
                return new AemNode(`default_${entity.name}`, "", [
                    {
                        field: "entity",
                        value: entity.entity,
                    },
                    {
                        field: "name",
                        value: entity.name,
                    },
                ]);
            }),
        );

        const misctools = new AemNode("misctools").child(new AemNode("specialCharsConfig").child(charsNode));

        //#endregion

        //#region FORMATS

        const paraformat = new AemNode("paraformat", "", [{ field: "features", value: "*" }]).child(
            new AemNode("formats").child(
                rteFormats.map((format) => {
                    return new AemNode(`default_${format.tag}`, "", [
                        {
                            field: "description",
                            value: format.description,
                        },
                        {
                            field: "tag",
                            value: format.tag,
                        },
                    ]);
                }),
            ),
        );

        //#endregion

        const table = new AemNode("table", "", [
            {
                field: "features",
                value: "-",
            },
        ]).child(
            new AemNode("hiddenHeaderConfig", "", [
                {
                    field: "hiddenHeaderClassName",
                    value: "cq-wcm-foundation-aria-visuallyhidden",
                },
                {
                    field: "hiddenHeaderEditingCSS",
                    value: "cq-RichText-hiddenHeader--editing",
                },
            ]),
        );

        const rtePlugins = new AemNode("rtePlugins").child([
            new AemNode("format", "", [
                {
                    field: "features",
                    value: "bold,italic",
                },
            ]),
            new AemNode("justify", "", [
                {
                    field: "features",
                    value: "-",
                },
            ]),
            new AemNode("links", "", [
                {
                    field: "features",
                    value: "modifylink,unlink",
                },
            ]),
            new AemNode("lists", "", [
                {
                    field: "features",
                    value: "*",
                },
            ]),
            misctools,
            paraformat,
            table,
            new AemNode("tracklinks", "", [
                {
                    field: "features",
                    value: "*",
                },
            ]),
        ]);

        const inline = new AemNode("inline", "", [
            {
                field: "toolbar",
                value: "[format#bold,format#italic,format#underline,#justify,#lists,links#modifylink,links#unlink,#paraformat]",
            },
        ]);
        const inlinePopover = new AemNode("popovers");
        inlinePopover.child([
            new AemNode("justify", "", [
                { field: "items", value: "[justify#justifyleft,justify#justifycenter,justify#justifyright]" },
                { field: "ref", value: "justify" },
            ]),
            new AemNode("lists", "", [
                { field: "items", value: "[lists#unordered,lists#ordered,lists#outdent,lists#indent]" },
                { field: "ref", value: "lists" },
            ]),
            new AemNode("paraformat", "", [
                { field: "items", value: "paraformat:getFormats:paraformat-pulldown" },
                { field: "ref", value: "paraformat" },
            ]),
        ]);
        inline.child(inlinePopover);

        const dialogFullScreen = new AemNode("dialogFullScreen", "", [
            {
                field: "toolbar",
                value: "[format#bold,format#italic,format#underline,justify#justifyleft,justify#justifycenter,justify#justifyright,lists#unordered,lists#ordered,lists#outdent,lists#indent,links#modifylink,links#unlink,table#createoredit,#paraformat,image#imageProps]",
            },
        ]);
        const dialogFullScreenPopover = new AemNode("popovers");
        dialogFullScreenPopover.child(
            new AemNode("paraformat", "", [
                {
                    field: "items",
                    value: "paraformat:getFormats:paraformat-pulldown",
                },
                {
                    field: "ref",
                    value: "paraformat",
                },
            ]),
        );

        const tableEditOptions = new AemNode("tableEditOptions", "", [
            {
                field: "toolbar",
                value: "[table#insertcolumn-before,table#insertcolumn-after,table#removecolumn,-,table#insertrow-before,table#insertrow-after,table#removerow,-,table#mergecells-right,table#mergecells-down,table#mergecells,table#splitcell-horizontal,table#splitcell-vertical,-,table#selectrow,table#selectcolumn,-,table#ensureparagraph,-,table#modifytableandcell,table#removetable,-,undo#undo,undo#redo,-,table#exitTableEditing,-]]",
            },
        ]);

        const cui = new AemNode("cui");
        cui.child([inline, dialogFullScreen, tableEditOptions]);

        return [rtePlugins, new AemNode("uiSettings").child(cui)];
    }
}
