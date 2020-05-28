import { Staff, StaffSchema } from '../src/Staff';

export const staffMinimumFixture: Staff = {};

export const staffWithOptionalsFixture: Staff = {
  canSeeVisitorsFromInside: true,
  hasFreeAssistantForVisitors: true,
  hasAccessibilityAssistantForEnquiries: true,
  educationalCredentialsAwarded: ['https://www.belab.co.nz/be-welcome']
};

const allValidFixtures = Object.freeze([staffMinimumFixture, staffWithOptionalsFixture]);

const invalidStaffFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidStaffFixture]);

describe('StaffSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = StaffSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = StaffSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
