import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { VCContainer, VCWeb } from '../../components';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { WHITE } from '../../utils/colors';
import { widthPercentageToDP } from '../../helpers/sizes';

function LibraryPageScreen({navigation}) {
  const [uri] = useState('https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-ljm-api')
  return (
    <VCContainer>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <Icon color={WHITE} name="arrowleft" size={widthPercentageToDP('8')}/>
      </TouchableOpacity>
      <VCWeb uri={uri}/>
    </VCContainer>
  )
}

export default LibraryPageScreen;
