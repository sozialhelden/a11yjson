import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
import { getStructuredAddressSchemaDefinition, StructuredAddress } from './Address.js';
import BooleanField from './BooleanField.js';
import { getInteractableSchemaDefinition, Interactable } from './Interactable.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';

export const RoomInteractions = [
  'enter',
  'exit',
  'stand',
  'sit',
  'see',
  'sleep',
  'play',
  'wait',
  'storeThings',
  'lookAround',
  'openWindow',
  'closeWindow',
] as const;
export type RoomInteraction = typeof RoomInteractions[number];

/**
 * Describes a room inside a structure.
 */
export interface Room extends Interactable<RoomInteraction> {
  /**
   * `true` if the room's relevant facilities are completely accessible while using a wheelchair,
   * `false` if not, `undefined` if the condition is unknown or difficult to assess.
   */
  isAccessibleWithWheelchair?: boolean;

  sameAs?: string[];
  address?: StructuredAddress;
  description?: LocalizedString;
}

export const getRoomSchemaDefinition: () => SchemaDefinition = () => ({
  isAccessibleWithWheelchair: BooleanField,
  sameAs: {
    type: Array,
    optional: true,
  },
  'sameAs.$': {
    type: String,
  },
  ...getPrefixedSchemaDefinition('address', getStructuredAddressSchemaDefinition()),
  ...getLocalizedStringSchemaDefinition('description'),
  ...getInteractableSchemaDefinition(RoomInteractions),
});
