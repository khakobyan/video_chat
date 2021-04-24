import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import CallSetupScreen from '../screens/call_setup';
import CallScreen from '../screens/call';
import LibraryPageScreen from '../screens/library_page';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{animationEnabled: false}}
      headerMode='none'  
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen 
        name="CallSetup"
        component={CallSetupScreen}
      />
      <Stack.Screen 
        name="Call"
        component={CallScreen}
      />
      <Stack.Screen 
        name="LibraryPage"
        component={LibraryPageScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStack;