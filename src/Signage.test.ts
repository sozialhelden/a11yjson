import expectValidFixture from './lib/expectValidFixture';
import { getSignageSchemaDefinition } from './Signage';
import { signageFixture } from './signageFixture';

const definition = getSignageSchemaDefinition();

describe('Signage schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, signageFixture);
  });
});
