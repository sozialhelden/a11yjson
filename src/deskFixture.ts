import { Desk } from './Desk';
import { Complete } from './Complete';
import paymentFixture from './paymentFixture';
import intercomFixture from './intercomFixture';
import interactionModeFixture from './interactionModeFixture';
import queueSystemFixture from './queueSystemFixture';

const deskFixture: Complete<Desk> = {
  name: { en: 'string' },
  isRollUnder: true,
  fixedHeight: { value: 90, unit: 'cm' },
  minimalHeight: { value: 70, unit: 'cm' },
  maximalHeight: { value: 120, unit: 'cm' },
  fixedHeightBelow: { value: 87, unit: 'cm' },
  widthBelow: { value: 120, unit: 'cm' },
  depthBelow: { value: 120, unit: 'cm' },
  turningSpaceInFront: { value: 120, unit: 'cm' },
  queueSystem: queueSystemFixture,
  payment: paymentFixture,
  intercom: intercomFixture,
  interactions: {
    changeHeight: interactionModeFixture,
    savePreset: interactionModeFixture,
    enqueue: interactionModeFixture,
    checkIn: interactionModeFixture,
    checkOut: interactionModeFixture,
    ringBell: interactionModeFixture,
    pay: interactionModeFixture,
    handoverLuggage: interactionModeFixture,
    handover: interactionModeFixture,
    getReturn: interactionModeFixture,
    getFood: interactionModeFixture,
    getShoppingBag: interactionModeFixture,
    scan: interactionModeFixture,
    selfCheckout: interactionModeFixture,
    open: interactionModeFixture,
    close: interactionModeFixture,
    unlock: interactionModeFixture,
    lock: interactionModeFixture,
    unlockAndLock: interactionModeFixture,
    openAndClose: interactionModeFixture,
  },
};
export default deskFixture;
