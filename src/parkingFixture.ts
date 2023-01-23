import { Parking } from './Parking';
import { Complete } from './Complete';

const parkingFixture: Complete<Parking> = {
  count: 14,
  forWheelchairUsers: {
    location: { en: '2nd floor' },
    count: 2,
    isLocatedInside: true,
    width: '>350cm',
    length: '>500cm',
    maxVehicleHeight: '>500cm',
    hasDedicatedSignage: true,
    neededParkingPermits: [{ en: 'Blue Badge' }],
  },
  interactions: {
    exitVehicle: {
      action: {
        necessaryClimbHeight: '3cm', // there is a step
      },
    },
  },
};
export default parkingFixture;
