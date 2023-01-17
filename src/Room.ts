import { getStructuredAddressSchemaDefinition, StructuredAddress } from './Address';
import BooleanField from './BooleanField';
import { Interactable } from './Interactable';
import { getInteractionModeSchemaDefinition } from './InteractionMode';
import getPrefixedSchemaDefinition, { getPrefixedArraySchemaDefinition } from './lib/getPrefixedSchemaDefinition';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';

/**
 * Describes a room inside a structure.
 */
export interface Room extends Interactable {
  /**
   * `true` if the room's relevant facilities are completely accessible while using a wheelchair,
   * `false` if not, `undefined` if the condition is unknown or difficult to assess.
   */
  isAccessibleWithWheelchair?: boolean;

  sameAs?: string[];
  address?: StructuredAddress;
  description?: LocalizedString;
}

export const getRoomSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
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
  ...getPrefixedArraySchemaDefinition('interactions', getInteractionModeSchemaDefinition()),
});
