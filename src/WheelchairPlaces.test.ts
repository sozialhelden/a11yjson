import { getWheelchairPlacesSchemaDefinition } from './WheelchairPlaces';
import expectInvalidFixture from './lib/expectInvalidFixture';
import expectValidFixture from './lib/expectValidFixture';
import wheelchairPlacesFixture from './wheelchairPlacesFixture';

const definition = getWheelchairPlacesSchemaDefinition();

describe('WheelchairPlaces schema', () => {
  it('validates a completely defined object', () => {
    expectValidFixture(definition, wheelchairPlacesFixture);
  });
  it('recognizes invalid negative count', () => {
    expectInvalidFixture(definition, { count: -100 }, [{ type: 'minNumber', min: 0, name: 'count' }]);
  });
  it('recognizes invalid non-integer count', () => {
    expectInvalidFixture(definition, { count: 0.5 }, [{ type: 'noDecimal', name: 'count' }]);
  });
});
