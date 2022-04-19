import { IetfLanguageTag } from './ietfLanguageTags';
import { Force } from './Quantity';

/**
 * EXPERIMENTAL. Describes necessary abilities and modes inputting information.
 */
export type InputMode = {
  /**
   * The ability to speak is supported or needed.
   */
  speech?: boolean,

  spokenLanguages?: IetfLanguageTag[],

  signLanguage?: boolean,

  /**
   * Tactile input is supported or needed.
   */
  tactile?: boolean,

  /**
   * The ability to read braille is supported or needed.
   */
  readBraille?: boolean,

  /**
   * The ability to write textual content by hand is supported or needed.
   */
  handwriting?: boolean,

  /**
   * The ability to write textual content by typing on a keyboard is supported or needed.
   */
  keyboard?: boolean,

  /**
   * The ability to use a mouse is supported or needed.
   */

  mouse?: boolean,

  /**
   * The ability to use a trackball is supported or needed.
   */
  trackball?: boolean,

  /**
   * The ability to use a push switch is supported or needed.
   */
  pushSwitch?: boolean,

  /**
   * The ability to use a pull switch is supported or needed.
   */
  pullSwitch?: boolean,

  /**
   * The ability to use a pullstring is supported or needed.
   */
  pullstring?: boolean,

  /**
   * The input has active force feedback.
   */
  forceFeedback?: boolean,

  /**
   * The input has haptic active feedback.
   */

  hapticFeedback?: boolean,

  /**
   * The input has tactile guides, for example around buttons.
   */
  tactileGuides?: boolean,

  /**
   * Touchscreen input is supported or needed.
   */
  touchscreen?: boolean,

  /**
   * Touch input is supported or needed.
   */
  touch?: boolean,

  /**
   * The ability to apply force to an object is supported or needed.
   */
  press?: boolean,

  /**
   * Force needed when pressing buttons / objects.
   */
  necessaryForce?: Force,
};
