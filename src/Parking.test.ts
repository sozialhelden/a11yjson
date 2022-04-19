import { Parking, getParkingSchemaDefinition } from './Parking';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

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
};

export default parkingFixture;

const definition = getParkingSchemaDefinition();

describe('Parking schema', () => {
  it('tests a comprehensive fixture as valid', () => {
    expectValidFixture(definition, parkingFixture);
  });
});
