import { Shower, getShowerSchemaDefinition } from './Shower';
import expectValidFixture from './lib/expectValidFixture';
import grabBarsFixture from './GrabBars.test';

const showerFixture: Shower = {
  hasSupportRails: true,
  supportRailsHeight: '85 .. 107cm',
  hasShowerSeat: true,
  grabBars: grabBarsFixture,
  showerSeatIsRemovable: true,
  showerSeatIsFolding: false,
};

export default showerFixture;

const definition = getShowerSchemaDefinition();

describe('Shower schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, showerFixture);
  });
});
