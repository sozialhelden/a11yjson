import { Staff } from './Staff.js';
import { Complete } from './Complete.js';

const staffFixture: Complete<Staff> = {
  canSeeVisitorsFromInside: true,
  hasFreeAssistantForVisitors: true,
  spokenLanguages: ['es', 'en', 'sgn-ase'],
};
export default staffFixture;
