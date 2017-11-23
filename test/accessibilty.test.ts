import { Accessibility, AccessibilitySchema } from '../src/accessibility';

export const accessibilityMinimumFixture: Accessibility = {};

const accessibilityWithOptionalsFixture: Accessibility = {
  accessibleWith: {},
  partiallyAccessibleWith: {},
  offersActivitiesForPeopleWith: {},
  areas: [],
  staff: {},
  parking: {}
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
