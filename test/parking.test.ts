import { Parking, ParkingSchema } from '../src/parking';

export const parkingMinimumFixture: Parking = {};

const parkingWithNullFixture: Parking = {
  forWheelchairUsers: null
};

const parkingWithOptionalsFixture: Parking = {
  forWheelchairUsers: {
    location: '2nd floor',
    count: 2,
    isLocatedInside: true,
    width: '>350cm',
    length: '>500cm',
    maxVehicleHeight: '>500cm',
    hasDedicatedSignage: true,
    paymentBySpace: true,
    paymentByZone: true,
    neededParkingPermits: ['Blue Badge']
  }
};

const allValidFixtures = Object.freeze([
  parkingMinimumFixture,
  parkingWithNullFixture,
  parkingWithOptionalsFixture
]);

const invalidParkingFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidParkingFixture]);

describe('ParkingSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = ParkingSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = ParkingSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
