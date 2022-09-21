import { AemNode } from "./AemNode";
import { ResourceType } from "./types";

export function createTabsDialog(title: string, tabs: AemNode[]): AemNode {
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
export function createTextField(name: string): AemNode {
    return new AemNode(name, {}, ResourceType.TEXTFIELD);
}
export function createTab(idx: number, title: string, fields: AemNode[]): AemNode {
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
export function createColumns(columns: AemNode[]): AemNode {
    const columnsWrapper = new AemNode('columns', { "margin": "{Boolean}true" }, ResourceType.FIXED_COLUMNS);
    columnsWrapper.items(columns);

    return columnsWrapper;
}
export function createColumn(els: AemNode[]): AemNode {
    const column = new AemNode("column", {}, ResourceType.CONTAINER);
    column.items(els);

    return column;
}