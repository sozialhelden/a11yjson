import { Complete } from './Complete.js';
import { Staff } from './Staff.js';

const staffFixture: Complete<Staff> = {
  canSeeVisitorsFromInside: true,
  hasFreeAssistantForVisitors: true,
  spokenLanguages: ['es', 'en'], // deprecated
  languages: ['es', 'en', 'sgn-ase'],
};
export default staffFixture;
