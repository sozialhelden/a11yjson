import { Accessibility, AccessibilitySchema } from '../src/accessibility';
import { personalProfileMinimumFixture } from './personal-profile.test';
import { restroomMinimumFixture } from './restroom.test';
import { entranceMinimumFixture } from './entrance.test';

export const accessibilityMinimumFixture: Accessibility = {};

const accessibilityWithOptionalsFixture: Accessibility = {
  accessibleWith: personalProfileMinimumFixture,
  partiallyAccessibleWith: personalProfileMinimumFixture,
  offersActivitiesForPeopleWith: personalProfileMinimumFixture,
  staff: {},
  parking: {},
  ratingSpacious: 1,
  isWellLit: true,
  isQuiet: true,
  isSmoking: true,
  isNonSmoking: true,
  ground: {},
  pathways: {},
  entrances: [entranceMinimumFixture, entranceMinimumFixture],
  restrooms: [restroomMinimumFixture, restroomMinimumFixture],
  sitemap: {},
  lifts: [{}, {}],
  switches: [{}, {}],
  vendingMachines: [{}, {}],
  powerOutlets: [{}, {}],
  beds: [{}, {}],
  wardrobe: {},
  changingRoom: {},
  stage: {},
  cashRegister: {},
  wheelchairPlaces: {},
  tables: {},
  seats: {},
  serviceContact: 'string',
  services: {},
  tactileGuideStrips: {},
  infoDesk: {},
  signage: {},
  media: [{}, {}]
};

const allValidFixtures = Object.freeze([
  accessibilityMinimumFixture,
  accessibilityWithOptionalsFixture
]);

const invalidAccessibilityFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidAccessibilityFixture]);

describe('AccessibilitySchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = AccessibilitySchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = AccessibilitySchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
