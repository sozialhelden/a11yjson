import { Tables, TablesSchema } from '../src/Tables';

export const tablesMinimumFixture: Tables = {
  spaceBelowHeight: '>67cm',
  spaceBelowWidth: '>30cm',
  spaceBelowDepth: '>30cm'
};

const tablesWithOptionalsFixture: Tables = {
  height: '60 .. 80cm',
  spaceBelowHeight: '>67cm',
  spaceBelowWidth: '>30cm',
  spaceBelowDepth: '>30cm'
};

const allValidFixtures = Object.freeze([tablesMinimumFixture, tablesWithOptionalsFixture]);

const invalidTablesFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([invalidTablesFixture]);

describe('TablesSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = TablesSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = TablesSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
