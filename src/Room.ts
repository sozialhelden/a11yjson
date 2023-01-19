import { SchemaDefinition } from 'simpl-schema/dist/esm/types';
import { getStructuredAddressSchemaDefinition, StructuredAddress } from './Address';
import BooleanField from './BooleanField';
import { getInteractableSchemaDefinition, Interactable } from './Interactable';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';

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
