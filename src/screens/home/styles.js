import { StyleSheet } from 'react-native';
import { WHITE } from '../../utils/colors';
import { heightPercentageToDP, widthPercentageToDP } from '../../helpers/sizes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: WHITE,
    flexWrap: 'wrap',
    textAlign: 'center',
    marginTop: heightPercentageToDP('15'),
    width: widthPercentageToDP('50'),
    fontSize: widthPercentageToDP('8'),
    alignSelf: 'center',
  },
  buttonsContainer: {
    flex: 1,
    marginBottom: heightPercentageToDP('10'),
    marginTop: heightPercentageToDP('15'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
