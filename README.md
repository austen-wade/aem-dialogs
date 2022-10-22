# Create Coral dialogs for AEM with a Javascript API

Project is under active development, and future versions will introduce breaking changes.

## Current working example

```typescript
import {
    DialogRoot, generate, TextField, PathField, Select, SelectItem, Checkbox, Container,
} from "aem-dialogs";

const colors = [
    { text: 'Company Blue', value: 'blue' },
    { text: 'Company Red', value: 'red' },
    { text: 'Company Orange', value: 'orange' },
];

const root = new DialogRoot({ "jcr:title": "Button" }).child(new Container('content').items([
    new TextField('buttonLabel', {
        fieldLabel: 'Button Label',
        fieldDescription: "Will display on the button.",
        name: "./label",
        value: "{String}Button Label",
        required: true,
    }),
    new PathField('buttonLink', {
        fieldLabel: "Button Link",
        nodeTypes: "cq:Page",
        name: "./link",
        required: true,
        rootPath: '/content/mysite',
    }),
    new Checkbox('buttonNewTab', {
        text: "Open in new tab",
        uncheckedValue: false,
        value: true,
        name: "./showDescription",
        fieldDescription: "When checked, the button link will open in a new tab.",
    }),
    new Select('buttonColor', {
        fieldLabel: "Button Color",
        fieldDescription: "Determines which color palette to use for the button.",
        name: "./color",
    }).items(
        colors.map((color, idx) => new SelectItem(color.value, {
            selected: idx === 0,
            value: color.value,
            text: color.text
        })),
    )
]));

generate('./dialogs/button', root);
```

## To do
-   End goal is to have this easily droppable inside of ui.frontend.
    -   Implementation structure will likely resemble the clientlib.config.js/aem-clientlib-generator.

## Important Methods

`parent.child(child: GraniteNode)`:
Attaches a `child` GraniteNode to a parent GraniteNode.

`parent.items(children: GraniteNode[])`: Creates an `<items />` node and attaches it to an GraniteNode. Contents populated by `children`.

`generate(dirPath: string, xml: GraniteNode)`: Creates a .content.xml at `dirPath` with the `.xml()` output of the given GraniteNode.

## Support:

-   AemNode / GraniteNode / GraniteContainer\<T\>: These classes can be used for anything that is not explicitly supported.
-   RichText (basics like adding chars and formats).
- We aim to support all of the [Granite Server Side Components](https://developer.adobe.com/experience-manager/reference-materials/6-5/granite-ui/api/jcr_root/libs/granite/ui/components/coral/foundation/server.html) (Coral only) library, with a focus on the [Form](https://developer.adobe.com/experience-manager/reference-materials/6-5/granite-ui/api/jcr_root/libs/granite/ui/components/coral/foundation/form/index.html) elements that are frequently used in Adobe Experience Manager dialogs.