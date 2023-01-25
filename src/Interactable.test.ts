import expectValidFixture from './lib/expectValidFixture.js';
import interactableFixture, { InteractionNamesSet } from './interactableFixture.js';
import { getInteractableSchemaDefinition } from './index.js';
import expectInvalidFixture from './lib/expectInvalidFixture.js';
import interactionModeFixture from './interactionModeFixture.js';

const definition = getInteractableSchemaDefinition(InteractionNamesSet);

describe('generic Interactable schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, interactableFixture);
  });

  it('rejects invalid types (string)', () => {
    expectInvalidFixture(definition, { interactions: 'foo' }, [{ type: 'expectedType', name: 'interactions' }]);
  });

  it('rejects invalid types (array)', () => {
    expectInvalidFixture(definition, { interactions: ['foo'] }, [{ type: 'expectedType', name: 'interactions' }]);
  });

  it('rejects invalid types (invalid type instead of InteractionMode, with cleaning)', () => {
    expectInvalidFixture(definition, { interactions: { foo: 'qux' } }, [{ type: 'mustHaveAtLeastOneValidKey', name: 'interactions' }]);
  });

  it('rejects invalid types (invalid type instead of InteractionMode, without cleaning)', () => {
    expectInvalidFixture(definition, { interactions: { foo: 'qux' } }, [{ type: 'expectedType', name: 'interactions.foo' }], false);
  });

  it('rejects invalid types (invalid object, not InteractionMode)', () => {
    expectInvalidFixture(definition, { interactions: { foo: { qux: 1 } } }, [{ type: 'keyNotInSchema', name: 'interactions.foo.qux' }], false);
  });

  it('rejects invalid types (wrong interaction name as key)', () => {
    expectInvalidFixture(definition, { interactions: { qux: interactionModeFixture } }, [{ type: 'invalidInteractionType', name: 'interactions.qux' }]);
  });
});
