import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import { getPerceptionModeSchemaDefinition, PerceptionMode } from './PerceptionMode';

const perceptionModeFixture: Complete<PerceptionMode> = {
  speech: false,
  activationSignal: false,
  alarm: false,
  read: false,
  forceFeedback: false,
  vibration: false,
  led: false,
  breathing: false,
  hapticClick: false,
  audibleClick: false,
  music: false,
  beep: false,
  bing: false,
  pitchedTone: false,
  haptic: false,
  rhythmic: false,
  handwritten: false,
  flash: false,
  morse: false,
  pictograms: false,
  numbers: false,
  animation: false,
  sound: false,
  signLanguage: false,
  tactile: false,
  braille: false,
  tactileGuides: false,
  screen: false,
  chart: false,
  highContrast: false,
  blackAndWhite: false,
  static: false,
  colorCode: false,
  colorGradient: false,
  qrCode: false,
  headphone: true,
  cable: false,
  radio: true,
  byod: true,
  urgent: false,
  info: false,
  warning: false,
  light: true,
  fullBody: true,
  isEasyToUnderstand: true,
  needsHighConcentration: true,
  dedicatedScreenForSubtitles: false,
  subtitles: false,
  audioDescription: false,
  realTimeCaptioning: false,
  plainLanguageOption: true,
  contentWarning: { en: 'Content warning' },
  name: { en: 'Reaction test' },
  description: { en: 'Listen to a tone while watching a chart on a screen' },
  languages: ['en'],
  force: { value: 0.5, unit: 'N' },
  acceleration: { value: 0.5, unit: 'm/s^2' },
  soundVolume: { value: 50, unit: 'dB' },
  brightness: { value: 0.5, unit: 'nits' },
  ambientNoiseLevel: { value: 30, unit: 'dB' },
  frequency: { value: 440, unit: 'Hz' },
  framerate: { value: 48000, unit: 'kHz' },
  fontSize: { value: 4, unit: 'mm' },
  foregroundColors: ['red', 'green', 'blue'],
  backgroundColors: ['white'],
  flashingHazard: false,
  techSufficient: [{
    uris: ['https://example.com/tech/1'],
  }],
  techSupported: [{
    uris: ['https://example.com/tech/1'],
  }],
  url: {
    en: 'https://example.com/devices/42/output',
  },
  instructionsUrl: {
    en: 'https://example.com/devices/42/output/howto',
  },
  apiDocumentationUrl: 'https://example.com/api/documentation',
  necessaryGripHeight: { value: 150, unit: 'cm' },
  necessaryEyeHeight: { value: 90, unit: 'cm' },
  audioIsComprehensible: true,
  optional: false,
  required: true,
  attentionSpan: { value: 10, unit: 's' },
  duration: { value: 1, unit: 'h' },
  educationLevel: 3,
};

export default perceptionModeFixture;

const definition = getPerceptionModeSchemaDefinition();

describe('PerceptionMode schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, perceptionModeFixture);
  });
});
