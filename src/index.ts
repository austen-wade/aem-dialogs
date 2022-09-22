import { Container } from "./fields/Container";
import { Multifield } from "./fields/Multifield";
import { PathField } from "./fields/PathField";
import { Select } from "./fields/Select";
import { SelectOption } from "./fields/SelectOption";
import { TextField } from "./fields/TextField";
import { generate } from "./generate";


// generate("./tests/pathfield", new PathField({
//     name: 'contentPath',
//     rootPath: '/content/dam',
//     nodeTypes: ['dam:Asset', 'nt:file']
// }));

// const sharedSEOTab: AemNode = createTab(1, "SEO", [
//     createTextField({ name: "seoText" }),
// ]);

// const buttonDialog = createTabsDialog("Button", [
//     createTab(0, "Properties", [
//         createTextField({
//             name: "buttonText",
//             fieldLabel: "Button Text",
//             fieldDescription: "This is the button",
//             required: true,
//             emptyText: "Enter button text here.",
//         }),
//         new Checkbox({
//             name: "checkbox",
//             text: "click this checkbox",
//             required: false,
//         }),
//     ]),
//     sharedSEOTab,
// ]);

// const checkbox = new Checkbox({
//     name: "checkbox",
//     text: "click this checkbox",
//     checked: false,
// });

// generate("./tests/checkbox-new", checkbox);

// generate("./tests/button-new", buttonDialog);

// const titleDialog = createTabsDialog("Title", [
//     createTab(0, "Properties", [createTextField({ name: "titleText" })]),
//     sharedSEOTab,
// ]);

// generate("./tests/title-new", titleDialog);

/* NEED TO ADD OPTIONAL FIELD TO EXPLICITLY DECLARE NAME ATTRIBUTE */
/* Make all booleans into custom type to allow either boolean that we convert or string ("{Boolean}true")? */

const select = new Select({ name: 'myselect' });
select.items([
    new SelectOption({ name: 'option1', "text": "Orange", "value": "--orange" }),
    new SelectOption({ name: 'option2', "text": "Red", "value": "--red" }),
    new SelectOption({ name: 'option3', "text": "Green", "value": "--green" }),
]);
generate("./tests/select", select);

const multi = new Multifield({ name: 'states', fieldDescription: "Click '+' to add a new state.", composite: true, });
const field = new Container({ name: "field", "granite:class": 'cmp-teaser__editor-action' });
field.items([
    new TextField({
        name: "name",
        fieldLabel: "Name",
        fieldDescription: "Enter a state name",
        emptyText: "Name",
        required: true,
    }),
    new PathField({
        name: 'flag',
        fieldLabel: "Flag",
        fieldDescription: "Select the state flag image",
        forceSelection: true,
        rootPath: "/content/dam",
    })
]);
multi.addChild(field);
generate('./tests/multi', multi);


