import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENT_COLORS, PURPLE } from '../utils/colors';

export function VCContainer({children}) {
  return (
    <LinearGradient colors={GRADIENT_COLORS} style={styles.container}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  }
});