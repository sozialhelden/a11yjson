import SimpleSchema from '@sozialhelden/simpl-schema';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function expectValidFixture(
  definition: Record<string, any>,
  value: any,
  clean: boolean = true,
) {
  // console.log('Definition has', Object.keys(definition).length, 'keys');
  // console.log(Object.keys(definition).join('\n'));
  const schema = new SimpleSchema(definition, { humanizeAutoLabels: false });
  const context = schema.newContext();
  if (clean) {
    schema.clean(value, { getAutoValues: true, filter: false, mutate: true });
  }
  context.validate(value);
  if (!context.isValid()) {
    console.log('Invalid fixture:', value);

    console.log('Schema:', schema);
  }
  expect(context.validationErrors()).toHaveLength(0);
  expect(context.isValid()).toBeTruthy();
}
