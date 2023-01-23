import { Door } from './Door';
import { Complete } from './Complete';
import intercomFixture from './intercomFixture';
import grabBarsFixture from './grabBarsFixture';
import interactionModeFixture from './interactionModeFixture';

const doorFixture: Complete<Door> = {
  turningSpaceInFront: '<120cm',
  width: '>250cm',
  thresholdHeight: '2cm',
  doorbellTopButtonHeight: '<100cm',
  doorOpensToOutside: true,
  hasClearMarkingOnGlassDoor: true,
  hasErgonomicDoorHandle: true,
  hasIntercom: false,
  hasProximitySensor: true,
  hasSwitch: true,
  hasVisuallyContrastedFrame: false,
  isAutomatic: true,
  isAutomaticOrAlwaysOpen: true,
  isEasyToHoldOpen: true,
  isGlassDoor: true,
  isRevolving: true,
  isSliding: false,
  isTurnstile: true,
  isVisuallyContrasted: true,
  isAlwaysOpen: true,
  needsDoorbell: false,
  needsEuroKey: true,
  needsIntercom: false,
  needsKeyCard: false,
  needsKeyPad: false,
  needsRadarKey: true,
  needsSwitchToOpen: true,
  thresholdIsRounded: true,
  colors: ['transparent'],
  markingColors: ['rgba(233, 0, 0, 0)'],
  doorFrameColors: ['rosewood', 'white'],
  nearbyWallColors: ['white', 'lightgray'],
  access: ['private'],
  intercom: intercomFixture,
  grabBars: grabBarsFixture,
  interactions: {
    ringDoorbell: interactionModeFixture,
    unlock: interactionModeFixture,
    lock: interactionModeFixture,
    unlockAndLock: interactionModeFixture,
    open: interactionModeFixture,
    close: interactionModeFixture,
  },
};
export default doorFixture;
