import { Entrance, EntranceSchema } from '../src/entrance';

export const entranceMinimumFixture: Entrance = {};

const entranceWithOptionalsFixture: Entrance = {
  name: 'string',
  ratingForWheelchair: 0.6,
  isMainEntrance: true,
  isLevel: true,
  hasSlope: true,
  slopeAngle: 5,
  hasRemovableRamp: true,
  stairs: {},
  door: {},
  liftEquipmentId: 'idHere',
  intercomEquipmentId: 'idHere'
};

const allValidFixtures = Object.freeze([
  entranceMinimumFixture,
  entranceWithOptionalsFixture
]);

const invalidEntranceFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidEntranceFixture]);

describe('EntranceSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = EntranceSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = EntranceSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
