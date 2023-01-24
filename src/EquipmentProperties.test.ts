import {
  getEquipmentPropertiesSchemaDefinition,
} from './EquipmentProperties.js';
import expectValidFixture from './lib/expectValidFixture.js';
import equipmentPropertiesFixture from './equipmentPropertiesFixture.js';

const definition = getEquipmentPropertiesSchemaDefinition();

describe('EquipmentProperties schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, equipmentPropertiesFixture);
  });
});
