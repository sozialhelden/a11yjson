import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';

import { Length, LengthSchema, quantityDefinition } from './units';
import { LocalizedStringSchema, LocalizedString } from './localized-string';

export interface WheelchairParking {
  location?: string;
  distanceToMainEntrance?: Length;
  count?: number; // TODO use something for >10
  isLocatedInside?: boolean;
  width?: Length;
  length?: Length;
  maxVehicleHeight?: Length;
  hasDedicatedSignage?: boolean;
  paymentBySpace?: boolean;
  paymentByZone?: boolean;
  neededParkingPermits?: Array<LocalizedString>;
}

export const WheelchairParkingSchema = new SimpleSchema({
  location: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`Where is the parking located?`
    }
  },
  distanceToMainEntrance: quantityDefinition(LengthSchema, true, {
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
