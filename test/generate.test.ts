import { readFileSync } from "fs";
import { Multifield, Container, TextField, PathField } from "../src";
import { generate } from "../src/generate";

describe("generation module", () => {
    test("generating xml works", () => {
        const multi = new Multifield("Multifield", {
            name: "states",
            fieldDescription: "Click '+' to add a new state.",
            composite: true,
        }).child(
            new Container("Container").items([
                new TextField("TextField", {
                    name: "name",
                    fieldLabel: "Name",
                    fieldDescription: "Enter a state name",
                    emptyText: "Name",
                    required: true,
                }),
                new PathField("PathField", {
                    name: "flag",
                    fieldLabel: "Flag",
                    fieldDescription: "Select the state flag image",
                    forceSelection: true,
                    rootPath: "/content/dam",
                }),
            ]),
        );
        generate("./test/temp/multi", multi);
        const snapshot = readFileSync("./test/snapshot/multi/.content.xml");
        const temp = readFileSync("./test/temp/multi/.content.xml");
        console.log(snapshot);
        console.log(temp);
        expect(temp).toStrictEqual(snapshot);
    });
});
