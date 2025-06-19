import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import SplashScreen from '../screens/Splash';
import LoadingScreen from '../components/Loading';
import AppStackScreen from './AppStackNavigator';
import LoginStack from './AuthNavigator';
import {navigationRef} from './RootNavigator';

const AppNavigator = () => {
  const {accessToken} = useSelector((state: any) => state.user); // dùng accessToken từ Redux

  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false); // splash 2s
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const onNavigationStateChange = () => {
    // setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000); // loading ngắn khi chuyển tab
  };

  console.log('isLoadingisLoading===>', isLoading);

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={onNavigationStateChange}>
      {isSplashVisible ? (
        <SplashScreen />
      ) : isLoading ? (
        <LoadingScreen />
      ) : accessToken ? ( // Dùng accessToken để điều hướng
        <AppStackScreen />
      ) : (
        <LoginStack />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
