import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppButton from '../../components/AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/Slice/Slice_index';
import {navigate} from '../../navigation/RootNavigator';
import {Screen_Name} from '../../navigation/ScreenName';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    console.log('token home', await AsyncStorage.getItem('accessToken'));
    // dispatch(logout());
    AsyncStorage.removeItem('accessToken');
    console.log('logout pressed');
    // Xóa token khỏi AsyncStorage
  };
  return (
    <View style={styles.container}>
      <Text>HomeScreen Screen</Text>
      <AppButton title="Logout" onPress={handleLogout} />
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

export default HomeScreen;
