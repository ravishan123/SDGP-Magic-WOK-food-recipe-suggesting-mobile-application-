import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          Search: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Favourites: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
          Settings: {
            screens: {
              TabFourScreen: 'four',
            },
          },
          Camera: {
            screens: {
              CameraScreen: 'five',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
