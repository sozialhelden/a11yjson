import { EmergencyDevice, EmergencyDeviceSchema } from '../src/EmergencyDevice';

export const emergencyDeviceEvacChairFixture: EmergencyDevice = {
  type: 'evacChair',
  isAvailable: true
};

export const emergencyDeviceFireAlarmFixture: EmergencyDevice = {
  type: 'visualFireAlarm',
  isAvailable: true
};

export const emergencyDeviceGenericAlarmFixture: EmergencyDevice = {
  type: 'alarm',
  isAudio: true,
  isAvailable: true
};

const allValidFixtures = Object.freeze([
  emergencyDeviceEvacChairFixture,
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
