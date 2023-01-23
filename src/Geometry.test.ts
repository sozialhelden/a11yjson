import { getPointGeometrySchemaDefinition } from './Geometry';
import expectInvalidFixture from './lib/expectInvalidFixture';
import expectValidFixture from './lib/expectValidFixture';
import pointGeometryFixture from './pointGeometryFixture';

const definition = getPointGeometrySchemaDefinition();

describe('Geometry schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, pointGeometryFixture);
  });

  it('recognizes invalid out of bounds coordinates', () => {
    expectInvalidFixture(definition, {
      type: 'Point',
      coordinates: [-220, 500],
    }, [
      {
        name: 'coordinates.0',
        type: 'minNumber',
        min: -180,
      },
      {
        name: 'coordinates.1',
        type: 'maxNumber',
        max: 180,
      },
    ]);
  });

  it('recognizes invalid geometry type', () => {
    expectInvalidFixture(definition, {
      type: 'BoundingBox',
      coordinates: [53.12, 14.02],
    }, [
      {
        name: 'type',
        type: 'notAllowed',
      },
    ]);
  });
});
