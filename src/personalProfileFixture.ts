import { PersonalProfile } from './PersonalProfile.js';
import { Complete } from './Complete.js';

const personalProfileFixture: Complete<PersonalProfile> = {
  muteness: true,
  guideDog: true,
  hearingImpairment: true,
  learningImpairment: true,
  mobilityImpairment: true,
  visualImpairment: true,
  blindness: true,
  wheelchair: true,
};
export default personalProfileFixture;
