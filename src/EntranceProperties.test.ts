import { EntranceProperties, getEntrancePropertiesSchemaDefinition } from './EntranceProperties';
import doorFixture from './Door.test';
import stairsFixture from './Stairs.test';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import interactionModeFixture from './InteractionMode.test';

const entrancePropertiesFixture: Complete<EntranceProperties> = {
  name: { en: 'string' },
  isMainEntrance: true,
  isLevel: true,
  slopeAngle: {
    value: 0.05,
  },
  hasFixedRamp: false,
  hasRemovableRamp: true,
  hasSignage: false,
  hasHoist: false,
  stairs: stairsFixture,
  door: doorFixture,
  elevatorEquipmentId: 'idHere',
  intercomEquipmentId: 'idHere',
  needsAppointment: true,
  placeInfoId: '1234',
  interactions: [interactionModeFixture],
};

export default entrancePropertiesFixture;

const definition = getEntrancePropertiesSchemaDefinition();

describe('EntranceProperties schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, entrancePropertiesFixture);
  });
});
