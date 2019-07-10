import { evaluateWheelmapA11y } from '../../src/rules/WheelmapA11yRuleset';

const fullyAccessibleByRamp = {
  properties: {
    name: 'Fully Accessible By Ramp',
    accessibility: {
      entrances: [
        {
          // there are stairs
          stairs: [{ count: 2 }],
          // but also a ramp
          hasFixedRamp: true
        }
      ]
    }
  }
};

describe('WheelmapA11yRuleset', () => {
  it('tests fullyAccessibleByRamp', () => {
    expect(evaluateWheelmapA11y(fullyAccessibleByRamp)).toEqual('yes');
  });
});
