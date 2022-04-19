import { Rule, evaluateRule } from './RatingRules';

// constants
export const flatStepHeight = { unit: 'cm', value: 7, operator: '<=' };

// TODO put real values in here!
export const wheelChairWashBasin = {
  height: { unit: 'cm', operator: '>=', value: 80 },
  depth: { unit: 'cm', operator: '>=', value: 50 },
};

// the rules for determining that places are fully accessible
// first version only support one entrance / stair
export const fullWheelmapA11yRuleSet: Rule = {
  $or: [
    {
      'properties.accessibility.entrances.0.hasFixedRamp': true,
    },
    {
      'properties.accessibility.entrances.0.hasRemovableRamp': true,
    },
    {
      'properties.accessibility.entrances.0.stairs.0.count': 0,
    },
    {
      'properties.accessibility.entrances.0.stairs': null,
    },
    {
      'properties.accessibility.entrances.0.isLevel': true,
    },
  ],
  // TODO add more rules for door width etc., multiple entrances, etc.
};

// the rules for determining that places are at least partially accessible, omitting the full rules
// first version only support one entrance / stair
export const partialWheelmapA11yRuleSet: Rule = {
  $or: [
    {
      'properties.accessibility.entrances.0.stairs.0.count': 1,
      'properties.accessibility.entrances.0.stairs.0.stepHeight': {
        $lte: { value: 7.0, unit: 'cm' },
      },
    },
  ],
  // TODO add more rules for door width etc., multiple entrances, etc.
};

// the rules for determining that toilets are fully accessible
// first version only support one restroom
export const wheelmapToiletA11yRuleSet: Rule = {
  'properties.accessibility.restrooms': { $exists: true },
  'properties.accessibility.restrooms.0': { $exists: true },
  'properties.accessibility.restrooms.0.toilet': { $exists: true },
  'properties.accessibility.restrooms.0.entrance.isLevel': true,
  'properties.accessibility.restrooms.0.washBasin.accessibleWithWheelchair': true,
  // TODO add more rules for door width etc.
};

export type A11yRating = 'yes' | 'no' | 'partial' | 'unknown';

// Evaluates the wheelchair accessibility using the predefined wheelmap rulesets
export function evaluateWheelmapA11y(data: {}): A11yRating {
  const full = evaluateRule(data, fullWheelmapA11yRuleSet);
  if (full === 'true') {
    return 'yes';
  }

  const partial = evaluateRule(data, partialWheelmapA11yRuleSet);
  if (partial === 'true') {
    return 'partial';
  }

  if (full === 'false' || partial === 'false') {
    return 'no';
  }

  return 'unknown';
}

// Evaluates the wheelchair accessibility of the toilet using the predefined wheelmap rulesets
export function evaluateToiletWheelmapA11y(data: {}): A11yRating {
  const full = evaluateRule(data, wheelmapToiletA11yRuleSet);
  if (full === 'true') {
    return 'yes';
  }

  if (full === 'false') {
    return 'no';
  }

  return 'unknown';
}
