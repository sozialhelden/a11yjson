import { getToiletSchemaDefinition } from './Toilet.js';
import expectValidFixture from './lib/expectValidFixture.js';
import toiletFixture from './toiletFixture.js';

const definition = getToiletSchemaDefinition();

describe('Toilet schema', () => {
  it('validates a completely defined toilet', () => {
    expectValidFixture(definition, toiletFixture);
  });
});
