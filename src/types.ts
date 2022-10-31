import { prop } from "./utils";

export enum ResourceType {
    CQ_DIALOG = "cq/gui/components/authoring/dialog",
    TEXTFIELD = "granite/ui/components/coral/foundation/form/textfield",
    CONTAINER = "granite/ui/components/coral/foundation/container",
    FIELD = "granite/ui/components/coral/foundation/form/field",
    RICH_TEXT = "cq/gui/components/authoring/dialog/richtext",
    ACCORDION = "/libs/granite/ui/components/coral/foundation/accordion",
    ACTION_BAR = "/libs/granite/ui/components/coral/foundation/actionbar",
    ALERT = "/libs/granite/ui/components/coral/foundation/alert",
    ANCHOR_BUTTON = "/libs/granite/ui/components/coral/foundation/anchorbutton",
    BUTTON = "/libs/granite/ui/components/coral/foundation/button",
    COLUMN_VIEW = "/libs/granite/ui/components/coral/foundation/columnview",
    CONTSYS = "/libs/granite/ui/components/coral/foundation/contsys",
    CYCLE_BUTTON = "/libs/granite/ui/components/coral/foundation/cyclebutton",
    DIALOG = "/libs/granite/ui/components/coral/foundation/dialog",
    FIXED_COLUMNS = "/libs/granite/ui/components/coral/foundation/fixedcolumns",
    HEADING = "/libs/granite/ui/components/coral/foundation/heading",
    HYPERLINK = "/libs/granite/ui/components/coral/foundation/hyperlink",
    INCLUDE = "/libs/granite/ui/components/coral/foundation/include",
    INCLUDE_CLIENTLIBS = "/libs/granite/ui/components/coral/foundation/includeclientlibs",
    LIST = "/libs/granite/ui/components/coral/foundation/list",
    MASONRY = "/libs/granite/ui/components/coral/foundation/masonry",
    META = "/libs/granite/ui/components/coral/foundation/meta",
    PAGE = "/libs/granite/ui/components/coral/foundation/page",
    PANEL = "/libs/granite/ui/components/coral/foundation/panel",
    PICKER = "/libs/granite/ui/components/coral/foundation/picker",
    POPOVER = "/libs/granite/ui/components/coral/foundation/popover",
    PULLDOWN = "/libs/granite/ui/components/coral/foundation/pulldown",
    TABLE = "/libs/granite/ui/components/coral/foundation/table",
    TABS = "/libs/granite/ui/components/coral/foundation/tabs",
    TEXT = "/libs/granite/ui/components/coral/foundation/text",
    WELL = "/libs/granite/ui/components/coral/foundation/well",
    WIZARD = "/libs/granite/ui/components/coral/foundation/wizard",
    ADMIN_CONTENT_CHECKER = "/libs/granite/ui/components/coral/foundation/admin/contentchecker",
    AUTHORIZABLE_PREFERENCES_FORM = "/libs/granite/ui/components/coral/foundation/authorizable/preferencesform",
    COLLECTION_ACTION = "/libs/granite/ui/components/coral/foundation/collection/action",
    COLLECTION_ACTION_LINK = "/libs/granite/ui/components/coral/foundation/collection/actionlink",
    ACTION_FIELD = "/libs/granite/ui/components/coral/foundation/form/actionfield",
    FORM_COLOR_FIELD = "/libs/granite/ui/components/coral/foundation/form/colorfield",
    FORM_FIELD = "/libs/granite/ui/components/coral/foundation/form/field",
    FORM_FIELD_SET = "/libs/granite/ui/components/coral/foundation/form/fieldset",
    FORM_NESTED_CHECKBOX_LIST = "/libs/granite/ui/components/coral/foundation/form/nestedcheckboxlist",
    FORM_RESPONSES_OPEN_PROMPT = "/libs/granite/ui/components/coral/foundation/form/responses/openprompt",
    FORM_RESPONSES_REDIRECT = "/libs/granite/ui/components/coral/foundation/form/responses/redirect",
    FORM_RESPONSES_RELOAD = "/libs/granite/ui/components/coral/foundation/form/responses/reload",
    MODE_FORM = "/libs/granite/ui/components/coral/foundation/mode/form",
    MODE_SWITCHER = "/libs/granite/ui/components/coral/foundation/mode/switcher",
    PAGE_BODY = "/libs/granite/ui/components/coral/foundation/page/body",
    PAGE_FAV_ICON = "/libs/granite/ui/components/coral/foundation/page/favicon",
    PAGE_FRAGMENT = "/libs/granite/ui/components/coral/foundation/page/fragment",
    PANEL_RAIL_PANEL = "/libs/granite/ui/components/coral/foundation/panel/railpanel",
    RENDER_CONDITIONS_FEATURE = "/libs/granite/ui/components/coral/foundation/renderconditions/feature",
    RENDER_CONDITIONS_PRIVILEGE = "/libs/granite/ui/components/coral/foundation/renderconditions/privilege",
    RENDER_CONDITIONS_SIMPLE = "/libs/granite/ui/components/coral/foundation/renderconditions/simple",
    WIZARD_LAZY_CONTAINER = "/libs/granite/ui/components/coral/foundation/wizard/lazycontainer",
    WIZARD_LAZY_STEP = "/libs/granite/ui/components/coral/foundation/wizard/lazystep",
    AUTHORIZABLE_SELECT_DATASOURCE = "/libs/granite/ui/components/coral/foundation/authorizable/selectdatasource",
    VIEWPORT = "/libs/granite/ui/components/coral/foundation/admin/page/viewport",
    DATASOURCE = "/libs/granite/ui/components/coral/foundation/querybuilder/datasource",
    ADVANCED_SELECT = "/libs/granite/ui/components/coral/foundation/form/advancedselect",
    ADVANCED_SELECT_STATUS = "/libs/granite/ui/components/coral/foundation/form/advancedselect/status",
    BUTTON_GROUP = "/libs/granite/ui/components/coral/foundation/form/buttongroup",
    CHECKBOX = "/libs/granite/ui/components/coral/foundation/form/checkbox",
    DATE_PICKER = "/libs/granite/ui/components/coral/foundation/form/datepicker",
    FILE_UPLOAD = "/libs/granite/ui/components/coral/foundation/form/fileupload",
    HIDDEN = "/libs/granite/ui/components/coral/foundation/form/hidden",
    MULTIFIELD = "/libs/granite/ui/components/coral/foundation/form/multifield",
    NUMBER_FIELD = "/libs/granite/ui/components/coral/foundation/form/numberfield",
    PASSWORD = "/libs/granite/ui/components/coral/foundation/form/password",
    PATH_FIELD = "/libs/granite/ui/components/coral/foundation/form/pathfield",
    RADIO_GROUP = "/libs/granite/ui/components/coral/foundation/form/radiogroup",
    SELECT = "/libs/granite/ui/components/coral/foundation/form/select",
    SWITCH = "/libs/granite/ui/components/coral/foundation/form/switch",
    TEXTAREA = "/libs/granite/ui/components/coral/foundation/form/textarea",
}

export type Prop = {
    field: string;
    value: any;
};

export type Attributes = Record<string, string>;

export enum RenderConditions {
    AND = "/libs/granite/ui/components/coral/foundation/renderconditions/and",
    NOT = "/libs/granite/ui/components/foundation/renderconditions/not",
    OR = "/libs/granite/ui/components/coral/foundation/renderconditions/or",
}

export const Namespaces: Record<string, Prop> = {
    CQ: prop("xmlns:cq", "http://www.day.com/jcr/cq/1.0"),
    GRANITE: prop("xmlns:granite", "http://www.adobe.com/jcr/granite/1.0"),
    JCR: prop("xmlns:jcr", "http://www.jcp.org/jcr/1.0"),
    NT: prop("xmlns:nt", "http://www.jcp.org/jcr/nt/1.0"),
    SLING: prop("xmlns:sling", "http://sling.apache.org/jcr/sling/1.0"),
};

export const NS = Namespaces;
