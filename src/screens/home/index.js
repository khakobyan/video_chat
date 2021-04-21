import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { VCButton, VCContainer } from '../../components';
import { AQUA, GREEN, WHITE } from '../../utils/colors';

function HomeScreen({navigation}) {
  return (
    <VCContainer>
      <View style={styles.container}>
        <Text style={styles.text}>React Native Test App</Text>
        <View style={styles.buttonsContainer}>
          <VCButton buttonTitle="Make a call" largeButton color={GREEN} onPress={()=>navigation.navigate(`CallSetup`)}/>
          <VCButton buttonTitle="Chat" color={WHITE}/>
          <VCButton buttonTitle="Open Library" color={AQUA}/>
          <VCButton buttonTitle="Create Note" color={AQUA}/>
          <VCButton buttonTitle="Create Ideaboard" color={AQUA}/>
        </View>
      </View>
    </VCContainer>
  )
}

export default HomeScreen;
