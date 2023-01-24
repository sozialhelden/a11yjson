import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
import {
  getPrefixedQuantitySchemaDefinition, Length, LengthSchema, Slope, SlopeSchema,
} from './Quantity.js';

export const SurfaceTypeValues = [
  'acrylic',
  'aluminium',
  'anti-slip',
  'artificial',
  'artificial_grass',
  'artificial_turf',
  'asfalto',
  'ash',
  'asphalt',
  'astroturf',
  'bamboo',
  'bare_rock',
  'bark',
  'barkchips',
  'bedrock',
  'bitumen',
  'bituminous',
  'block',
  'boardwalk',
  'boulders',
  'brick',
  'brick_weave',
  'bricks',
  'bushes',
  'carpet',
  'cement',
  'chalk',
  'chipseal',
  'cinder',
  'clay',
  'cobblestone',
  'compacted',
  'compacted_gravel',
  'composite',
  'con',
  'concrete',
  'concrete_slab',
  'concrete_slabs',
  'construction',
  'coral',
  'coral_sand',
  'crushed_limestone',
  'crushed_shells',
  'debris',
  'decoturf',
  'dirt',
  'earth',
  'enrobé',
  'fine_gravel',
  'fine_sand',
  'flagstone',
  'footway',
  'glass',
  'goudron',
  'granite',
  'grass',
  'grass_paver',
  'grass_scrub',
  'grassland',
  'grating',
  'gravel',
  'green',
  'grit',
  'ground',
  'hardcore',
  'ice',
  'ice_road',
  'interlock',
  'iron',
  'laterite',
  'lawn',
  'leaves',
  'limerock',
  'limestone',
  'linoleum',
  'loose_gravel',
  'marble',
  'marble_plate',
  'meadow',
  'metal',
  'metal_grid',
  'mixed',
  'moss',
  'mud',
  'mulch',
  'native',
  'natural',
  'none',
  'oil',
  'overgrown',
  'path',
  'paved',
  'pavement',
  'paving',
  'paving_stone',
  'paving_stones',
  'peat',
  'pebbles',
  'pebblestone',
  'plank',
  'plastic',
  'plates',
  'rasin',
  'residential',
  'rock',
  'rocks',
  'rocky',
  'roman_paving',
  'rubber',
  'rubbercrumb',
  'rubble',
  'salt',
  'sand',
  'sandstone',
  'sawdust',
  'scree',
  'scrub',
  'sealed',
  'sett',
  'shell',
  'shells',
  'shingle',
  'slabs',
  'snow',
  'soil',
  'spur',
  'steel',
  'stepping_stones',
  'stone',
  'stones',
  'synthetic',
  'tactile_paving',
  'tar',
  'tared',
  'tarmac',
  'tartan',
  'terra',
  'terre',
  'tile',
  'tiles',
  'timber',
  'track',
  'trail',
  'trees',
  'tuff',
  'turf',
  'undefined',
  'unhewn_cobblestone',
  'unpaved',
  'unpaved2',
  'unpaved33',
  'unpaved_minor',
  'unsealed',
  'water',
  'wood',
  'wood_chips',
  'woodchips',
  'zebra',
] as const;

export type SurfaceType = typeof SurfaceTypeValues[number];

export const SmoothnessTypeValues = [
  'excellent',
  'good',
  'intermediate',
  'bad',
  'horrible',
  'impassable',
  'very_bad',
  'very_horrible',
  'very_good',
] as const;

export type SmoothnessType = typeof SmoothnessTypeValues[number];

/**
 * Describes the surface of a ground or path.
 */
export interface Surface {
  longitudinalSlope?: Slope;
  lateralSlope?: Slope;

  /**
   * Turning space that this ground provides to people.
   */
  turningSpace?: Length;

  /**
   * According to https://wiki.openstreetmap.org/wiki/Key:smoothness
   */
  smoothness?: SmoothnessType;

  /**
   * According to https://wiki.openstreetmap.org/wiki/Key:surface
   */
  types?: SurfaceType[];
}

export const getSurfaceSchemaDefinition: () => SchemaDefinition = () => ({
  ...getPrefixedQuantitySchemaDefinition('longitudinalSlope', SlopeSchema),
  ...getPrefixedQuantitySchemaDefinition('lateralSlope', SlopeSchema),
  ...getPrefixedQuantitySchemaDefinition('turningSpace', LengthSchema),
  smoothness: {
    type: String,
    optional: true,
    allowedValues: (SmoothnessTypeValues as any) as any[],
  },
  types: {
    type: Array,
    optional: true,
    minCount: 1,
  },
  'types.$': {
    type: String,
    optional: true,
    allowedValues: (SurfaceTypeValues as any) as any[],
  },
});
