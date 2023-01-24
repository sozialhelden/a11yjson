import { Stairs } from './Stairs.js';
import { Complete } from './Complete.js';
import grabBarsFixture from './grabBarsFixture.js';

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
