import React from 'react';
import { 
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';
import { 
  heightPercentageToDP,
  widthPercentageToDP
} from '../helpers/sizes';
import { AQUA, WHITE } from '../utils/colors';

export function VCButton({ buttonTitle, largeButton, color, ...rest }) {
  return (
    <TouchableOpacity
      style={{
        ...styles.buttonContainer,
        height: heightPercentageToDP(largeButton ? '10': '7'),
        backgroundColor: color
      }}
      {...rest}>
      <Text 
        style={{
          ...styles.buttonText, color: color == '#ffffff' ? AQUA : WHITE
        }}>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: widthPercentageToDP('90'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    fontSize: heightPercentageToDP('2.5'),
  }
});
