import { getMediaSchemaDefinition } from './Media';
import expectInvalidFixture from './lib/expectInvalidFixture';
import expectValidFixture from './lib/expectValidFixture';
import mediaFixture from './mediaFixture';

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
      { type: 'notAllowed', name: 'languages.0' },
    ]);
  });
});
