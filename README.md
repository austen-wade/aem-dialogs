# Create Coral dialogs for AEM with a Javascript API

Project is under active development, and future versions will introduce breaking changes.

## Current working example

```typescript
import { Multifield, Container, TextField, PathField, generate } from "aem-dialogs";

const multi = new Multifield("states", {
    fieldDescription: "Click '+' to add a new state.",
    composite: true,
}).child(
    new Container("field").items([
        new TextField("name", {
            fieldLabel: "Name",
            fieldDescription: "Enter a state name",
            emptyText: "Name",
            required: true,
        }),
        new PathField("flag", {
            fieldLabel: "Flag",
            fieldDescription: "Select the state flag image",
            forceSelection: true,
            rootPath: "/content/dam",
        }),
    ]),
);

generate("./tests/multi", multi);
```

## To do

-   Refactor based on best practices for Typescript (I am not a daily Typescript user)
-   Complete all Granite Coral based interfaces/class for convenience
    -   RichText in progress
    -   Only supports dialog with tabs right now (DialogTabs)
-   End goal is to have this somewhere inside of ui.frontend.
    -   Implementation structure will likely resemble the clientlib.config.js/aem-clientlib-generator.
