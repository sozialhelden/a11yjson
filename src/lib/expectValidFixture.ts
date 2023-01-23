// import * as FasterSchema from 'faster-schema/dist/FasterSchema';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function expectValidFixture(definition: Record<string, any>, value: any) {
  console.log('Definition has', Object.keys(definition).length, 'keys');
  const schema = new FasterSchema(definition, { humanizeAutoLabels: false });
  const context = schema.newContext();
  context.validate(schema.clean(value, { getAutoValues: true, filter: false }));
  if (!context.isValid()) {
    console.log('Invalid fixture:', value);
  }
  expect(context.validationErrors()).toHaveLength(0);
  expect(context.isValid()).toBeTruthy();
}
