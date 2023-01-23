import { Seat } from './Seat';
import { Complete } from './Complete';
import paymentFixture from './paymentFixture';
import intercomFixture from './intercomFixture';

const seatFixture: Complete<Seat> = {
  name: { en: 'Front seats in a cinema' },
  description: { en: 'The front row features seats are wheelchair accessible, and reserved for people with hearing disabilities.' },
  isFrontRow: true,
  isWheelchairAccessible: true,
  isFoldable: true,
  isMobile: false,
  isFixed: true,
  hasHeadRest: true,
  hasSeatbelt: true,
  seatbeltPoints: 3,
  adjustmentAxes: ['axial', 'sagittal'],
  adjustmentDirections: ['up', 'down'],
  isCenterColumn: false,
  isLastRow: false,
  rows: [1, 2, 3],
  columns: [2, 3, 4],
  fixedHeight: { value: 40, unit: 'cm' },
  minimalHeight: { value: 40, unit: 'cm' },
  maximalHeight: { value: 40, unit: 'cm' },
  turningSpaceInFront: { value: 145, unit: 'cm' },
  payment: paymentFixture,
  intercom: intercomFixture,
  interactions: {
    sit: {
      action: {
        bodyMass: { max: 150, unit: 'kg' },
      },
    },
    fold: {},
    unfold: {},
    move: {
      action: {
        weight: { value: 5, unit: 'kg' },
      },
    },
    adjust: {},
    adjustHeight: {},
    adjustSeatingSurface: {},
    adjustSeatingAngle: {},
    adjustArmRests: {},
    adjustHeadRest: {},
    adjustLegRest: {},
    adjustBackRest: {},
    adjustFootRest: {},
    adjustSeatBelt: {},
    adjustSeatBeltLength: {},
    adjustSeatBeltHeight: {},
    adjustSeatBeltAngle: {},
    adjustSeatBeltPosition: {},
    adjustSeatBeltTension: {},
    adjustSeatBeltLock: {},
    connectSeatbelt: {},
  },
  reservedForPersonsWith: {
    hearingImpairment: true,
  },
};
export default seatFixture;
