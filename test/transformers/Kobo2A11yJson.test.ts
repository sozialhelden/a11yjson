import { transformKoboToA11y, KoboResult } from '../../src/transformers/transformKoboToA11y';
import { get } from 'lodash';

const partiallyAccessibleByUserData: KoboResult = {
  'user/user_measuring': 'cm',
  is_wheelchair_accessible: 'partially',
  'inside/toilet/has_toilet': 'true',
  'inside/toilet/basin_wheelchair_fits_belows': 'true',
  'inside/toilet/basin_wheelchair_reachable': 'true',
  'inside/toilet/has_arm_rests': 'some wrong value',
  'inside/toilet/basin_inside_cabin': 'true',
  'inside/toilet/stepless_access': 'true',
  'inside/toilet/free_space_left': '260.4',
  'inside/toilet/free_space_right': '100,5',
  'inside/toilet/free_space_front': '100'
} as KoboResult;

const fullyAccessibleByRamp: KoboResult = {
  'outside/entrance/has_fixed_ramp': 'true'
} as KoboResult;

describe('Kobo2A11yJson', () => {
  it('tests partiallyAccessibleByUser', () => {
    const a11yObject = transformKoboToA11y(partiallyAccessibleByUserData);
    expect(a11yObject.properties).toEqual({
      hasAccessibility: true,
      category: 'undefined',
      infoPageUrl: null,
      originalData: JSON.stringify(partiallyAccessibleByUserData),
      accessibility: {
        partiallyAccessibleWith: {
          wheelchair: true
        },
        restrooms: [
          {
            entrance: {
              isLevel: true
            },
            isAccessibleWithWheelchair: true,
            toilet: {
              spaceOnUsersLeftSide: { unit: 'cm', value: 260.4 },
              spaceOnUsersRightSide: { unit: 'cm', value: 100 },
              spaceInFront: { unit: 'cm', value: 100 },
              hasGrabBars: false,
              grabBars: {
                onUsersLeftSide: false,
                onUsersRightSide: false
              }
            },
            washBasin: {
              accessibleWithWheelchair: true,
              isLocatedInsideRestroom: true,
              spaceBelow: {
                depth: {
                  operator: '>=',
                  unit: 'cm',
                  value: 50
                },
                height: {
                  operator: '>=',
                  unit: 'cm',
                  value: 80
                }
              }
            }
          }
        ]
      }
    });
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
