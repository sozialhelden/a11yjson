import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchema } from './Quantity.js';
import BooleanField from './BooleanField.js';

/**
 * The `Sills` interface describes one or more sills / thresholds that have to be crossed
 * on the way, for example at a door. Sills are a separate, explicitly-recorded fact from
 * steps: a stepless way can still have sills.
 */
export interface Sills {
  /**
   * Number of sills / thresholds.
   */
  count?: number;
  /**
   * Indicates how high the highest sill / threshold on the way is (can be a range).
   */
  height?: Length;
  /**
   * `true` if the relevant sills are rounded (easier to cross), `false` if not.
   */
  isRounded?: boolean;
}

export const getSillsSchemaDefinition: () => SchemaDefinition = () => ({
  /// number of sills
  count: {
    type: 'SimpleSchema.Integer',
    optional: true,
  },
  ...getPrefixedQuantitySchemaDefinition('height', LengthSchema),
  isRounded: BooleanField,
});
