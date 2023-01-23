import { TechCombination } from './TechCombination';
import { Complete } from './Complete';

const techCombinationFixture: Complete<TechCombination> = {
  uris: [
    'wikidata:Q117266',
    'openstreetmap:way/123',
    'wikipedia:Banana connector', // for a banana connector (https://en.wikipedia.org/wiki/Banana_connector)
  ],
  name: { en: 'Banana connector' },
  description: { en: 'You need a banana connector to connect your assistive tech to something else.' },
};
export default techCombinationFixture;
