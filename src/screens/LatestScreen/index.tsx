import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../../config/theme';

const LatestScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LatestScreen Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LatestScreen;
