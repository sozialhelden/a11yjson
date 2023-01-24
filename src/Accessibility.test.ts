import { getAccessibilitySchemaDefinition } from './Accessibility.js';
import expectValidFixture from './lib/expectValidFixture.js';
import accessibilityFixture from './accessibilityFixture.js';

const definition = getAccessibilitySchemaDefinition();

describe('Accessibility schema', () => {
  it('validates a fully specified object', () => {
    expectValidFixture(definition, accessibilityFixture);
  });
});
