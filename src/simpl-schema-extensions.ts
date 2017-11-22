import SimpleSchema from 'simpl-schema'

// allow custom uniforms fields
SimpleSchema.extendOptions(['accessibility'])

interface AccessibilitySchemaExtension {
  description: string
  extendedInformationUrl: string
}
