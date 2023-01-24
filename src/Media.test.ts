import { getMediaSchemaDefinition } from './Media.js';
import expectInvalidFixture from './lib/expectInvalidFixture.js';
import expectValidFixture from './lib/expectValidFixture.js';
import mediaFixture from './mediaFixture.js';

const definition = getMediaSchemaDefinition();

describe('Media schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, mediaFixture);
  });

  it('recognizes bad sameAs URLs', () => {
    expectInvalidFixture(definition, {
      type: 'document',
      sameAs: ['example.com'],
    }, [
      { type: 'invalidUrl', name: 'sameAs.0' },
    ]);
  });

  it('recognizes bad language codes', () => {
    expectInvalidFixture(definition, {
      type: 'website',
      languages: ['invalid'],
    }, [
      { type: 'unknownLanguageTag', name: 'languages.0' },
    ]);
  });
});
