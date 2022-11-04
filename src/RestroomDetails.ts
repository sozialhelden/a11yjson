export interface RestroomDetails {
  /**
   * `true` if the wash basin is accessible, `false` if not, `undefined` if condition is unknown.
   */
  hasAccessibleWashBasin?: boolean;
  /**
   * `true` if the toilet is reachable via wheelchair, `false` if not, `undefined` if condition is unknown. 
   */
  isReachableWithWheelchair?: boolean;
  /**
   * `true` if the door is at least 90 cm wide, `false` if not, `undefined` if condition is unknown. 
   */
  hasMin90cmWideDoor?: boolean;
  /**
   * 
   */
  hasWideTurningSpace?: boolean;

}

export const getRestroomDetailsSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  hasAccessibleWashBasin: {
    type: Boolean,
    optional: true,
  },
  isReachableWithWheelchair: {
    type: Boolean,
    optional: true,
  },
  hasMin90cmWideDoor: {
    type: Boolean,
    optional: true,
  },
  hasWideTurningSpace: {
    type: Boolean,
    optional: true,
  },  
});
