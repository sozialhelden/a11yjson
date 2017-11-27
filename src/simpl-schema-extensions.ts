import SimpleSchema from 'simpl-schema';

// allow custom fields
SimpleSchema.extendOptions(['accessibility']);

/**
 * Context for the question function, to read additional fields or generate questions dynamically
 */
export interface QuestionFunctionSelf<T> {
  value: T;
  key: string;
  genericKey: string;
  definition: SchemaDefinition;
  field: (fieldName: string) => any;
  siblingField: (fieldName: string) => any;
  userName: string;
}

/**
 * Describes additional data that can be stored within a SimpleSchema for accessibility data
 */
export interface AccessibilitySchemaExtension {
  /**
   * Description for this accessibility field
   */
  description?: string;
  /**
   * uri to a wiki or explanation page for this field
   */
  extendedInformationUrl?: string;
  /**
   * End user question to be asked
   */
  existsQuestion?:
    | string
    | Array<string>
    | ((this: QuestionFunctionSelf<any>) => string);
  /**
   * End user question to be asked
   */
  question?:
    | string
    | Array<string>
    | ((this: QuestionFunctionSelf<any>) => string);
  /**
   * Should this field be presented to users?
   */
  machineData?: boolean;
  /**
   * Can this fields sub-fields be chosen for individual inspection?
   */
  inseparable?: boolean;
  /**
   * The preferred unit this field is usually documented in (e.g. seconds, meter, centimeter)
   */
  preferredUnit: string;
}
