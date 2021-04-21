import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { VCButton, VCContainer, VCInput } from '../../components';
import { GREEN, WHITE } from '../../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP } from '../../helpers/sizes';

function CallSetupScreen({navigation}) {
  const [server, setServer] = useState(`https://meet.jit.si`)
  const [roomName, setRoomName] = useState(``)
  const [nickName, setNickName] = useState(``)
  return (
    <VCContainer>
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
          <Icon color={WHITE} name="arrowleft" size={widthPercentageToDP('8')}/>
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <View style={styles.inputFieldsContainer}>
            <VCInput
              labelValue='Jitsi Server'
              placeholderText='eg: meet.jitsi.com'
              onChangeText={setServer}
              value={server}
            />
            <VCInput
              labelValue='Meeting Room Name'
              placeholderText='room name'
              onChangeText={setRoomName}
              value={roomName}
            />
            <VCInput
              labelValue='Your Nickname'
              placeholderText='nickname'
              onChangeText={setNickName}
              value={nickName}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <VCButton
              buttonTitle="Start call Standart"
              largeButton
              color={GREEN}
              onPress={() => navigation.navigate(`Call`, { uri: `${server}/${roomName}`})}
            />
            <VCButton buttonTitle="Start call Custom UI " largeButton color={GREEN} onPress={()=>console.log(`2222`)}/>
          </View>
        </View>
      </View>
    </VCContainer>
  )
}

export default CallSetupScreen;
