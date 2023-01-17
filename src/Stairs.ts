import SimpleSchema from 'simpl-schema';
import { t } from 'ttag';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';
import BooleanField from './BooleanField';

/**
 * The `Stairs` interface describes one or more walkable stairs.
 */
export interface Stairs {
  /**
   * Number of steps.
   */
  count?: number;
  /**
   * `true` if all relevant steps have a high contrast nosing.
   */
  hasHighContrastNosing?: boolean;
  /**
   * `true` if all relevant steps are made with anti-slip material.
   */
  hasAntiSlipNosing?: boolean;
  /**
   * Do the stairs have metal grating? This is difficult to navigate for people with assistance
   * dogs.
   */
  hasMetalGrating?: boolean;
  /**
   * Are the stairs and podests well lit?
   */
  isWellLit?: boolean;
  /**
   * If there are multiple staircase, you SHOULD indicate a name for this staircase here.
   */
  name?: LocalizedString;
  /**
   * Indicates how high the steps if these stairs are (can be a range).
   */
  stepHeight?: Length;
  /**
   * `true` if there is a handrail covering all relevant steps, `false` if not.
   */
  hasHandRail?: boolean;
  /**
   * `true` if there is tactile navigation in this staircase, `false` if not.
   */
  hasTactileSignage?: boolean;
  /**
   * `true` if there is braille navigation in this staircase, `false` if not.
   */
  hasBrailleSignage?: boolean;
  /**
   * You SHOULD reference alternative equipment IDs with this field, for example elevators,
   * escalators, or hoists.
   */
  alternativeMobileEquipmentIds?: Array<string>;
  /**
   * `true` if all relevant steps have tactile safety surfaces, used as warnings, implying textures
   * detectable with the touch of a foot or sweep of a cane.
   */
  hasTactileSafetyStrips?: boolean;
}

export const getStairsSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  /// number of steps
  count: {
    type: SimpleSchema.Integer,
    optional: true,
  },
  nosing: {
    type: Object,
    optional: true,
  },
  hasHighContrastNosing: BooleanField,
  hasAntiSlipNosing: BooleanField,
  hasMetalGrating: BooleanField,
    optional: true,
  },
  isWellLit: {
    type: Boolean,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('name'),
  ...getPrefixedQuantitySchemaDefinition('stepHeight', LengthSchemaDefinition),
  hasHandRail: BooleanField,
  hasTactileSafetyStrips: BooleanField,
  hasBrailleSignage: BooleanField,
  hasTactileSignage: BooleanField,
  alternativeMobileEquipmentIds: {
    type: Array,
    optional: true,
  },
  'alternativeMobileEquipmentIds.$': {
    type: String,
    label: t`accessibility.cloud Equipment ID`,
  },
});
