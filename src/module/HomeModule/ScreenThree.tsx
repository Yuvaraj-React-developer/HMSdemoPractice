import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
interface ScreenNaviagtion {
  navigation: any;
}
const ScreenThree: React.FC<ScreenNaviagtion> = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={{marginTop: 20, borderWidth: 1, padding: 10}}
        onPress={() => {
          navigation.navigate('screenOne');
        }}>
        <Text>Go to next Screen One</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenThree;

const styles = StyleSheet.create({});
