import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import { AccessType, AccessTypes } from './AccessType.js';
import BooleanField from './BooleanField.js';
import IETFLanguageCodeSchemaKeyDefinition, { IETFLanguageTag } from './ietfLanguageTags.js';
import getPrefixedSchemaDefinition, { getPrefixedArraySchemaDefinition } from './lib/getPrefixedSchemaDefinition.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';
import { Necessity, NecessityField } from './Necessity.js';
import { getPerceptionModeSchemaDefinition, PerceptionMode } from './PerceptionMode.js';
import {
  Force,
  ForceSchema,
  getPrefixedQuantitySchemaDefinition,
  Length,
  LengthSchema, Mass,
  MassSchema, TimeInterval,
  TimeIntervalSchema,
} from './Quantity.js';
import { getTechCombinationSchemaDefinition, TechCombination } from './TechCombination.js';
import validateUrl from './validateUrl.js';

/**
 * Describes a physical direction axis relative to a person’s body.
 *
 * @see https://wisc.pb.unizin.org/app/uploads/sites/123/2018/10/Anatomical-Planes-and-Axes.jpg
 */
export const DirectionAxes = [
  'sagittal',
  'coronal',
  'axial',
] as const;

/**
 * Describes a physical direction axis relative to a person’s body.
 *
 * @see https://wisc.pb.unizin.org/app/uploads/sites/123/2018/10/Anatomical-Planes-and-Axes.jpg
 */
export type DirectionAxis = typeof DirectionAxes[number];

/**
 * Describes physical directions, from the perspective of a person facing forward.
 */
export const Directions = [
  'up',
  'down',
  'left',
  'right',
  'forward',
  'backward',
  'clockwise',
  'counterclockwise',
] as const;

/**
 * Describes a physical direction, from the perspective of a person facing forward.
 */
export type Direction = typeof Directions[number];

/**
 * Describes necessary abilities and modes inputting information.
 */
export interface ActionMode {
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
  languages?: IETFLanguageTag[];

  /**
   * Who has access to this action?
   */
  access?: AccessType[];

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
   * A weight you need to be able to lift.
   */
  weight?: Mass;

  /**
   * A supported body weight.
   */
  bodyMass?: Mass;

  /**
   * A supported body height.
   */
  bodyHeight?: Length;

  /**
   * Height you need to be able to climb over (for obstacles)
   */
  necessaryClimbHeight?: Length;

  /**
   * Attention time needed for activation/engagement.
   */
  attentionSpan?: TimeInterval;

  /**
   * How is feedback given for an input?
   */
  feedback?: PerceptionMode;

  /**
   * The ability to carry a weight is supported or needed.
   */
  carryWeight?: Necessity;

  /**
   * The ability to speak is supported or needed.
   */
  speak?: Necessity;

  /**
   * Morse code input is supported or needed.
   */
  morseCode?: Necessity;

  /**
   * Clapping your hands is supported or needed.
   */
  clap?: Necessity;

  /**
   * Waving your hands is supported or needed.
   */
  wave?: Necessity;

  /**
   * Walking is supported or needed.
   */
  walk?: Necessity;

  /**
   * The ability to use sign language is supported or needed.
   */
  signLanguage?: Necessity;

  /**
   * A QR code is supported or needed.
   */
  qrCode?: Necessity;

  /**
   * Headphones are supported or needed.
   */
  headphone?: Necessity;

  /**
   * A cable is supported or needed.
   */
  cable?: Necessity;

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
  tactile?: Necessity;

  /**
   * Haptic input is supported or needed.
   */
  haptic?: Necessity;

  /**
   * The ability to read braille is supported or needed.
   */
  brailleText?: Necessity;

  /**
   * The ability to write textual content with a braille keyboard is supported or needed.
   */
  brailleKeyboard?: Necessity;

  /**
   * You can or must give input with both hands.
   */
  twoHanded?: Necessity;

  /**
   * You can or must give input with one hand.
   */
  singleHanded?: Necessity;

  /**
   * You can or must give input with your left hand.
   */
  leftHanded?: Necessity;

  /**
   * You can or must give input with your right hand.
   */
  rightHanded?: Necessity;

  /**
   * The ability to write textual content by hand is supported or needed.
   */
  handwriting?: Necessity;

  /**
   * The ability to write textual content by typing on a keyboard is supported or needed.
   */
  keyboard?: Necessity;

  /**
   * The ability to write numbers by typing on a keypad is supported or needed.
   */
  keypad?: Necessity;

  /**
   * The ability to use a mouse is supported or needed.
   */
  mouse?: Necessity;

  /**
   * The ability to click a button with a finger is supported or needed.
   */
  click?: Necessity;

  /**
   * The ability to click a button with a finger is supported or needed.
   */
  doubleClick?: Necessity;

  /**
   * The ability to click a button with a finger is supported or needed.
   */
  tripleClick?: Necessity;

  /**
   * The ability to tap an element with a finger is supported or needed.
   */
  tap?: Necessity;

  /**
   * The ability to use a trackball is supported or needed.
   */
  trackball?: Necessity;

  /**
   * The ability to use a push switch is supported or needed.
   */
  pushSwitch?: Necessity;

  /**
   * The ability to use a push button is supported or needed.
   */
  pushButton?: Necessity;

  /**
   * The action uses a capacity sensor, for example a touch sensor.
   */
  capacitive?: Necessity;

  /**
   * State count for a button or switch, for example 2 for a toggle button, 3 for a 3-way button.
   */
  stateCount?: number;

  /**
   * The ability to use a pedal is supported or needed.
   */
  pedal?: Necessity;

  /**
   * The ability to use a pull switch is supported or needed.
   */
  pullSwitch?: Necessity;

  /**
   * The ability to use a pullstring is supported or needed.
   */
  pullstring?: Necessity;

  /**
   * The input has tactile guides, for example around buttons.
   */
  tactileGuides?: Necessity;

  /**
   * The input has a knurled surface, for example around buttons.
   */
  knurled?: boolean;

  /**
   * The input has high contrast elements, for example around buttons.
   */
  highContrast?: boolean;

  /**
   * Touchscreen input is supported or needed.
   */
  touchscreen?: Necessity;

  /**
   * A screen is supported or needed.
   */
  screen?: Necessity;

  /**
   * Handling paper is supported or needed.
   */
  paper?: Necessity;

  /**
   * Touch input is supported or needed.
   */
  touch?: Necessity;

  /**
   * There is a burn hazard.
   */
  burnHazard?: boolean;

  /**
   * The ability to apply force to an object is supported or needed.
   */
  press?: Necessity;

  /**
   * The ability to tear something apart is supported or needed.
   */
  tearApart?: Necessity;

  /**
   * The ability to use a joystick is supported or needed.
   */
  joystick?: Necessity;

  /**
   * The ability to turn a knob is supported or needed.
   */
  turnKnob?: Necessity;

  /**
   * The action uses a knob.
   */
  knob?: Necessity;

  /**
   * The ability to drag an object is supported or needed.
   */
  drag?: Necessity;

  /**
   * The ability to turn an object is supported or needed.
   */
  turn?: Necessity;

  /**
   * The direction of the action, relative to the body.
   */
  direction?: Direction;

  /**
   * The direction axis of the action, relative to the body.
   */
  directionAxis?: DirectionAxis;

  /**
   * The ability to pinch an object is supported or needed.
   */
  pinch?: Necessity;

  /**
   * The ability to squeeze an object is supported or needed.
   */
  squeeze?: Necessity;

  /**
   * The ability to rotate an object is supported or needed.
   */
  rotate?: Necessity;

  /**
   * The ability to tilt an object is supported or needed.
   */
  tilt?: Necessity;

  /**
   * The ability to move an object is supported or needed.
   */
  move?: Necessity;

  /**
   * The ability to move an object with your tongue is supported or needed.
   */
  tongue?: Necessity;

  /**
   * The ability to lick an object with your tongue is supported or needed (e.g. a lollipop)
   */
  lick?: Necessity;

  /**
   * The ability to smell is supported or needed.
   */
  smell?: Necessity;

  /**
   * The ability to scratch is supported or needed.
   */
  scratch?: Necessity;

  /**
   * The ability to use a sip and puff switch is supported or needed.
   */
  sipAndPuff?: Necessity;

  /**
   * The ability to use a pinch finger gesture is supported or needed.
   */
  pinchFingerGesture?: Necessity;

  /**
   * The ability to do a virtual drag-and-drop finger/mouse gesture is supported or needed.
   */
  dragAndDropGesture?: Necessity;

  /**
   * The ability to use a two-finger rotation gesture is supported or needed.
   */
  rotateTwoFingersGesture?: Necessity;

  /**
   * The ability to use a swipe finger gesture is supported or needed.
   */
  swipeFingerGesture?: Necessity;

  /**
   * The ability to use a three-finger swipe gesture is supported or needed.
   */
  swipeTwoFingersGesture?: Necessity;

  /**
   * The ability to use a three-finger swipe gesture is supported or needed.
   */
  swipeThreeFingersGesture?: Necessity;

  /**
   * The ability to use rhythm input is supported or needed.
   */
  rhythm?: Necessity;

  /**
   * The ability to use a head pointer is supported or needed.
   */
  headPointer?: Necessity;

  /**
   * The ability to use an eye tracker is supported or needed.
   */
  eyeTracker?: Necessity;

  /**
   * The input features a wheel.
   */
  wheel?: Necessity;

  /**
   * The input is wireless.
   */
  wireless?: Necessity;

  /**
   * The input makes a photo.
   */
  photo?: Necessity;

  /**
   * The input makes a video.
   */
  video?: Necessity;

  /**
   * The input makes a sound recording.
   */
  soundRecording?: Necessity;

  /**
   * The input uses face recognition.
   */
  faceRecognition?: Necessity;

  /**
   * The input uses a fingerprint scanner.
   */
  fingerprintScan?: Necessity;

  /**
   * The input uses an iris scanner.
   */
  irisScan?: Necessity;

  /**
   * `true` if the controls or signs have raised letters, `false` if not.
   */
  raisedText?: Necessity;

  /**
   * `true` if the control is activated by voice, `false` if not.
   */
  voiceActivation?: Necessity;

  /**
   * `true` if the input user interface needs or supports visual input, `false` if not.
   */
  visualRecognition?: Necessity;

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
   * `true` if the item is easy to find, `false` if people might face difficulties trying to
   * find the item, or `undefined` if this is unknown or irrelevant.
   */
  isEasyToFind?: boolean;

  /**
   * Technology combinations that are sufficient to make use of the output.
   */
  techSufficient?: TechCombination[];

  /**
   * Technologies that are sufficient to make use of the output.
   */
  techSupported?: TechCombination[];

  /**
   * Education level needed to understand the action.
   *
   * http://www.ibe.unesco.org/en/glossary-curriculum-terminology/l/levels-education
   *
   * - early childhood education (level 0)
   * - primary education (level 1)
   * - lower secondary education (level 2)
   * - upper secondary education (level 3)
   * - postsecondary non-tertiary education (level 4)
   * - short-cycle tertiary education (level 5)
   * - bachelor’s or equivalent level (level 6)
   * - master’s or equivalent level (level 7)
   * - doctor or equivalent level (level 8).
   */
  educationLevel?: Number;
}

export const getActionModeSchemaDefinition: () => SchemaDefinition = () => ({
  optional: BooleanField,
  required: BooleanField,
  ...getLocalizedStringSchemaDefinition('name'),
  ...getLocalizedStringSchemaDefinition('description'),
  ...getLocalizedStringSchemaDefinition('url'),
  ...getLocalizedStringSchemaDefinition('instructionsUrl', {}, {
    custom: validateUrl,
  }),
  ...getLocalizedStringSchemaDefinition('apiDocumentationUrl', {}, {
    custom: validateUrl,
  }),
  languages: {
    type: Array,
    defaultValue: [],
    optional: true,
  },
  'languages.$': IETFLanguageCodeSchemaKeyDefinition,
  speak: NecessityField,
  morseCode: NecessityField,
  signLanguage: NecessityField,
  tactile: NecessityField,
  haptic: NecessityField,
  brailleText: NecessityField,
  brailleKeyboard: NecessityField,
  twoHanded: NecessityField,
  singleHanded: NecessityField,
  leftHanded: NecessityField,
  rightHanded: NecessityField,
  handwriting: NecessityField,
  click: NecessityField,
  doubleClick: NecessityField,
  tripleClick: NecessityField,
  tap: NecessityField,
  tactileGuides: NecessityField,
  touch: NecessityField,
  drag: NecessityField,
  press: NecessityField,
  pinch: NecessityField,
  clap: NecessityField,
  wave: NecessityField,
  squeeze: NecessityField,
  rotate: NecessityField,
  tilt: NecessityField,
  move: NecessityField,
  tongue: NecessityField,
  walk: NecessityField,
  knurled: BooleanField,
  capacitive: NecessityField,
  screen: NecessityField,
  paper: NecessityField,
  pinchFingerGesture: NecessityField,
  rotateTwoFingersGesture: NecessityField,
  swipeFingerGesture: NecessityField,
  swipeTwoFingersGesture: NecessityField,
  swipeThreeFingersGesture: NecessityField,
  dragAndDropGesture: NecessityField,
  rhythm: NecessityField,
  keypad: NecessityField,
  keyboard: NecessityField,
  mouse: NecessityField,
  trackball: NecessityField,
  pushSwitch: NecessityField,
  pushButton: NecessityField,
  stateCount: {
    type: Number,
    min: 1,
    optional: true,
  },
  pedal: NecessityField,
  pullSwitch: NecessityField,
  pullstring: NecessityField,
  touchscreen: NecessityField,
  joystick: NecessityField,
  sipAndPuff: NecessityField,
  turn: NecessityField,
  turnKnob: NecessityField,
  direction: {
    type: String,
    allowedValues: (Directions as any) as string[],
    optional: true,
  },
  directionAxis: {
    type: String,
    allowedValues: (DirectionAxes as any) as string[],
    optional: true,
  },
  tearApart: NecessityField,
  lick: NecessityField,
  smell: NecessityField,
  scratch: NecessityField,
  headPointer: NecessityField,
  eyeTracker: NecessityField,
  wheel: NecessityField,
  wireless: NecessityField,
  qrCode: NecessityField,
  knob: NecessityField,
  headphone: NecessityField,
  cable: NecessityField,
  phone: NecessityField,
  photo: NecessityField,
  video: NecessityField,
  soundRecording: NecessityField,
  faceRecognition: NecessityField,
  fingerprintScan: NecessityField,
  irisScan: NecessityField,
  raisedText: NecessityField,
  voiceActivation: NecessityField,
  visualRecognition: NecessityField,
  carryWeight: NecessityField,
  highContrast: BooleanField,
  isEasyToUnderstand: BooleanField,
  isEasyToFind: BooleanField,
  burnHazard: BooleanField,
  educationLevel: {
    type: Number,
    optional: true,
    allowedValues: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  },
  ...getPrefixedQuantitySchemaDefinition('heightFromFloor', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('necessaryGripHeight', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('necessaryClimbHeight', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('necessaryEyeHeight', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('activationForce', ForceSchema),
  ...getPrefixedQuantitySchemaDefinition('activationTimeInterval', TimeIntervalSchema),
  ...getPrefixedQuantitySchemaDefinition('weight', MassSchema),
  ...getPrefixedQuantitySchemaDefinition('bodyMass', MassSchema),
  ...getPrefixedQuantitySchemaDefinition('bodyHeight', LengthSchema),
  ...getPrefixedArraySchemaDefinition('techSufficient', getTechCombinationSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('techSupported', getTechCombinationSchemaDefinition()),
  ...getPrefixedSchemaDefinition('feedback', getPerceptionModeSchemaDefinition()),
  ...getPrefixedQuantitySchemaDefinition('attentionSpan', TimeIntervalSchema),
  access: {
    type: Array,
    optional: true,
  },
  'access.$': {
    type: String,
    allowedValues: (AccessTypes as any) as any,
  },
});
