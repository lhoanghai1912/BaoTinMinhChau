import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppNavigator from '../../../../navigation/AppNavigator';
import NavBar from '../../../../components/navBar/navBar_index';
import {navigate} from '../../../../navigation/RootNavigator';
interface Props {
  navigation: any;
}
const DetailScreen = (props: Props) => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <NavBar title={'Mua vàng'} onPress={() => navigation.goBack()}></NavBar>
      <Text>DetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetailScreen;
