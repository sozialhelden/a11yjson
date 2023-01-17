import { Stairs, getStairsSchemaDefinition } from './Stairs';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';
import grabBarsFixture from './GrabBars.test';

const stairsFixture: Complete<Stairs> = {
  count: 123,
  hasHighContrastNosing: false,
  hasAntiSlipNosing: true,
  name: { en: 'main entrance' },
  stepHeight: '10cm',
  hasHandRail: true,
  hasTactileSafetyStrips: true,
  hasTactileSignage: true,
  hasBrailleSignage: true,
  alternativeMobileEquipmentIds: ['foo', 'bar'],
  hasMetalGrating: true,
  isWellLit: true,
  grabBars: grabBarsFixture,
  isSpiral: false,
  floors: ['1', '2'],
};

export default stairsFixture;

const definition = getStairsSchemaDefinition();

describe('Stairs schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, stairsFixture);
  });
});
