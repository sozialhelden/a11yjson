/* eslint-disable import/no-relative-packages */
import { SimpleSchema } from '../../node_modules/simpl-schema/dist/esm/SimpleSchema.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function expectValidFixture(definition: Record<string, any>, value: any) {
  // console.log('Definition has', Object.keys(definition).length, 'keys');
  const schema = new SimpleSchema(definition, { humanizeAutoLabels: false });
  const context = schema.newContext();
  context.validate(schema.clean(value, { getAutoValues: true, filter: false }));
  if (!context.isValid()) {
    console.log('Invalid fixture:', value);
  }
  expect(context.validationErrors()).toHaveLength(0);
  expect(context.isValid()).toBeTruthy();
}
