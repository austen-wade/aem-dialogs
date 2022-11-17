import { readFileSync } from "fs";
import {
    Checkbox,
    Container,
    DatePicker,
    FileUpload,
    FixedColumns,
    FormField,
    Multifield,
    NumberField,
    PathField,
    RadioGroup,
    Select,
    SelectItem,
    Textarea,
    TextField,
} from "../src";
import { generate } from "../src/generate";
import { RichText } from "../src/granite/RichText";

const update = process.argv[2] === "-U";

const checkbox = new Checkbox("Checkbox", {
    name: "testCheckBox",
    text: "test text",
    required: true,
    checked: true,
    value: "test value",
    uncheckedValue: "test unchecked value",
});

const container = new Container("Container", {
    margin: false,
    maximized: false,
    "granite:class": "granite:class",
});

const datePicker = new DatePicker("DatePicker", {
    displayedFormat: "displayedFormat",
    disabled: true,
    fieldLabel: "field label",
    fieldDescription: "field description",
    type: "time",
    typeHint: "type Hint",
    valueFormat: "YYYY-MM-DD[T]HH:mm?:ss.SSSZ",
});

const field = new FormField("FormField", {
    name: "testname",
    fieldLabel: "field label",
    fieldDescription: "field description",
    renderHidden: false,
    wrapperClass: "wrapper class",
    tooltipPosition: "left",
    "granite:class": "granite class",
});

const fileUpload = new FileUpload("FileUpload", {});

const fixedColumns = new FixedColumns("FixedColumns", {
    margin: true,
    maximized: false,
});

const multifield = new Multifield("Multifield", {
    composite: false,
    deleteHint: true,
});

const numberField = new NumberField("NumberField", {
    value: "value",
    disabled: false,
    step: 2,
});

const pathField = new PathField("PathField", {
    rootPath: "rootPath",
    emptyText: "empty &quot;text&quot;",
});

const radioGroup = new RadioGroup("RadioGroup", {
    name: "radioGroupName",
});

const richText = new RichText("RichText");

const select = new Select("Select");

const selectOption = new SelectItem("SelectItem", {
    text: "text",
    value: "value",
});

const textArea = new Textarea("TextArea", {
    value: "value",
    resize: "both",
});

const textField = new TextField("TextField", {
    emptyText: "<<>>&&''\"\"",
    required: false,
});

const nodeObjects = [
    checkbox,
    container,
    datePicker,
    field,
    fileUpload,
    fixedColumns,
    multifield,
    numberField,
    pathField,
    radioGroup,
    richText,
    select,
    selectOption,
    textArea,
    textField,
];

describe("generation module", () => {
    for (const nodeObject of nodeObjects) {
        test(`generating ${nodeObject.tag} works`, () => {
            if (update) {
                generate(`./test/snapshot/${nodeObject.tag}`, nodeObject);
            } else {
                generate(`./test/temp/${nodeObject.tag}`, nodeObject);
                const snapshot = readFileSync(`./test/snapshot/${nodeObject.tag}/.content.xml`);
                const temp = readFileSync(`./test/temp/${nodeObject.tag}/.content.xml`);
                expect(temp).toStrictEqual(snapshot);
            }
        });
    }
});
