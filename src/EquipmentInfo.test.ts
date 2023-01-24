import { getEquipmentInfoSchemaDefinition } from './EquipmentInfo.js';
import expectValidFixture from './lib/expectValidFixture.js';
import equipmentInfoFixture from './equipmentInfoFixture.js';

const definition = getEquipmentInfoSchemaDefinition();

describe('EquipmentInfo schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, equipmentInfoFixture);
  });
});
