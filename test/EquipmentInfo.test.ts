import { EquipmentInfo, EquipmentInfoSchema } from '../src/EquipmentInfo';
import { validPointGeometryFixture } from './Geometry.test';
import { equipmentPropertiesMinimumFixture } from './EquipmentProperties.test';

const equipmentInfoMinimumFixture: EquipmentInfo = {
  properties: equipmentPropertiesMinimumFixture,
  geometry: validPointGeometryFixture
};

const equipmentInfoWithOptionalsFixture: EquipmentInfo = {
  formatVersion: '1',
  properties: equipmentPropertiesMinimumFixture,
  geometry: validPointGeometryFixture
};

const allValidFixtures = Object.freeze([
  equipmentInfoMinimumFixture,
  equipmentInfoWithOptionalsFixture
]);

const invalidEquipmentInfoFixture = {
  bar: []
};

const allInvalidFixtures = Object.freeze([{}, invalidEquipmentInfoFixture]);

describe('EquipmentInfoSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = EquipmentInfoSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = EquipmentInfoSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
