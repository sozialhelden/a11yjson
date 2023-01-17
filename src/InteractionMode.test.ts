import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import { getInteractionModeSchemaDefinition, InteractionMode } from './InteractionMode';

const interactionModeFixture: Complete<InteractionMode> = {
  name: { en: 'Reaction test' },
  description: { en: 'A test to see how fast you can react' },
  action: [{
    touch: true,
  }],
  perception: [{
    light: true,
    music: true,
    educationLevel: 1,
  }],
  languages: ['en'],
  optional: false,
  required: true,
};

export default interactionModeFixture;

const definition = getInteractionModeSchemaDefinition();

describe('InteractionMode schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, interactionModeFixture);
  });
});
