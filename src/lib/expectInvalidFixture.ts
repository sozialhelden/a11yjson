import omit from 'lodash.omit';
import { SimpleSchema } from '../../node_modules/simpl-schema/dist/esm/SimpleSchema.js';

export default function expectInvalidFixture(
  definition: Record<string, any>,
  value: any,
  expectedValidationErrors: {
    name: string;
    type: string;
    max?: number;
    min?: number;
    allowedValues?: string[];
  }[],
) {
  const schema = new SimpleSchema(definition);
  const context = schema.newContext();
  const valueAfterCleaning = schema.clean(value, { filter: false });
  context.validate(valueAfterCleaning);
  expect(context.validationErrors()).not.toEqual([]);
  expect(context.isValid()).toBeFalsy();
  if (expectedValidationErrors.length > 0) {
    expect(
      context.validationErrors().map((e: any) => omit(e, 'value', 'dataType', 'regExp')),
    ).toEqual(expectedValidationErrors);
  }
}
