import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
interface ScreenNaviagtion {
  navigation: any;
}
const ScreenTwo: React.FC<ScreenNaviagtion> = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={{marginTop: 20, borderWidth: 1, padding: 10}}
        onPress={() => {
          navigation.navigate('screenThree');
        }}>
        <Text>Go to next Screen Three</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenTwo;

const styles = StyleSheet.create({});
