"use strict";

// src/utils.ts
function formatXml(xml) {
  let formatted = "";
  const reg = /(>)(<)(\/*)/g;
  xml = xml.replace(reg, "$1\r\n$2$3");
  let pad = 0;
  xml.split("\r\n").forEach(function(node) {
    let indent = 0;
    if (node.match(/.+<\/\w[^>]*>$/)) {
      indent = 0;
    } else if (node.match(/^<\/\w/)) {
      if (pad != 0) {
        pad -= 1;
      }
    } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
      indent = 1;
    } else {
      indent = 0;
    }
    let padding = "";
    for (let i = 0; i < pad; i++) {
      padding += "  ";
    }
    formatted += padding + node + "\r\n";
    pad += indent;
  });
  return formatted;
}
function getName(name) {
  if (name.startsWith("./")) {
    return name;
  }
  return `./${name}`;
}
function aembool(b) {
  if (b) {
    return "{Boolean}true";
  }
  return "{Boolean}false";
}

// src/AemNode.ts
var AemNode = class {
  constructor(tag, resourceType, props) {
    this.children = [];
    this.props = props || [];
    this.addProp("jcr:primaryType", "nt:unstructured");
    this.addProp("sling:resourceType", resourceType);
    this.tag = tag;
  }
  addChild(child) {
    this.children.push(child);
  }
  addProp(field2, value) {
    if (typeof value !== void 0) {
      if (typeof value === "boolean") {
        value = aembool(value);
      } else if (field2 === "name") {
        value = getName(value);
      } else if (Array.isArray(value)) {
        value = value.join(", ");
      }
      this.props.push({ field: field2, value });
    }
  }
  xml(isRoot) {
    let attributesString = "";
    for (const prop of this.props) {
      if (!prop.value) {
        continue;
      }
      attributesString += ` ${prop.field}="${prop.value}"`;
    }
    let output = `<${this.tag}${attributesString}`;
    if (isRoot) {
      output = `<?xml version="1.0" encoding="UTF-8"?>` + output;
    }
    if (this.children.length) {
      output += `>`;
      for (const child of this.children) {
        output += `${child.xml(false)}`;
      }
      output += `</${this.tag}>`;
    } else {
      output += `/>`;
    }
    return output;
  }
  items(children) {
    const items = new AemNode("items");
    this.addChild(items);
    children == null ? void 0 : children.forEach((c) => items.addChild(c));
    return items;
  }
};

// src/fields/Container.ts
var Container = class extends AemNode {
  constructor(options) {
    super(options.name, "granite/ui/components/coral/foundation/container" /* CONTAINER */);
    this.options = { name: "container" };
    for (const key in options) {
      this.addProp(key, options[key]);
    }
  }
};

// src/fields/Multifield.ts
var Multifield = class extends AemNode {
  constructor(options) {
    super(options.name, "granite/ui/components/coral/foundation/form/multifield" /* MULTIFIELD */);
    this.options = { name: "multifield" };
    for (const key in options) {
      this.addProp(key, options[key]);
    }
  }
};

// src/fields/PathField.ts
var PathField = class extends AemNode {
  constructor(options) {
    super(options.name, "granite/ui/components/coral/foundation/form/pathfield" /* PATH_FIELD */);
    this.options = { name: "pathfield", rootPath: "/content" };
    for (const key in options) {
      this.addProp(key, options[key]);
    }
  }
};

// src/fields/Select.ts
var Select = class extends AemNode {
  constructor(options) {
    super(options.name, "granite/ui/components/coral/foundation/form/select" /* SELECT */);
    this.options = { name: "select" };
    for (const key in options) {
      this.addProp(key, options[key]);
    }
  }
};

// src/fields/SelectOption.ts
var SelectOption = class extends AemNode {
  constructor(options) {
    super(options.name, "");
    this.options = {
      name: "item",
      text: "Item",
      value: "item"
    };
    for (const key in options) {
      this.addProp(key, options[key]);
    }
  }
};

// src/fields/TextField.ts
var TextField = class extends AemNode {
  constructor(options) {
    super(options.name, "granite/ui/components/coral/foundation/form/textfield" /* TEXTFIELD */);
    this.options = { name: "text" };
    for (const key in options) {
      this.addProp(key, options[key]);
    }
  }
};

// src/generate.ts
var import_fs = require("fs");
function generate(dirPath, xml) {
  let output = xml.xml(true);
  output = formatXml(output);
  if (!(0, import_fs.existsSync)(dirPath)) {
    (0, import_fs.mkdirSync)(dirPath, { recursive: true });
  }
  (0, import_fs.writeFileSync)(`${dirPath}/.content.xml`, output, {});
}

// src/index.ts
var select = new Select({ name: "myselect" });
select.items([
  new SelectOption({ name: "option1", "text": "Orange", "value": "--orange" }),
  new SelectOption({ name: "option2", "text": "Red", "value": "--red" }),
  new SelectOption({ name: "option3", "text": "Green", "value": "--green" })
]);
generate("./tests/select", select);
var multi = new Multifield({ name: "states", fieldDescription: "Click '+' to add a new state.", composite: true });
var field = new Container({ name: "field", "granite:class": "cmp-teaser__editor-action" });
field.items([
  new TextField({
    name: "name",
    fieldLabel: "Name",
    fieldDescription: "Enter a state name",
    emptyText: "Name",
    required: true
  }),
  new PathField({
    name: "flag",
    fieldLabel: "Flag",
    fieldDescription: "Select the state flag image",
    forceSelection: true,
    rootPath: "/content/dam"
  })
]);
multi.addChild(field);
generate("./tests/multi", multi);
//# sourceMappingURL=out.js.map
