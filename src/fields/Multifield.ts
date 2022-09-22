import { AemNode } from '../AemNode';
import { ResourceType } from '../types';
import { FieldOptions } from './Field';

export interface MultifieldOptions extends FieldOptions {
    name: string,
    composite?: boolean,
    deleteHint?: boolean,
    typeHint?: string,
    required?: boolean,
    validation?: string,
}
export class Multifield extends AemNode {
    options: MultifieldOptions = { name: 'multifield' };

    constructor(options: MultifieldOptions) {
        super(options.name, ResourceType.MULTIFIELD);

        for (const key in options) {
            this.addProp(key, options[key as keyof MultifieldOptions]);
        }
    }
}