import { createTab, createTabsDialog, createTextField } from "./creates";
import { generate } from "./generate";

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

generate('./output.xml', root);