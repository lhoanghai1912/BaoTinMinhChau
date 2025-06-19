import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SellScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SellScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SellScreen;
