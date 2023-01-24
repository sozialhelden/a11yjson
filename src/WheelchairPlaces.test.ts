import { getWheelchairPlacesSchemaDefinition } from './WheelchairPlaces.js';
import expectInvalidFixture from './lib/expectInvalidFixture.js';
import expectValidFixture from './lib/expectValidFixture.js';
import wheelchairPlacesFixture from './wheelchairPlacesFixture.js';

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
