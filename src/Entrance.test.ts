import { getEntranceSchemaDefinition } from './Entrance.js';
import expectValidFixture from './lib/expectValidFixture.js';
import entranceFixture from './entranceFixture.js';

const definition = getEntranceSchemaDefinition();

describe('Entrance schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, entranceFixture);
  });
});
