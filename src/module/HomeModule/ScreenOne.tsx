import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
interface ScreenNaviagtion {
  navigation: any;
}
const ScreenOne: React.FC<ScreenNaviagtion> = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={{marginTop: 20, borderWidth: 1, padding: 10}}
        onPress={() => {
          navigation.navigate('screenTwo');
        }}>
        <Text>Go to next Screen Two</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenOne;

const styles = StyleSheet.create({});
