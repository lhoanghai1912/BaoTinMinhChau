import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import images from '../../constants/Images/images';
import {Screen_Name} from '../../navigation/ScreenName';
import {navigate} from '../../navigation/RootNavigator';
import AppStyles from '../../components/Style/AppStyle';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={images.logo}></Image>
      <Text style={AppStyles.text}>Loading ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#820201',
  },
});

export default SplashScreen;
