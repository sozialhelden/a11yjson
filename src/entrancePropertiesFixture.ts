import { Complete } from './Complete.js';
import doorFixture from './doorFixture.js';
import { EntranceProperties } from './EntranceProperties.js';
import sillsFixture from './sillsFixture.js';
import stairsFixture from './stairsFixture.js';

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
  sills: sillsFixture,
  door: doorFixture,
  elevatorEquipmentId: 'idHere',
  intercomEquipmentId: 'idHere',
  needsAppointment: true,
  placeInfoId: '1234',
  sameAs: ['https://example.com/entrances/123'],
};
export default entrancePropertiesFixture;
