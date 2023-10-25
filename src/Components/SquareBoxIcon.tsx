import React from 'react';
import { View, StyleSheet } from 'react-native';

const SquareBoxIcon = (props:any) => {
  return (
    <View
      style={[
        styles.squareBox,
        {
          borderColor: props.isChecked ? 'blue' : 'gray',
          backgroundColor: props.isChecked ? 'blue' : 'transparent',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  squareBox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SquareBoxIcon;
