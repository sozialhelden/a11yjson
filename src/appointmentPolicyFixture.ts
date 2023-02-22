import { AppointmentPolicy } from './AppointmentPolicy.js';
import { Complete } from './Complete.js';
import equipmentPropertiesFixture from './equipmentPropertiesFixture.js';
import interactionModeFixture from './interactionModeFixture.js';
import seatFixture from './seatFixture.js';

const appointmentPolicyFixture: Complete<AppointmentPolicy> = {
  access: ['customers', 'public'],
  openingHours: 'week 1-53/2 Fr 09:00-12:00; week 2-52/2 We 09:00-12:00',
  allowsWalkIn: true,
  phoneCall: true,
  videoCall: true,
  inPersonOnSite: true,
  needsAppointmentForAssistant: false,
  homeVisit: true,
  languages: ['en', 'de', 'sgn-ase'],
  bookingURL: 'https://example.com/appointments',
  fees: [
    {
      currency: 'EUR',
      amount: 10,
    },
  ],
  paymentTypes: [
    {
      acceptsCreditCards: true,
      acceptsDebitCards: true,
      acceptsCoins: true,
    },
  ],
  description: {
    en: 'Haircuts for everyone',
  },
  limitationsDescription: {
    en: 'Washing hair needs an extra appointment',
  },
  seatCount: 1,
  seat: seatFixture,
  equipmentProperties: equipmentPropertiesFixture,
  interactions: {
    getTreatment: interactionModeFixture,
  },
};
export default appointmentPolicyFixture;
