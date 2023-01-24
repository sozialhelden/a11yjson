import { getStairsSchemaDefinition } from './Stairs.js';
import expectValidFixture from './lib/expectValidFixture.js';
import stairsFixture from './stairsFixture.js';

const definition = getStairsSchemaDefinition();

describe('Stairs schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, stairsFixture);
  });
});
