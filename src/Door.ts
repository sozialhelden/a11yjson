import { SchemaDefinition } from 'simpl-schema/dist/esm/types';
import { AccessType, AccessTypes } from './AccessType';
import BooleanField from './BooleanField';
import { getGrabBarsSchemaDefinition, GrabBars } from './GrabBars';
import htmlColorSchemaDefinition from './htmlColorSchemaDefinition';
import { getInteractableSchemaDefinition, Interactable } from './Interactable';
import { getInteractionModeSchemaDefinition } from './InteractionMode';
import { getIntercomSchemaDefinition, Intercom } from './Intercom';
import getPrefixedSchemaDefinition, { getPrefixedArraySchemaDefinition } from './lib/getPrefixedSchemaDefinition';
import {
  ForceSchemaDefinition,
  getPrefixedQuantitySchemaDefinition,
  Length,
  LengthSchemaDefinition,
  SpeedSchemaDefinition,
} from './Quantity';

export const DoorInteractions = ['ringDoorbell', 'open', 'close', 'unlock', 'lock', 'unlockAndLock', 'openAndClose'] as const;

export type DoorInteraction = typeof DoorInteractions[number];

/**
 * Describes the door of a place's entrance or to one of its facilities (e.g. to a shower, or to
 * an elevator)
 */
export interface Door extends Interactable<DoorInteraction> {
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
   */
  isAutomatic?: boolean;

  /**
   * `true` if the door is there, but always open, `false` if not.
   */
  isAlwaysOpen?: boolean;

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
   * Height of the door’s threshold / sill / step inside the door frame.
   */
  thresholdHeight?: Length;

  /**
   * `true` if the threshold has rounded edges, `false` if not.
   */
  thresholdIsRounded?: boolean;

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
   * Describes the intercom system of the door.
   */
  intercom?: Intercom;

  /**
   * Describes grab bars in front of the door.
   */
  grabBars?: GrabBars;

  /**
   * Defines who this door is for. See https://wiki.openstreetmap.org/wiki/Key:access for more
   * information.
   */
  access?: AccessType[];

  /**
   * `true` if the door is visually contrasted to its surrounding wall, `false` if not.
   */
  isVisuallyContrasted?: boolean;

  /**
   * `true` if the door frame is visually contrasted to its surrounding wall, `false` if not.
   */
  hasVisuallyContrastedFrame?: boolean;

  /**
   * Describes the colors of the door itself, as HTML color strings. Don't include the door frame or
   * door marking colors in this attribute, but use `markingColors` and `doorFrameColors` instead.
   *
   * This can make the door easier to find.
   *
   * If there are multiple colors, it might be enough to describe the most dominant one.
   *
   * If there are multiple colors, but there is no predominant color, describe all of them.
   *
   * This allows to determine the contrast to the wall and the door frame.
   *
   * Its best to determine the color at daylight.
   *
   * For glass doors, you can use 'transparent' as color.
   */
  colors?: string[];

  /**
   * Describes the colors of a door marking, if existent, as HTML color strings.
   *
   * This can make the door easier to find.
   *
   * If there are multiple colors, it might be enough to describe the most dominant one.
   *
   * If there are multiple colors, but there is no predominant color, describe all of them.
   *
   * Its best to determine the color at daylight.
   *
   */
  markingColors?: string[];

  /**
   * Describes the colors of the door frame, if existent. If they are similar, describe only one
   * color. Use HTML color strings here.
   *
   * This can make the door easier to find, and allows to determine the contrast to the door and
   * the wall.
   *
   * If there are multiple colors, it might be enough to describe the most dominant one.
   *
   * If there are multiple colors, but there is no predominant color, describe all of them.
   *
   * Its best to determine the color at daylight.
   */
  doorFrameColors?: string[];

  /**
   * Describes the colors of the walls right next the door. Use HTML color strings here.
   *
   * This can make the door easier to find, and allows to determine the contrast to the door frame
   * and the door.
   *
   * - If there are multiple colors, it might be enough to describe the most dominant one.
   * - If there are multiple colors, but there is no predominant color, describe all of them.
   *
   * Its best to determine the color at daylight.
   */
  nearbyWallColors?: string[];
}

export const getDoorSchemaDefinition: () => SchemaDefinition = () => ({
  doorOpensToOutside: BooleanField,
  isAutomaticOrAlwaysOpen: BooleanField,
  isAutomatic: BooleanField,
  isAlwaysOpen: BooleanField,
  hasProximitySensor: BooleanField,
  hasSwitch: BooleanField,
  needsSwitchToOpen: BooleanField,
  isTurnstile: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('width', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('thresholdHeight', LengthSchemaDefinition),
  thresholdIsRounded: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('turningSpaceInFront', LengthSchemaDefinition),
  hasClearMarkingOnGlassDoor: BooleanField,
  isEasyToHoldOpen: BooleanField,
  hasErgonomicDoorHandle: BooleanField,
  isRevolving: BooleanField,
  needsRadarKey: BooleanField,
  needsEuroKey: BooleanField,
  isSliding: BooleanField,
  isGlassDoor: BooleanField,
  needsKeyCard: BooleanField,
  needsKeyPad: BooleanField,
  needsDoorbell: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('doorbellTopButtonHeight', LengthSchemaDefinition),
  hasIntercom: BooleanField,
  needsIntercom: BooleanField,
  access: {
    type: Array,
    optional: true,
  },
  'access.$': {
    type: String,
    allowedValues: (AccessTypes as any) as any[],
  },
  ...getPrefixedSchemaDefinition('intercom', getIntercomSchemaDefinition()),
  ...getPrefixedSchemaDefinition('grabBars', getGrabBarsSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('interactions.doorbell', getInteractionModeSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('interactions.unlock', getInteractionModeSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('interactions.open', getInteractionModeSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('interactions.close', getInteractionModeSchemaDefinition()),
  ...getPrefixedQuantitySchemaDefinition('openingForce', ForceSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('closingSpeed', SpeedSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('latchingSpeed', SpeedSchemaDefinition),
  isVisuallyContrasted: BooleanField,
  hasVisuallyContrastedFrame: BooleanField,
  colors: {
    type: Array,
    optional: true,
  },
  'colors.$': {
    type: String,
  },
  markingColors: {
    type: Array,
    optional: true,
  },
  'markingColors.$': htmlColorSchemaDefinition,
  doorFrameColors: {
    type: Array,
    optional: true,
  },
  'doorFrameColors.$': htmlColorSchemaDefinition,
  nearbyWallColors: {
    type: Array,
    optional: true,
  },
  'nearbyWallColors.$': htmlColorSchemaDefinition,
  ...getInteractableSchemaDefinition(DoorInteractions),
});
