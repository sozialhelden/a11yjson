import { Intercom, getIntercomSchemaDefinition } from './Intercom';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import interactionModeFixture from './InteractionMode.test';

const intercomFixture: Complete<Intercom> = {
  description: { en: 'doorbell' },
  hasAudio: true,
  ambientNoiseLevel: '< 50dBa',
  necessaryGripHeight: '> 100cm',
  audioIsComprehensible: true,
  hasVideoCamera: true,
  hasVisualFeedbackOnConnection: true,
  needsKeyPad: true,
  interactions: {
    // call: [interactionModeFixture],
  },
};

export default intercomFixture;

const definition = getIntercomSchemaDefinition();

describe('Intercom schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, intercomFixture);
  });
});
