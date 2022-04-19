import { getLocalizedStringSchemaDefinition } from '.';
import expectInvalidFixture from './lib/expectInvalidFixture';
import expectValidFixture from './lib/expectValidFixture';

const definition = getLocalizedStringSchemaDefinition('test');

describe('LocalizedString schema', () => {
  it('evaluates a non-set string as valid because LocalizedString is optional', () => {
    expectValidFixture(definition, {});
  });
  it('evaluates a simple string as invalid', () => {
    expectInvalidFixture(definition, { test: 'foo' }, [{ type: 'expectedType', name: 'test' }]);
  });
  it('evaluates an empty object as invalid', () => {
    expectInvalidFixture(definition, { test: {} }, [{ type: 'mustHaveAtLeastOneKey', name: 'test' }]);
  });
  it('evaluates an object with wrong language keys as invalid', () => {
    expectInvalidFixture(definition, { test: { thisIsNotALanguageCode: 'Test' } }, [{ type: 'invalidLanguageTag', name: 'test' }]);
  });
  it('evaluates an object with correct language keys as valid', () => {
    expectValidFixture(definition, { test: { en: 'Test English', de: 'Test Deutsch' } });
  });
});
