import { t } from 'ttag';
import { getInteractableSchemaDefinition, Interactable } from './Interactable';
import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';

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

/**
 * Describes a wash basin.
 */
export interface WashBasin extends Interactable<WashBashinInteraction> {
  /**
   * `true` if the restroom's wash basin is inside the cabin, `false` if not, `undefined`
   * if condition is unknown.
   */
  isLocatedInsideRestroom?: boolean;

  /**
   * `true` if the wash basin is accessible with wheelchairs, `false` if not, `undefined`
   * if condition is unknown.
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

export const getWashBasinSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  isLocatedInsideRestroom: {
    type: Boolean,
    optional: true,
    label: t`Is the wash basin located inside the restroom cabin?`,
  },
  accessibleWithWheelchair: {
    type: Boolean,
    optional: true,
    label: t`Can a person drive a wheelchair under the wash basin?`,
  },
  ...getPrefixedQuantitySchemaDefinition('height', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('spaceBelowHeight', LengthSchemaDefinition),
  ...getPrefixedQuantitySchemaDefinition('spaceBelowDepth', LengthSchemaDefinition),
  ...getInteractableSchemaDefinition(WashBashinInteractions),
});
