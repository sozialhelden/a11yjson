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

export type QuestionFunction<T> = ((this: QuestionFunctionSelf<T>) => string);

/**
 * Describes additional data that can be stored within a SimpleSchema for accessibility data
 */
export interface AccessibilitySchemaExtension<T> {
  /**
   * Example value for this accessibility field
   */
  example?: string;
  /**
   * Description for this accessibility field
   */
  description?: string;
  /**
   * uri to a wiki or explanation page for this field
   */
  extendedInformationUrl?: string;
  /**
   * List of explicit choices with translated label
   */
  options?: Array<{
    value: T;
    label: string;
  }>;
  /**
   * End user question to be asked
   */
  question?: string | QuestionFunction<T>;
  /**
   * End user question to be asked when more array entries should be added
   */
  questionMore?: string | QuestionFunction<T>;
  /**
   * End user question to be asked when starting a new accessibility block (toilet, entrance, beds...)
   */
  questionBlockBegin?: string | QuestionFunction<T>;
  /**
   * Should this field be presented to users?
   */
  machineData?: boolean;
  /**
   * Which component should be used for this field
   */
  componentHint?: string;
  /**
   * Can this fields sub-fields be chosen for individual inspection?
   */
  inseparable?: boolean;
  /**
   * The preferred unit this field is usually documented in (e.g. seconds, meter, centimeter)
   */
  preferredUnit?: string;
  /**
   * This field is deprecated, should not be used anymore
   */
  deprecated?: boolean;
}

/**
 * A schema for validating the AccessibilitySchemaExtension. Used for internal tests.
 */
export const AccessibilitySchemaExtensionSchema = new SimpleSchema({
  example: {
    type: String,
    optional: true
  },
  description: {
    type: String,
    optional: true
  },
  extendedInformationUrl: {
    type: String,
    optional: true
  },
  options: {
    type: Array,
    optional: true
  },
  'options.$': {
    type: Object
  },
  'options.$.value': {
    type: SimpleSchema.oneOf(
      String,
      {
        type: Object,
        blackbox: true
      },
      Number
    )
  },
  'options.$.label': {
    type: String
  },
  question: {
    type: String,
    optional: true
  },
  questionMore: {
    type: String,
    optional: true
  },
  questionBlockBegin: {
    type: String,
    optional: true
  },
  machineData: {
    type: Boolean,
    optional: true
  },
  componentHint: {
    type: String,
    optional: true
  },
  inseparable: {
    type: Boolean,
    optional: true
  },
  preferredUnit: {
    type: String,
    optional: true
  },
  deprecated: {
    type: Boolean,
    optional: true
  }
});
