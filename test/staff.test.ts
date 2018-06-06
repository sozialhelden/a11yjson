import { Staff, StaffSchema } from '../src/staff';

export const staffMinimumFixture: Staff = {};

const staffWithOptionalsFixture: Staff = {
  canSeeVisitorsFromInside: true,
  canAssistWithSpecialNeeds: true,
  isTrainedInSigning: true,
  hasFreeAssistantForVisitors: true,
  isTrainedInAccomodatingVisitorsWithDisabilities: true
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
