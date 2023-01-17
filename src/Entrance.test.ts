import { Entrance, getEntranceSchemaDefinition } from './Entrance';
import pointGeometryFixture from './Geometry.test';
import entrancePropertiesFixture from './EntranceProperties.test';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const entranceFixture: Complete<Entrance> = {
  properties: entrancePropertiesFixture,
  geometry: pointGeometryFixture,
};

export default entranceFixture;

const definition = getEntranceSchemaDefinition();

describe('Entrance schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, entranceFixture);
  });
});
