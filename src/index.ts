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

const select = new Select("select").items([
    new SelectOption("option1", { text: "Orange", value: "--orange" }),
    new SelectOption("option2", { text: "Red", value: "--red" }),
    new SelectOption("option3", { text: "Green", value: "--green" }),
]);
generate("./tests/select", select);

const radioGroup = new RadioGroup("radiogroup").items([
    new RadioGroupItem("radio1", { name: "radio1", text: "Radio 1", value: "radio-1" }),
    new RadioGroupItem("radio2", { name: "radio2", text: "Radio 2", value: "radio-2" }),
    new RadioGroupItem("radio3", { name: "radio3", text: "Radio 3", value: "radio-3" }),
]);
generate("./tests/radiogroup", radioGroup);

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
        new PathField("flagPath", {
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
        new Container("content").items([
            new DialogTabs("tabs").items([new Tab("tab1").items([multi, select]), new Tab("tab2").items([radioGroup])]),
        ]),
    ),
);

generate("../tests/textfield", new TextField("text", { name: "buttonLabel" }));
