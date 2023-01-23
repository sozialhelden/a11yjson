import { getToiletSchemaDefinition } from './Toilet';
import expectValidFixture from './lib/expectValidFixture';
import toiletFixture from './toiletFixture';

const definition = getToiletSchemaDefinition();

describe('Toilet schema', () => {
  it('validates a completely defined toilet', () => {
    expectValidFixture(definition, toiletFixture);
  });
});
