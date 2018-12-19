import { Entrance, EntranceSchema } from '../src/entrance';
import { doorMinimumFixture } from './door.test';
import { stairsMinimumFixture } from './stairs.test';

export const entranceMinimumFixture: Entrance = {};

const entranceWithOptionalsFixture: Entrance = {
  name: 'string',
  isMainEntrance: true,
  isLevel: true,
  slopeAngle: 5,
  hasRemovableRamp: true,
  stairs: stairsMinimumFixture,
  door: doorMinimumFixture,
  elevatorEquipmentId: 'idHere',
  intercomEquipmentId: 'idHere'
};

const allValidFixtures = Object.freeze([entranceMinimumFixture, entranceWithOptionalsFixture]);

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
