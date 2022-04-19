import { omit } from 'lodash';
import SimpleSchema from 'simpl-schema';

export default function expectInvalidFixture(definition: Record<string, any>, value: any, expectedValidationErrors: { name: string, type: string, max?: number, min?: number, allowedValues?: string[] }[]) {
  const schema = new SimpleSchema(definition);
  const context = schema.newContext();
  context.validate(schema.clean(value, { filter: false }));
  expect(context.validationErrors()).not.toHaveLength(0);
  expect(context.isValid()).toBeFalsy();
  if (expectedValidationErrors.length > 0) {
    expect(context.validationErrors().map((e: any) => omit(e, 'value', 'dataType', 'regExp'))).toEqual(expectedValidationErrors);
  }
}
