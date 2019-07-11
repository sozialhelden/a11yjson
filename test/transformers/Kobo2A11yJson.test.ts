import { transformKoboToA11y, KoboResult } from '../../src/transformers/transformKoboToA11y';
import { get } from 'lodash';

const partiallyAccessibleByUserData: KoboResult = {
  is_wheelchair_accessible: 'partially',
  'inside/toilet/has_toilet': 'true',
  'inside/toilet/basin_wheelchair_fits_belows': 'true',
  'inside/toilet/basin_wheelchair_reachable': 'true',
  'inside/toilet/has_arm_rests': 'null',
  'inside/toilet/basin_inside_cabin': 'true',
  'inside/toilet/stepless_access': 'true'
} as KoboResult;

const fullyAccessibleByRamp: KoboResult = {
  'outside/entrance/has_fixed_ramp': 'true'
} as KoboResult;

describe('Kobo2A11yJson', () => {
  it('tests partiallyAccessibleByUser', () => {
    const a11yObject = transformKoboToA11y(partiallyAccessibleByUserData);

    expect(get(a11yObject, 'properties.hasAccessibility')).toBe(true);

    expect(get(a11yObject, 'properties.accessibility.accessibleWith.wheelchair')).toBe(undefined);
    expect(get(a11yObject, 'properties.accessibility.partiallyAccessibleWith.wheelchair')).toBe(
      true
    );
    expect(get(a11yObject, 'properties.accessibility.restrooms.0.isAccessibleWithWheelchair')).toBe(
      true
    );
  });

  it('tests fullyAccessibleByRamp', () => {
    const a11yObject = transformKoboToA11y(fullyAccessibleByRamp);

    expect(get(a11yObject, 'properties.hasAccessibility')).toBe(true);

    expect(get(a11yObject, 'properties.accessibility.accessibleWith.wheelchair')).toBe(true);
    expect(get(a11yObject, 'properties.accessibility.partiallyAccessibleWith.wheelchair')).toBe(
      undefined
    );
    expect(get(a11yObject, 'properties.accessibility.restrooms.0.isAccessibleWithWheelchair')).toBe(
      undefined
    );
  });
});
