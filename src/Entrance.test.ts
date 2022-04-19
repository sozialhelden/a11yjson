import { Entrance, getEntranceSchemaDefinition } from './Entrance';
import doorFixture from './Door.test';
import stairsFixture from './Stairs.test';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const entranceFixture: Complete<Entrance> = {
  name: { en: 'string' },
  isMainEntrance: true,
  isLevel: true,
  slopeAngle: {
    value: 0.05,
  },
  hasFixedRamp: false,
  hasRemovableRamp: true,
  hasSignage: false,
  stairs: stairsFixture,
  door: doorFixture,
  elevatorEquipmentId: 'idHere',
  intercomEquipmentId: 'idHere',
  needsAppointment: true,
};

export default entranceFixture;

const definition = getEntranceSchemaDefinition();

describe('EquipmentProperties schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, entranceFixture);
  });
});
