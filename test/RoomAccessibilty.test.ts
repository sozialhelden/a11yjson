import { RoomAccessibility, RoomAccessibilitySchema } from '../src/RoomAccessibility';
import { personalProfileMinimumFixture } from './PersonalProfile.test';
import { mediaMinimumFixture } from './Media.test';
import { tablesMinimumFixture } from './Tables.test';
import { groundMinimumFixture } from './Ground.test';
import { doorWithOptionalsFixture } from './Door.test';

export const roomAccessibilityMinimumFixture: RoomAccessibility = {};

const roomAccessibilityWithNullsFixture: RoomAccessibility = {
  media: null,
  tables: null,
  ground: null,
  hasDedicatedAccessibilitySignage: null
};

export const roomAccessibilityWithOptionalsFixture: RoomAccessibility = {
  accessibleWith: personalProfileMinimumFixture,
  partiallyAccessibleWith: personalProfileMinimumFixture,
  media: [mediaMinimumFixture],
  tables: tablesMinimumFixture,
  isWellLit: true,
  isQuiet: true,
  hasInductionLoop: false,
  smokingPolicy: 'prohibited',
  hasTactileGuideStrips: true,
  ground: groundMinimumFixture,
  hasDedicatedAccessibilitySignage: true,
  doors: doorWithOptionalsFixture
};

const allValidFixtures = Object.freeze([
  roomAccessibilityMinimumFixture,
  roomAccessibilityWithNullsFixture,
  roomAccessibilityWithOptionalsFixture
]);

const invalidRoomAccessibilityFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidRoomAccessibilityFixture]);

describe('RoomAccessibilitySchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = RoomAccessibilitySchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = RoomAccessibilitySchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
