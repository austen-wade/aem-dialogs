import { ResourceType } from "./types";

import { AemNode } from "./AemNode";
import { formatXml } from "./utils";

import { writeFileSync } from "fs";



const tab1 = new AemNode('tab1', {
    'jcr:title': 'Properties',
    'sling:resourceType': ResourceType.CONTAINER,
    'margin': '{Boolean}true'
});
const tab2 = new AemNode('tab2', {
    'jcr:title': 'Properties',
    "sling:resourceType": ResourceType.CONTAINER,
    'margin': '{Boolean}true'
});

tab1.items([
    new AemNode('columns', {
        margin: "{Boolean}true"
    }, ResourceType.FIXED_COLUMNS)
]);

let tabs = new AemNode('tabs', { 'maximixed': 'Boolean{true}' });

tabs.items([tab1, tab2]);


const root = createTabsDialog(
    "Button",
    [
        createTab(0, "Properties", [
            createTextField("buttonLabel"),
            createTextField("buttonUrl"),
        ]),
        createTab(1, "SEO", [
            createTextField("seoLabel"),
        ]),
    ]
);

let output = root.xml(true);
output = formatXml(output);
console.log(output);

writeFileSync('./output.xml', output, {});

function createTabsDialog(title: string, tabs: AemNode[]): AemNode {
    const root = new AemNode("jcr:root",
        {
            "jcr:title": title,
            "sling:resourceType": "cq/gui/components/authoring/dialog",
            "xmlns:cq": "http://www.day.com/jcr/cq/1.0",
            "xmlns:granite": "http://www.adobe.com/jcr/granite/1.0",
            "xmlns:jcr": "http://www.jcp.org/jcr/1.0",
            "xmlns:nt": "http://www.jcp.org/jcr/nt/1.0",
            "xmlns:sling": "http://sling.apache.org/jcr/sling/1.0",
        });
    root.setResourceType(ResourceType.DIALOG);
    const content = new AemNode("content", {}, ResourceType.CONTAINER);
    const tabsWrapper = new AemNode("tabs", {}, ResourceType.TABS)
    tabsWrapper.items(tabs);
    content.items([tabsWrapper]);
    root.addChild(content);

    return root;
}
function createTextField(name: string): AemNode {
    return new AemNode(name, {}, ResourceType.TEXTFIELD);
}
function createTab(idx: number, title: string, fields: AemNode[]): AemNode {
    const tab = new AemNode(`tab${idx}`, { 'jcr:title': title, "margin": "{Boolean}true" }, ResourceType.CONTAINER);
    tab.items([
        createColumns([
            createColumn(
                fields
            )
        ])
    ]);

    return tab;
}
function createColumns(columns: AemNode[]): AemNode {
    const columnsWrapper = new AemNode('columns', { "margin": "{Boolean}true" }, ResourceType.FIXED_COLUMNS);
    columnsWrapper.items(columns);

    return columnsWrapper;
}
function createColumn(els: AemNode[]): AemNode {
    const column = new AemNode("column", {}, ResourceType.CONTAINER);
    column.items(els);

    return column;
}