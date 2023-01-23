import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
import BooleanField from './BooleanField';

/**
 * Describes a person. This exists only to transform data from sources where no physical attributes
 * of places have been captured as data directly. It's better to describe physical attributes of
 * places and let people decide themselves which facilities they need or which place condition works
 * for them.
 *
 * @deprecated
 */
export interface PersonalProfile {
  /** `true` for a person that is inable to speak. */
  muteness?: boolean;
  /** `true` for a person that has a guide dog. */
  guideDog?: boolean;
  /** `true` for a person that has a hearing impairment. */
  hearingImpairment?: boolean;
  /** `true` for a person that has a learning impairment. */
  learningImpairment?: boolean;
  /** `true` for a person that has a mobility impairment. */
  mobilityImpairment?: boolean;
  /** `true` for a person that has a visual impairment. */
  visualImpairment?: boolean;
  /** `true` for a person that is blind. */
  blindness?: boolean;
  /** `true` for a person that uses a wheelchair. */
  wheelchair?: boolean;
}

export const getPersonalProfileSchemaDefinition: () => SchemaDefinition = () => ({
  muteness: BooleanField,
  guideDog: BooleanField,
  hearingImpairment: BooleanField,
  learningImpairment: BooleanField,
  mobilityImpairment: BooleanField,
  visualImpairment: BooleanField,
  blindness: BooleanField,
  wheelchair: BooleanField,
});
