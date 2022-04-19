import { EquipmentInfo, getEquipmentInfoSchemaDefinition } from './EquipmentInfo';
import pointGeometryFixture from './Geometry.test';
import equipmentPropertiesFixture from './EquipmentProperties.test';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const equipmentInfoFixture: Complete<EquipmentInfo> = {
  properties: equipmentPropertiesFixture,
  geometry: pointGeometryFixture,
};

export default equipmentInfoFixture;

const definition = getEquipmentInfoSchemaDefinition();

describe('EquipmentInfo schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, equipmentInfoFixture);
  });
});
