import { Accessibility, AccessibilitySchema } from '../src/accessibility';
import { personalProfileMinimumFixture } from './personal-profile.test';
import { restroomMinimumFixture } from './restroom.test';
import { entranceMinimumFixture } from './entrance.test';
import { wheelchairPlacesMinimumFixture } from './wheelchair-places.test';
import { mediaFormatMinimumFixture } from './media.test';
import { staffMinimumFixture } from './staff.test';
import { paymentMinimumFixture } from './payment.test';

export const accessibilityMinimumFixture: Accessibility = {};

const accessibilityWithNullsFixture: Accessibility = {
  entrances: null,
  restrooms: null,
  staff: null,
  wheelchairPlaces: null,
  media: null,
  payment: null
};

const accessibilityWithOptionalsFixture: Accessibility = {
  accessibleWith: personalProfileMinimumFixture,
  partiallyAccessibleWith: personalProfileMinimumFixture,
  offersActivitiesForPeopleWith: personalProfileMinimumFixture,
  staff: staffMinimumFixture,
  wheelchairPlaces: wheelchairPlacesMinimumFixture,
  media: [mediaFormatMinimumFixture],
  payment: paymentMinimumFixture,
  entrances: [entranceMinimumFixture, entranceMinimumFixture],
  restrooms: [restroomMinimumFixture, restroomMinimumFixture],
  ratingSpacious: 1,
  isWellLit: true,
  isQuiet: true,
  isSmoking: true,
  isNonSmoking: true,
  serviceContact: 'string',
  // todo
  parking: {},
  ground: {},
  pathways: {},
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
  tables: {},
  seats: {},
  services: {},
  tactileGuideStrips: {},
  infoDesk: {},
  signage: {}
};

const allValidFixtures = Object.freeze([
  accessibilityMinimumFixture,
  accessibilityWithNullsFixture,
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
