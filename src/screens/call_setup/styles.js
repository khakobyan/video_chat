import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from '../../helpers/sizes'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    marginLeft: widthPercentageToDP('5'),
    marginVertical: widthPercentageToDP('3')
  },
  contentContainer: {
    flex:1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputFieldsContainer: {
    height: '50%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    height: '24%',
    marginBottom: heightPercentageToDP('6'),
    display: 'flex',
    justifyContent: 'space-between',
  }
});
