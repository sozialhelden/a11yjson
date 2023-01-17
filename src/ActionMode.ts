import SimpleSchema from 'simpl-schema';
import BooleanField from './BooleanField';
import { IetfLanguageTag, ietfLanguageTagsAndSignLanguageCodes } from './ietfLanguageTags';
import { getPrefixedArraySchemaDefinition } from './lib/getPrefixedSchemaDefinition';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';
import { getPerceptionModeSchemaDefinition, PerceptionMode } from './PerceptionMode';
import {
  Force,
  ForceSchemaDefinition,
  getPrefixedQuantitySchemaDefinition,
  Length,
  LengthSchemaDefinition,
  TimeInterval,
  TimeIntervalSchemaDefinition,
} from './Quantity';
import { getTechCombinationSchemaDefinition, TechCombination } from './TechCombination';

/**
 * Describes necessary abilities and modes inputting information.
 */
export type ActionMode = {
  /**
   * Describes which output is meant. Helpful if there are multiple outputs.
   */
  name?: LocalizedString;

  /**
   * Describes the output as human-readable text.
   */
  description?: LocalizedString;

  /**
   * Input languages supported.
   */
  languages?: IetfLanguageTag[];

  /**
   * `true` if the action is optional, `false` if it is required.
   */
  optional?: boolean;

  /**
   * `false` if the action is optional, `true` if it is required.
   */
  required?: boolean;

  /**
   * Force needed for the described input method.
   */
  activationForce?: Force;

  /**
   * Time interval needed for activation/engagement.
   */
  activationTimeInterval?: TimeInterval;

  /**
   * Attention time needed for activation/engagement.
   */
  attentionSpan?: TimeInterval;

  /**
   * How is feedback given for an input?
   */
  feedback?: PerceptionMode[];

  /**
   * The ability to speak is supported or needed.
   */
  speak?: boolean;

  /**
   * Morse code input is supported or needed.
   */
  morseCode?: boolean;

  /**
   * Clapping your hands is supported or needed.
   */
  clap?: boolean;

  /**
   * Waving your hands is supported or needed.
   */
  wave?: boolean;

  /**
   * The ability to use sign language is supported or needed.
   */
  signLanguage?: boolean;

  /**
   * A QR code is supported or needed.
   */
  qrCode?: boolean;

  /**
   * Headphones are supported or needed.
   */
  headphone?: boolean;

  /**
   * A cable is supported or needed.
   */
  cable?: boolean;

  /**
   * URL where you can use the input mechanism, e.g. on your phone.
   */
  url?: LocalizedString;

  /**
   * URL describing how to use the input mechanism.
   */
  instructionsUrl?: LocalizedString;

  /**
   * Tactile input is supported or needed.
   */
  tactile?: boolean;

  /**
   * Haptic input is supported or needed.
   */
  haptic?: boolean;

  /**
   * The ability to read braille is supported or needed.
   */
  brailleText?: boolean;

  /**
   * The ability to write textual content with a braille keyboard is supported or needed.
   */
  brailleKeyboard?: boolean;

  /**
   * You can or must give input with both hands.
   */
  twoHanded?: boolean;

  /**
   * You can or must give input with one hand.
   */
  singleHanded?: boolean;

  /**
   * You can or must give input with your left hand.
   */
  leftHanded?: boolean;

  /**
   * You can or must give input with your right hand.
   */
  rightHanded?: boolean;

  /**
   * The ability to write textual content by hand is supported or needed.
   */
  handwriting?: boolean;

  /**
   * The ability to write textual content by typing on a keyboard is supported or needed.
   */
  keyboard?: boolean;

  /**
   * The ability to write numbers by typing on a keypad is supported or needed.
   */
  keypad?: boolean;

  /**
   * The ability to use a mouse is supported or needed.
   */
  mouse?: boolean;

  /**
   * The ability to click a button with a finger is supported or needed.
   */
  click?: boolean;

  /**
   * The ability to click a button with a finger is supported or needed.
   */
  doubleClick?: boolean;

  /**
   * The ability to click a button with a finger is supported or needed.
   */
  tripleClick?: boolean;

  /**
   * The ability to tap an element with a finger is supported or needed.
   */
  tap?: boolean;

  /**
   * The ability to use a trackball is supported or needed.
   */
  trackball?: boolean;

  /**
   * The ability to use a push switch is supported or needed.
   */
  pushSwitch?: boolean;

  /**
   * The ability to use a push button is supported or needed.
   */
  pushButton?: boolean;

  /**
   * State count for a button or switch, for example 2 for a toggle button, 3 for a 3-way button.
   */
  stateCount?: number;

  /**
   * The ability to use a pedal is supported or needed.
   */
  pedal?: boolean;

  /**
   * The ability to use a pull switch is supported or needed.
   */
  pullSwitch?: boolean;

  /**
   * The ability to use a pullstring is supported or needed.
   */
  pullstring?: boolean;

  /**
   * The input has tactile guides, for example around buttons.
   */
  tactileGuides?: boolean;

  /**
   * The input has high contrast elements, for example around buttons.
   */
  highContrast?: boolean;

  /**
   * Touchscreen input is supported or needed.
   */
  touchscreen?: boolean;

  /**
   * Touch input is supported or needed.
   */
  touch?: boolean;

  /**
   * The ability to apply force to an object is supported or needed.
   */
  press?: boolean;

  /**
   * The ability to tear something apart is supported or needed.
   */
  tearApart?: boolean;

  /**
   * The ability to use a joystick is supported or needed.
   */
  joystick?: boolean;

  /**
   * The ability to turn a knob is supported or needed.
   */
  turnKnob?: boolean;

  /**
   * The ability to drag an object is supported or needed.
   */
  drag?: boolean;

  /**
   * The ability to turn an object is supported or needed.
   */
  turn?: boolean;

  /**
   * The ability to pinch an object is supported or needed.
   */
  pinch?: boolean;

  /**
   * The ability to squeeze an object is supported or needed.
   */
  squeeze?: boolean;

  /**
   * The ability to rotate an object is supported or needed.
   */
  rotate?: boolean;

  /**
   * The ability to tilt an object is supported or needed.
   */
  tilt?: boolean;

  /**
   * The ability to move an object is supported or needed.
   */
  move?: boolean;

  /**
   * The ability to move an object with your tongue is supported or needed.
   */
  tongue?: boolean;

  /**
   * The ability to lick an object with your tongue is supported or needed (e.g. a lollipop)
   */
  lick?: boolean;

  /**
   * The ability to smell is supported or needed.
   */
  smell?: boolean;

  /**
   * The ability to scratch is supported or needed.
   */
  scratch?: boolean;

  /**
   * The ability to use a sip and puff switch is supported or needed.
   */
  sipAndPuff?: boolean;

  /**
   * The ability to use a pinch finger gesture is supported or needed.
   */
  pinchFingerGesture?: boolean;

  /**
   * The ability to do a virtual drag-and-drop finger/mouse gesture is supported or needed.
   */
  dragAndDropGesture?: boolean;

  /**
   * The ability to use a two-finger rotation gesture is supported or needed.
   */
  rotateTwoFingersGesture?: boolean;

  /**
   * The ability to use a swipe finger gesture is supported or needed.
   */
  swipeFingerGesture?: boolean;

  /**
   * The ability to use a three-finger swipe gesture is supported or needed.
   */
  swipeTwoFingersGesture?: boolean;

  /**
   * The ability to use a three-finger swipe gesture is supported or needed.
   */
  swipeThreeFingersGesture?: boolean;

  /**
   * The ability to use rhythm input is supported or needed.
   */
  rhythm?: boolean;

  /**
   * The ability to use a head pointer is supported or needed.
   */
  headPointer?: boolean;

  /**
   * The ability to use an eye tracker is supported or needed.
   */
  eyeTracker?: boolean;

  /**
   * The input features a wheel.
   */
  wheel?: boolean;

  /**
   * The input is wireless.
   */
  wireless?: boolean;

  /**
   * The input makes a photo.
   */
  photo?: boolean;

  /**
   * The input makes a video.
   */
  video?: boolean;

  /**
   * The input makes a sound recording.
   */
  soundRecording?: boolean;

  /**
   * The input uses face recognition.
   */
  faceRecognition?: boolean;

  /**
   * The input uses a fingerprint scanner.
   */
  fingerprintScan?: boolean;

  /**
   * The input uses an iris scanner.
   */
  irisScan?: boolean;

  /**
   * `true` if the controls or signs have raised letters, `false` if not.
   */
  raisedText?: boolean;

  /**
   * `true` if the control is activated by voice, `false` if not.
   */
  voiceActivation?: boolean;

  /**
   * `true` if the input user interface needs or supports visual input, `false` if not.
   */
  visualRecognition?: boolean;

  /**
   * The height you need to grip to perceive the content/output/signal.
   */
  necessaryGripHeight?: Length;

  /**
   * How tall do you have to be to perceive the content/output/signal.
   */
  necessaryEyeHeight?: Length;

  /**
   * The input API documentation URL.
   */
  apiDocumentationUrl?: LocalizedString;

  /**
   * `true` if the input is easy to understand, `false` if people might face difficulties trying to
   * understand how the input works, or `undefined` if this is unknown or irrelevant.
   */
  isEasyToUnderstand?: boolean;

  /**
   * Technology combinations that are sufficient to make use of the output.
   */
  techSufficient?: TechCombination[];

  /**
   * Technologies that are sufficient to make use of the output.
   */
  techSupported?: TechCombination[];
};

export const getActionModeSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  optional: BooleanField,
  required: BooleanField,
  ...getLocalizedStringSchemaDefinition('name'),
  ...getLocalizedStringSchemaDefinition('description'),
  ...getLocalizedStringSchemaDefinition('url'),
  ...getLocalizedStringSchemaDefinition('instructionsUrl', {
    regEx: SimpleSchema.RegEx.Url,
  }),
  ...getLocalizedStringSchemaDefinition('apiDocumentationUrl', {
    regEx: SimpleSchema.RegEx.Url,
  }),
  languages: {
    type: Array,
    defaultValue: [],
    optional: true,
  },
  'languages.$': {
    type: String,
    allowedValues: ietfLanguageTagsAndSignLanguageCodes,
  },
  speak: BooleanField,
  morseCode: BooleanField,
  signLanguage: BooleanField,
  tactile: BooleanField,
  haptic: BooleanField,
  brailleText: BooleanField,
  brailleKeyboard: BooleanField,
  twoHanded: BooleanField,
  singleHanded: BooleanField,
  leftHanded: BooleanField,
  rightHanded: BooleanField,
  handwriting: BooleanField,
  click: BooleanField,
  doubleClick: BooleanField,
  tripleClick: BooleanField,
  tap: BooleanField,
  tactileGuides: BooleanField,
  touch: BooleanField,
  drag: BooleanField,
  press: BooleanField,
  pinch: BooleanField,
  clap: BooleanField,
  wave: BooleanField,
  squeeze: BooleanField,
  rotate: BooleanField,
  tilt: BooleanField,
  move: BooleanField,
  tongue: BooleanField,
  pinchFingerGesture: BooleanField,
  rotateTwoFingersGesture: BooleanField,
  swipeFingerGesture: BooleanField,
  swipeTwoFingersGesture: BooleanField,
  swipeThreeFingersGesture: BooleanField,
  dragAndDropGesture: BooleanField,
  rhythm: BooleanField,
  keypad: BooleanField,
  keyboard: BooleanField,
  mouse: BooleanField,
  trackball: BooleanField,
  pushSwitch: BooleanField,
  pushButton: BooleanField,
  stateCount: {
    type: Number,
    min: 1,
    optional: true,
  },
  pedal: BooleanField,
  pullSwitch: BooleanField,
  pullstring: BooleanField,
  touchscreen: BooleanField,
  joystick: BooleanField,
  sipAndPuff: BooleanField,
  turn: BooleanField,
  turnKnob: BooleanField,
  tearApart: BooleanField,
  lick: BooleanField,
  smell: BooleanField,
  scratch: BooleanField,
  headPointer: BooleanField,
  eyeTracker: BooleanField,
  wheel: BooleanField,
  wireless: BooleanField,
  qrCode: BooleanField,
  knob: BooleanField,
  headphone: BooleanField,
  cable: BooleanField,
  phone: BooleanField,
  photo: BooleanField,
  video: BooleanField,
  highContrast: BooleanField,
  soundRecording: BooleanField,
  faceRecognition: BooleanField,
  fingerprintScan: BooleanField,
  irisScan: BooleanField,
  isEasyToUnderstand: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('heightFromFloor', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('necessaryGripHeight', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('necessaryEyeHeight', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('activationForce', ForceSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('activationTimeInterval', TimeIntervalSchemaDefinition),
  ...getPrefixedArraySchemaDefinition('techSufficient', getTechCombinationSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('techSupported', getTechCombinationSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('feedback', getPerceptionModeSchemaDefinition()),
  raisedText: BooleanField,
  voiceActivation: BooleanField,
  visualRecognition: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('attentionSpan', TimeIntervalSchemaDefinition),
});
