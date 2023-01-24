import { EntranceProperties } from './EntranceProperties.js';
import doorFixture from './doorFixture.js';
import stairsFixture from './stairsFixture.js';
import { Complete } from './Complete.js';

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
};
export default entrancePropertiesFixture;
