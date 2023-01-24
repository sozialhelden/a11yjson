import { getShowerSchemaDefinition } from './Shower.js';
import expectValidFixture from './lib/expectValidFixture.js';
import showerFixture from './showerFixture.js';

const definition = getShowerSchemaDefinition();

describe('Shower schema', () => {
  it('validates a completely specified shower', () => {
    expectValidFixture(definition, showerFixture);
  });
});
