import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';

/**
 * Describes a combination of technologies that are used together to achieve a specific goal.
 */
export interface TechCombination {
  /**
   * Localizable name/title of the combination. Can describe in which mode or for what goal the
   * tech is used.
   */

  name?: LocalizedString;

  /**
   * Localizable description of the combination. Can describe in which mode or for what goal the
   * tech is used.
   */

  description?: LocalizedString;

  /**
   * URIs of technologies that are combined together to form this tech combination. Use RDF if
   * possible.
   *
   * Supported prefix examples:
   *
   * - `wikidata:Q117266` for a banana connector (https://www.wikidata.org/wiki/Q117266)
   * - `openstreetmap:way/123` for tying the tech to a specific location on the planet
   * - `wikipedia:Banana connector` for a banana connector (https://en.wikipedia.org/wiki/Banana_connector)
   */

  uris: string[];
}

export const getTechCombinationSchemaDefinition: () => SchemaDefinition = () => ({
  ...getLocalizedStringSchemaDefinition('name'),
  ...getLocalizedStringSchemaDefinition('description'),
  uris: {
    type: Array,
    defaultValue: [],
    optional: true,
  },
  'uris.$': {
    type: String,
  },
});
