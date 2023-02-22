import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import { GenericInteraction, GenericInteractionsSet } from './Accessibility.js';
import { AccessType, AccessTypes } from './AccessType.js';
import BooleanField from './BooleanField.js';
import { CurrencyValue, getCurrencyValueSchemaDefinition } from './CurrencyValue.js';
import { EquipmentProperties, getEquipmentPropertiesSchemaDefinition } from './EquipmentProperties.js';
import IETFLanguageCodeSchemaKeyDefinition from './ietfLanguageTags.js';
import { getInteractableSchemaDefinition, Interactable } from './Interactable.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';
import { getPaymentSchemaDefinition, Payment } from './Payment.js';
import { getSeatSchemaDefinition, Seat } from './Seat.js';

export interface AppointmentPolicy extends Interactable<GenericInteraction> {
  /**
   * Who can make this kind of appointment.
   */
  access?: AccessType[];

  /**
   * Opening hours in the format described at https://wiki.openstreetmap.org/wiki/Key:opening_hours.
  */
  openingHours?: string;

  /**
   * `true` if you need no appointment to visit the place.
   */
  allowsWalkIn?: boolean;

  /**
   * `true` if the appointment can be made by video call.
   */
  phoneCall?: boolean;

  /**
   * `true` if the appointment can be made by video call.
   */
  videoCall?: boolean;

  /**
   * `true` if the appointment can be made in person.
   */
  inPersonOnSite?: boolean;

  /**
   * `true` if appointments with an assistant are possible, but need to be booked separately.
   */
  needsAppointmentForAssistant?: boolean;

  /**
   * `true` if the appointment can be at the person’s home.
   */
  homeVisit?: boolean;

  /**
   * The languages that are spoken by the person who is responsible for the appointment.
   */
  languages?: string[];

  /**
   * The URL to a page where the appointment can be booked.
   */
  bookingURL?: string;

  /**
   * The amount of money that is charged for the appointment.
   */
  fees?: CurrencyValue[];

  /**
   * The payment method that is used to pay the amount of money. Use `fees` instead, if possible.
   */
  paymentTypes?: Payment[];

  /**
   * Describes this policy as text string, e.g. ‘home visits possible if you are over 60’. Use the
   * other fields only if the described place has only one typical policy (like at a hairdresser).
   */
  description?: LocalizedString;

  /**
   * Describes limitations that apply to this policy, e.g. ‘only for people with a disability’.
   */
  limitationsDescription?: LocalizedString;

  /**
   * How many seats are available for this appointment.
   */
  seatCount?: number;

  /**
   * If a seat is associated with this appointment, it is described here.
   */
  seat?: Seat;

  /** If the appointment needs a specific equipment, it is described here. */
  equipmentProperties?: EquipmentProperties;
}

export const getAppointmentPolicySchemaDefinition: () => SchemaDefinition = () => ({
  access: {
    type: Array,
    optional: true,
    minCount: 1,
  },
  'access.$': {
    type: String,
    allowedValues: (AccessTypes as any) as any[],
  },
  openingHours: {
    type: String,
    optional: true,
  },
  allowsWalkIn: BooleanField,
  videoCall: BooleanField,
  inPersonOnSite: BooleanField,
  homeVisit: BooleanField,
  needsAppointmentForAssistant: BooleanField,
  phoneCall: BooleanField,
  languages: {
    type: Array,
    optional: true,
    minCount: 1,
  },
  'languages.$': IETFLanguageCodeSchemaKeyDefinition,
  bookingURL: {
    type: String,
    optional: true,
  },
  fees: {
    type: Array,
    optional: true,
    minCount: 1,
  },
  ...getPrefixedSchemaDefinition('fees.$', getCurrencyValueSchemaDefinition()),
  paymentTypes: {
    type: Array,
    optional: true,
    minCount: 1,
  },
  ...getPrefixedSchemaDefinition('paymentTypes.$', getPaymentSchemaDefinition()),
  ...getLocalizedStringSchemaDefinition('description'),
  ...getLocalizedStringSchemaDefinition('limitationsDescription'),
  seatCount: {
    type: Number,
    optional: true,
    min: 0,
  },
  ...getPrefixedSchemaDefinition('seat', getSeatSchemaDefinition()),
  ...getPrefixedSchemaDefinition('equipmentProperties', getEquipmentPropertiesSchemaDefinition()),
  ...getInteractableSchemaDefinition(GenericInteractionsSet),
});
