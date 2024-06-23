import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import BooleanField from './BooleanField.js';
import htmlColorSchemaDefinition from './htmlColorSchemaDefinition.js';
import IETFLanguageCodeSchemaKeyDefinition, { IETFLanguageTag } from './ietfLanguageTags.js';
import { getPrefixedArraySchemaDefinition } from './lib/getPrefixedSchemaDefinition.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';
import { Necessity, NecessityField } from './Necessity.js';
import {
  Acceleration, AccelerationSchema, Brightness, BrightnessSchema, Force, ForceSchema, getPrefixedQuantitySchemaDefinition, Hertz, HertzSchema, Length, LengthSchema, Temperature, TemperatureSchema, TimeInterval, TimeIntervalSchema, Volume, VolumeSchema,
} from './Quantity.js';
import { getTechCombinationSchemaDefinition, TechCombination } from './TechCombination.js';
import { Urgencies, Urgency } from './Urgency.js';

/**
 * Describes necessary abilities and modes for interpreting information output, signals, or
 * content.
 */
export interface PerceptionMode {
  /**
   * Describes which output is meant. Helpful if there are multiple signals/outputs/content
   * lements.
   */
  name?: LocalizedString;

  /**
   * Describes the content/output/signal as human-readable text.
   */
  description?: LocalizedString;

  /**
   * Content languages supported.
   */
  languages?: IETFLanguageTag[];

  /**
   * `true` if the perception is optional, `false` if it is required.
   */
  optional?: boolean;

  /**
   * `false` if the perception is required to make use of the main function of the described
   * object, `true` if it is required.
   */
  required?: boolean;

  /**
   * Urgency of the content when perceived.
   */
  urgency?: Urgency;

  /**
   * The ability to understand speech is supported or needed.
   */
  speech?: Necessity;

  /**
   * The output is an activation/engagement signal.
   */
  activationSignal?: Necessity;

  /**
   * The output is a light.
   */
  light?: Necessity;

  /**
   * The output is rhythmic.
   */
  rhythmic?: Necessity;

  /**
   * The ability to read is supported or needed.
   */
  read?: Necessity;

  /**
   * The content/output/signal has active force feedback.
   */
  forceFeedback?: Necessity;

  /**
   * The content/output/signal has active vibration feedback.
   */
  vibration?: Necessity;

  /**
   * The content/output/signal affects your full body.
   */
  fullBody?: Necessity;

  /**
   * The perceiving person uses a stethoscope.
   *
   * This is method for patient communication that is used by doctors to speak to patients with
   * hearing impairments:
   *
   * > British doctors recommend using the stethoscope as a hearing aid for patients in such
   * > situations (BMJ 2010; 341: c4672). If the patient has the buttons in his ear and the
   * > physician speaks softly and clearly into the diaphragm as into a microphone, then sufficient
   * > communication is often possible despite hearing problems. The intimacy of the conversation
   * > can be preserved by this simple means.
   *
   * Sources:
   *
   * - [Ärztezeitung](https://www.aerztezeitung.de/Medizin/Das-Stethoskop-als-Hoerhilfe-213950.html)
   * - [BMJ 2010;341:c4672](https://www.bmj.com/content/341/bmj.c4672?ijkey=66f0d96a9e9bca9e8d5b85b5f35ee0177d7e4239&keytype2=tf_ipsecsha)
   */
  stethoscope?: Necessity;

  /**
   * The output is an LED.
   */
  led?: Necessity;

  /**
   * The light looks like it is breathing.
   */
  breathing?: Necessity;

  /**
   * The output has a haptic click feedback.
   */
  hapticClick?: Necessity;

  /**
   * The output has an acoustic click feedback.
   */
  audibleClick?: Necessity;

  /**
   * There is background music playing.
   */
  backgroundMusic?: Necessity;

  /**
   * The output uses music.
   */
  music?: Necessity;

  /**
   * The output uses one or more beeps as signal.
   */
  beep?: Necessity;

  /**
   * The output uses one or more bing-like signals.
   */
  bing?: Necessity;

  /**
   * The output uses a pitched tone as signal.
   */
  pitchedTone?: Necessity;

  /**
   * The output is visual.
   */
  visual?: Necessity;

  /**
   * The output is haptic.
   */
  haptic?: Necessity;

  /**
   * The output is tactile.
   */
  tactile?: Necessity;

  /**
   * The ability to smell is supported or needed.
   */
  smell?: Necessity;

  /**
   * Tasting something is supported or needed.
   */
  taste?: Necessity;

  /**
   * The output is acoustic.
   */
  sound?: Necessity;

  /**
   * `true` if the output is usually static and does not change over time, `false` if it is dynamic
   * and changes over time.
   */
  static?: boolean;

  /**
   * The perceiving person uses a provisional hearing aid, e.g. a stethoscope, a smartphone, or a
   * headset with a microphone that amplifies the sound or speech.
   */
  provisionalHearingAid?: Necessity;

  /**
   * The output has a dedicated screen for subtitles.
   */
  dedicatedScreenForSubtitles?: Necessity,

  /**
   * The output has subtitles.
   */
  subtitles?: Necessity;

  /**
   * The output has  audio description.
   */
  audioDescription?: Necessity;

  /**
   * The output has realtime captioning.
   */
  realTimeCaptioning?: Necessity;

  /**
   * The output has a plain language option.
   */
  plainLanguageOption?: Necessity;

  /**
   * Education level needed to understand the output.
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

  /**
   * The content is handwritten.
   */
  handwritten?: Necessity;

  /**
   * The output is a flashing light.
   */
  flash?: Necessity;

  /**
   * `true` if the output is a flashing hazard, `false` if there is explicitly no flashing hazard
   * and someone / something ensures this. This can be relevant for people with epilepsy.
   */
  flashingHazard?: boolean;

  /**
   * The output uses morse code.
   */
  morse?: Necessity;

  /**
   * The output uses one or more pictograms.
   */
  pictograms?: Necessity;

  /**
   * The output uses one or more numbers.
   */
  numbers?: Necessity;

  /**
   * The output is animated.
   */
  animation?: Necessity;

  /**
   * The ability to understand sign language is supported or needed.
   */
  signLanguage?: Necessity;

  /**
   * The ability to read braille is supported or needed.
   */
  braille?: Necessity;

  /**
   * The output has tactile guides, for example around buttons.
   */
  tactileGuides?: Necessity;

  /**
   * The output is using a buzzer / paging device.
   */
  buzzer?: Necessity;

  /**
   * The output is displayed on a screen.
   */
  screen?: Necessity;

  /**
   * The output is displayed on a paper.
   */
  paper?: Necessity;

  /**
   * The output is from a printer.
   */
  printer?: Necessity;

  /**
   * Heat perception is supported or needed.
   */
  heat?: Necessity;

  /**
   * The output uses one or more charts.
   */
  chart?: Necessity;

  /**
   * The output is displayed in high contrast.
   */
  highContrast?: Necessity;

  /**
   * The height you need to grip to perceive the content/output/signal.
   */
  necessaryGripHeight?: Length;

  /**
   * How tall do you have to be to perceive the content/output/signal.
   */
  necessaryEyeHeight?: Length;

  /**
   * The frequency of the output, for tones or flashes.
   */
  frequency?: Hertz;

  /**
   * Feedback force applied to the user.
   */
  force?: Force;

  /**
   * Feedback force applied to the user.
   */
  acceleration?: Acceleration;

  /**
   * The content/output/signal has active vibration feedback.
   */
  soundVolume?: Volume;

  /**
   * The output's brightness.
   */
  brightness?: Brightness;

  /**
   * Ambient noise level in dB(A) relative to a reference pressure of 0.00002 Pa. Median over a
   * 10-second period at least.
   */
  ambientNoiseLevel?: Volume;

  /**
   * Time interval in which the output is active.
   */
  duration?: TimeInterval;

  /**
   * Attention time span needed to understand the output.
   */
  attentionSpan?: TimeInterval;

  /**
   * The framerate of animations.
   */
  framerate?: Hertz;

  /**
   * The temperature of the output.
   */
  temperature?: Temperature;

  /**
   * The ambient temperature around the output.
   */
  ambientTemperature?: Temperature;

  /**
   * Font size used in the output.
   */
  fontSize?: Length;

  /**
   * The output uses black and white colors.
   */
  blackAndWhite?: boolean;

  /**
   * The output uses a discrete color code.
   */
  colorCode?: boolean;

  /**
   * The output uses a color gradient.
   */
  colorGradient?: boolean;

  /**
   * Foreground output HTML colors (for example, the text or icon color).
   */
  foregroundColors?: string[];

  /**
   * Background output HTML colors (for example, the background behind a text or icon).
   */
  backgroundColors?: string[];

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
   * A radio connection is supported or needed (e.g. WiFi, Bluetooth, NFC, etc.)
   */
  radio?: Necessity;

  /**
   * `true` if you can or have to perceive the content with a device that you own.
   */
  byod?: Necessity;

  /**
   * Technology combinations that are sufficient to make use of the content/output/signal.
   */
  techSufficient?: TechCombination[];

  /**
   * Technologies that are sufficient to make use of the content/output/signal.
   */
  techSupported?: TechCombination[];

  /**
   * URL where you can see or make use of the content/output/signal, e.g. on your phone.
   */
  url?: LocalizedString;

  /**
   * URL describing how to make use of the content/output/signal.
   */
  instructionsUrl?: LocalizedString;

  /**
   * The input API documentation URL.
   */
  apiDocumentationUrl?: string;

  /**
   * `true` if the input is easy to understand, `false` if people might face difficulties trying to
   * understand how the input works, or `undefined` if this is unknown or irrelevant.
   */
  isEasyToUnderstand?: boolean;

  /**
   * `true` if the input is easy to find.
   */
  isEasyToFind?: boolean;

  /**
   * The output needs high concentration to understand.
   */
  needsHighConcentration?: Necessity;

  /**
   * `true` if the system’s audio quality is good enough for understanding speech, `false` if it is
   * difficult.
   */
  audioIsComprehensible?: boolean;

  /**
   * Lists potential content warnings you have to expect here. User interfaces should not show the
   * content warning directly, but should instead show a button to show the content warning.
   */
  contentWarning?: LocalizedString;
}

export const getPerceptionModeSchemaDefinition: () => SchemaDefinition = () => ({
  languages: {
    type: Array,
    defaultValue: [],
    optional: true,
  },
  'languages.$': IETFLanguageCodeSchemaKeyDefinition,
  backgroundColors: {
    type: Array,
    optional: true,
  },
  foregroundColors: {
    type: Array,
    optional: true,
  },
  'backgroundColors.$': htmlColorSchemaDefinition,
  'foregroundColors.$': htmlColorSchemaDefinition,
  educationLevel: {
    type: Number,
    optional: true,
    allowedValues: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  },
  ...getLocalizedStringSchemaDefinition('contentWarning'),
  needsHighConcentration: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('attentionSpan', TimeIntervalSchema),
  audioIsComprehensible: BooleanField,
  optional: BooleanField,
  required: BooleanField,
  activationSignal: BooleanField,
  alarm: BooleanField,
  urgency: {
    type: String,
    optional: true,
    allowedValues: (Urgencies as any) as string[],
  },
  light: NecessityField,
  animation: NecessityField,
  static: NecessityField,
  byod: NecessityField,
  blackAndWhite: BooleanField,
  braille: NecessityField,
  breathing: NecessityField,
  button: NecessityField,
  cable: NecessityField,
  radio: NecessityField,
  chart: NecessityField,
  colorCode: NecessityField,
  colorGradient: BooleanField,
  flash: NecessityField,
  flashingHazard: BooleanField,
  fontSize: BooleanField,
  forceFeedback: NecessityField,
  handwritten: NecessityField,
  hapticClick: NecessityField,
  headphone: NecessityField,
  highContrast: BooleanField,
  isEasyToUnderstand: BooleanField,
  isEasyToFind: BooleanField,
  dedicatedScreenForSubtitles: NecessityField,
  subtitles: NecessityField,
  audioDescription: NecessityField,
  realTimeCaptioning: NecessityField,
  plainLanguageOption: NecessityField,
  led: NecessityField,
  morse: NecessityField,
  heat: NecessityField,
  music: NecessityField,
  backgroundMusic: NecessityField,
  numbers: NecessityField,
  pictograms: NecessityField,
  audibleClick: NecessityField,
  beep: NecessityField,
  bing: NecessityField,
  pitchedTone: NecessityField,
  rhythmic: NecessityField,
  qrCode: NecessityField,
  read: NecessityField,
  screen: NecessityField,
  buzzer: NecessityField,
  printer: NecessityField,
  paper: NecessityField,
  signLanguage: NecessityField,
  sound: NecessityField,
  smell: NecessityField,
  taste: NecessityField,
  haptic: NecessityField,
  tactile: NecessityField,
  visual: NecessityField,
  speech: NecessityField,
  tactileGuides: NecessityField,
  vibration: NecessityField,
  fullBody: NecessityField,
  stethoscope: NecessityField,
  provisionalHearingAid: NecessityField,
  apiDocumentationUrl: {
    type: String,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('description'),
  ...getLocalizedStringSchemaDefinition('instructionsUrl'),
  ...getLocalizedStringSchemaDefinition('name'),
  ...getLocalizedStringSchemaDefinition('url'),
  ...getPrefixedQuantitySchemaDefinition('ambientNoiseLevel', VolumeSchema),
  ...getPrefixedQuantitySchemaDefinition('brightness', BrightnessSchema),
  ...getPrefixedQuantitySchemaDefinition('fontSize', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('force', ForceSchema),
  ...getPrefixedQuantitySchemaDefinition('acceleration', AccelerationSchema),
  ...getPrefixedQuantitySchemaDefinition('framerate', HertzSchema),
  ...getPrefixedQuantitySchemaDefinition('frequency', HertzSchema),
  ...getPrefixedQuantitySchemaDefinition('soundVolume', VolumeSchema),
  ...getPrefixedQuantitySchemaDefinition('necessaryGripHeight', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('necessaryEyeHeight', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('antentionSpan', TimeIntervalSchema),
  ...getPrefixedQuantitySchemaDefinition('duration', TimeIntervalSchema),
  ...getPrefixedQuantitySchemaDefinition('temperature', TemperatureSchema),
  ...getPrefixedQuantitySchemaDefinition('ambientTemperature', TemperatureSchema),
  ...getPrefixedArraySchemaDefinition('techSufficient', getTechCombinationSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('techSupported', getTechCombinationSchemaDefinition()),
});
