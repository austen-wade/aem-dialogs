# Create dialogs with Javascript

Project is under active development, and is not usable.

## Current working example

```typescript
const multi = new Multifield({ name: "states", fieldDescription: "Click '+' to add a new state.", composite: true }).child(
    new Container({ name: "field" }).items([
        new TextField({
            name: "name",
            fieldLabel: "Name",
            fieldDescription: "Enter a state name",
            emptyText: "Name",
            required: true,
        }),
        new PathField({
            name: "flag",
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
-   Complete all Granite based interfaces/class for convenience
-   Improve API (example, createTab() should not take an index as a parameter)
-   End goal is to have this somewhere inside of ui.frontend. Implementation structure will likely resemble the clientlib.config.js/aem-clientlib-generator.
