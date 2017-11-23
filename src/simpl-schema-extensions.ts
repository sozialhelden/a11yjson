import SimpleSchema from 'simpl-schema';

// allow custom uniforms fields
SimpleSchema.extendOptions(['accessibility']);

export interface AccessibilitySchemaExtension {
  description: string;
  extendedInformationUrl: string;
}
