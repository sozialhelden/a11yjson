import SimpleSchema from 'simpl-schema';
import { EquipmentInfo, getEquipmentInfoSchemaDefinition } from './EquipmentInfo';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';

export interface QueueSystem {
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
}

export const getQueueSystemSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  isAccessibleWithWheelchair: {
    type: Boolean,
    optional: true,
  },
  usesCattleBars: {
    type: Boolean,
    optional: true,
  },
  needsTickets: {
    type: Boolean,
    optional: true,
  },
  ...getPrefixedSchemaDefinition('ticketEquipment', getEquipmentInfoSchemaDefinition()),
  ticketEquipmentId: {
    type: String,
    optional: true,
  },
  canSkipQueueWithDisability: {
    type: Boolean,
    optional: true,
  },
  numberOfSeats: {
    type: SimpleSchema.Integer,
    optional: true,
  },
  numberOfQueueServerPoints: {
    type: SimpleSchema.Integer,
    optional: true,
  },
});
