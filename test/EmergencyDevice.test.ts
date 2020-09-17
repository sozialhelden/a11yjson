import { EmergencyDevice, EmergencyDeviceSchema } from '../src/EmergencyDevice';

export const emergencyDeviceEscapeChairFixture: EmergencyDevice = {
  type: 'escapeChair'
};

export const emergencyDeviceFireAlarmFixture: EmergencyDevice = {
  type: 'visualFireAlarm'
};

export const emergencyDeviceGenericAlarmFixture: EmergencyDevice = {
  type: 'alarm',
  isAudio: true
};

const allValidFixtures = Object.freeze([
  emergencyDeviceEscapeChairFixture,
  emergencyDeviceGenericAlarmFixture,
  emergencyDeviceFireAlarmFixture
]);

const invalidEmergencyDeviceFixture = {
  bar: []
};

const invalidTypeEmergencyDeviceFixture = {
  type: 'sausage'
};

const allInvalidFixtures = Object.freeze([
  {},
  invalidEmergencyDeviceFixture,
  invalidTypeEmergencyDeviceFixture
]);

describe('EmergencyDeviceSchema Schema', () => {
  it('tests field as invalid', () => {
    allInvalidFixtures.forEach(value => {
      const context = EmergencyDeviceSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).not.toHaveLength(0);
      expect(context.isValid()).toBeFalsy();
    });
  });
  it('tests field as valid', () => {
    allValidFixtures.forEach(value => {
      const context = EmergencyDeviceSchema.newContext();
      context.validate(value);
      expect(context.validationErrors()).toHaveLength(0);
      expect(context.isValid()).toBeTruthy();
    });
  });
});
