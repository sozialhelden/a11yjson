import { t } from 'ttag';
import { Length, LengthSchema, quantityDefinition } from './Units';
import { createSchemaInstance } from './SimpleSchemaExtensions';

export interface Mirror {
  /**
   * `true` if the mirror is located inside the restroom, `false` if not, `undefined` if
   * condition is unknown.
   */
  isLocatedInsideRestroom?: boolean;
  /**
   * `true` if the mirror is accessible while sitting in a wheelchair, `false` if not, `undefined`
   * if condition is unknown.
   */
  isAccessibleWhileSeated: boolean;
  /**
   * How far is the mirror's bottom from the ground?
   */
  heightFromGround: Length;
}

export const MirrorSchema = createSchemaInstance('Mirror', {
  isLocatedInsideRestroom: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Is the mirror inside the restroom?`
    }
  },
  isAccessibleWhileSeated: {
    type: Boolean,
    optional: true,
    accessibility: {
      question: t`Can the mirror be used when sitting in a wheelchair?`
    }
  },
  heightFromGround: quantityDefinition(LengthSchema)
});
