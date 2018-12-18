import { Accessibility, AccessibilitySchema } from '../src/accessibility';
import { personalProfileMinimumFixture } from './personal-profile.test';
import { restroomMinimumFixture } from './restroom.test';
import { entranceMinimumFixture } from './entrance.test';
import { wheelchairPlacesMinimumFixture } from './wheelchair-places.test';
import { mediaMinimumFixture } from './media.test';
import { staffMinimumFixture } from './staff.test';
import { paymentMinimumFixture } from './payment.test';
import { tablesMinimumFixture } from './tables.test';
import { pathwaysMinimumFixture } from './pathways.test';
import { parkingMinimumFixture } from './parking.test';
import { groundMinimumFixture } from './ground.test';

export const accessibilityMinimumFixture: Accessibility = {};

const accessibilityWithNullsFixture: Accessibility = {
  entrances: null,
  restrooms: null,
  staff: null,
  wheelchairPlaces: null,
  media: null,
  payment: null,
  tables: null,
  pathways: null,
  parking: null,
  ground: null
};

const accessibilityWithOptionalsFixture: Accessibility = {
  accessibleWith: personalProfileMinimumFixture,
  partiallyAccessibleWith: personalProfileMinimumFixture,
  offersActivitiesForPeopleWith: personalProfileMinimumFixture,
  staff: staffMinimumFixture,
  wheelchairPlaces: wheelchairPlacesMinimumFixture,
  media: [mediaMinimumFixture],
  payment: paymentMinimumFixture,
  entrances: [entranceMinimumFixture, entranceMinimumFixture],
  restrooms: [restroomMinimumFixture, restroomMinimumFixture],
  tables: tablesMinimumFixture,
  ratingSpacious: 1,
  isWellLit: true,
  isQuiet: true,
  ambientNoiseLevel: '80dB',
  smokingPolicy: 'prohibited',
  hasTactileGuideStrips: true,
  serviceContact: 'string',
  pathways: pathwaysMinimumFixture,
  parking: parkingMinimumFixture,
  ground: groundMinimumFixture,
  // TODO
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
  seats: {},
  services: {},
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
