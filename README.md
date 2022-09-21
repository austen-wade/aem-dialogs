# Create dialogs with Javascript

Project is under active development, and is not usable.

## Current working example

```typescript
import { AemNode } from './AemNode';
import {
	createCheckboxField,
	createTab,
	createTabsDialog,
	createTextField,
} from './creates';
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
		createCheckboxField({ name: 'checkbox', text: 'click this checkbox' }),
	]),
	sharedSEOTab,
]);

generate('./tests/button', buttonDialog);

const titleDialog = createTabsDialog('Title', [
	createTab(0, 'Properties', [createTextField({ name: 'titleText' })]),
	sharedSEOTab,
]);

generate('./tests/title', titleDialog);
```

## To do

-   Refactor based on best practices for Typescript (I am not a daily Typescript user)
-   Complete all Granite based interfaces/class for convenience
-   Improve API (example, createTab() should not take an index as a parameter)
-   End goal is to have this somewhere inside of ui.frontend. Implementation structure will likely resemble the clientlib.config.js/aem-clientlib-generator.
