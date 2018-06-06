import { PersonalProfile, PersonalProfileSchema } from '../src/personal-profile';

export const personalProfileMinimumFixture: PersonalProfile = {};

const personalProfileWithOptionalsFixture: PersonalProfile = {
  muteness: true,
  guideDog: true,
  hearingImpairment: true,
  learningImpairment: true,
  limitedSight: true,
  physicalImpairment: true,
  visualImpairment: true,
  blindness: true,
  wheelchair: true
};

const allValidFixtures = Object.freeze([
  personalProfileMinimumFixture,
  personalProfileWithOptionalsFixture
]);

const invalidPersonalProfileFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidPersonalProfileFixture]);

describe('PersonalProfileSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = PersonalProfileSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = PersonalProfileSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
