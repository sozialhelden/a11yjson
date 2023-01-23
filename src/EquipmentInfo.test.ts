import { getEquipmentInfoSchemaDefinition } from './EquipmentInfo';
import expectValidFixture from './lib/expectValidFixture';
import equipmentInfoFixture from './equipmentInfoFixture';

const definition = getEquipmentInfoSchemaDefinition();

describe('EquipmentInfo schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, equipmentInfoFixture);
  });
});
