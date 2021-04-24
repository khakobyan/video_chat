import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { GREY, WHITE, RED } from '../utils/colors';
import { widthPercentageToDP } from '../helpers/sizes';

export function VCInput({ labelValue, value, placeholderText, error, ...rest }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{labelValue}</Text>
      <TextInput
        value={value}
        style={{...styles.input, borderWidth: error ? 3 : 0}}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor={GREY}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: widthPercentageToDP('23'),
    display: "flex",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: 'bold',
    fontSize: widthPercentageToDP('4.26'),
    color: WHITE
  },
  input: {
    borderRadius: widthPercentageToDP('2.1'),
    backgroundColor: WHITE,
    height: widthPercentageToDP('13.86'),
    fontSize: widthPercentageToDP('4.26'),
    padding: widthPercentageToDP('4'),
    width: widthPercentageToDP('90'),
    borderColor: RED,
  }
});
