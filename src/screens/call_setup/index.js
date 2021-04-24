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
  const [serverError, setServerError] = useState(false)
  const [roomNameError, setRoomNameError] = useState(false)

  const checkAndStart = () => {
    setServerError(!server.length);
    setRoomNameError(!roomName.length);
    (server.length && roomName.length) &&
      navigation.navigate(`Call`, { uri: `${server}/${roomName}`});
  }

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
              error={serverError}
              />
            <VCInput
              labelValue='Meeting Room Name'
              placeholderText='room name'
              onChangeText={setRoomName}
              value={roomName}
              error={roomNameError}
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
              onPress={() => checkAndStart()}
              />
            <VCButton
              buttonTitle="Start call Custom UI"
              largeButton
              color={GREEN}
              onPress={() => checkAndStart()}
            />
          </View>
        </View>
      </View>
    </VCContainer>
  )
}

export default CallSetupScreen;
