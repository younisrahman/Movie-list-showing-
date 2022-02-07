import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../../types';
import BottomTabNavigator from './BottomTabNavigator';
// import {RegisterScreen} from '../screens';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="SignUp"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
       */}
    </Stack.Navigator>
  );
}
