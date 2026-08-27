import { getSillsSchemaDefinition } from './Sills.js';
import expectValidFixture from './lib/expectValidFixture.js';
import sillsFixture from './sillsFixture.js';

const definition = getSillsSchemaDefinition();

describe('Sills schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, sillsFixture);
  });
});
