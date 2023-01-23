import { getTechCombinationSchemaDefinition } from './TechCombination';
import expectValidFixture from './lib/expectValidFixture';
import techCombinationFixture from './techCombinationFixture';

const definition = getTechCombinationSchemaDefinition();

describe('TechCombination schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, techCombinationFixture);
  });
});
