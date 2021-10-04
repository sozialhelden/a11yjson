import { Toilet, ToiletSchema } from '../src/Toilet';
import { FormatVersion } from '../src/Version';

export const toiletMinimumFixture: Toilet = {};

const toiletWithOptionalsFixture: Toilet = {
  heightOfBase: '40 .. 45cm',
  spaceOnUsersLeftSide: '>70',
  spaceOnUsersRightSide: '>70',
  spaceInFront: '>70',
  grabBars: {
    onUsersLeftSide: true,
    onUsersRightSide: true,
    topHeightFromFloor: '>85cm',
    distanceBetweenBars: '60 .. 65cm'
  }
};

const allValidFixtures = Object.freeze([toiletMinimumFixture, toiletWithOptionalsFixture]);

const invalidToiletFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidToiletFixture]);

describe('ToiletSchema Schema', () => {
  it('schema is tagged', () => {
    expect(ToiletSchema.__schemaType).toBe('Toilet');
    expect(ToiletSchema.__schemaVersion).toBe(FormatVersion);
  });
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = ToiletSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = ToiletSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
