import SimpleSchema from '@sozialhelden/simpl-schema';
import { omit } from 'lodash-es';

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
  clean: boolean = true,
) {
  const schema = new SimpleSchema(definition);
  const context = schema.newContext();
  if (clean) {
    schema.clean(value, { filter: false, mutate: true });
  }
  context.validate(value);
  expect(context.validationErrors()).not.toEqual([]);
  expect(context.isValid()).toBeFalsy();
  if (expectedValidationErrors.length > 0) {
    expect(
      context.validationErrors().map((e: any) => omit(e, 'value', 'dataType', 'regExp')),
    ).toEqual(expectedValidationErrors);
  }
}
