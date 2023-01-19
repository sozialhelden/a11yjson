import SimpleSchema from 'simpl-schema';
import BooleanField from './BooleanField';
import { EquipmentInfo, getEquipmentInfoSchemaDefinition } from './EquipmentInfo';
import { getGrabBarsSchemaDefinition, GrabBars } from './GrabBars';
import { getInteractableSchemaDefinition, Interactable } from './Interactable';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';

export const QueueSystemInteractions = ['enqueue', 'skipQueue', 'wait', 'leaveQueue', 'arrive', 'checkIn', 'checkOut', 'getTicket', 'getOnesTurn'] as const;
export type QueueSystemInteraction = typeof QueueSystemInteractions[number];

/**
 * Describes a system that encourages or forces people to queue up.
 */
export interface QueueSystem extends Interactable<QueueSystemInteraction> {
  /**
   * `true` if the queueing uses rails / cattle bars, `false` if not.
   */
  usesCattleBars?: boolean;

  /**
   * `true` if the queueing uses tickets (usually numbered), `false` if not.
   */

  needsTickets?: boolean;

  /**
   * The ticket printer, if existing.
   */
  ticketEquipment?: EquipmentInfo;

  /**
   * The ticket printer's ID on accessibility.cloud, if existing.
   */
  ticketEquipmentId?: string;

  /**
   * `true` if you can skip the queue with a disability, `false` if not.
   */

  canSkipQueueWithDisability?: boolean;

  /**
   * Number of seats that can be used by people while waiting in the queue.
   */
  numberOfSeats?: number;

  /**
   * Number of queue server points.
   */

  numberOfQueueServerPoints?: number;

  /**
   * Grab bars inside the queueing system, if applicable.
   */
  grabBars?: GrabBars;
}

export const getQueueSystemSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  isAccessibleWithWheelchair: BooleanField,
  usesCattleBars: BooleanField,
  needsTickets: BooleanField,
  ...getPrefixedSchemaDefinition('ticketEquipment', getEquipmentInfoSchemaDefinition()),
  ...getPrefixedSchemaDefinition('grabBars', getGrabBarsSchemaDefinition()),
  ticketEquipmentId: {
    type: String,
    optional: true,
  },
  canSkipQueueWithDisability: BooleanField,
  numberOfSeats: {
    type: SimpleSchema.Integer,
    optional: true,
  },
  numberOfQueueServerPoints: {
    type: SimpleSchema.Integer,
    optional: true,
  },
  ...getInteractableSchemaDefinition(QueueSystemInteractions),
});
