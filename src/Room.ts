import { getStructuredAddressSchemaDefinition, StructuredAddress } from './Address';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';

export interface Room {
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
  isAccessibleWithWheelchair: {
    type: Boolean,
    optional: true,
  },
  sameAs: {
    type: Array,
    optional: true,
  },
  'sameAs.$': {
    type: String,
  },
  ...getPrefixedSchemaDefinition('address', getStructuredAddressSchemaDefinition()),
  ...getLocalizedStringSchemaDefinition('description'),
});
