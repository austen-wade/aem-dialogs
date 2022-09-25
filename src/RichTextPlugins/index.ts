import { AemNode } from '../AemNode';
import { RichText } from '../fields/RichText';

interface RichTextPlugin {
    tag: string,
    features: string | string[],
};

const editPlugin: RichTextPlugin = {
    tag: 'edit',
    features: ['cut', 'copy', 'paste-default', 'paste-plaintext', 'paste-wordhtml',]
}
const findreplacePlugin: RichTextPlugin = {
    tag: 'findreplace',
    features: ['find', 'replace']
}
const formatPlugin: RichTextPlugin = {
    tag: 'format',
    features: ['bold', 'italic', 'underline'],
}
const imagePlugin: RichTextPlugin = {
    tag: 'image',
    features: 'image',
}
const keysPlugin = (features: string | string[]): RichTextPlugin => {
    return {
        tag: 'keys',
        features
    }
};
const justifyPlugin: RichTextPlugin = {
    tag: 'justify',
    features: ['justifyleft', 'justifycenter', 'justifyright',],
};
const linksPlugin: RichTextPlugin = {
    tag: 'links',
    features: ['modifylink', 'unlink', 'anchor'],
}
const listsPlugin: RichTextPlugin = {
    tag: 'lists',
    features: ['ordered', 'unordered', 'indent', 'outdent']
}
const misctoolsPlugin: RichTextPlugin = {
    tag: 'misctools',
    features: ['specialchars', 'sourceedit'],
}
const paraformatPlugin: RichTextPlugin = {
    tag: 'Paraformat',
    features: 'paraformat'
}
const spellcheckPlugin: RichTextPlugin = {
    tag: 'spellcheck',
    features: 'checktext',
}
const stylesPlugin: RichTextPlugin = {
    tag: 'styles',
    features: 'styles',
}
const subsuperscriptPlugin: RichTextPlugin = {
    tag: 'subsuperscript',
    features: ['subscript', 'superscript']
}
const tablePlugin: RichTextPlugin = {
    tag: 'table',
    features: [
        'table',
        'removetable',
        'insertrow',
        'removerow',
        'insertcolumn',
        'removecolumn',
        'cellprops',
        'mergecells',
        'splitcell',
        'selectrow',
        'selectcolumns']
}
const undoPlugin: RichTextPlugin = {
    tag: 'undo',
    features: ['undo', 'redo']
}

const misctools = new AemNode('misctools').child(
    new AemNode('specialCharsConfig').child(
        new AemNode('chars').child([
            new AemNode('default_copyright', '', [
                {
                    field: 'entity', value: '&amp;copy;',
                },
                {
                    field: 'name', value: 'copyright',
                }
            ]),
            new AemNode('default_euro', '', [
                {
                    field: 'entity', value: '&amp;euro;',
                },
                {
                    field: 'name', value: 'euro',
                }
            ]),
            new AemNode('default_registered', '', [
                {
                    field: 'entity', value: '&amp;reg;',
                },
                {
                    field: 'name', value: 'registered',
                }
            ]),
            new AemNode('default_trademark', '', [
                {
                    field: 'entity', value: '&amp;trade;',
                },
                {
                    field: 'name', value: 'trademark',
                }
            ])
        ])
    )
)

const paraformat = new AemNode('paraformat', '', [{ field: 'features', value: '*' }]).child(
    new AemNode('formats').child([
        new AemNode('default_p', '', [
            {
                field: 'description', value: 'Paragraph',
            }, {
                field: 'tag', value: 'p',
            }
        ]),
        new AemNode('default_h1', '', [
            {
                field: 'description', value: 'Heading 1',
            }, {
                field: 'tag', value: 'h1',
            }
        ]),
        new AemNode('default_h2', '', [
            {
                field: 'description', value: 'Heading 2',
            }, {
                field: 'tag', value: 'h2',
            }
        ]),
        new AemNode('default_h3', '', [
            {
                field: 'description', value: 'Heading 3',
            }, {
                field: 'tag', value: 'h3',
            }
        ]),
        new AemNode('default_h4', '', [
            {
                field: 'description', value: 'Heading 4',
            }, {
                field: 'tag', value: 'h4',
            }
        ]),
        new AemNode('default_h5', '', [
            {
                field: 'description', value: 'Heading 5',
            }, {
                field: 'tag', value: 'h5',
            }
        ]),
        new AemNode('default_h6', '', [
            {
                field: 'description', value: 'Heading 6',
            }, {
                field: 'tag', value: 'h6',
            }
        ]),
        new AemNode('default_blockquote', '', [
            {
                field: 'description', value: 'Quote',
            }, {
                field: 'tag', value: 'blockquote',
            }
        ]),
        new AemNode('default_pre', '', [
            {
                field: 'description', value: 'Preformatted',
            }, {
                field: 'tag', value: 'pre',
            }
        ]),
    ])
)

const table = new AemNode('table', '', [{
    field: 'features', value: '-'
}]).child(new AemNode('hiddenHeaderConfig', '', [
    {
        field: 'hiddenHeaderClassName', value: 'cq-wcm-foundation-aria-visuallyhidden'
    },
    {
        field: 'hiddenHeaderEditingCSS', value: 'cq-RichText-hiddenHeader--editing'
    }
]));

const rtePlugins = new AemNode('rtePlugins').child([
    new AemNode('format', '', [
        {
            field: 'features', value: 'bold,italic'
        }
    ]),
    new AemNode('justify', '', [
        {
            field: 'features', value: '-'
        }
    ]),
    new AemNode('links', '', [
        {
            field: 'features', value: 'modifylink,unlink'
        }
    ]),
    new AemNode('lists', '', [
        {
            field: 'features', value: '*'
        }
    ]),
    misctools,
    paraformat,
    table,
    new AemNode('tracklinks', '', [
        {
            field: 'features', value: '*'
        }
    ])
])

const inline = new AemNode('inline', "", [
    { field: 'toolbar', value: '[format#bold,format#italic,format#underline,#justify,#lists,links#modifylink,links#unlink,#paraformat]' }
]);
const inlinePopover = new AemNode('popovers');
inlinePopover.child([
    new AemNode('justify', '', [
        { field: 'items', value: '[justify#justifyleft,justify#justifycenter,justify#justifyright]' },
        { field: 'ref', value: 'justify' },
    ]),
    new AemNode('lists', '', [
        { field: 'items', value: '[lists#unordered,lists#ordered,lists#outdent,lists#indent]' },
        { field: 'ref', value: 'lists' },
    ]),
    new AemNode('paraformat', '', [
        { field: 'items', value: 'paraformat:getFormats:paraformat-pulldown' },
        { field: 'ref', value: 'paraformat' },
    ])
]);
inline.child(inlinePopover)

const dialogFullScreen = new AemNode("dialogFullScreen", "", [
    { field: 'toolbar', value: '[format#bold,format#italic,format#underline,justify#justifyleft,justify#justifycenter,justify#justifyright,lists#unordered,lists#ordered,lists#outdent,lists#indent,links#modifylink,links#unlink,table#createoredit,#paraformat,image#imageProps]' }
]);
const dialogFullScreenPopover = new AemNode('popovers');
dialogFullScreenPopover.child(new AemNode('paraformat', '', [
    {
        field: 'items',
        value: 'paraformat:getFormats:paraformat-pulldown',
    },
    {
        field: 'ref',
        value: 'paraformat',
    }
]))

const tableEditOptions = new AemNode("tableEditOptions", "", [
    { field: 'toolbar', value: '[table#insertcolumn-before,table#insertcolumn-after,table#removecolumn,-,table#insertrow-before,table#insertrow-after,table#removerow,-,table#mergecells-right,table#mergecells-down,table#mergecells,table#splitcell-horizontal,table#splitcell-vertical,-,table#selectrow,table#selectcolumn,-,table#ensureparagraph,-,table#modifytableandcell,table#removetable,-,undo#undo,undo#redo,-,table#exitTableEditing,-]]' }
]);

const cui = new AemNode('cui');
cui.child([inline, dialogFullScreen, tableEditOptions]);

const rte = new RichText('text');
rte.child([rtePlugins, new AemNode('uiSettings').child(cui)]);
