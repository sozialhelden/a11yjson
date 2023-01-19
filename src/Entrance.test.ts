import { getEntranceSchemaDefinition } from './Entrance';
import expectValidFixture from './lib/expectValidFixture';
import { entranceFixture } from './entranceFixture';

const definition = getEntranceSchemaDefinition();

describe('Entrance schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, entranceFixture);
  });
});
