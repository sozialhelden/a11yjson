import { Accessibility, AccessibilitySchema } from '../src/Accessibility';
import { personalProfileMinimumFixture } from './PersonalProfile.test';
import { restroomMinimumFixture } from './Restroom.test';
import { entranceMinimumFixture } from './Entrance.test';
import { wheelchairPlacesMinimumFixture } from './WheelchairPlaces.test';
import { mediaMinimumFixture } from './Media.test';
import { staffMinimumFixture } from './Staff.test';
import { paymentMinimumFixture } from './Payment.test';
import { tablesMinimumFixture } from './Tables.test';
import { pathwaysMinimumFixture } from './Pathways.test';
import { parkingMinimumFixture } from './Parking.test';
import { groundMinimumFixture } from './Ground.test';
import { groundIsLevelFixture } from './Ground.test';

export const accessibilityMinimumFixture: Accessibility = {};

const accessibilityWithNullsFixture: Accessibility = {
  entrances: null,
  restrooms: null,
  staff: null,
  media: null,
  payment: null,
  tables: null,
  pathways: null,
  parking: null,
  ground: null,
  pickUpOrDropOffZone: null,
  hasDedicatedAccessibilitySignage: null
};

const accessibilityChangesForNewZealandFixture: Accessibility = {
  pickUpOrDropOffZone: groundIsLevelFixture,
  hasDedicatedAccessibilitySignage: false,
  hasWheelchairAccessiblePathFromOutside: true
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
  isWellLit: true,
  isQuiet: true,
  hasInductionLoop: false,
  // ambientNoiseLevel: '80decibels',
  smokingPolicy: 'prohibited',
  hasTactileGuideStrips: true,
  serviceContact: 'string',
  pathways: pathwaysMinimumFixture,
  parking: parkingMinimumFixture,
  ground: groundMinimumFixture,
  // TODO
  sitemap: {},
  // switches: [{}, {}],
  // vendingMachines: [{}, {}],
  // powerOutlets: [{}, {}],
  // beds: [{}, {}],
  wardrobe: {},
  changingRoom: {},
  stage: {},
  cashRegister: {},
  seats: {},
  services: {},
  infoDesk: {},
  signage: {},
  providesMobilityEquipment: true
};

const allValidFixtures = Object.freeze([
  accessibilityMinimumFixture,
  accessibilityWithNullsFixture,
  accessibilityWithOptionalsFixture,
  accessibilityChangesForNewZealandFixture
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
