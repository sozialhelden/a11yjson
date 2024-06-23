import { Complete } from './Complete.js';
import { PerceptionMode } from './PerceptionMode.js';

const perceptionModeFixture: Complete<PerceptionMode> = {
  urgency: 'alert',
  speech: 'optional',
  read: 'optional',
  forceFeedback: 'optional',
  vibration: 'optional',
  led: 'optional',
  breathing: 'optional',
  hapticClick: 'optional',
  audibleClick: 'optional',
  music: 'optional',
  backgroundMusic: 'optional',
  heat: 'optional',
  beep: 'optional',
  bing: 'optional',
  buzzer: 'optional',
  pitchedTone: 'optional',
  visual: 'optional',
  haptic: 'optional',
  rhythmic: 'optional',
  handwritten: 'optional',
  flash: 'optional',
  morse: 'optional',
  smell: 'optional',
  taste: 'optional',
  pictograms: 'optional',
  numbers: 'optional',
  animation: 'optional',
  sound: 'optional',
  signLanguage: 'optional',
  tactile: 'optional',
  braille: 'optional',
  tactileGuides: 'optional',
  screen: 'optional',
  paper: 'optional',
  printer: 'optional',
  chart: 'optional',
  highContrast: true,
  activationSignal: false,
  blackAndWhite: false,
  static: false,
  colorCode: false,
  colorGradient: false,
  qrCode: 'optional',
  headphone: 'optional',
  cable: 'optional',
  radio: 'optional',
  byod: 'optional',
  light: 'optional',
  fullBody: 'optional',
  isEasyToUnderstand: true,
  isEasyToFind: true,
  needsHighConcentration: 'always',
  provisionalHearingAid: 'optional',
  stethoscope: 'optional',
  dedicatedScreenForSubtitles: 'optional',
  subtitles: 'optional',
  audioDescription: 'optional',
  realTimeCaptioning: 'optional',
  plainLanguageOption: 'optional',
  contentWarning: { en: 'Content warning' },
  name: { en: 'Reaction test' },
  description: { en: 'Listen to a tone while watching a chart on a screen' },
  languages: ['en'],
  force: { value: 0.5, unit: 'N' },
  acceleration: { value: 0.5, unit: 'm/s^2' },
  soundVolume: { value: 50, unit: 'dB' },
  brightness: { value: 0.5, unit: 'nits' },
  ambientNoiseLevel: { value: 30, unit: 'dB' },
  temperature: { value: 20, unit: 'degC' },
  ambientTemperature: { value: 20, unit: 'degC' },
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
