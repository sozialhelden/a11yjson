import { getStairsSchemaDefinition } from './Stairs';
import expectValidFixture from './lib/expectValidFixture';
import stairsFixture from './stairsFixture';

const definition = getStairsSchemaDefinition();

describe('Stairs schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, stairsFixture);
  });
});
