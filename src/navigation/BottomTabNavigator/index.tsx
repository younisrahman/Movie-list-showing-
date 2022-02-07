import TimeLogoFill from '@app/assets/images/time-fill.svg';
import TimeLogo from '@app/assets/images/time-outline.svg';
import PieLogoFill from '@app/assets/images/pie-chart-filled.svg';
import PieLogo from '@app/assets/images/pie-chart.svg';

import { GenericAppBar } from '@app/components/AppBar';
import { LatestScreen, HomeScreen } from '@app/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {
  BottomTabParamList,
  LatestTabParamList,
  HomeTabParamList,
} from '../../../types';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeTabNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? <TimeLogoFill /> : <TimeLogo />,
        }}
      />

      <BottomTab.Screen
        name="LatestTab"
        component={LatestTabNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? <PieLogoFill /> : <PieLogo />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeTabStack = createNativeStackNavigator<HomeTabParamList>();

function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Popular Movies',
          header: props => <GenericAppBar {...props} headerTitle={'Home'} />,
        }}
      />
    </HomeTabStack.Navigator>
  );
}

const LatestTabStack = createNativeStackNavigator<LatestTabParamList>();

function LatestTabNavigator() {
  return (
    <LatestTabStack.Navigator>
      <LatestTabStack.Screen
        name="LatestScreen"
        component={LatestScreen}
        options={{
          headerTitle: 'Latest Movies',
          header: props => <GenericAppBar {...props} headerTitle={'Latest'} />,
        }}
      />
    </LatestTabStack.Navigator>
  );
}
