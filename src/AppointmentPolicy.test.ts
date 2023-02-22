import { getAppointmentPolicySchemaDefinition } from './AppointmentPolicy.js';
import appointmentPolicyFixture from './appointmentPolicyFixture.js';
import expectValidFixture from './lib/expectValidFixture.js';

const definition = getAppointmentPolicySchemaDefinition();

describe('AppointmentPolicy schema', () => {
  it('evaluates an empty object as valid', () => {
    expectValidFixture(definition, {});
  });

  it('evaluates a complex animalPolicy as valid', () => {
    expectValidFixture(definition, appointmentPolicyFixture);
  });
});
