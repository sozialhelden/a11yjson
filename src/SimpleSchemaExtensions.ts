import SimpleSchema from 'simpl-schema';

import sample from 'lodash/sample';
import { FormatVersion } from './Version';

// allow custom fields
SimpleSchema.extendOptions(['accessibility']);

/**
 * Context for the question function, to read additional fields or generate questions dynamically
 */
export class QuestionFunctionContext<T> {
  value?: T;
  path?: string;
  schema?: SimpleSchema;
  userName?: string;
  field?: (fieldName: string) => any;
}

export function makeQuestionContext<T>(
  path: string,
  value: T,
  schema: SimpleSchema
): QuestionFunctionContext<T> {
  return new QuestionFunctionContext<T>();
}

/**
 * A function that gets evaluated in a questionnaire context
 */
export type QuestionFunction<T> = ((context: QuestionFunctionContext<T>) => string);

/**
 * Definition for a question, can be either a String, an Array of Strings (value will be picked at random),
 * or a function that will be evaluated
 */
export type QuestionValue<T> = string | string[] | QuestionFunction<T>;

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
  question?: QuestionValue<T>;
  /**
   * End user question to be asked when more array entries should be added
   */
  questionMore?: QuestionValue<T>;
  /**
   * End user question to be asked when starting a new accessibility block (toilet, entrance, beds...)
   */
  questionBlockBegin?: QuestionValue<T>;
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

export interface EvaluatedAccessibilitySchemaExtension<T> extends AccessibilitySchemaExtension<T> {
  /**
   * End user question to be asked
   */
  question?: string;
  /**
   * End user question to be asked when more array entries should be added
   */
  questionMore?: string;
  /**
   * End user question to be asked when starting a new accessibility block (toilet, entrance, beds...)
   */
  questionBlockBegin?: string;
}

export function evaluateQuestionValue<T>(
  question: QuestionValue<T>,
  context: QuestionFunctionContext<T>
): string | undefined {
  if (typeof question === 'string') {
    return question;
  }
  if (Array.isArray(question)) {
    return sample(question);
  }
  if (typeof question === 'function') {
    return question(context);
  }

  return undefined;
}

export function evaluateAccessibilitySchemaExtension<T>(
  extension: AccessibilitySchemaExtension<T>,
  context: QuestionFunctionContext<T>
): EvaluatedAccessibilitySchemaExtension<T> {
  let { question, questionMore, questionBlockBegin, ...remaining } = extension;

  if (question) {
    question = evaluateQuestionValue<T>(question, context);
  }
  if (questionMore) {
    questionMore = evaluateQuestionValue<T>(questionMore, context);
  }
  if (questionBlockBegin) {
    questionBlockBegin = evaluateQuestionValue<T>(questionBlockBegin, context);
  }

  return Object.assign(
    {
      question,
      questionMore,
      questionBlockBegin
    },
    remaining
  );
}

/**
 * Internal helper for creating schemata with attached schemaType
 */
export function createSchemaInstance(
  type: string,
  definition: { [key: string]: SchemaDefinition | SchemaType },
  baseSchema: SimpleSchema | null = null,
  schemaOptions: {
    humanizeAutoLabels?: boolean;
    tracker?: any;
    check?: any;
  } = {}
) {
  const extendedSchema = new SimpleSchema(definition, schemaOptions);
  if (baseSchema) {
    extendedSchema.extend(baseSchema);
  }
  (extendedSchema as any).__schemaType = type;
  (extendedSchema as any).__schemaVersion = FormatVersion;
  return extendedSchema;
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
    type: Object,
    blackbox: true
  },
  // FIXME disabled value validation until SimpleSchema.oneOf bug is fixed
  // https://github.com/aldeed/simple-schema-js/issues/112
  // 'options.$.value': {
  //   type: SimpleSchema.oneOf(
  //     String,
  //     {
  //       type: Object,
  //       blackbox: true
  //     },
  //     Number,
  //   ),
  // },
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
