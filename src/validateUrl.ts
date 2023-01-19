export default function validateUrl(this: any): 'invalidUrl' | undefined {
  if (!this.isSet) { return; }
  try {
    // eslint-disable-next-line no-new
    new URL(this.value);
  } catch (err) {
    // eslint-disable-next-line consistent-return
    return 'invalidUrl';
  }
  // eslint-disable-next-line consistent-return
  return undefined;
}
