/* eslint-disable import/no-relative-packages */
import { SchemaDefinition } from '../node_modules/simpl-schema/dist/esm/types.js';
import { Door, getDoorSchemaDefinition } from './Door.js';
import {
  getPrefixedQuantitySchemaDefinition, Length, LengthSchema,
} from './Quantity.js';
import { getLocalizedStringSchemaDefinition, LocalizedString } from './LocalizedString.js';
import getPrefixedSchemaDefinition from './lib/getPrefixedSchemaDefinition.js';
import { W3CAccessMode, w3cAccessModes } from './W3CAccessMode.js';
import { W3CAccessibilityFeature, w3cAccessibilityFeatures } from './W3CAccessibilityFeature.js';
import { W3CAccessibilityHazard, w3cAccessibilityHazards } from './W3CAccessibilityHazard.js';
import { w3cAccessibilityControls, W3CAccessibilityControl } from './W3CAccessibilityControl.js';
import BooleanField from './BooleanField.js';
import { getIntercomSchemaDefinition, Intercom } from './Intercom.js';
import { getInteractableSchemaDefinition, Interactable } from './Interactable.js';
import validateUrl from './validateUrl.js';
import IETFLanguageCodeSchemaKeyDefinition, { IETFLanguageTag } from './ietfLanguageTags.js';

export const EquipmentTypes = [
  'bed',
  'wardrobe',
  'elevator',
  'escalator',
  'movingWalkway',
  'ramp',
  'hoist',
  'stairLift',
  'switch',
  'sitemap',
  'vendingMachine',
  'intercom',
  'powerOutlet',
  'flushMechanism',
  'bodyScanner',
  'luggageScanner',
] as const;

export type EquipmentType = typeof EquipmentTypes[number];

export const EquipmentInteractions = [
  'use',
  'selectFloor',
  'arriveAtFloor',
  'callEmergency',
  'ride',
  'travel',
  'buy',
  'sell',
  'call',
  'understand',
  'sleep',
  'toggle',
  'engage',
  'flush',
  'scan',
  'handover',
  'enable',
  'disable',
  'locateYourself',
  'findYourDestination',
] as const;

export type EquipmentInteraction = typeof EquipmentInteractions[number];
export const EquipmentInteractionsSet = new Set(EquipmentInteractions);

export interface EquipmentProperties extends Interactable<EquipmentInteraction> {
  /**
   * Describes where the equipment is located. If only one description string is technically
   * possible to maintain, it MUST not contain any abbreviations to allow being readable aloud by
   * screen readers or voice assistants.
   *
   * @example ‘Between ticket counter and Central Line platforms’, ‘From basement upwards towards
   * Main Street exit’
   */
  description?: LocalizedString;
  /**
   * Contains the same information as description, but in a longer form which can be read out by a
   * screen reader or voice assistant.
   *
   * Words MUST be written out fully (e.g. ‘direction’ instead of ‘dir.‘, ‘ground’ instead of ‘G‘,
   * ‘platform’ instead of ‘pl.’). The field MUST NOT contain any symbols (e.g. \`->\`, \`<->\`, or
   * \`→\`).
   *
   * This MUST be suitable for people who have a visual impairment or use a screen reader or voice
   * assistant (e.g. Amazon’s Alexa).
   *
   * If only one description field can be used for technical reasons, then the written-out form MUST
   * be given preference, because a short form can be generated from the long form more easily than
   * the other way around.
   *
   * This attribute SHOULD be used as \`aria-label\`-attribute in web content.
   */
  longDescription?: LocalizedString;

  /**
   * Contains the same information as description, but in a shorter form, to save space on the
   * screen. This CAN contain Unicode characters such as ⟷ or ↘︎ as well as abbreviations (e.g.
   * ‘pl.’ instead of ‘platform’, ‘dir.’ instead of ‘direction’).
   */
  shortDescription?: LocalizedString;

  /**
   * Type of the equipment or facility.
   */
  category?: EquipmentType;

  /**
   * Height of the lowest working controls that are needed to operate this equipment. `undefined` if
   * the equipment needs no controls.
   */
  heightOfControls?: Length;

  /**
   * Width of the cabin when facing the equipment’s entrance, or `undefined` if the equipment has no
   * cabin. For a hoist, this refers to the hoist platform itself.
   */
  cabinWidth?: Length;

  /**
   * Length / depth of the cabin when facing the equipment’s entrance, or `undefined` if the
   * equipment has no cabin. For a hoist, this refers to the hoist platform itself.
   */
  cabinLength?: Length;

  /**
   * Object describing the door to the equipment, or `undefined` if there is no door.
   */
  door?: Door;

  /**
   * `true` if the equipment has doors in two directions, so wheelchair, rollator, bike or pushchair
   * users do not have to move backwards to exit.
   */
  hasDoorsInBothDirections?: boolean;

  /**
   * `true` if the equipment has doors at right angles to each other.
   */
  hasDoorsAtRightAngles?: boolean;

  /**
   * `true` if the equipment has a landing platform, `false` if not. Helpful for escalators.
   */
  hasLandings?: boolean;

  /**
   * Languages of the equipment’s visible controls and/or voice output.
   */
  languages?: IETFLanguageTag[];

  /**
   * `true` if the equipment is indoors, `false` if it’s fully or partially outdoors.
   */
  isIndoors?: boolean;

  /**
   * Access modes supported by this equipment.
   *
   * @see https://www.w3.org/2021/a11y-discov-vocab/latest/
   */
  accessMode?: W3CAccessMode[];

  /**
   * Access mode combinations that allow understanding and using the equipment.
   *
   * @see https://www.w3.org/2021/a11y-discov-vocab/latest/
   */
  accessModeSufficient?: W3CAccessMode[];

  /**
   * The accessibility controls that allow controlling this equipment.
   *
   * @see https://www.w3.org/2021/a11y-discov-vocab/latest/
   */
  accessibilityControl?: W3CAccessibilityControl[];

  /**
   * Indicates features that allow understanding or using the equipment.
   *
   * @see https://www.w3.org/2021/a11y-discov-vocab/latest/
   */
  accessibilityFeature?: W3CAccessibilityFeature[];

  /**
   * Indicates hazards that may be an obstacle to understanding or using the equipment.
   *
   * @see https://www.w3.org/2021/a11y-discov-vocab/latest/
   */
  accessibilityHazard?: W3CAccessibilityHazard[];

  /**
   * `true` if the equipment has a visual emergency alarm, `false` if not (for example, inside
   * elevators).
   */
  hasVisualEmergencyAlarm?: boolean;

  /**
   * Describes the intercom system for emergency calls.
   */
  emergencyIntercom?: Intercom;

  /**
   * For elevators. `true` if the elevator needs a command to be entered outside the elevator,
   * `false` if not.
   */
  hasExternalFloorSelection?: boolean;

  /**
   * For elevators. `true` if the elevator can carry a bicycle, `false` if not.
   */
  isSuitableForBicycles?: boolean;

  /**
   * For elevators. `true` if the elevator has a mirror, `false` if not.
   */
  hasMirror?: boolean;

  /**
   * Official name of the company that manufactured the equipment.
   */
  manufacturerName?: LocalizedString;

  /**
   * Manufacturer serial number of the equipment / facility.
   *
   * Intentionally not localizable to allow matching with other data, e.g. from manufacturer's own
   * APIs.
   */
  manufacturerSerialNumber?: string;

  /**
   * Phone number where a service operator can be reached for help using this facility.
   */
  servicePhoneNumber?: string;

  /**
   * URL pointing to a website that describes the equipnent or it's current operational status.
   */
  serviceWebsiteUrl?: string;

  /**
   * Live status update.
   *
   * `true` if the equipment is in operation, `false` if not, or `undefined` if it is unknown. When
   * reading this attribute for showing it in a user interface, the user interface MUST show the
   * operational status as ‘unknown’ if the status could be out of date, for example if it is older
   * than 10 minutes.
   *
   * When displaying the operational status, user interfaces SHOULD show the date saved in
   * `stateLastUpdate` next to the operational status additionally for transparency.
   */
  isWorking?: boolean;

  /**
   * Live status update.
   *
   * Reason why the equipment is not in operation. MUST be `undefined` if the equipment is in
   * operation.
   *
   * @example ‘Construction work’, ‘Vandalism’, ’Because of renovations the elevator on the west
   * side is expected to be unavailable until April 1’
   */
  outOfOrderReason?: LocalizedString;

  /**
   * Short alternative routing instructions for travelers when they cannot use this facility.
   *
   * The text MUST NOT have abbreviations to be readable aloud by a screen reader or voice
   * assistant.
   *
   * Software using this attribute MUST NOT assume that the equipment is out of operation if it the
   * attribute is defined.
   *
   * @example ‘Take the elevator near the Main Street entrance.’
   */
  alternativeRouteInstructions?: LocalizedString;

  /**
   * Live status update.
   *
   * Information about the current state. If `isWorking` is true, this can show information about
   * future planned maintenance or construction work rendering this facility unusable.
   *
   * The text MUST NOT have abbreviations to be readable aloud by a screen reader or voice
   * assistant.
   *
   * This field SHOULD only be used if a separation into individual disorder attributes (`state`,
   * `outOfOrderReason`) is not technically possible (e.g. when existing APIs can not be further
   * developed and users are only given one text field to describe the problem.)
   */
  stateExplanation?: LocalizedString;

  /**
   * Live status update.
   *
   * Date when the `isWorking` flag was updated by a realtime system.
   */
  stateLastUpdate?: Date;

  /**
   * Live status update.
   *
   * If `isWorking` is false, this is the planned date when the equipment will be in operation
   * again.
   *
   * MUST be `undefined` if the facility is currently in operation.
   */
  plannedCompletionDate?: Date;

  /**
   * Data source ID on accessibility.cloud
   */
  sourceId?: string;

  /**
   * Data import ID on accessibility.cloud
   */
  sourceImportId?: string;

  /**
   * Data source ID of a secondary source used for realtime status info on accessibility.cloud
   */
  disruptionSourceImportId?: string;

  /**
   * Place info ID that this equipment belongs to (accessibility.cloud ID)
   */
  placeInfoId?: string;

  // references to external services
  /**
   * ID of the place data source that this equipment belongs to (accessibility.cloud ID)
   */
  placeSourceId?: string;

  // references to external services
  /**
   * ID of the place that this equipment belongs to (unique in the original data source)
   */
  originalPlaceInfoId?: string;

  /**
   * Original source data for this equipment (for easier debugging)
   */
  originalData?: string;

  /**
   * ID of this equipment in the original data source. To simplify communication with the operator,
   * it’s a good idea to use the operator facility management system ID here.
   */
  originalId?: string;

  /**
   * URLs of this equipment in external data sources, for example in GTFS, IMDF or other sources.
   */
  sameAs?: string[];

  /**
   * IDs in other data sources that are linked to this equipment, indexed by schema/context.
   */
  ids?: Record<string, string>;
}

export const getEquipmentPropertiesSchemaDefinition: () => SchemaDefinition = () => ({
  sameAs: {
    type: Array,
    optional: true,
  },
  'sameAs.$': {
    type: String,
  },
  ids: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  'ids.$': {
    type: String,
  },
  originalId: {
    type: String,
    optional: true,
  },
  category: {
    type: String,
    optional: true,
    allowedValues: EquipmentTypes.map((s) => s),
  },
  ...getLocalizedStringSchemaDefinition('description'),
  // Alternative description that is screen-reader compatible and replaces abbreviations / symbols
  // with words
  ...getLocalizedStringSchemaDefinition('longDescription'), // Alternative description that uses less screen estate, more abbreviations and Unicode symbols like `→`
  ...getLocalizedStringSchemaDefinition('shortDescription'),
  ...getPrefixedQuantitySchemaDefinition('heightOfControls', LengthSchema),
  ...getPrefixedSchemaDefinition('door', getDoorSchemaDefinition()),
  ...getPrefixedQuantitySchemaDefinition('cabinWidth', LengthSchema),
  ...getPrefixedQuantitySchemaDefinition('cabinLength', LengthSchema),
  languages: {
    type: Array,
    defaultValue: [],
    optional: true,
  },
  'languages.$': IETFLanguageCodeSchemaKeyDefinition,
  hasDoorsAtRightAngles: BooleanField,
  hasDoorsInBothDirections: BooleanField,
  hasRaisedText: BooleanField,
  hasBrailleText: BooleanField,
  hasVisualEmergencyAlarm: BooleanField,
  hasSpeech: BooleanField,
  isHighContrast: BooleanField,
  hasLargePrint: BooleanField,
  isVoiceActivated: BooleanField,
  needsHeadPhone: BooleanField,
  hasHeadPhoneJack: BooleanField,
  needsHapticInput: BooleanField,
  hasHapticInput: BooleanField,
  needsVisualRecognition: BooleanField,
  isEasyToUnderstand: BooleanField,
  needsTouchScreenInput: BooleanField,
  hasTouchScreenInput: BooleanField,
  needsQRCodeScan: BooleanField,
  hasQRCode: BooleanField,
  isIndoors: BooleanField,
  hasLandings: BooleanField,
  isAccessibleWithWheelchair: BooleanField,
  isSuitableForBicycles: BooleanField,
  hasExternalFloorSelection: BooleanField,
  hasMirror: BooleanField,
  ...getPrefixedSchemaDefinition('emergencyIntercom', getIntercomSchemaDefinition()),
  ...getLocalizedStringSchemaDefinition('alternativeRouteInstructions'),
  isWorking: BooleanField,
  ...getLocalizedStringSchemaDefinition('outOfOrderReason'),
  stateLastUpdate: {
    type: Date,
    optional: true,
  },
  plannedCompletionDate: {
    type: Date,
    optional: true,
  },
  ...getLocalizedStringSchemaDefinition('manufacturerName'),
  manufacturerSerialNumber: {
    type: String,
    optional: true,
  },
  servicePhoneNumber: {
    type: String,
    optional: true,
  },
  serviceWebsiteUrl: {
    type: String,
    optional: true,
    custom: validateUrl,
  },
  ...getLocalizedStringSchemaDefinition('stateExplanation'),
  sourceId: {
    type: String,
    optional: true,
  },
  sourceImportId: {
    type: String,
    optional: true,
  },
  placeSourceId: {
    type: String,
    optional: true,
  },
  originalPlaceInfoId: {
    type: String,
    optional: true,
  },
  disruptionSourceImportId: {
    type: String,
    optional: true,
  },
  originalData: {
    type: String,
    optional: true,
  },
  placeInfoId: {
    type: String,
    optional: true,
  },
  accessMode: {
    type: Array,
    optional: true,
  },
  'accessMode.$': {
    type: String,
    allowedValues: w3cAccessModes,
  },
  accessModeSufficient: {
    type: Array,
    optional: true,
  },
  'accessModeSufficient.$': {
    type: String,
    allowedValues: w3cAccessModes,
  },
  accessibilityControl: {
    type: Array,
    optional: true,
  },
  'accessibilityControl.$': {
    type: String,
    allowedValues: w3cAccessibilityControls,
  },
  accessibilityFeature: {
    type: Array,
    optional: true,
  },
  'accessibilityFeature.$': {
    type: String,
    allowedValues: w3cAccessibilityFeatures,
  },
  accessibilityHazard: {
    type: Array,
    optional: true,
  },
  'accessibilityHazard.$': {
    type: String,
    allowedValues: w3cAccessibilityHazards,
  },
  ...getInteractableSchemaDefinition(EquipmentInteractionsSet),
});
