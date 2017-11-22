import SimpleSchema from 'simpl-schema';

export interface PlaceId {
  provider: string;

  [key: string]: any;
}

export const PlaceIdSchema = new SimpleSchema(
  {
    provider: {
      type: String
    }
  },
  { blackbox: true }
);
