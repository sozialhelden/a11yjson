import { getShowerSchemaDefinition } from './Shower';
import expectValidFixture from './lib/expectValidFixture';
import showerFixture from './showerFixture';

const definition = getShowerSchemaDefinition();

describe('Shower schema', () => {
  it('validates a completely specified shower', () => {
    expectValidFixture(definition, showerFixture);
  });
});
