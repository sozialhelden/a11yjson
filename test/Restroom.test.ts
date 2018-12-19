import { Restroom, RestroomSchema } from '../src/Restroom';
import { entranceMinimumFixture } from './Entrance.test';
import { FormatVersion } from '../src/Version';
import { toiletMinimumFixture } from './Toilet.test';
import { showerMinimumFixture } from './Shower.test';

export const restroomMinimumFixture: Restroom = {};

const restroomWithOptionalsFixture: Restroom = {
  isAccessibleWithWheelchair: true,
  signIcons: ['female', 'personInWheelchair'],
  mirror: {
    isLocatedInsideRestroom: false,
    isAccessibleWhileSeated: true,
    heightFromGround: '100cm'
  },
  turningSpaceInside: '>150cm',
  hasSupportRails: true,
  toilet: toiletMinimumFixture,
  hasBathTub: true,
  hasShower: true,
  entrance: entranceMinimumFixture,
  shower: showerMinimumFixture,
  heightOfSoap: '100 .. 120cm',
  heightOfDrier: '100 .. 120cm',
  washBasin: {
    isLocatedInsideRestroom: false,
    height: '>80cm',
    spaceBelow: {
      height: '> 67cm',
      depth: '30cm'
    }
  }
};

const allValidFixtures = Object.freeze([restroomMinimumFixture, restroomWithOptionalsFixture]);

const invalidRestroomFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidRestroomFixture]);

describe('RestroomSchema Schema', () => {
  it('schema is tagged', () => {
    expect(RestroomSchema.__schemaType).toBe('Restroom');
    expect(RestroomSchema.__schemaVersion).toBe(FormatVersion);
  });
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = RestroomSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = RestroomSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
