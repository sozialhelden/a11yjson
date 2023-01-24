import { getEntrancePropertiesSchemaDefinition } from './EntranceProperties.js';
import expectValidFixture from './lib/expectValidFixture.js';
import entrancePropertiesFixture from './entrancePropertiesFixture.js';

const definition = getEntrancePropertiesSchemaDefinition();

describe('EntranceProperties schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, entrancePropertiesFixture);
  });
});
