import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';

import { Length, LengthSchema, quantityDefinition } from './Units';
import { LocalizedStringSchema, LocalizedString } from './LocalizedString';

/**
 * Describes one or more wheelchair parking lots.
 */
export interface WheelchairParking {
  /**
   * Describes where the parking is located.
   */
  location?: LocalizedString;

  /**
   * How far away is the parking from the main entrance? If there is a separate wheelchair entrance,
   * the distance to this entrance MUST be used.
   */
  distanceToEntrance?: Length;

  /**
   * Defines many wheelchair accessible parking lots are provided
   */
  count?: number; // TODO use something for >10

  /**
   * `true` if the parking is inside a building or under a roof, `false` if not, `undefined` if
   * unknown.
   */
  isLocatedInside?: boolean;

  /**
   * Width constraint of the parking lots.
   */
  width?: Length;

  /**
   * Length constraint of the parking lots.
   */
  length?: Length;

  /**
   * Maximal allowed vehicle height for users of this parking.
   */
  maxVehicleHeight?: Length;

  /**
   * `true` if there is dedicated signage at all relevant turning points from the street to the
   * parking, `false` if not, `undefined` if this is unknown.
   */
  hasDedicatedSignage?: boolean;

  /**
   * `true` if the parking has to be paid by space, `false` if not, `undefined` if unknown.
   */
  paymentBySpace?: boolean;

  /**
   * `true` if the parking has to be paid by parking zone, `false` if not, `undefined` if unknown.
   */
  paymentByZone?: boolean;

  /**
   * List of permit names that allow using this parking.
   *
   * @example `['Blue Badge', 'Red badge', 'Turqouise badge']
   */
  neededParkingPermits?: ArrayLike<LocalizedString>;
}

export const WheelchairParkingSchema = new SimpleSchema({
  location: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`Where is the parking located?`
    }
  },
  distanceToEntrance: quantityDefinition(LengthSchema, true, {
    question: t`How far away is the parking from the main entrance?`
  }),
  count: {
    type: Number,
    optional: true,
    accessibility: {
      question: t`How many wheelchair accessible parking spaces are there?`
    },
    min: 0
  },
  isLocatedInside: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Are the parking spaces located inside?`
    }
  },
  width: quantityDefinition(LengthSchema, true, {
    question: t`How wide are the parking spaces?`
  }),
  length: quantityDefinition(LengthSchema, true, {
    question: t`How long are the parking spaces?`
  }),
  maxVehicleHeight: quantityDefinition(LengthSchema, true, {
    question: t`What is the max vehicle height of the parking spaces?`
  }),
  hasDedicatedSignage: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is there dedicated disabled parking signage?`
    }
  },
  paymentBySpace: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is there payment by parking space?`
    }
  },
  paymentByZone: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is there payment by parking zone?`
    }
  },
  neededParkingPermits: {
    type: Array,
    optional: true,
    accessibility: {
      question: t`Are any special parking permits required?`
    }
  },
  'neededParkingPermits.$': {
    type: LocalizedStringSchema,
    accessibility: {
      question: t`Which permit is needed?`
    }
  }
});

export interface Parking {
  forWheelchairUsers?: WheelchairParking | null;
}

export const ParkingSchema = new SimpleSchema({
  forWheelchairUsers: {
    type: WheelchairParkingSchema,
    optional: true,
    accessibility: {
      question: t`Is there parking for wheelchair users?`
    }
  }
});
