import { SchemaKeyDefinition } from '@sozialhelden/simpl-schema';

export const Necessities = [
  'optional',
  'always',
  'sometimes',
  'required',
  'possible',
  'impossible',
  'recommended',
  'discouraged',
  'forbidden',
  'notApplicable',
  'notAvailable',
  'notNecessary',
  'unknown',
] as const;

export type Necessity = typeof Necessities[number];

export const NecessityField: SchemaKeyDefinition = {
  type: String,
  optional: true,
  allowedValues: (Necessities as any) as string[],
};
