import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from '../module/BottomScreens/HomeTab';
import ListTab from '../module/BottomScreens/ListTab';
import DetailTab from '../module/BottomScreens/DetailTab';
import Profiletab from '../module/BottomScreens/Profiletab';
import SettingTab from '../module/BottomScreens/SettingTab';
import {NavigationContainer} from '@react-navigation/native';
const IndexNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.mainContainer}>
      <Tab.Navigator
        initialRouteName="Home"
        // tabBarOptions={{
        //   activeTintColor: '#ff6600',
        //   inactiveTintColor: '#103B52',
        // }}
        screenOptions={({route}) => ({
          // tabBarActiveTintColor: '#ff6600',
          // tabBarInactiveTintColor: '#103B52',
          tabBarStyle: {
            height: 80,
            backgroundColor: '#38b89f',
            borderRadius: 40,
            paddingBottom: 10,
            margin: 10,
            background: 'red',
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? {uri: 'https://i.ibb.co/s6z1wMh/hh1-removebg-preview.png'}
                : {uri: 'https://i.ibb.co/r7XX1RP/Hos-removebg-preview.png'};
            } else if (route.name === 'List') {
              iconName = focused
                ? {uri: 'https://i.ibb.co/F3WvrM0/l1-removebg-preview.png'}
                : {uri: 'https://i.ibb.co/GvpCTWt/list-removebg-preview.png'};
            } else if (route.name === 'Detail') {
              iconName = focused
                ? {uri: 'https://i.ibb.co/R67cKVW/d1-removebg-preview.png'}
                : {uri: 'https://i.ibb.co/C1HLzVX/Det-removebg-preview.png'};
            } else if (route.name === 'Profile') {
              iconName = focused
                ? {uri: 'https://i.ibb.co/Bf4ZGQQ/p12-removebg-preview.png'}
                : {
                    uri: 'https://i.ibb.co/FDdKFdx/profs-removebg-preview.png',
                  };
            } else if (route.name === 'Setting') {
              iconName = focused
                ? {
                    uri: 'https://i.ibb.co/sVfwg0H/s1-removebg-preview.png',
                  }
                : {
                    uri: 'https://i.ibb.co/D5FCjPX/sets-removebg-preview-1.png',
                  };
            }
            return <Image style={{height: 40, width: 40}} source={iconName} />;
          },
        })}>
        <Tab.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: '#FFF',
                }}>
                Home
              </Text>
            ),
          }}
          component={HomeTab}
        />
        <Tab.Screen
          name="List"
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: '#FFF',
                }}>
                List
              </Text>
            ),
          }}
          component={ListTab}
        />
        <Tab.Screen
          name="Detail"
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: '#FFF',
                }}>
                Detail
              </Text>
            ),
          }}
          component={DetailTab}
        />
        <Tab.Screen
          name="Profile"
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: '#FFF',
                }}>
                Profile
              </Text>
            ),
          }}
          component={Profiletab}
        />
        <Tab.Screen
          name="Setting"
          options={{
            headerShown: false,
            tabBarLabel: () => (
              <Text
                style={{
                  fontSize: 8,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  color: '#FFF',
                }}>
                Setting
              </Text>
            ),
          }}
          component={SettingTab}
        />
      </Tab.Navigator>
    </View>
  );
};

export default IndexNavigation;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
