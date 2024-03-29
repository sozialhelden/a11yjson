import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import {
  Direction, DirectionAxes, DirectionAxis, Directions,
} from './ActionMode.js';
import BooleanField from './BooleanField.js';
import { getInteractableSchemaDefinition, Interactable } from './Interactable.js';
import { getIntercomSchemaDefinition, Intercom } from './Intercom.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';
import { getPaymentSchemaDefinition, Payment } from './Payment.js';
import { getPersonalProfileSchemaDefinition, PersonalProfile } from './PersonalProfile.js';
import {
  getPrefixedQuantitySchemaDefinition, Length, LengthSchema,
} from './Quantity.js';

export const SeatInteractions = [
  'sit',
  'fold',
  'unfold',
  'move',
  'adjust',
  'adjustHeight',
  'adjustSeatingSurface',
  'adjustSeatingAngle',
  'adjustArmRests',
  'removeArmrests',
  'adjustHeadRest',
  'adjustLegRest',
  'adjustBackRest',
  'adjustFootRest',
  'adjustSeatBelt',
  'adjustSeatBeltLength',
  'adjustSeatBeltHeight',
  'adjustSeatBeltAngle',
  'adjustSeatBeltPosition',
  'adjustSeatBeltTension',
  'adjustSeatBeltLock',
  'connectSeatbelt',
] as const;
export type SeatInteraction = typeof SeatInteractions[number];
export const SeatInteractionsSet = new Set(SeatInteractions);

/**
 * Describes one or multiple seats / chairs / benches / stools / couches / sofas / armchairs / ...
 */
export interface Seat extends Interactable<SeatInteraction> {
  /**
   * Name of the entrance (helpful if there are multiple entrances).
   */
  name?: LocalizedString;

  /**
   * Name of the entrance (helpful if there are multiple entrances).
   */
  description?: LocalizedString;

  /**
   * The seat is located at the front row of the seating arrangement.
   */
  isFrontRow?: boolean;

  /**
   * The seat is located at the last row of the seating arrangement.
   */
  isLastRow?: boolean;

  /**
   * The seat is located at the center of the seating arrangement, laterally.
   */
  isCenterColumn?: boolean;

  /**
   * The seat row numbers. This is only for seats in a fixed seating arrangement.
   */
  rows?: number[];

  /**
   * The seat column numbers. This is only for seats in a fixed seating arrangement.
   */
  columns?: number[];

  /**
   * The seat is wheelchair accessible.
   */
  isWheelchairAccessible?: boolean;

  /**
   * The seat can be folded.
   */
  isFoldable?: boolean;

  /**
   * The seat is mobile.
   */
  isMobile?: boolean;

  /**
   * The seat is fixed.
   */
  isFixed?: boolean;

  /**
   * The seat has a seatbelt.
   */
  hasSeatbelt?: boolean;

  /**
   * The number of seatbelt points.
   */
  seatbeltPoints?: number;

  /**
   * The seat has a headrest.
   */
  hasHeadRest?: boolean;

  /**
   * The seat can be adjusted in the following axes.
   */
  adjustmentAxes?: DirectionAxis[];

  /**
   * The seat can be adjusted in the following directions.
   */
  adjustmentDirections?: Direction[];

  /**
   * The seat has an adjustable seating surface.
   */
  hasAdjustableHeight?: boolean;

  /**
   * The seat has removable armrests.
   */
  hasRemovableArmRests?: boolean;

  /**
   * How high is the desk? For variable-height desks, use `minimalHeight` and `maximalHeight`
   * instead.
   *
   * This can be used to determine if a wheelchair user can sit at the desk.
   */
  fixedHeight?: Length;
  /**
   * How high is the desk minimally? This is only for variable-height desks. Use `fixedHeight` for
   * fixed-height desks.
   * This can be used to determine if a wheelchair user can sit at the desk.
   */
  minimalHeight?: Length;
  /**
   * How high is the desk maximally? This is only for variable-height desks. Use `fixedHeight` for
   * fixed-height desks.
   * This can be used to determine if a wheelchair user can sit at the desk.
   */
  maximalHeight?: Length;
  /**
   * How much space is there in front of the desk?
   * This can be used to determine if a wheelchair user can sit at the desk.
   */
  turningSpaceInFront?: Length;
  /**
   * Information about payment at this seat or the cost of using this seat.
   *
   * `null` indicates there is no payment possible/required.
   */
  payment?: Payment | null;
  /**
   * Information about an intercom at this seat, if applicable.
   *
   * `null` indicates there is no intercom.
   */
  intercom?: Intercom | null;

  /**
   * The seat is reserved for persons with the given profile.
   */
  reservedForPersonsWith?: PersonalProfile;
}

export const getSeatSchemaDefinition: () => SchemaDefinition = () => ({
  ...getLocalizedStringSchemaDefinition('name'),
  ...getLocalizedStringSchemaDefinition('description'),
  isFrontRow: BooleanField,
  isLastRow: BooleanField,
  isCenterColumn: BooleanField,
  isWheelchairAccessible: BooleanField,
  ...getPrefixedSchemaDefinition('reservedForPersonsWith', getPersonalProfileSchemaDefinition()),
  isFoldable: BooleanField,
  isMobile: BooleanField,
  isFixed: BooleanField,
  hasHeadRest: BooleanField,
  hasSeatbelt: BooleanField,
  hasAdjustableHeight: BooleanField,
  hasRemovableArmRests: BooleanField,
  adjustmentAxes: {
    type: Array,
    optional: true,
  },
  'adjustmentAxes.$': {
    type: String,
    allowedValues: (DirectionAxes as any) as any[],
  },
  adjustmentDirections: {
    type: Array,
    optional: true,
  },
  'adjustmentDirections.$': {
    type: String,
    allowedValues: (Directions as any) as any[],
  },
  seatbeltPoints: {
    type: Number,
    optional: true,
    min: 1,
  },
  rows: {
    type: Array,
    optional: true,
  },
  'rows.$': {
    type: String,
  },
  columns: {
    type: Array,
    optional: true,
  },
  'columns.$': {
    type: String,
  },
  ...getPrefixedQuantitySchemaDefinition('fixedHeight', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('minimalHeight', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('maximalHeight', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('turningSpaceInFront', LengthSchema),
  ...getPrefixedSchemaDefinition('payment', getPaymentSchemaDefinition()),
  ...getPrefixedSchemaDefinition('intercom', getIntercomSchemaDefinition()),
  ...getInteractableSchemaDefinition(SeatInteractionsSet),
});
