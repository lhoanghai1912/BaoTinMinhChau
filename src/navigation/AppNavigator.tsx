import {Alert, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './AuthNavigator'; // Adjust the path as needed
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {navigationRef} from './RootNavigator';
import AppStackScreen from './AppStackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screens/Splash';
import {Screen_Name} from './ScreenName';
import LoadingScreen from '../components/Loading';
// import LoadingScreen from '../component/loading_index';

const AppNavigator = () => {
  const [hasToken, setHasToken] = useState(false);
  const {userData, accessToken} = useSelector((state: any) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const [isSplashVisible, setIsSplashVisible] = useState(true); // Mới thêm

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('accessToken');
      console.log('token1111124', token);
      if (!token) {
        setHasToken(false);
        console.log('No token found, redirecting to login');
        setTimeout(() => {}, 1000);
      } else if (token) {
        setHasToken(true);
        setTimeout(() => {}, 1000);
      }
      setIsSplashVisible(false); // Ẩn Splash sau khi kiểm tra token
      setIsLoading(false);
    };
    const timer = setTimeout(() => {
      checkToken();
    }, 2000);

    return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
  }, [hasToken]);

  const onNavigationStateChange = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={onNavigationStateChange}>
      {isSplashVisible ? (
        <SplashScreen />
      ) : // ) : isLoading ? (
      //   <LoadingScreen />
      hasToken ? (
        <AppStackScreen />
      ) : (
        <LoginStack />
      )}
    </NavigationContainer>
  );
};
export default AppNavigator;
