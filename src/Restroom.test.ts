import { getRestroomSchemaDefinition } from './Restroom.js';
import expectValidFixture from './lib/expectValidFixture.js';
import restroomFixture from './restroomFixture.js';

const definition = getRestroomSchemaDefinition();

describe('Restroom schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, restroomFixture);
  });
});
