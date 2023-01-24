import expectValidFixture from './lib/expectValidFixture.js';
import { getSignageSchemaDefinition } from './Signage.js';
import signageFixture from './signageFixture.js';

const definition = getSignageSchemaDefinition();

describe('Signage schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, signageFixture);
  });
});
