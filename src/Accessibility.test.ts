import { getAccessibilitySchemaDefinition } from './Accessibility';
import expectValidFixture from './lib/expectValidFixture';
import { accessibilityFixture } from './accessibilityFixture';

const definition = getAccessibilitySchemaDefinition();

describe('Accessibility schema', () => {
  it('validates a fully specified object', () => {
    expectValidFixture(definition, accessibilityFixture);
  });
});
