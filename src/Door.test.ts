import { Door, getDoorSchemaDefinition } from './Door';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import intercomFixture from './Intercom.test';
import grabBarsFixture from './GrabBars.test';
import interactionModeFixture from './InteractionMode.test';

const doorFixture: Complete<Door> = {
  turningSpaceInFront: '<120cm',
  width: '>250cm',
  thresholdHeight: '2cm',
  doorbellTopButtonHeight: '<100cm',
  doorOpensToOutside: true,
  hasAcousticFeedbackForClosing: true,
  hasAcousticFeedbackForOpening: true,
  hasAcousticFeedbackWhenOpenable: true,
  hasClearMarkingOnGlassDoor: true,
  hasErgonomicDoorHandle: true,
  hasIntercom: false,
  hasProximitySensor: true,
  hasSwitch: true,
  hasVisualFeedbackForClosing: true,
  hasVisualFeedbackForOpening: true,
  hasVisualFeedbackWhenOpenable: true,
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
  interactions: [interactionModeFixture],
};

export default doorFixture;

const definition = getDoorSchemaDefinition();

describe('Door schema', () => {
  it('evaluates an empty object as valid', () => {
    expectValidFixture(definition, {});
  });

  it('evaluates a complex door as valid', () => {
    expectValidFixture(definition, doorFixture);
  });
});
