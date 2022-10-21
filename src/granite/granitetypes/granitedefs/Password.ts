import { FormField } from "./Field";

export const resourceType = " /libs/granite/ui/components/coral/foundation/form/password";
   // :supertype?: /libs/granite/ui/components/coral/foundation/form/field
   }
      export interface FormPassword extends FormField {
      
      name?: string;
      
      emptyText?: string;
      
      disabled?: boolean;
      
      required?: boolean;
      
      autocomplete?: string; // ='off'
      
      autofocus?: boolean;
      
      retype?: string;
      
      validation?: string; multiple
}