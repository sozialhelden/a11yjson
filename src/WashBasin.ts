import { SchemaDefinition } from '@sozialhelden/simpl-schema';
import { getInteractableSchemaDefinition, Interactable } from './Interactable.js';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchema } from './Quantity.js';

export const WashBashinInteractions = [
  'changeTemperature',
  'changeWaterPressure',
  'useWater',
  'getHotWater',
  'getColdWater',
  'getCarbonizedWater',
  'useWaterJet',
  'useWaterSpray',
  'useSoap',
  'getTowel',
  'getPaperTowel',
  'useAirDryer',
  'sanitizeHands',
] as const;
export type WashBashinInteraction = typeof WashBashinInteractions[number];
export const WashBasinInteractionsSet = new Set(WashBashinInteractions);

/**
 * Describes a wash basin.
 */
export interface WashBasin extends Interactable<WashBashinInteraction> {
  /**
   * `true` if the restroom's wash basin is inside the cabin, `false` if not.
   */
  isLocatedInsideRestroom?: boolean;

  /**
   * `true` if the wash basin is accessible with wheelchairs, `false` if not.
   */
  accessibleWithWheelchair?: boolean;

  /**
   * Defines at which height is the wash basin's top
   */
  height?: Length;

  /**
   * How high is the space below the wash basin?
   */
  spaceBelowHeight?: Length;

  /**
   * How deep is the space below the wash basin?
   */
  spaceBelowDepth?: Length;
}

export const getWashBasinSchemaDefinition: () => SchemaDefinition = () => ({
  isLocatedInsideRestroom: {
    type: Boolean,
    optional: true,
  },
  accessibleWithWheelchair: {
    type: Boolean,
    optional: true,
  },
  ...getPrefixedQuantitySchemaDefinition('height', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('spaceBelowHeight', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('spaceBelowDepth', LengthSchema),
  ...getInteractableSchemaDefinition(WashBasinInteractionsSet),
});
