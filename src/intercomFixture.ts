import { Intercom } from './Intercom.js';
import { Complete } from './Complete.js';

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
    // call: interactionModeFixture,
  },
};
export default intercomFixture;
