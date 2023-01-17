import BooleanField from './BooleanField';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';

export interface Mirror {
  /**
   * `true` if the mirror is located inside the restroom, `false` if not, `undefined` if
   * condition is unknown.
   */
  isLocatedInsideRestroom?: boolean;
  /**
   * `true` if the mirror is accessible while sitting in a wheelchair, `false` if not, `undefined`
   * if condition is unknown.
   */
  isAccessibleWhileSeated: boolean;
  /**
   * How far is the mirror's bottom from the ground?
   */
  heightFromGround: Length;
}

export const getMirrorSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  isLocatedInsideRestroom: BooleanField,
  isAccessibleWhileSeated: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('heightFromGround', LengthSchemaDefinition),

});
