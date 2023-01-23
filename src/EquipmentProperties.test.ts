import {
  getEquipmentPropertiesSchemaDefinition,
} from './EquipmentProperties';
import expectValidFixture from './lib/expectValidFixture';
import equipmentPropertiesFixture from './equipmentPropertiesFixture';

const definition = getEquipmentPropertiesSchemaDefinition();

describe('EquipmentProperties schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, equipmentPropertiesFixture);
  });
});
