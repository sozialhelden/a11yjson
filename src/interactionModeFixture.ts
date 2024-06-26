import { Complete } from './Complete.js';
import { InteractionMode } from './InteractionMode.js';

const interactionModeFixture: Complete<InteractionMode> = {
  name: { en: 'Reaction test' },
  description: { en: 'A test to see how fast you can react' },
  action: {
    touch: 'required',
  },
  perception: {
    light: 'always',
    music: 'optional',
    educationLevel: 1,
  },
  languages: ['en'],
  optional: false,
  required: true,
};
export default interactionModeFixture;
