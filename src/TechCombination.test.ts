import { TechCombination, getTechCombinationSchemaDefinition } from './TechCombination';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

const techCombinationFixture: Complete<TechCombination> = {
  uris: [
    'wikidata:Q117266', // for a banana connector (https://www.wikidata.org/wiki/Q117266)
    'openstreetmap:way/123', // for tying the tech to a specific location on the planet
    'wikipedia:Banana connector', // for a banana connector (https://en.wikipedia.org/wiki/Banana_connector)
  ],
  name: { en: 'Banana connector' },
  description: { en: 'You need a banana connector to connect your assistive tech to something else.' },
};

export default techCombinationFixture;

const definition = getTechCombinationSchemaDefinition();

describe('TechCombination schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, techCombinationFixture);
  });
});
