import { SchemaKeyDefinition } from 'simpl-schema/dist/esm/types';

/**
 * regex that matches any HTML color including the following formats:
 * - #rgb
 * - #rgba
 * - #rrggbb
 * - #rrggbbaa
 */
const hashColorRegexString = '#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})';

const colorSpace3 = 'rgb|hsl|hwb|lab|lch';
const colorSpace4 = 'cmyk|rgba|hsla';
const decimalRegex = '\\s*\\d{1,3}(\\.\\d+)?\\s*';

/**
 * regex that matches any HTML color including the following formats:
 * - rgb(r, g, b)
 * - hsl(h, s, l)
 * - hwb(h, w, b)
 * - lab(l, a, b)
 * - lch(l, c, h)
 */

const threeDimensionalColorRegexString = `(${colorSpace3})\\(${decimalRegex},${decimalRegex},${decimalRegex}\\)`;
/**
 * regex that matches any HTML color including the following formats:
 * - rgba(r, g, b, a)
 * - hsla(h, s, l, a)
 * - cmyk(c, m, y, k)
 */
const fourDimensionalColorRegexString = `(${colorSpace4})\\(${decimalRegex},${decimalRegex},${decimalRegex},${decimalRegex}\\)`;

/**
 * regex that matches any HTML color including the following formats:
 * - gray(g)
 */

const grayColorRegexString = `gray\\(${decimalRegex}\\)`;

/** the regexes of above as array */

const colorRegexStrings = [
  hashColorRegexString,
  threeDimensionalColorRegexString,
  fourDimensionalColorRegexString,
  grayColorRegexString,
];

const colorRegexString = colorRegexStrings.join('|');
const colorRegex = new RegExp(`^(${colorRegexString})|\\w+$`, 'i');

const htmlColorSchemaDefinition: SchemaKeyDefinition = {
  type: String,
  optional: true,
  regEx: colorRegex,
};

export default htmlColorSchemaDefinition;
