import { Intercom } from './Intercom';
import { Complete } from './Complete';

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
