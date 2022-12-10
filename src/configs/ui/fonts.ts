import { Platform } from 'react-native';

export default {
  ...Platform.select({
    ios: {
      display: 'SFProDisplay-Regular',
      displayBold: 'SFProDisplay-Bold',
      displayLight:  'SFProDisplay-Light',
      displayMedium: 'SFProDisplay-Medium',
      displaySemibold: 'SFProDisplay-Semibold'
    },
    android: {
      display: 'Roboto-Regular',
      displayBold: 'Roboto-Bold',
      displayLight:  'Roboto-Light',
      displayMedium: 'Roboto-Light',
      displaySemibold: 'Roboto-Medium',
    }
  })
}
