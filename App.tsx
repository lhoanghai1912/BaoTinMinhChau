import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import LoginScreen from './src/screens/Auth';
import Toast from 'react-native-toast-message'; // Import Toast component
import {NavigationContainer} from '@react-navigation/native'; // Import NavigationContainer
import {createStackNavigator} from '@react-navigation/stack'; // Import createStackNavigator
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/store/store'; // Import your Redux store

function App(): React.JSX.Element {
  return (
    // <View style={{flex: 1}}>
    //   <StatusBar barStyle={'light-content'} />
    //   <RootNavigator />
    //   <Toast />
    // </View>
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
      <Toast />
    </>
  );
}

export default App;
