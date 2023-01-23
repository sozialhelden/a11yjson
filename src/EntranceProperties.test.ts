import { getEntrancePropertiesSchemaDefinition } from './EntranceProperties';
import expectValidFixture from './lib/expectValidFixture';
import entrancePropertiesFixture from './entrancePropertiesFixture';

const definition = getEntrancePropertiesSchemaDefinition();

describe('EntranceProperties schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, entrancePropertiesFixture);
  });
});
