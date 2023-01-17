import { Seat, getSeatSchemaDefinition } from './Seat';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import paymentFixture from './Payment.test';
import intercomFixture from './Intercom.test';
import equipmentPropertiesFixture from './EquipmentProperties.test';
import interactionModeFixture from './InteractionMode.test';

const seatFixture: Complete<Seat> = {
  name: { en: 'Front seats in a cinema' },
  description: { en: 'The front row features seats are wheelchair accessible, and reserved for people with hearing disabilities.' },
  isFrontRow: true,
  isWheelchairAccessible: true,
  isFoldable: true,
  isMobile: false,
  isFixed: true,
  isCenterColumn: false,
  isLastRow: false,
  rows: [1, 2, 3],
  columns: [2, 3, 4],
  fixedHeight: { value: 40, unit: 'cm' },
  minimalHeight: { value: 40, unit: 'cm' },
  maximalHeight: { value: 40, unit: 'cm' },
  turningSpaceInFront: { value: 145, unit: 'cm' },
  controlledBySwitch: equipmentPropertiesFixture,
  controlledBySwitchId: 'SWITCH-12345',
  payment: paymentFixture,
  intercom: intercomFixture,
  interactions: [interactionModeFixture],
  reservedForPersonsWith: {
    hearingImpairment: true,
  },
};

export default seatFixture;

const definition = getSeatSchemaDefinition();

describe('Seat schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, seatFixture);
  });
});
