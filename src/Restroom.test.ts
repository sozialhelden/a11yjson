import { getRestroomSchemaDefinition } from './Restroom';
import expectValidFixture from './lib/expectValidFixture';
import restroomFixture from './restroomFixture';

const definition = getRestroomSchemaDefinition();

describe('Restroom schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, restroomFixture);
  });
});
