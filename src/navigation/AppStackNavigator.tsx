import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import {Screen_Name} from './ScreenName';
import HomeScreen from '../screens/Home';
import BuyScreen from '../screens/Home/Buy';
import SellScreen from '../screens/Home/Sell';
import CartScreen from '../screens/Home/Cart';
import WithdrawScreen from '../screens/Home/Withdraw';

const Stack = createNativeStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      id={undefined}
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}
      initialRouteName={Screen_Name.BottomTabNavigator}>
      <Stack.Screen
        name={Screen_Name.BottomTabNavigator}
        component={BottomTabNavigator}
      />
      <Stack.Screen name={Screen_Name.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={Screen_Name.BuyScreen} component={BuyScreen} />
      <Stack.Screen name={Screen_Name.SellScreen} component={SellScreen} />
      <Stack.Screen name={Screen_Name.CartScreen} component={CartScreen} />
      <Stack.Screen
        name={Screen_Name.WithdrawScreen}
        component={WithdrawScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
