import SimpleSchema from 'simpl-schema';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function expectValidFixture(definition: Record<string, any>, value: any) {
  const schema = new SimpleSchema(definition);
  const context = schema.newContext();
  context.validate(schema.clean(value, { getAutoValues: true, filter: false }));
  expect(context.validationErrors()).toHaveLength(0);
  expect(context.isValid()).toBeTruthy();
}
