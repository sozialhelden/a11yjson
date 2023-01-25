/* eslint-disable import/no-relative-packages */
import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
import BooleanField from './BooleanField.js';
import { getInteractableSchemaDefinition, Interactable } from './Interactable.js';
import { getIntercomSchemaDefinition, Intercom } from './Intercom.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';
import { getPaymentSchemaDefinition, Payment } from './Payment.js';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchema } from './Quantity.js';
import { getQueueSystemSchemaDefinition, QueueSystem } from './QueueSystem.js';

export const DeskInteractions = [
  'changeHeight',
  'savePreset',
  'enqueue',
  'checkIn',
  'checkOut',
  'ringBell',
  'pay',
  'handoverLuggage',
  'handover',
  'getReturn',
  'getFood',
  'getShoppingBag',
  'scan',
  'selfCheckout',
  'open',
  'close',
  'unlock',
  'lock',
  'unlockAndLock',
  'openAndClose',
] as const;

export type DeskInteraction = typeof DeskInteractions[number];
export const DeskInteractionsSet = new Set(DeskInteractions);

/**
 * Describes a desk / table / cash desk / reception counter.
 */
export interface Desk extends Interactable<DeskInteraction> {
  /**
   * Name of the entrance (helpful if there are multiple entrances).
   */
  name?: LocalizedString;
  /**
   * `true` if the desk can be rolled under, `false` if not.
   * This can be used to determine if a wheelchair user can sit at the desk.
   */
  isRollUnder?: boolean;
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
   * How much space is there below the desk?
   * This can be used to determine if a wheelchair user can sit at the desk.
   */
  widthBelow?: Length;
  /**
   * How much space is there below the desk?
   * This can be used to determine if a wheelchair user can sit at the desk.
   */
  fixedHeightBelow?: Length;
  /**
   * How much space is there under the desk?
   * This can be used to determine if a wheelchair user can sit at the desk.
   */
  depthBelow?: Length;
  /**
   * How much space is there in front of the desk?
   * This can be used to determine if a wheelchair user can sit at the desk.
   */
  turningSpaceInFront?: Length;
  /**
   * Describes an associated queue system.
   */
  queueSystem?: QueueSystem;

  /**
   * Information about payment at this desk.
   *
   * `null` indicates there is no payment possible/required.
   */
  payment?: Payment | null;

  /**
   * Information about an intercom at this desk, if applicable.
   *
   * `null` indicates there is no intercom.
   */
  intercom?: Intercom | null;
}

export const getDeskSchemaDefinition: () => SchemaDefinition = () => ({
  ...getLocalizedStringSchemaDefinition('name'),
  isRollUnder: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('widthBelow', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('depthBelow', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('fixedHeightBelow', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('turningSpaceInFront', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('fixedHeight', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('minimalHeight', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('maximalHeight', LengthSchema),
  ...getPrefixedSchemaDefinition('queueSystem', getQueueSystemSchemaDefinition()),
  ...getPrefixedSchemaDefinition('payment', getPaymentSchemaDefinition()),
  ...getPrefixedSchemaDefinition('intercom', getIntercomSchemaDefinition()),
  ...getInteractableSchemaDefinition(DeskInteractions),
});
