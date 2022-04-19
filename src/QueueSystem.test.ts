import { Complete } from './Complete';
import equipmentInfoFixture from './EquipmentInfo.test';
import expectValidFixture from './lib/expectValidFixture';
import { getQueueSystemSchemaDefinition, QueueSystem } from './QueueSystem';

const queueSystemFixture: Complete<QueueSystem> = {
  usesCattleBars: true,
  needsTickets: true,
  ticketEquipment: equipmentInfoFixture,
  ticketEquipmentId: '123',
  canSkipQueueWithDisability: true,
  numberOfSeats: 42,
  numberOfQueueServerPoints: 23,
};

export default queueSystemFixture;

const definition = getQueueSystemSchemaDefinition();

describe('QueueSystem schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, queueSystemFixture);
  });
});
