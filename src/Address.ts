import { SchemaDefinition } from 'simpl-schema/dist/esm/types';
import { t } from 'ttag';
import getIsoAlphaThreeCountryCodes from './CountryCodes';
import { LocalizedString, getLocalizedStringSchemaDefinition } from './LocalizedString';

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
  ...getLocalizedStringSchemaDefinition('text', {
    label: t`Text`,
  }),
  ...getLocalizedStringSchemaDefinition('room', {
    label: t`Room`,
  }),
  ...getLocalizedStringSchemaDefinition('roomNumber', {
    label: t`Room number`,
  }),
  ...getLocalizedStringSchemaDefinition('levelName', {
    label: t`Level name`,
  }),
  levelIndex: {
    label: t`Level index`,
    type: Number,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('building', {
    label: t`Building`,
  }),
  ...getLocalizedStringSchemaDefinition('house', {
    label: t`House`,
  }),
  ...getLocalizedStringSchemaDefinition('street', {
    label: t`Street`,
  }),
  ...getLocalizedStringSchemaDefinition('postalCode', {
    label: t`Postal Code`,
  }),
  areas: {
    label: t`Areas`,
    type: Array,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('areas.$'),
  ...getLocalizedStringSchemaDefinition('district', {
    label: t`District`,
  }),
  ...getLocalizedStringSchemaDefinition('city', {
    label: t`City`,
  }),
  regions: {
    label: t`Regions`,
    type: Array,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('regions.$'),
  ...getLocalizedStringSchemaDefinition('county', {
    label: t`County`,
  }),
  ...getLocalizedStringSchemaDefinition('state', {
    label: t`State`,
  }),
  stateCode: {
    type: String,
    optional: true,
    label: t`State Code`,
  },
  countryCode: {
    type: String,
    optional: true,
    label: t`Country Code`,
    allowedValues: getIsoAlphaThreeCountryCodes().map((c) => c.value),
  },
});
