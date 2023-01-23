import { Entrance } from './Entrance';
import pointGeometryFixture from './pointGeometryFixture';
import entrancePropertiesFixture from './entrancePropertiesFixture';
import { Complete } from './Complete';

const entranceFixture: Complete<Entrance> = {
  properties: entrancePropertiesFixture,
  geometry: pointGeometryFixture,
};
export default entranceFixture;
