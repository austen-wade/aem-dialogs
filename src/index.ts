import { Container } from "./fields/Container";
import { JcrRoot } from "./fields/JcrRoot";
import { Multifield } from "./fields/Multifield";
import { PathField } from "./fields/PathField";
import { RadioGroup, RadioGroupItem } from "./fields/RadioGroup";
import { Select } from "./fields/Select";
import { SelectOption } from "./fields/SelectOption";
import { DialogTabs, Tab } from "./fields/Tabs";
import { TextField } from "./fields/TextField";
import { generate } from "./generate";

/* NEED TO ADD OPTIONAL FIELD TO EXPLICITLY DECLARE `name` ATTRIBUTE */

const select = new Select({ name: "myselect" }).items([
    new SelectOption({ name: "option1", text: "Orange", value: "--orange" }),
    new SelectOption({ name: "option2", text: "Red", value: "--red" }),
    new SelectOption({ name: "option3", text: "Green", value: "--green" }),
]);
generate("./tests/select", select);

const radioGroup = new RadioGroup({ name: "myradioGroup" }).items([
    new RadioGroupItem({ name: "radio1", text: "Radio 1", value: "radio-1" }),
    new RadioGroupItem({ name: "radio2", text: "Radio 2", value: "radio-2" }),
    new RadioGroupItem({ name: "radio3", text: "Radio 3", value: "radio-3" }),
]);
generate("./tests/radiogroup", radioGroup);

const multi = new Multifield({
    name: "states",
    fieldDescription: "Click '+' to add a new state.",
    composite: true,
}).child(
    new Container({ tag: "field" }).items([
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

generate(
    "./tests/dialog",
    new JcrRoot().child(
        new Container({ tag: "content" }).items([
            new DialogTabs({ tag: "tabs" }).items([
                new Tab({ tag: "tab1" }).items([multi, select]),
                new Tab({ tag: "tab2" }).items([radioGroup]),
            ]),
        ]),
    ),
);
