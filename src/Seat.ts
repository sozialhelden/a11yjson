import BooleanField from './BooleanField';
import { EquipmentProperties, getEquipmentPropertiesSchemaDefinition } from './EquipmentProperties';
import { getInteractableSchemaDefinition, Interactable } from './Interactable';
import { InteractionMode } from './InteractionMode';
import { getIntercomSchemaDefinition, Intercom } from './Intercom';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';
import { getPaymentSchemaDefinition, Payment } from './Payment';
import { getPersonalProfileSchemaDefinition, PersonalProfile } from './PersonalProfile';
import {
  getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition,
} from './Quantity';

/**
 * Describes one or multiple seats / chairs / benches / stools / couches / sofas / armchairs / ...
 */
export interface Seat extends Interactable {
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
   * Describes an associated switch.
   */
  controlledBySwitch?: EquipmentProperties;
  /**
   * References a switch (`EquipmentInfo`) by its ID.
   */
  controlledBySwitchId?: string;
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
   * How can you interact with something at this seat?
   */
  interactions?: InteractionMode[];

  /**
   * The seat is reserved for persons with the given profile.
   */
  reservedForPersonsWith?: PersonalProfile;
}

export const getSeatSchemaDefinition: () => Record<
string,
SchemaDefinition
> = () => ({
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
  rows: {
    type: Array,
  },
  'rows.$': {
    type: String,
  },
  columns: {
    type: Array,
  },
  'columns.$': {
    type: String,
  },
  ...getPrefixedQuantitySchemaDefinition('fixedHeight', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('minimalHeight', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('maximalHeight', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('turningSpaceInFront', LengthSchemaDefinition),
  controlledBySwitchId: {
    type: String,
    optional: true,
  },
  ...getPrefixedSchemaDefinition('controlledBySwitch', getEquipmentPropertiesSchemaDefinition()),
  ...getPrefixedSchemaDefinition('payment', getPaymentSchemaDefinition()),
  ...getPrefixedSchemaDefinition('intercom', getIntercomSchemaDefinition()),
  ...getInteractableSchemaDefinition(),
});
