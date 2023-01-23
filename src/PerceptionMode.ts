import { SchemaDefinition } from 'simpl-schema/dist/esm/types';
import BooleanField from './BooleanField';
import htmlColorSchemaDefinition from './htmlColorSchemaDefinition';
import IETFLanguageCodeSchemaKeyDefinition, { IETFLanguageTag } from './ietfLanguageTags';
import { getPrefixedArraySchemaDefinition } from './lib/getPrefixedSchemaDefinition';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';
import {
  Force,
  Length,
  getPrefixedQuantitySchemaDefinition,
  LengthSchemaDefinition,
  Volume,
  VolumeSchemaDefinition,
  Hertz,
  HertzSchemaDefinition,
  Brightness,
  BrightnessSchemaDefinition,
  ForceSchemaDefinition,
  TimeIntervalSchemaDefinition,
  TimeInterval,
  Acceleration,
  AccelerationSchemaDefinition,
  Temperature,
  TemperatureSchemaDefinition,
} from './Quantity';
import { getTechCombinationSchemaDefinition, TechCombination } from './TechCombination';

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
   * `false` if the perception is optional, `true` if it is required.
   */
  required?: boolean;

  /**
   * The ability to understand speech is supported or needed.
   */
  speech?: boolean;

  /**
   * The output is an activation/engagement signal.
   */
  activationSignal?: boolean;

  /**
   * The output is urgent.
   */
  urgent?: boolean;

  /**
   * The output is an information without high urgency.
   */
  info?: boolean;

  /**
   * The output is an alarm.
   */
  alarm?: boolean;

  /**
   * The output is a warning.
   */
  warning?: boolean;

  /**
   * The output is a light.
   */
  light?: boolean;

  /**
   * The output is visual.
   */
  visual?: boolean;

  /**
   * The ability to read is supported or needed.
   */
  read?: boolean;

  /**
   * The content/output/signal has active force feedback.
   */
  forceFeedback?: boolean;

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
  vibration?: boolean;

  /**
   * The content/output/signal has active vibration feedback.
   */
  soundVolume?: Volume;

  /**
   * The content/output/signal affects your full body.
   */
  fullBody?: boolean;

  /**
   * The output is an LED.
   */
  led?: boolean;

  /**
   * The light looks like it is breathing.
   */
  breathing?: boolean;

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
   * The output has a haptic click feedback.
   */
  hapticClick?: boolean;

  /**
   * The output has an acoustic click feedback.
   */
  audibleClick?: boolean;

  /**
   * There is background music playing.
   */
  backgroundMusic?: boolean;

  /**
   * The output uses music.
   */
  music?: boolean;

  /**
   * The output uses one or more beeps as signal.
   */
  beep?: boolean;

  /**
   * The output uses one or more bing-like signals.
   */
  bing?: boolean;

  /**
   * The output uses a pitched tone as signal.
   */
  pitchedTone?: boolean;

  /**
   * The output is haptic.
   */
  haptic?: boolean;

  /**
   * The output is rhythmic.
   */
  rhythmic?: boolean;

  /**
   * `true` if the output is usually static and does not change over time, `false` if it is dynamic
   * and changes over time.
   */
  static?: boolean;

  /**
   * Time interval in which the output is active.
   */
  duration?: TimeInterval;

  /**
   * Attention time span needed to understand the output.
   */
  attentionSpan?: TimeInterval;

  /**
   * The ability to smell is supported or needed.
   */
  smell?: boolean;

  /**
   * Tasting something is supported or needed.
   */
  taste?: boolean;

  /**
   * The output needs high concentration to understand.
   */
  needsHighConcentration?: boolean;

  /**
   * The output has a dedicated screen for subtitles.
   */
  dedicatedScreenForSubtitles?: boolean,

  /**
   * The output has subtitles.
   */
  subtitles?: boolean;

  /**
   * The output has  audio description.
   */
  audioDescription?: boolean;

  /**
   * The output has realtime captioning.
   */
  realTimeCaptioning?: boolean;

  /**
   * The output has a plain language option.
   */
  plainLanguageOption?: boolean;

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
  handwritten?: boolean;

  /**
   * The output is a flashing light.
   */
  flash?: boolean;

  /**
   * `true` if the output is a flashing hazard, `false` if there is explicitly no flashing hazard
   * and someone / something ensures this. This can be relevant for people with epilepsy.
   */
  flashingHazard?: boolean;

  /**
   * The frequency of the output, for tones or flashes.
   */
  frequency?: Hertz;

  /**
   * The output uses morse code.
   */
  morse?: boolean;

  /**
   * The output uses one or more pictograms.
   */
  pictograms?: boolean;

  /**
   * The output uses one or more numbers.
   */
  numbers?: boolean;

  /**
   * The output is animated.
   */
  animation?: boolean;

  /**
   * The framerate of animations.
   */
  framerate?: Hertz;

  /**
   * The output is acoustic.
   */
  sound?: boolean;

  /**
   * The ability to understand sign language is supported or needed.
   */
  signLanguage?: boolean;

  /**
   * The output is tactile.
   */
  tactile?: boolean;

  /**
   * The ability to read braille is supported or needed.
   */
  braille?: boolean;

  /**
   * The output has tactile guides, for example around buttons.
   */
  tactileGuides?: boolean;

  /**
   * The output is displayed on a screen.
   */
  screen?: boolean;

  /**
   * The output is displayed on a paper.
   */
  paper?: boolean;

  /**
   * The output is from a printer.
   */
  printer?: boolean;

  /**
   * Heat perception is supported or needed.
   */
  heat?: boolean;

  /**
   * The temperature of the output.
   */
  temperature?: Temperature;

  /**
   * The ambient temperature around the output.
   */
  ambientTemperature?: Temperature;

  /**
   * The output uses one or more charts.
   */
  chart?: boolean;

  /**
   * The output is displayed in high contrast.
   */
  highContrast?: boolean;

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
   * A radio connection is supported or needed (e.g. WiFi, Bluetooth, NFC, etc.)
   */
  radio?: boolean;

  /**
   * `true` if you can or have to perceive the content with a device that you own.
   */
  byod?: boolean;

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
   * The height you need to grip to perceive the content/output/signal.
   */
  necessaryGripHeight?: Length;

  /**
   * How tall do you have to be to perceive the content/output/signal.
   */
  necessaryEyeHeight?: Length;

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
  light: BooleanField,
  needsHighConcentration: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('attentionSpan', TimeIntervalSchemaDefinition),
  audioIsComprehensible: BooleanField,
  optional: BooleanField,
  required: BooleanField,
  activationSignal: BooleanField,
  alarm: BooleanField,
  warning: BooleanField,
  info: BooleanField,
  urgent: BooleanField,
  animation: BooleanField,
  animationFramerate: BooleanField,
  static: BooleanField,
  byod: BooleanField,
  audibleClick: BooleanField,
  beep: BooleanField,
  bing: BooleanField,
  blackAndWhite: BooleanField,
  braille: BooleanField,
  breathing: BooleanField,
  smell: BooleanField,
  taste: BooleanField,
  button: BooleanField,
  cable: BooleanField,
  radio: BooleanField,
  chart: BooleanField,
  colorCode: BooleanField,
  colorGradient: BooleanField,
  flash: BooleanField,
  flashingHazard: BooleanField,
  fontSize: BooleanField,
  forceFeedback: BooleanField,
  handwritten: BooleanField,
  haptic: BooleanField,
  hapticClick: BooleanField,
  headphone: BooleanField,
  highContrast: BooleanField,
  isEasyToUnderstand: BooleanField,
  isEasyToFind: BooleanField,
  dedicatedScreenForSubtitles: BooleanField,
  subtitles: BooleanField,
  audioDescription: BooleanField,
  realTimeCaptioning: BooleanField,
  plainLanguageOption: BooleanField,
  led: BooleanField,
  morse: BooleanField,
  heat: BooleanField,
  music: BooleanField,
  backgroundMusic: BooleanField,
  numbers: BooleanField,
  pictograms: BooleanField,
  pitchedTone: BooleanField,
  qrCode: BooleanField,
  read: BooleanField,
  rhythmic: BooleanField,
  screen: BooleanField,
  printer: BooleanField,
  paper: BooleanField,
  signLanguage: BooleanField,
  sound: BooleanField,
  speech: BooleanField,
  tactile: BooleanField,
  visual: BooleanField,
  tactileGuides: BooleanField,
  vibration: BooleanField,
  fullBody: BooleanField,
  apiDocumentationUrl: {
    type: String,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('description'),
  ...getLocalizedStringSchemaDefinition('instructionsUrl'),
  ...getLocalizedStringSchemaDefinition('name'),
  ...getLocalizedStringSchemaDefinition('url'),
  ...getPrefixedQuantitySchemaDefinition('ambientNoiseLevel', VolumeSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('brightness', BrightnessSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('fontSize', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('force', ForceSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('acceleration', AccelerationSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('framerate', HertzSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('frequency', HertzSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('soundVolume', VolumeSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('necessaryGripHeight', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('necessaryEyeHeight', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('antentionSpan', TimeIntervalSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('duration', TimeIntervalSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('temperature', TemperatureSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('ambientTemperature', TemperatureSchemaDefinition),
  ...getPrefixedArraySchemaDefinition('techSufficient', getTechCombinationSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('techSupported', getTechCombinationSchemaDefinition()),
});
