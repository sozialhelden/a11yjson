import { getPrefixedQuantitySchemaDefinition, Length, LengthSchemaDefinition } from './Quantity';
import BooleanField from './BooleanField';
import { EquipmentInfo, getEquipmentInfoSchemaDefinition } from './EquipmentInfo';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition';

export interface Signage {
  description?: LocalizedString;
  hasPictograms?: boolean;
  hasBraille?: boolean;
  hasRaisedLetters?: boolean;
  hasAudio?: boolean;
  hasVideo?: boolean;
  hasTactileHandRails?: boolean;
  hasTactileRoomNames?: boolean;
  hasTactileNorthMarkers?: boolean;
  hasTactileGuideStrips?: boolean;
  hasTactilePaving?: boolean;
  hasVirtualMap?: boolean;
  hasTactileMap?: boolean;
  hasSearch?: boolean;
  hasNumbers?: boolean;
  hasText?: boolean;
  isHighContrast?: boolean;
  highLegibility?: boolean;
  fontHeight?: Length;
  sitemap?: EquipmentInfo;
}

export const getSignageSchemaDefinition: () => Record<string, SchemaDefinition> = () => ({
  ...getLocalizedStringSchemaDefinition('description'),
  hasPictograms: BooleanField,
  hasBraille: BooleanField,
  hasRaisedLetters: BooleanField,
  hasAudio: BooleanField,
  hasVideo: BooleanField,
  hasTactileHandRails: BooleanField,
  hasTactileRoomNames: BooleanField,
  hasTactileNorthMarkers: BooleanField,
  hasTactileGuideStrips: BooleanField,
  hasTactilePaving: BooleanField,
  hasVirtualMap: BooleanField,
  hasTactileMap: BooleanField,
  hasSearch: BooleanField,
  hasNumbers: BooleanField,
  hasText: BooleanField,
  isHighContrast: BooleanField,
  highLegibility: BooleanField,
  ...getPrefixedQuantitySchemaDefinition('fontHeight', LengthSchemaDefinition),
  ...getPrefixedSchemaDefinition('sitemap', getEquipmentInfoSchemaDefinition()),
});
