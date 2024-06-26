import { ActionMode } from './ActionMode.js';
import { Complete } from './Complete.js';

const actionModeFixture: Complete<ActionMode> = {
  name: { en: 'Reaction test' },
  description: { en: 'Listen to a tone while watching a chart on a screen' },
  languages: ['en'],
  optional: false,
  required: true,
  speak: 'optional',
  morseCode: 'optional',
  clap: 'optional',
  wave: 'optional',
  signLanguage: 'optional',
  qrCode: 'optional',
  headphone: 'optional',
  bodyHeight: { value: 1.8, unit: 'm' },
  necessaryClimbHeight: { value: 10, unit: 'cm' },
  bodyMass: { min: 80, max: 80, unit: 'kg' },
  carryWeight: 'required',
  weight: { value: 20, unit: 'kg' },
  knob: 'optional',
  cable: 'optional',
  tactile: 'optional',
  brailleText: 'optional',
  brailleKeyboard: 'optional',
  directionAxis: 'axial',
  direction: 'counterclockwise',
  access: ['customers'],
  knurled: true,
  capacitive: 'optional',
  educationLevel: 1,
  twoHanded: 'optional',
  singleHanded: 'optional',
  leftHanded: 'optional',
  rightHanded: 'optional',
  handwriting: 'optional',
  keyboard: 'optional',
  keypad: 'optional',
  mouse: 'optional',
  click: 'optional',
  doubleClick: 'optional',
  tripleClick: 'optional',
  tap: 'optional',
  burnHazard: false,
  trackball: 'optional',
  pushSwitch: 'optional',
  pedal: 'optional',
  pullSwitch: 'optional',
  pullstring: 'optional',
  tactileGuides: 'optional',
  highContrast: true,
  touchscreen: 'optional',
  screen: 'optional',
  paper: 'optional',
  touch: 'optional',
  press: 'optional',
  drag: 'optional',
  dragAndDropGesture: 'optional',
  activationTimeInterval: { value: 0.5, unit: 's' },
  attentionSpan: { value: 5, unit: 's' },
  pushButton: 'optional',
  stateCount: 1,
  joystick: 'optional',
  turn: 'optional',
  walk: 'optional',
  turnKnob: 'optional',
  pinch: 'optional',
  tearApart: 'optional',
  squeeze: 'optional',
  rotate: 'optional',
  tilt: 'optional',
  move: 'optional',
  tongue: 'optional',
  lick: 'optional',
  smell: 'optional',
  scratch: 'optional',
  sipAndPuff: 'optional',
  pinchFingerGesture: 'optional',
  rotateTwoFingersGesture: 'optional',
  swipeFingerGesture: 'optional',
  swipeTwoFingersGesture: 'optional',
  swipeThreeFingersGesture: 'optional',
  rhythm: 'optional',
  headPointer: 'optional',
  eyeTracker: 'optional',
  wheel: 'optional',
  wireless: 'optional',
  photo: 'optional',
  video: 'optional',
  soundRecording: 'optional',
  faceRecognition: 'optional',
  fingerprintScan: 'optional',
  irisScan: 'optional',
  haptic: 'optional',
  raisedText: 'optional',
  voiceActivation: 'optional',
  visualRecognition: 'optional',
  isEasyToUnderstand: true,
  isEasyToFind: true,
  necessaryGripHeight: { value: 1, unit: 'm' },
  necessaryEyeHeight: { value: 0.8, unit: 'm' },
  activationForce: { value: 0.1, unit: 'N' },
  feedback: {
    vibration: 'optional',
  },
  techSufficient: [{
    uris: ['https://example.com/tech/1'],
  }],
  techSupported: [{
    uris: ['https://example.com/tech/1'],
  }],
  url: {
    en: 'https://example.com/devices/42/input',
  },
  instructionsUrl: {
    en: 'https://example.com/devices/42/input/howto',
  },
  apiDocumentationUrl: {
    en: 'https://example.com/api/documentation',
  },
};
export default actionModeFixture;
