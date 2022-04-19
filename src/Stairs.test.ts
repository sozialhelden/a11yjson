import { Stairs, getStairsSchemaDefinition } from './Stairs';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const stairsFixture: Complete<Stairs> = {
  count: 123,
  hasHighContrastNosing: false,
  hasAntiSlipNosing: true,
  name: { en: 'main entrance' },
  stepHeight: '10cm',
  hasHandRail: true,
  hasTactileSafetyStrips: true,
  hasBrailleNavigation: true,
  alternativeMobileEquipmentIds: ['foo', 'bar'],
  hasMetalGrating: true,
  isWellLit: true,
};

export default stairsFixture;

const definition = getStairsSchemaDefinition();

describe('Surface schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, stairsFixture);
  });
});
