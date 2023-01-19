import { SchemaDefinition } from 'simpl-schema/dist/esm/types';
import { t } from 'ttag';

/**
 * The WheelchairPlaces interface describes the presence of reserved spots for wheelchairs.
 */
export interface WheelchairPlaces {
  /**
   * The number of designated places for wheelchairs, for example, in a cinema or theater.
   */
  count: number;
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
    label: t`Number Of Places`,
    min: 0,
  },
  hasSpaceForAssistant: {
    type: Boolean,
    label: t`Assistant Space`,
    optional: true,
  },
  wheelchairUserCapacity: {
    type: 'SimpleSchema.Integer',
    label: t`Wheelchair User Capacity`,
    optional: true,
  },
});
