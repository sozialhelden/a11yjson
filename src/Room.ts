import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import { AccessType, AccessTypes } from './AccessType.js';
import { getStructuredAddressSchemaDefinition, StructuredAddress } from './Address.js';
import BooleanField from './BooleanField.js';
import { Entrance, getEntranceSchemaDefinition } from './Entrance.js';
import { EntranceProperties, getEntrancePropertiesSchemaDefinition } from './EntranceProperties.js';
import { getInteractableSchemaDefinition, Interactable } from './Interactable.js';
import getPrefixedSchemaDefinition, { getPrefixedArraySchemaDefinition } from './lib/getPrefixedSchemaDefinition.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchema } from './Quantity.js';

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
  'callEmergency',
] as const;
export type RoomInteraction = typeof RoomInteractions[number];
export const RoomInteractionsSet = new Set(RoomInteractions);

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

  /**
   * How wide is the space inside that you can use for turning?
   */
  turningSpaceInside?: Length;

  /**
   * `true` if there support rails on the walls
   */
  hasSupportRails?: boolean;

  /**
   * Object describing the entrance to this room.
   */
  entrance?: EntranceProperties;

  /**
   * Object describing the entrance to this room.
   */
  entrances?: Entrance[];

  /**
   * Defines who this room is for. See https://wiki.openstreetmap.org/wiki/Key:access for more information.
   */
  access?: AccessType[];

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
  ...getInteractableSchemaDefinition(RoomInteractionsSet),
  ...getPrefixedSchemaDefinition('entrance', getEntrancePropertiesSchemaDefinition()),
  ...getPrefixedArraySchemaDefinition('entrances', getEntranceSchemaDefinition()),
  ...getPrefixedQuantitySchemaDefinition('turningSpaceInside', LengthSchema),
  hasSupportRails: BooleanField,
  access: {
    type: Array,
    optional: true,
  },
  'access.$': {
    type: String,
    allowedValues: (AccessTypes as any) as any[],
  },
});
