import { getTechCombinationSchemaDefinition } from './TechCombination.js';
import expectValidFixture from './lib/expectValidFixture.js';
import techCombinationFixture from './techCombinationFixture.js';

const definition = getTechCombinationSchemaDefinition();

describe('TechCombination schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, techCombinationFixture);
  });
});
