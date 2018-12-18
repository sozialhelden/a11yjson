import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

/**
 * The WheelchairPlaces interface describes the presence of reserved spots for wheelchairs.
 */
export interface WheelchairPlaces {
  /**
   * The amount of places for wheelchairs.
   */
  count: number; // QUESTION: this could be a unitless quantity to allow things like ~4, or >20.
  /**
   * Is there additional space for an assistant?
   */
  hasSpaceForAssistant?: boolean;
}

/**
 * The WheelchairPlacesSchema allows easy validation, cleaning and checking of WheelchairPlaces objects.
 */
export const WheelchairPlacesSchema = new SimpleSchema({
  count: {
    type: SimpleSchema.Integer,
    label: t`Number Of Places`,
    accessibility: {
      question: t`How many wheelchair places are there?`
    },
    min: 0
  },
  hasSpaceForAssistant: {
    type: Boolean,
    label: t`Assistant Space`,
    accessibility: {
      question: t`Is there additional space for an assistant?`
    },
    optional: true
  }
});
