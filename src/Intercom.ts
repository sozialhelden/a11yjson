import { SchemaDefinition } from 'simpl-schema/dist/esm/types';
import BooleanField from './BooleanField';
import { getInteractableSchemaDefinition, Interactable } from './Interactable';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';
import {
  getPrefixedQuantitySchemaDefinition,
  Length,
  LengthSchemaDefinition,
  Volume,
  VolumeSchemaDefinition,
} from './Quantity';

export const IntercomInteractions = ['ring', 'call', 'hangUp', 'open', 'close', 'identify'] as const;
export type IntercomInteraction = typeof IntercomInteractions[number];

/**
 * Describes a system to communicate over distance, e.g. a door intercom next to a doorbell.
 */
export interface Intercom extends Interactable<IntercomInteraction> {
  description?: LocalizedString;

  /**
   * The ambient noise level when using the intercom.
   */
  ambientNoiseLevel?: Volume;

  /**
   * The height of the top control element of the intercom system.
   */
  necessaryGripHeight?: Length;

  /**
   * `true` if the door has an audio intercom system, `false` if not.
   */
  hasAudio?: boolean;

  /**
   * `true` if intercom system’s audio quality is good enough for understanding speech, `false`
   * if not.
   */
  audioIsComprehensible?: boolean;

  /**
   * `true` if the door has a video intercom system, `false` if not.
   */
  hasVideoCamera?: boolean;

  /**
   * `true` if the intercom system has a visual feedback, `false` if not. Visual feedback might be
   * a screen or light that displays if a connection is established.
   */
  hasVisualFeedbackOnConnection?: boolean;

  /**
   * `true` if you need to use a key pad to pass this door, `false` if not.
   */
  needsKeyPad?: boolean;
}

export const getIntercomSchemaDefinition: () => SchemaDefinition = () => ({
  ...getLocalizedStringSchemaDefinition('description'),
  ...getPrefixedQuantitySchemaDefinition('ambientNoiseLevel', VolumeSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('necessaryGripHeight', LengthSchemaDefinition),
  hasAudio: BooleanField,
  audioIsComprehensible: BooleanField,
  hasVideoCamera: BooleanField,
  hasVisualFeedbackOnConnection: BooleanField,
  needsKeyPad: BooleanField,
  ...getInteractableSchemaDefinition(IntercomInteractions),
});
