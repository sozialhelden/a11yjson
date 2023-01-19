import { PersonalProfile } from './PersonalProfile';
import { Complete } from './Complete';

export const personalProfileFixture: Complete<PersonalProfile> = {
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
