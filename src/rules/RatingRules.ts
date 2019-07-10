import { isMatch, isEqual, entries, get, intersection } from 'lodash';
import { Quantity } from '../Units';

// rule types
type Comparable = number | string | Quantity;
// checks if a property is null or has a value
type ExistsValue = { $exists: boolean };
// checks if a property is true or not set
type UnknownOrValue = { $unknownOr: boolean };
// checks if a property is undefined or has a value (including null)
type DefinedValue = { $defined: true };
type LessThan = { $lt: Comparable };
type LessThanEquals = { $lte: Comparable };
type GreaterThan = { $gt: Comparable };
type GreaterThanEquals = { $gte: Comparable };
type Equals = { $eq: Comparable };
type NotEquals = { $ne: Comparable };
type MatchValue =
  | string
  | number
  | undefined
  | null
  | boolean
  | DefinedValue
  | ExistsValue
  | UnknownOrValue
  | LessThan
  | LessThanEquals
  | GreaterThan
  | GreaterThanEquals
  | Equals
  | NotEquals;
type MatchRule = {
  [key: string]: MatchValue;
};
type OrRule = {
  $or: ReadonlyArray<Rule>;
};
type AndRule = {
  $and: ReadonlyArray<Rule>;
};
export type Rule = OrRule | AndRule | MatchRule;

function isOrRule(rule: Rule): rule is OrRule {
  return rule.hasOwnProperty('$or');
}

function isAndRule(rule: Rule): rule is AndRule {
  return rule.hasOwnProperty('$and');
}

function isMatchRule(rule: Rule): rule is MatchRule {
  return !isAndRule(rule) && !isOrRule(rule);
}

// three valued logic for a11y
export type RuleEvaluationResult = 'true' | 'false' | 'unknown';

let indent = 0;

const logRule = (message: string, ...args: unknown[]) => {
  // console.log(''.padStart(indent, "  ") + message, ...args);
};

// combine multiple rules with a three valued or, with the order of true > false > unknown
// this does not align with Kleene and Priest logics, but knowing that a rule does not apply
// is strong enough reason to determine that the or should be false
function evaluateOrRule(data: {}, orRule: OrRule): RuleEvaluationResult {
  let finalResult: RuleEvaluationResult = 'unknown';

  const values = [];
  for (const rule of orRule.$or) {
    const result = evaluateRule(data, rule);

    if (result === 'true') {
      return 'true';
    }

    // apply not found if nothing was found before
    if (finalResult === 'unknown') {
      finalResult = result;
    }
  }

  return finalResult;
}

function evaluateAndRule(data: {}, andRule: AndRule): RuleEvaluationResult {
  for (const rule of andRule.$and) {
    const result = evaluateRule(data, rule);
    if (result !== 'true') {
      return 'false';
    }
  }
  return 'true';
}

// read the value out of a quantity
function getQuantityValue(a: string | number | Quantity): number | string {
  let aValue: number | string = 0;
  if (typeof a === 'object') {
    // todo use better conversion in the future
    const multiplier = a.unit === 'inch' ? 2.54 : 1;
    aValue = a.value * multiplier;
  } else {
    aValue = a;
  }
  return aValue;
}

// the allowed operator types for comparisons
type Operators = '$eq' | '$lt' | '$lte' | '$gt' | '$gte' | '$ne';
const allowedOperators: ReadonlyArray<Operators> = Object.freeze([
  '$eq',
  '$lt',
  '$lte',
  '$gt',
  '$gte',
  '$ne'
] as Operators[]);

// compare two values using an operator, if they are quantities, read the underlying value
function compareByOperator(
  first: Comparable,
  second: Comparable,
  operator: Operators = '$eq'
): boolean {
  const a = getQuantityValue(first);
  const b = getQuantityValue(second);
  if (operator === '$eq') {
    return a === b;
  }
  if (operator === '$lt') {
    return a < b;
  }
  if (operator === '$lte') {
    return a <= b;
  }
  if (operator === '$gt') {
    return a > b;
  }
  if (operator === '$gte') {
    return a >= b;
  }
  if (operator === '$ne') {
    return a !== b;
  }
  return false;
}

// checks wether the given data matches the rule
function evaluateMatchRule(data: {}, rule: MatchRule): RuleEvaluationResult {
  let finalResult: RuleEvaluationResult | undefined = undefined;
  for (const [path, matcher] of entries(rule)) {
    const fieldData = get(data, path);
    logRule('match', path, matcher, fieldData, finalResult);

    const isObjectMatch = typeof matcher === 'object';
    const isUnknownOrRule = matcher && isObjectMatch && matcher.hasOwnProperty('$unknownOr');
    const isExistsRule = matcher && isObjectMatch && matcher.hasOwnProperty('$exists');
    const isDefinedRule = matcher && isObjectMatch && matcher.hasOwnProperty('$defined');

    if (typeof fieldData === 'undefined' && !isDefinedRule && !isUnknownOrRule) {
      // data is missing, we don't know anything about this entry
      logRule('-match.dataMissing');
      return 'unknown';
    }

    if (matcher && isObjectMatch) {
      let matched = false;
      const foundOperators = intersection(
        allowedOperators,
        Object.keys(matcher || {})
      ) as Operators[];
      if (foundOperators.length === 1) {
        // compare by operator
        matched = compareByOperator(fieldData, matcher[foundOperators[0]], foundOperators[0]);
        logRule('-match.compareByOperator', 'data', fieldData, 'matched', matched);
      } else if (isDefinedRule) {
        // custom defined check, unknown check is skipped above
        matched = typeof fieldData !== 'undefined';
        logRule('-match.isDefined', 'data', fieldData, 'matched', matched);
      } else if (isExistsRule) {
        // custom exists check
        const existsValue = matcher['$exists'];
        matched = (fieldData !== null) === existsValue;
        logRule('-match.$exists =', existsValue, 'data', fieldData, 'matched', matched);
      } else if (isUnknownOrRule) {
        // either undefined or exactly the value
        const unknownOrValue = matcher['$unknownOr'];
        matched = fieldData === unknownOrValue || typeof fieldData === 'undefined';
        logRule('-match.$unknownOr =', unknownOrValue, 'data', fieldData, 'matched', matched);
      } else {
        // match whole object
        matched = isMatch(fieldData, matcher as object);
        logRule('-match.isMatch =', matcher, 'data', fieldData, 'matched', matched);
      }

      // abort early with no match
      if (!matched) {
        // any failed comparision and we fail the whole match
        return 'false';
      }

      if (typeof finalResult === 'undefined') {
        // mark result as yes, and continue checking
        finalResult = 'true';
      }
    } else {
      // normal data, do a deep equals
      const equals = isEqual(fieldData, matcher);
      if (!equals) {
        // any failed comparision and we fail the whole match
        return 'false';
      }
      if (typeof finalResult === 'undefined') {
        // mark result as yes, and continue checking
        finalResult = 'true';
      }
    }
  }

  logRule('+match', finalResult);

  return finalResult || 'unknown';
}

// evaluates any kind of rule
export function evaluateRule(data: {}, rule: Rule): RuleEvaluationResult {
  logRule('begin rule');
  let type = 'unknown';
  let result: RuleEvaluationResult = 'unknown';
  indent++;
  if (isOrRule(rule)) {
    result = evaluateOrRule(data, rule);
    type = 'or';
  } else if (isAndRule(rule)) {
    result = evaluateAndRule(data, rule);
    type = 'and';
  } else if (isMatchRule(rule)) {
    result = evaluateMatchRule(data, rule);
    type = 'match';
  }

  indent--;
  logRule('end rule  -> ', type, '=', result);
  return result;
}
