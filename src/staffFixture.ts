import { Staff } from './Staff';
import { Complete } from './Complete';

const staffFixture: Complete<Staff> = {
  canSeeVisitorsFromInside: true,
  hasFreeAssistantForVisitors: true,
  spokenLanguages: ['es', 'en', 'sgn-ase'],
};
export default staffFixture;
