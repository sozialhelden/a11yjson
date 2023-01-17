import expectInvalidFixture from './lib/expectInvalidFixture';
import expectValidFixture from './lib/expectValidFixture';
import htmlColorSchemaDefinition from './htmlColorSchemaDefinition';

describe('htmlColorSchemaDefinition', () => {
  it('validates various HTML colors', () => {
    const colorSchemaDefinition = {
      color: htmlColorSchemaDefinition,
    };

    expectValidFixture(colorSchemaDefinition, { color: '#01f' });
    expectValidFixture(colorSchemaDefinition, { color: '#01fa' });
    expectValidFixture(colorSchemaDefinition, { color: '#0011ff' });
    expectValidFixture(colorSchemaDefinition, { color: '#0011ffaa' });

    expectValidFixture(colorSchemaDefinition, { color: 'rgb(1, 12, 123)' });
    expectValidFixture(colorSchemaDefinition, { color: 'hsl(1, 12, 123)' });
    expectValidFixture(colorSchemaDefinition, { color: 'hwb(1, 12, 123)' });
    expectValidFixture(colorSchemaDefinition, { color: 'lab(1, 12, 123)' });

    expectValidFixture(colorSchemaDefinition, { color: 'rgba(1, 12, 123, 1.0)' });
    expectValidFixture(colorSchemaDefinition, { color: 'hsla(1, 12, 123, 1.0)' });
    expectValidFixture(colorSchemaDefinition, { color: 'cmyk(1, 12, 123, 4)' });
    expectValidFixture(colorSchemaDefinition, { color: 'lch(1, 12, 123)' });

    expectValidFixture(colorSchemaDefinition, { color: 'gray(4)' });

    expectInvalidFixture(colorSchemaDefinition, { color: 'gray(123, 123)' }, []);
    expectInvalidFixture(colorSchemaDefinition, { color: 'rgb(1, 12, 123, 1.0)' }, []);
    expectInvalidFixture(colorSchemaDefinition, { color: 'hsl(1, 12, 123, 1.0)' }, []);
    expectInvalidFixture(colorSchemaDefinition, { color: 'cmyk(123, 123)' }, []);
    expectInvalidFixture(colorSchemaDefinition, { color: 'cmyk(123, 123, 123, 123, 123)' }, []);

    expectValidFixture(colorSchemaDefinition, { color: 'red' });
    expectInvalidFixture(colorSchemaDefinition, { color: 'red(123, 123, 123, 123, 123)' }, []);
    expectValidFixture(colorSchemaDefinition, { color: 'lightblue' });
  });
});
