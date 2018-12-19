import { t } from 'ttag';
import SimpleSchema from 'simpl-schema';

import './SimpleSchemaExtensions';
import { isoAlphaThreeCountryCodes } from './CountryCodes';
import { LocalizedStringSchema, LocalizedString } from './LocalizedString';

/**
 * The address of a places as Address as a series of structured attributes.
 */
export interface StructuredAddress {
  /**
   * A displayable, formatted address as rich text.
   */
  text?: LocalizedString;
  /**
   * Room name
   */
  room?: LocalizedString;
  /**
   * Contains level of place inside of a venue
   */
  level?: LocalizedString;
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
   * For address conventions where more than to levels of named areas above the city level are in use,
   * the regions attribute provides an array with all additional area names,
   * ordered by decreasing size (starting with the highest subdivision below state)
   */
  regions?: LocalizedString[];
  /**
   * A division of a state; typically a secondary-level administrative division of a country or equivalent.
   */
  county?: LocalizedString;
  /**
   * A division of a country; typically a first-level administrative division of a country and/or a geographical region.
   */
  state?: LocalizedString;
  /**
   * A code/abbreviation for the state division of a country.
   */
  stateCode?: LocalizedString;
  /**
   * A three-letter country code in ISO 3166-1 alpha-3, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
   */
  countryCode?: LocalizedString;
}

/**
 * The StructuredAddressSchema allows easy validation, cleaning and checking of structured address objects.
 */
export const StructuredAddressSchema = new SimpleSchema({
  text: {
    label: t`Text`,
    type: LocalizedStringSchema,
    accessibility: {
      description: t`A displayable, formatted address as rich text (Markdown).`
    },
    optional: true
  },
  room: {
    label: t`Room`,
    type: LocalizedStringSchema,
    accessibility: {
      description: t`Room name`,
      question: t`What is the name of the room?`,
      example: t`e.g. meeting room 'Rome'`
    },
    optional: true
  },
  level: {
    label: t`Level`,
    type: LocalizedStringSchema,
    accessibility: {
      description: t`The number of the floor in british convention (ground floor is 0)`,
      question: t`What is the number of the floor?`,
      extendedInformationUrl: 'https://en.wikipedia.org/wiki/Storey',
      example: t`e.g. 4`
    },
    optional: true
  },
  building: {
    label: t`Building`,
    type: LocalizedStringSchema,
    accessibility: {
      description: t`Building name`,
      example: t`e.g. main exposition hall`
    },
    optional: true
  },
  house: {
    label: t`House`,
    type: LocalizedStringSchema,
    accessibility: {
      question: t`What is the house number?`
    },
    optional: true
  },
  street: {
    label: t`Street`,
    type: LocalizedStringSchema,
    accessibility: {
      question: t`What is the name of the street?`,
      description: t`Please avoid numbers for houses or buildings.`
    },
    optional: true
  },
  postalCode: {
    label: t`Postal Code`,
    type: LocalizedStringSchema,
    accessibility: {
      question: t`What is the postal code?`,
      description: t`Also called ZIP code.`
    },
    optional: true
  },
  areas: {
    label: t`Areas`,
    type: Array,
    accessibility: {
      description: t`An array of named areas below the district and above street. In some regions such areas might also contain street names, when individual street segments have names separate from the name of the whole road.`
    },
    optional: true
  },
  'areas.$': {
    type: LocalizedStringSchema
  },
  district: {
    label: t`District`,
    type: LocalizedStringSchema,
    accessibility: {
      description: t`A division of city; typically an administrative unit within a larger city or a customary name of a city\'s neighborhood.`,
      question: t`The place is located destrict…`
    },
    optional: true
  },
  city: {
    label: t`City`,
    type: LocalizedStringSchema,
    accessibility: {
      question: t`In which city is this place?`
    },
    optional: true
  },
  regions: {
    label: t`Regions`,
    type: Array,
    accessibility: {
      description: t`For address conventions where more than to levels of named areas above the city level are in use, the regions attribute provides an array with all additional area names, ordered by decreasing size (starting with the highest subdivision below state)`
    },
    optional: true
  },
  'regions.$': {
    type: LocalizedStringSchema
  },
  county: {
    label: t`County`,
    type: LocalizedStringSchema,
    accessibility: {
      description: t`A division of a state; typically a secondary-level administrative division of a country or equivalent.`
    },
    optional: true
  },
  state: {
    label: t`State`,
    type: LocalizedStringSchema,
    accessibility: {
      description: t`A division of a country; typically a first-level administrative division of a country and/or a geographical region.`
    },
    optional: true
  },
  stateCode: {
    label: t`State Code`,
    type: LocalizedStringSchema,
    accessibility: {
      description: t`A code/abbreviation for the state division of a country.`
    },
    optional: true
  },
  countryCode: {
    label: t`Country Code`,
    type: LocalizedStringSchema,
    optional: true,
    allowedValues: isoAlphaThreeCountryCodes.map(c => c.value),
    accessibility: {
      description: t`A three-letter country code in ISO 3166-1 alpha-3, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3`,
      options: isoAlphaThreeCountryCodes
    }
  }
});

/**
 * The AddressSchema extends the StructuredAddressSchema and allows also Strings
 */
export const AddressSchema = SimpleSchema.oneOf(StructuredAddressSchema, String);

/**
 * A union type between StructuredAddress and string
 */
export type Address = StructuredAddress | string;
