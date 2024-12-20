import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenOne from '../HomeModule/ScreenOne';
import ScreenTwo from '../HomeModule/ScreenTwo';
import ScreenThree from '../HomeModule/ScreenThree';
import ProfileScreen from '../ProfileModule/ProfileScreen';

const SettingTab = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="SettingTab"
        component={ProfileScreen}
      />
      <Stack.Screen
        // options={{headerShown: false}}
        name="screenOne"
        component={ScreenOne}
      />
      <Stack.Screen
        // options={{headerShown: false}}
        name="screenTwo"
        component={ScreenTwo}
      />
      <Stack.Screen
        // options={{headerShown: false}}
        name="screenThree"
        component={ScreenThree}
      />
    </Stack.Navigator>
  );
};

export default SettingTab;

const styles = StyleSheet.create({});
