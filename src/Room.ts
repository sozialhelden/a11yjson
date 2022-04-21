export interface Room {
  // QUESTION is this calculated from the subfields or can this go away?
  /**
   * `true` if the room's relevant facilities are completely accessible while using a wheelchair,
   * `false` if not, `undefined` if the condition is unknown or difficult to assess.
   */
  isAccessibleWithWheelchair?: boolean;

  sameAs?: string[];
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
});
