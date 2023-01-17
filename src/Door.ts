import { AccessType, accessTypes } from './AccessType';
import BooleanField from './BooleanField';
import { getInteractableSchemaDefinition, Interactable } from './Interactable';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import {
  ForceSchemaDefinition,
  getPrefixedQuantitySchemaDefinition,
  Length,
  LengthSchemaDefinition,
  SpeedSchemaDefinition,
} from './Quantity';

/**
 * Describes the door of a place's entrance or to one of its facilities (e.g. to a shower, or to
 * an elevator)
 */
export interface Door extends Interactable {
  /**
   * Turning space in front of the door.
   */
  turningSpaceInFront?: Length;
  /**
   * `true` if the door opens to the outside, `false` if it opens to the inside.
   */
  doorOpensToOutside?: boolean;
  /**
   * `true` if the door is always open or automatic, `false` if it has to be opened manually.
   * @deprecated Use `isAutomatic`, `isAlwaysOpen` or `isManual` instead.
   */
  isAutomaticOrAlwaysOpen?: boolean;

  /**
   * `true` if the door opens automatically, `false` if not. The mechanism for opening the door is
   * defined in other attributes.
   * @deprecated
   */
  isAutomatic?: boolean;

  /**
   * `true` if the door has a proximity sensor that triggers the opening mechanism, `false` if not.
   */
  hasProximitySensor?: boolean;

  /**
   * `true` if the door has a switch that triggers the opening mechanism, `false` if not.
   */
  hasSwitch?: boolean;

  /**
   * `true` if the door needs pressing a switch to open, `false` if not.
   */
  needsSwitchToOpen?: boolean;

  /**
   * Width of the door.
   */
  width?: Length;

  /**
   * `true` if the door is a sliding door, `false` if not.
   */
  isSliding?: boolean;
  /**
   * `true` if the door is a glass door, `false` if not.
   */
  isGlassDoor?: boolean;
  /**
   * `true` if the door is a glass door, but is marked, `false` if the door is an unmarked glass
   * door, `undefined` if it is no glass door or the condition is unknown.
   */
  hasClearMarkingOnGlassDoor?: boolean;
  /**
   * `true` if the door is easy to hold open (subjectively by the assessor), `false` if not.
   */
  isEasyToHoldOpen?: boolean;
  /**
   * `true` if the door's handle is easy to use (subjectively by the assessor), `false` if not.
   */
  hasErgonomicDoorHandle?: boolean;
  /**
   * `true` if the door is revolving (like a carousel), `false` if not.
   */
  isRevolving?: boolean;
  /**
   * `true` if the door is a turnstile, `false` if not.
   */
  isTurnstile?: boolean;
  /**
   * `true` if you need a [RADAR key](https://en.wikipedia.org/wiki/Disability_Rights_UK#National_Key_Scheme)
   * to open the door, `false` if it's in the UK but you need no key
   * or needs a different key.
   */
  needsRadarKey?: boolean;
  /**
   * `true` if you need a [Euro key](https://en.wikipedia.org/wiki/Euro_key) to open the door,
   * `false` if it's in Europe outside UK and works without a key, `undefined` if it is unknown or
   * needs a different key.
   */
  needsEuroKey?: boolean;
  /**
   * `true` if you need to use a keycard to pass the entrance, `false` if not.
   */
  needsKeyCard?: boolean;
  /**
   * `true` if you need to use a key pad to pass this door, `false` if not.
   */
  needsKeyPad?: boolean;
  /**
   * `true` if you need to ring a doorbell to pass the entrance, `false` if not.
   */
  needsDoorbell?: boolean;
  /**
   * Height of the door bell's top button. If there is a lowered extra door bell (often marked with
   * a wheelchair user symbol), use the height of this one's top button.
   */
  doorbellTopButtonHeight?: Length;
  /**
   * `true` if the door has an intercom system, `false` if not.
   */
  hasIntercom?: boolean;
  /**
   * `true` if you need to use the intercom to pass this door, `false` if not.
   */
  needsIntercom?: boolean;
  /**
   * Defines who this door is for. See https://wiki.openstreetmap.org/wiki/Key:access for more
   * information.
   */
  access?: AccessType[];
}

export const getDoorSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  doorOpensToOutside: {
    type: Boolean,
    optional: true,
  },
  isAutomaticOrAlwaysOpen: {
    type: Boolean,
    optional: true,
  },
  isAutomatic: {
    type: Boolean,
    optional: true,
  },
  hasProximitySensor: {
    type: Boolean,
    optional: true,
  },
  hasSwitch: {
    type: Boolean,
    optional: true,
  },
  needsSwitchToOpen: {
    type: Boolean,
    optional: true,
  },
  isTurnstile: {
    type: Boolean,
    optional: true,
  },
  ...getPrefixedQuantitySchemaDefinition('width', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('turningSpaceInFront', LengthSchemaDefinition),
  hasClearMarkingOnGlassDoor: {
    type: Boolean,
    optional: true,
  },
  isEasyToHoldOpen: {
    type: Boolean,
    optional: true,
  },
  hasErgonomicDoorHandle: {
    type: Boolean,
    optional: true,
  },
  isRevolving: {
    type: Boolean,
    optional: true,
  },
  needsRadarKey: {
    type: Boolean,
    optional: true,
  },
  needsEuroKey: {
    type: Boolean,
    optional: true,
  },
  isSliding: {
    type: Boolean,
    optional: true,
  },
  isGlassDoor: {
    type: Boolean,
    optional: true,
  },
  needsKeyCard: {
    type: Boolean,
    optional: true,
  },
  needsKeyPad: {
    type: Boolean,
    optional: true,
  },
  needsDoorbell: {
    type: Boolean,
    optional: true,
  },
  ...getPrefixedQuantitySchemaDefinition('doorbellTopButtonHeight', LengthSchemaDefinition),
  hasIntercom: {
    type: Boolean,
    optional: true,
  },
  needsIntercom: {
    type: Boolean,
    optional: true,
  },
  access: {
    type: Array,
    optional: true,
  },
  'access.$': {
    type: String,
    allowedValues: accessTypes,
  },
  ...getPrefixedQuantitySchemaDefinition('openingForce', ForceSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('closingSpeed', SpeedSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('latchingSpeed', SpeedSchemaDefinition),
  ...getInteractableSchemaDefinition(),
});
