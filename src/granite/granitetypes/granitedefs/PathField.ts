const resourceType = " /libs/granite/ui/components/coral/foundation/form/pathfield";
   // :supertype?: /libs/granite/ui/components/coral/foundation/form/field
   }
      export interface FormTextField extends FormField {
      
      name?: string;
      
      emptyText?: string;
      
      disabled?: boolean;
      
      required?: boolean;
      
      validation?: string; multiple
      
      multiple?: boolean;
      
      forceSelection?: boolean;
      
      deleteHint?: boolean; // =true
      
      suggestionSrc?: string;
      
      pickerSrc?: string;
      
      rootPath: string; // ='/'
      
      filter: string; // < 'folder', 'hierarchy', 'hierarchyNotFile', 'nosystem'
}