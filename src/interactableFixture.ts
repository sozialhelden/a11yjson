import { Complete } from './Complete.js';
import { Interactable } from './Interactable.js';
import interactionModeFixture from './interactionModeFixture.js';

const InteractionNames = ['foo', 'bar', 'baz'] as const;
type InteractionName = typeof InteractionNames[number];
export const InteractionNamesSet = new Set(InteractionNames);

const interactableFixture: Complete<Interactable<InteractionName>> = {
  interactions: {
    foo: interactionModeFixture,
  },
};

export default interactableFixture;
