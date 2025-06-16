import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BuyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BuyScreen</Text>
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

export default BuyScreen;
