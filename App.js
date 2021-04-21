import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation';

const Content = ({children}) => (
  Platform.OS == 'android' ? 
  <SafeAreaView style={{flex: 1}}>
    {children}
  </SafeAreaView> :
  children
);

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
      <Content>
        <NavigationContainer>
          <RootStack/>
        </NavigationContainer>
      </Content>
    </>
  );
};

const AppStoreProvider = () => (
  <App />
);

export default AppStoreProvider;