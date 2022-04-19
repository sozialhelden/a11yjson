import { PersonalProfile, getPersonalProfileSchemaDefinition } from './PersonalProfile';
import { Complete } from './Complete';
import expectValidFixture from './lib/expectValidFixture';

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

const definition = getPersonalProfileSchemaDefinition();

describe('PlaceInfo schema', () => {
  it('validates a completely specified object', () => {
    expectValidFixture(definition, personalProfileFixture);
  });
});
