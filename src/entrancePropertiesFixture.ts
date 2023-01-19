import { EntranceProperties } from './EntranceProperties';
import doorFixture from "./doorFixture";
import stairsFixture from "./stairsFixture";
import { Complete } from './Complete';

export const entrancePropertiesFixture: Complete<EntranceProperties> = {
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
