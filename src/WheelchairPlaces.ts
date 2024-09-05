import { SchemaDefinition } from '@sozialhelden/simpl-schema';

/**
 * The WheelchairPlaces interface describes the presence of reserved spots for wheelchairs.
 */
export interface WheelchairPlaces {
  /**
   * The number of designated places for wheelchairs, for example, in a cinema or theater.
   */
  count?: number;
  /**
   * Is there additional space for an assistant?
   */
  hasSpaceForAssistant?: boolean;
  /**
   * The number of people using a wheelchair that can be accomodated at the same time. Use this when
   * there is no designated space for wheelchair users, but the number is known.
   */
  wheelchairUserCapacity?: number;
}

/**
 * The WheelchairPlacesSchema allows easy validation, cleaning and checking of WheelchairPlaces
 * objects.
 */
export const getWheelchairPlacesSchemaDefinition: () => SchemaDefinition = () => ({
  count: {
    type: 'SimpleSchema.Integer',
    min: 0,
    optional: true,
  },
  hasSpaceForAssistant: {
    type: Boolean,
    optional: true,
  },
  wheelchairUserCapacity: {
    type: 'SimpleSchema.Integer',
    optional: true,
  },
});
