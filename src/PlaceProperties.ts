import { t } from "ttag";
import SimpleSchema from "simpl-schema";

import "./SimpleSchemaExtensions";

import { Accessibility, AccessibilitySchema } from "./Accessibility";
import { Address, AddressSchema } from "./Address";
import { LocalizedStringSchema, LocalizedString } from "./LocalizedString";

export interface PlaceProperties {
  // properties
  /**
   * The official name of this place.
   */
  name?: LocalizedString;

  /**
   * The address of this place.
   * `null` indicates that this place has no address, `undefined` or missing property indicates
   * unknown.
   */
  address?: Address | null;

  /**
   * Text description containing helpful information for people with disabilities.
   */
  description?: LocalizedString;

  /**
   * Phone number to call a representant of the place's operator.
   */
  phoneNumber?: LocalizedString;

  /**
   * Email address of the place's operator where you can get accessibility relevant information.
   */
  emailAddress?: LocalizedString;

  /**
   * Category name of the place
   * @example ‘restaurant’
   */
  category: string;

  /**
   * The accessibility of this place.
   * `null` indicates that this place has no data, `undefined` or missing property indicates unknown.
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
  infoPageUrl?: LocalizedString;

  /**
   * URL of the original data source’s website on a subpage that allows to edit the original data.
   */
  editPageUrl?: LocalizedString;

  /**
   * URL of the place’s own website.
   */
  placeWebsiteUrl?: LocalizedString;
}

export const PlacePropertiesSchema = new SimpleSchema({
  name: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`What is the name of this place?`
    }
  },
  category: {
    type: String,
    accessibility: {
      question: t`What type of place is this?`,
      componentHint: "Category"
    }
  },
  address: {
    type: AddressSchema,
    optional: true,
    label: t`Address`,
    accessibility: {
      question: t`Would you like to add the address?`,
      componentHint: "Address"
    }
  },
  description: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`How would you describe this place?`,
      componentHint: "TextArea"
    }
  },
  phoneNumber: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`What is the phone number of this place?`,
      description: t`The phone number of this place, with international country code`,
      example: t`e.g. +1-555-555-90-210`,
      componentHint: "PhoneNumber"
    }
  },
  emailAddress: {
    type: LocalizedStringSchema,
    optional: true,
    accessibility: {
      question: t`What is the email address of this place?`,
      description: t`An email address where visitors can get accessibility relevant information`,
      example: t`e.g. accessibility@example.com`
    }
  },
  accessibility: {
    type: AccessibilitySchema,
    optional: true,
    accessibility: {
      question: t`Okay, now let\`s map the accessibility.`,
      description: t`Describes the overall accessibility of a place.`
    }
  },
  infoPageUrl: {
    type: LocalizedStringSchema,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    accessibility: {
      description: t`URL of the original data source’s website describing this place`
    }
  },
  editPageUrl: {
    type: LocalizedStringSchema,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    accessibility: {
      description: t`URL of the original data source’s website on a subpage that allows to edit the original data.`
    }
  },
  placeWebsiteUrl: {
    type: LocalizedStringSchema,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    accessibility: {
      description: t`URL of the place’s own website`
    }
  },
  // machine data fields
  sameAs: {
    type: Array,
    optional: true,
    accessibility: {
      machineData: true
    }
  },
  "sameAs.$": {
    type: String,
    accessibility: {
      machineData: true
    }
  },
  ids: {
    type: Object,
    optional: true,
    blackbox: true
  },
  originalId: {
    type: String,
    optional: true,
    accessibility: {
      machineData: true
    }
  },
  parentPlaceInfoId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    accessibility: {
      machineData: true
    }
  },
  originalParentPlaceInfoId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    accessibility: {
      machineData: true
    }
  },
  parentPlaceSourceId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    accessibility: {
      machineData: true
    }
  },
  originalData: {
    type: String,
    optional: true,
    accessibility: {
      machineData: true
    }
  },
  eventId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    accessibility: {
      machineData: true
    }
  },
  creatorId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    accessibility: {
      machineData: true
    }
  },
  sourceId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    accessibility: {
      machineData: true
    }
  },
  sourceImportId: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id,
    accessibility: {
      machineData: true
    }
  }
});
