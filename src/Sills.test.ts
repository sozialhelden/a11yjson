import SimpleSchema from '@sozialhelden/simpl-schema';
import { getSillsSchemaDefinition } from './Sills.js';
import expectValidFixture from './lib/expectValidFixture.js';
import sillsFixture from './sillsFixture.js';

const definition = getSillsSchemaDefinition();

describe('Sills schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, sillsFixture);
  });

  it('keeps every specified attribute when cleaning (no unknown keys stripped)', () => {
    const schema = new SimpleSchema(definition, { humanizeAutoLabels: false });
    const cleaned = schema.clean(structuredClone(sillsFixture), { getAutoValues: true });
    expect(Object.keys(cleaned).sort()).toEqual(Object.keys(sillsFixture).sort());
  });
});
