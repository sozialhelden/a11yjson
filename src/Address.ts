import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import getIsoAlphaThreeCountryCodes from './CountryCodes.js';
import { LocalizedString, getLocalizedStringSchemaDefinition } from './LocalizedString.js';

/**
 * The address of a places as Address as a series of structured attributes.
 */
export interface StructuredAddress {
  /**
   * A displayable, formatted address as rich text.
   */
  text?: LocalizedString;
  /**
   * Room name. Example: `{ en: "Meeting room ‘Rome’" }`.
   */
  room?: LocalizedString;
  /**
   * Room number. Example: `{ en: "B-101" }`.
   */
  roomNumber?: LocalizedString;
  /**
   * Name of the level. Example: `{ en: "Floor 1" }`, `{ en: "Ground level" }`.
   */
  levelName?: LocalizedString;
  /**
   * Relative in relation to other levels. `0` for ground level must have index 0, `1` for first
   * level, etc. You can use half numbers for levels like `1.5`.
   */
  levelIndex?: number;
  /**
   * Building name
   */
  building?: LocalizedString;
  /**
   * House or street number.
   */
  house?: LocalizedString;
  /**
   * Street name (in practice may also contain street number).
   */
  street?: LocalizedString;
  /**
   * An alphanumeric string included in a postal address to
   * facilitate mail sorting (a.k.a. post code, postcode, or ZIP code).
   */
  postalCode?: LocalizedString;
  /**
   * An array of named areas below the district and above street.
   * In some regions such areas might also contain street names,
   * when individual street segments have names separate from the name of the whole road.
   */
  areas?: LocalizedString[];
  /**
   * A division of city; typically an administrative unit within a larger
   * city or a customary name of a city's neighborhood.
   */
  district?: LocalizedString;
  /**
   * The name of the primary locality of the place.
   */
  city?: LocalizedString;
  /**
   * For address conventions where more than to levels of named areas above the city level are in
   * use, the regions attribute provides an array with all additional area names, ordered by
   * decreasing size (starting with the highest subdivision below state)
   */
  regions?: LocalizedString[];
  /**
   * A division of a state; typically a secondary-level administrative division of a country or
   * equivalent.
   */
  county?: LocalizedString;
  /**
   * A division of a country; typically a first-level administrative division of a country and/or a
   * geographical region.
   */
  state?: LocalizedString;
  /**
   * A code/abbreviation for the state division of a country.
   */
  stateCode?: string;
  /**
   * A three-letter country code in ISO 3166-1 alpha-3, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
   */
  countryCode?: string;
}

/**
 * The StructuredAddressSchema allows easy validation, cleaning and checking of structured address
 * objects.
 */
export const getStructuredAddressSchemaDefinition: () => SchemaDefinition = () => ({
  ...getLocalizedStringSchemaDefinition('text'),
  ...getLocalizedStringSchemaDefinition('room'),
  ...getLocalizedStringSchemaDefinition('roomNumber'),
  ...getLocalizedStringSchemaDefinition('levelName'),
  levelIndex: {
    type: Number,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('building'),
  ...getLocalizedStringSchemaDefinition('house'),
  ...getLocalizedStringSchemaDefinition('street'),
  ...getLocalizedStringSchemaDefinition('postalCode'),
  areas: {
    type: Array,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('areas.$'),
  ...getLocalizedStringSchemaDefinition('district'),
  ...getLocalizedStringSchemaDefinition('city'),
  regions: {
    type: Array,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('regions.$'),
  ...getLocalizedStringSchemaDefinition('county'),
  ...getLocalizedStringSchemaDefinition('state'),
  stateCode: {
    type: String,
    optional: true,
  },
  countryCode: {
    type: String,
    optional: true,
    allowedValues: getIsoAlphaThreeCountryCodes().map((c) => c.value),
  },
});
