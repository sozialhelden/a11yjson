/**
 * @see https://www.w3.org/2021/a11y-discov-vocab/latest
 */
export const w3cAccessibilityFeatures = [
  'annotations',
  'ARIA',
  'bookmarks',
  'index',
  'printPageNumbers',
  'readingOrder',
  'structuralNavigation',
  'tableOfContents',
  'taggedPDF',
  'alternativeText',
  'audioDescription',
  'captions',
  'describedMath',
  'longDescription',
  'rubyAnnotations',
  'signLanguage',
  'transcript',
  'displayTransformability',
  'synchronizedAudioText',
  'timingControl',
  'unlocked',
  'ChemML',
  'latex',
  'MathML',
  'ttsMarkup',
  'highContrastAudio',
  'highContrastDisplay',
  'largePrint',
  'braille',
  'tactileGraphic',
  'tactileObject',
  'none',
];

/**
 * @see https://www.w3.org/2021/a11y-discov-vocab/latest
 */
export type W3CAccessibilityFeature = typeof w3cAccessibilityFeatures[number];
