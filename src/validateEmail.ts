export default function validateEmail(this: any): 'invalidEmail' | undefined {
  if (!this.isSet) { return; }
  if (this.value === '') {
    this.unset();
    return;
  }

  const email = this.value;

  // very basic email validation: validate that the email has an @ sign and that the host has a dot
  if (!email.includes('@') || !email.split('@')[1].includes('.')) {
    return 'invalidEmail';
  }
  
  // eslint-disable-next-line consistent-return
  return undefined;
}
