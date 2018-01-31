import { t } from 'c-3po';
import SimpleSchema from 'simpl-schema';

import './simpl-schema-extensions';
import { isoAlphaThreeCountryCodes } from './country-codes';

/**
 * The address of a places as Address as a series of structured attributes.
 */
export interface StructuredAddress {
  /**
   * A displayable, formatted address as rich text.
   */
  text?: string;
  /**
   * Room name
   */
  room?: string;
  /**
   * Contains level of place inside of a venue
   */
  level?: string;
  /**
   * Building name
   */
  building?: string;
  /**
   * House or street number.
   */
  house?: string;
  /**
   * Street name (in practice may also contain street number).
   */
  street?: string;
  /**
   * An alphanumeric string included in a postal address to
   * facilitate mail sorting (a.k.a. post code, postcode, or ZIP code).
   */
  postalCode?: string;
  /**
   * An array of named areas below the district and above street.
   * In some regions such areas might also contain street names,
   * when individual street segments have names separate from the name of the whole road.
   */
  areas?: string[];
  /**
   * A division of city; typically an administrative unit within a larger
   * city or a customary name of a city's neighborhood.
   */
  district?: string;
  /**
   * The name of the primary locality of the place.
   */
  city?: string;
  /**
   * For address conventions where more than to levels of named areas above the city level are in use,
   * the regions attribute provides an array with all additional area names,
   * ordered by decreasing size (starting with the highest subdivision below state)
   */
  regions?: string[];
  /**
   * A division of a state; typically a secondary-level administrative division of a country or equivalent.
   */
  county?: string;
  /**
   * A division of a country; typically a first-level administrative division of a country and/or a geographical region.
   */
  state?: string;
  /**
   * A code/abbreviation for the state division of a country.
   */
  stateCode?: string;
  /**
   * The localised country name.
   */
  country?: string;
  /**
   * A three-letter country code in ISO 3166-1 alpha-3, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
   */
  countryCode?: string;
}

/**
 * The StructuredAddressSchema allows easy validation, cleaning and checking of structured address objects.
 */
export const StructuredAddressSchema = new SimpleSchema({
  text: {
    label: t`Text`,
    type: String,
    accessibility: {
      description: t`A displayable, formatted address as rich text.`
    },
    optional: true
  },
  room: {
    label: t`Room`,
    type: String,
    accessibility: {
      description: t`Room name`,
      question: t`What is the name of the room?`,
      example: t`e.g. meeting room 'Rome'`
    },
    optional: true
  },
  level: {
    label: t`Level`,
    type: String,
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
    type: String,
    accessibility: {
      description: t`Building name`,
      example: t`e.g. main exposition hall`
    },
    optional: true
  },
  house: {
    label: t`House`,
    type: String,
    accessibility: {
      question: t`What’s the house number?`
    },
    optional: true
  },
  street: {
    label: t`Street`,
    type: String,
    accessibility: {
      question: t`What's the street called?`
    },
    optional: true
  },
  postalCode: {
    label: t`Postal Code`,
    type: String,
    accessibility: {
      description: t`Also called ZIP code.`,
      question: t`The postal code is…`
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
    type: String
  },
  district: {
    label: t`District`,
    type: String,
    accessibility: {
      description: t`A division of city; typically an administrative unit within a larger city or a customary name of a city\'s neighborhood.`,
      question: t`The place is located destrict…`
    },
    optional: true
  },
  city: {
    label: t`City`,
    type: String,
    accessibility: {
      question: t`And the city is…`
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
    type: String
  },
  county: {
    label: t`County`,
    type: String,
    accessibility: {
      description: t`A division of a state; typically a secondary-level administrative division of a country or equivalent.`
    },
    optional: true
  },
  state: {
    label: t`State`,
    type: String,
    accessibility: {
      description: t`A division of a country; typically a first-level administrative division of a country and/or a geographical region.`
    },
    optional: true
  },
  stateCode: {
    label: t`State Code`,
    type: String,
    accessibility: {
      description: t`A code/abbreviation for the state division of a country.`
    },
    optional: true
  },
  country: {
    label: t`Country`,
    type: String,
    accessibility: {
      description: t`The localised country name.`
    },
    optional: true
  },
  countryCode: {
    label: t`Country Code`,
    type: String,
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
