import { Complete } from './Complete';
import grabBarsFixture from './GrabBars.test';
import interactionModeFixture from './InteractionMode.test';
import expectValidFixture from './lib/expectValidFixture';
import { getQueueSystemSchemaDefinition, QueueSystem } from './QueueSystem';

const queueSystemFixture: Complete<QueueSystem> = {
  usesCattleBars: true,
  needsTickets: true,
  ticketEquipment: { properties: { description: { en: 'Ticket machine' } } },
  ticketEquipmentId: '123',
  canSkipQueueWithDisability: true,
  numberOfSeats: 42,
  numberOfQueueServerPoints: 23,
  grabBars: grabBarsFixture,
  interactions: {
    enqueue: [{
      action: [{
        educationLevel: 2,
      }],
      perception: [{
        backgroundMusic: true,
        ambientNoiseLevel: { value: 20, unit: 'dB' },
      }],
    }],
    skipQueue: [],
    wait: [],
    leaveQueue: [],
    arrive: [],
    checkIn: [],
    checkOut: [],
    getTicket: [],
    getOnesTurn: [],
  },
};

export default queueSystemFixture;

const definition = getQueueSystemSchemaDefinition();

describe('QueueSystem schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, queueSystemFixture);
  });
});
