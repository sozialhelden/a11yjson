import { Desk, getDeskSchemaDefinition } from './Desk';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import queueSystemFixture from './QueueSystem.test';
import paymentFixture from './Payment.test';
import intercomFixture from './Intercom.test';
import interactionModeFixture from './InteractionMode.test';

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
  controlledBySwitch: {
    category: 'switch',
    description: { en: 'Height buttons' },
    interactions: [{
      action: [{
        touch: true,
      }],
    }],
  },
  controlledBySwitchId: 'SWITCH-12345',
  payment: paymentFixture,
  intercom: intercomFixture,
  interactions: [interactionModeFixture],
};

export default deskFixture;

const definition = getDeskSchemaDefinition();

describe('Desk schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, deskFixture);
  });
});
