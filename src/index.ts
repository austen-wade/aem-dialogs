import { AemNode } from './AemNode';
import { createCheckboxField, createTab, createTabsDialog, createTextField } from './creates';
import { generate } from './generate';

const sharedSEOTab: AemNode = createTab(1, 'SEO', [
    createTextField({ name: 'seoText' }),
]);

const buttonDialog = createTabsDialog('Button', [
    createTab(0, 'Properties', [
        createTextField({
            name: 'buttonText',
            fieldLabel: 'Button Text',
            fieldDescription: 'This is the button',
            required: true,
            emptyText: 'Enter button text here.',
        }),
        createCheckboxField({ name: 'checkbox', text: "click this checkbox", value: 'on' }),
    ]),
    sharedSEOTab,
]);

generate('./tests/button', buttonDialog);

const titleDialog = createTabsDialog('Title', [
    createTab(0, 'Properties', [createTextField({ name: 'titleText' })]),
    sharedSEOTab,
]);

generate('./tests/title', titleDialog);
