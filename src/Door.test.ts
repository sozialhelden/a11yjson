import { Door, getDoorSchemaDefinition } from './Door';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const doorFixture: Complete<Door> = {
  turningSpaceInFront: '<90cm',
  doorOpensToOutside: true,
  isAutomaticOrAlwaysOpen: true,
  isAutomatic: true,
  hasProximitySensor: true,
  hasSwitch: true,
  needsSwitchToOpen: true,
  isTurnstile: true,
  width: '>250cm',
  hasClearMarkingOnGlassDoor: true,
  isEasyToHoldOpen: true,
  hasErgonomicDoorHandle: true,
  isRevolving: true,
  needsRadarKey: true,
  needsEuroKey: true,
  isSliding: false,
  isGlassDoor: false,
  needsKeyCard: false,
  needsKeyPad: false,
  needsDoorbell: false,
  doorbellTopButtonHeight: '<100cm',
  hasIntercom: false,
  needsIntercom: false,
  access: ['private'],
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
