import { PlaceInfo } from '../PlaceInfo.js';

const canteenWithBrailleMenuAndBuzzer: PlaceInfo = {
  geometry: {
    type: 'Point',
    coordinates: [-73.985664, 40.748817],
  },
  properties: {
    name: {
      en: 'Canteen at the End of the Universe',
    },
    category: 'restaurant',
    accessibility: {
      interactions: {
        order: {
          description: {
            en: 'You can order in sign language, and the menu is in Braille. You get a buzzer after ordering.',
          },
          action: {
            languages: ['en', 'sgn-ase'],
            signLanguage: 'optional',
            feedback: {
              languages: ['en', 'sgn-ase'],
              signLanguage: 'optional',
              buzzer: 'required',
            },
          },
          perception: {
            braille: 'optional',
            signLanguage: 'optional',
          },
        },
        orderAnnouncement: {
          description: {
            en: 'When the buzzer announces your order, you have to pick it up at a separate counter. The staff there speaks sign language.',
          },
          perception: {
            visual: 'optional',
            sound: 'optional',
            tactile: 'optional',
            beep: 'always',
            flash: 'always',
            vibration: 'always',
          },
        },
        pickUpOrder: {
          description: {
            en: 'You need carry the tray to your table yourself.',
          },
          action: {
            carryWeight: 'required',
            weight: {
              min: 0.5,
              max: 2,
              unit: 'kg',
            },
          },
        },
      },
    },
  },
};

export default canteenWithBrailleMenuAndBuzzer;
