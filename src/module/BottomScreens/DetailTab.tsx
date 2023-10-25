import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../HomeModule/HomeScreen';
import ScreenOne from '../HomeModule/ScreenOne';
import ScreenTwo from '../HomeModule/ScreenTwo';
import ScreenThree from '../HomeModule/ScreenThree';

const DetailTab = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="DetailTab"
        component={HomeScreen}
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

export default DetailTab;

const styles = StyleSheet.create({});