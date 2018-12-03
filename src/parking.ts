import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { Length, LengthSchema, quantityDefinition } from './units';

export interface WheelchairParking {
  // QUESTION currently available? How many? At all? Unclear. No other object has isAvailable
  isAvailable?: boolean;
  location?: string;
  count?: number; // TODO use something for >10
  isLocatedInside?: boolean;
  width?: Length;
  length?: Length;
  maxVehicleHeight?: Length;
  hasDedicatedSignage?: boolean;
  paymentBySpace?: boolean;
  paymentByZone?: boolean;
  neededParkingPermits?: Array<string>;
}

export const WheelchairParkingSchema = new SimpleSchema({
  isAvailable: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is wheelchair parking available?`
    }
  },
  location: {
    type: String,
    optional: true,
    accessibility: {
      question: t`Where is the parking located?`
    }
  },
  count: {
    type: Number,
    optional: true,
    accessibility: {
      question: t`How many accessible parking spaces are there?`
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
    type: String,
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
