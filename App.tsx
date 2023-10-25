import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/navigator';
import RegistrationScreen from './src/module/RegistrationModule/RegistrationScreen';
import LoginScreen from './src/module/LoginModule/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import BottomNavigation from './src/navigator';
const Stack= createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
 
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
      
        <Stack.Screen name='Signup' component={RegistrationScreen}  options={{headerShown:false}} />
    
        <Stack.Screen name='BottomNavigation' component={BottomNavigation}  options={{headerShown:false}}/>
  
    </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>

  );
};

export default App;




