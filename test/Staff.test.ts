import { Staff, StaffSchema } from '../src/Staff';

export const staffMinimumFixture: Staff = {};

const staffWithOptionalsFixture: Staff = {
  canSeeVisitorsFromInside: true,
  hasFreeAssistantForVisitors: true
};

const staffBeAccessibleNewZealandPropertiesFixture: Staff = {
  hasAccessibilityAssistantForEnquiries: true,
  hasAccessibilityAwarenessTraining: true
};

const allValidFixtures = Object.freeze([
  staffMinimumFixture,
  staffWithOptionalsFixture,
  staffBeAccessibleNewZealandPropertiesFixture
]);

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
