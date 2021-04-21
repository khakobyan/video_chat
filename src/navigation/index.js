import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/home';
import CallSetupScreen from '../screens/call_setup';
import CallScreen from '../screens/call';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{animationEnabled: false}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="CallSetup"
        component={CallSetupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Call"
        component={CallScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen 
        name="Racer"
        component={RacerScreen}
        options={({route}) => ({headerTitleAlign: 'center', headerTitle: route.params.racer_name})}
      />
      <Stack.Screen 
        name="Races"
        component={RacesScreen}
        options={({route}) => ({headerTitleAlign: 'center', headerTitle: `${route.params.racer_name}'s races`})}
      />
      <Stack.Screen 
        name="MoreInfo"
        component={MoreInfoScreen}
        options={({route}) => ({headerTitleAlign: 'center', headerTitle: `${route.params.racer_name}'s more info`})}
      /> */}
    </Stack.Navigator>
  );
};

export default RootStack;