import { Level, LevelSchema } from '../src/Level';

export const levelMinimumFixture: Level = {};

export const levelWithOptionalsFixture: Level = {
  index: 2,
  name: 'Second Level'
};

const allValidFixtures = Object.freeze([levelMinimumFixture, levelWithOptionalsFixture]);

const invalidDoorFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidDoorFixture]);

describe('LevelSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = LevelSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = LevelSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
