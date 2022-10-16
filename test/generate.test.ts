import { readFileSync } from "fs";
import {
    Multifield,
    Container,
    TextField,
    PathField,
    Checkbox,
    DatePicker,
    Field,
    FileUpload,
    FixedColumns,
    JcrRoot,
    NumberField,
    PathBrowser,
    RadioGroup,
    RichText,
    Select,
    SelectOption,
    Tab,
    Textarea,
} from "../src";
import { generate } from "../src/generate";

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
    type: "type",
    typeHint: "type Hint",
});

const field = new Field("Field", {
    name: "testname",
    fieldLabel: "field label",
    fieldDescription: "field description",
    renderHidden: false,
    wrapperClass: "wrapper class",
    tooltipPosition: "left",
    "granite:class": "granite class",
});

const fileUpload = new FileUpload("FileUpload", {
    class: "class",
});

const fixedColumns = new FixedColumns("Fixed Columns", {
    margin: true,
    maximized: false,
});

const jcrRoot = new JcrRoot();

const multifield = new Multifield("Multifield", {
    composite: false,
    deleteHint: true,
});

const numberField = new NumberField("NumberField", {
    value: "value",
    disabled: false,
    step: 2,
});

const pathBrowser = new PathBrowser("PathBrowser", {
    rootPath: "rootPath",
    required: true,
});

const pathField = new PathField("PathField", {
    rootPath: "rootPath",
    emptyText: "empty text",
});

const radioGroup = new RadioGroup("RadioGroup", {
    name: "radioGroupName",
});

const richText = new RichText("RichText");

const select = new Select("Select");

const selectOption = new SelectOption("SelectOption", {
    text: "text",
    value: "value",
});

const tab = new Tab("Tab");

const textArea = new Textarea("TextArea", {
    value: "value",
});

const textField = new TextField("TextField", {
    emptyText: "empty text",
    required: false,
});

const nodeObjects = [
    checkbox,
    container,
    datePicker,
    field,
    fileUpload,
    fixedColumns,
    jcrRoot,
    multifield,
    numberField,
    pathBrowser,
    pathField,
    radioGroup,
    richText,
    select,
    selectOption,
    tab,
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
