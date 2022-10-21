import {
    Dialog,
    DialogFooterItemParentconfig,
    Accordion,
    AccordionItem,
    AccordionItemParentconfig,
    List,
} from "./granite";

export * from "./granite";
export * from "./base/AemNode";
export * from "./generate";
export * from "./icons";
export * from "./types";
export * from "./utils";

const graniteDialog = new Dialog("dialog", {
    "jcr:title": "Properties",
});

const parentConfig = new DialogFooterItemParentconfig("parentConfig");

const acc = new Accordion("accordion");
acc.items([
    new AccordionItem("acc1", { "jcr:title": "Accordion1" }),
    new AccordionItem("acc2", {
        "jcr:title": "Accordion2",
    }).child(new AccordionItemParentconfig("parentConfig", { active: true })),
]);

const list = new List("list");

graniteDialog.child([acc, parentConfig]);

console.log("dialog", graniteDialog.xml());
