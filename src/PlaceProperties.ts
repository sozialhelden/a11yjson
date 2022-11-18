import SimpleSchema from 'simpl-schema';

import { Accessibility, getAccessibilitySchemaDefinition } from './Accessibility';
import { StructuredAddress, getStructuredAddressSchemaDefinition } from './Address';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';
import { AccessType, accessTypes } from './AccessType';

export interface PlaceProperties {
  /**
   * The official name of this place.
   */
  name?: LocalizedString;

  /**
   * The address of this place. `null` indicates that this place has no address, `undefined` or
   * missing property indicates unknown.
   */
  address?: StructuredAddress | null;

  /**
   * Text description containing helpful information for people with disabilities.
   */
  description?: LocalizedString;

  /**
   * Phone number to call a representant of the place's operator.
   */
  phoneNumber?: string;

  /**
   * Email address of the place's operator where you can get accessibility relevant information.
   */
  emailAddress?: string;

  /**
   * Category name of the place
   * @example ‘restaurant’
   */
  category: string;

  /**
   * The accessibility of this place. `null` indicates that this place has no data, `undefined` or
   * missing property indicates unknown.
   */
  accessibility?: Accessibility | null;

  // - machine data fields -

  /**
   * ID of the parent place that this place belongs to.
   */
  parentPlaceInfoId?: string;

  /**
   * The parent's place ID in the original dataset from the data provider.
   */
  originalParentPlaceInfoId?: string;

  /**
   * Source ID of the parent place that this place belongs to. This is usually the same ID as
   * `sourceId`, but the parent place can be from another data provider.
   */
  parentPlaceSourceId?: string;

  /**
   * ID of the data source that provided the place (accessibility.cloud ID)
   */
  sourceId?: string;

  /**
   * ID of the import that created this place (accessibility.cloud ID)
   */
  sourceImportId?: string;

  /**
   * ID of this place of interest in the original data source. To simplify communication with the
   * data provider, it’s a good idea to use the provider's internal ID here.
   */
  originalId?: string;

  /**
   * URLs of this equipment in external data sources, for example in GTFS, IMDF or other sources.
   */
  sameAs?: string[];

  /**
   * Original source data for this equipment (for easier debugging)
   */
  originalData?: any;

  /**
   * IDs in other data sources that are linked to this equipment, indexed by schema/context.
   */
  ids?: Record<string, string>;

  /**
   * URL of the original data source’s website describing this place.
   */
  infoPageUrl?: string;

  /**
   * URL of the original data source’s website on a subpage that allows to edit the original data.
   */
  editPageUrl?: string;

  /**
   * URL of the place’s own website.
   */
  placeWebsiteUrl?: string;

  /**
   * Defines who this restroom is for. See https://wiki.openstreetmap.org/wiki/Key:access for more
   * information.
   */
  access?: AccessType[];
}

export const getPlacePropertiesSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  ...getLocalizedStringSchemaDefinition('name'),
  category: {
    type: String,
  },
  ...getPrefixedSchemaDefinition('address', getStructuredAddressSchemaDefinition()),
  ...getLocalizedStringSchemaDefinition('description'),
  phoneNumber: {
    type: String,
    optional: true,
  },
  emailAddress: {
    type: String,
    regEx: SimpleSchema.RegEx.EmailWithTLD,
    optional: true,
  },
  ...getPrefixedSchemaDefinition('accessibility', getAccessibilitySchemaDefinition()),
  infoPageUrl: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
  },
  editPageUrl: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
  },
  placeWebsiteUrl: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
  },
  // machine data fields
  sameAs: {
    type: Array,
    optional: true,
  },
  'sameAs.$': {
    type: String,
  },
  ids: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  originalId: {
    type: String,
    optional: true,
  },
  parentPlaceInfoId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
  },
  originalParentPlaceInfoId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
  },
  parentPlaceSourceId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
  },
  originalData: {
    type: String,
    optional: true,
  },
  sourceId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
  },
  sourceImportId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
  },
  access: {
    type: Array,
    optional: true,
  },
  'access.$': {
    type: String,
    allowedValues: accessTypes,
  },
});
