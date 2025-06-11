import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import images from '../../constants/Images/images';
import AppStyles from '../Style/AppStyle';

const NavBar = ({title, onPress}) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={images.back}
          style={[AppStyles.icon, {alignItems: 'flex-start'}]}></Image>
      </TouchableOpacity>
      <Text style={styles.navTitle}>{title}</Text>
      <TouchableOpacity onPress={onPress}></TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    height: 70,
    backgroundColor: 'darkred', // Customize your navbar color
  },
  navTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    paddingRight: 30,
  },
});

export default NavBar;
