import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image, Text, View} from 'react-native';
import HomeScreen from '../screens/Home';
import BuyScreen from '../screens/Home/Buy';
import SellScreen from '../screens/Home/Sell';
import WithdrawScreen from '../screens/Home/Withdraw';
import CartScreen from '../screens/Home/Cart';

import AppStyles from '../components/Style/AppStyle';
import images from '../constants/Images/images';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      id={undefined}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 65,
          backgroundColor: '#fff',
          borderTopColor: '#ddd',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconSource;

          switch (route.name) {
            case 'Trang chủ':
              iconSource = !focused ? images.home : images.home_action;
              break;
            case 'Mua hàng':
              iconSource = !focused ? images.buy : images.buy_action;
              break;
            case 'Bán vàng':
              iconSource = !focused ? images.sell : images.sell_action;
              break;
            case 'Rút vàng':
              iconSource = !focused ? images.wallet : images.wallet_action;
              break;
            case 'Giỏ hàng':
              iconSource = !focused ? images.cart : images.cart_action;
              break;
          }

          return (
            <View style={{alignItems: 'center'}}>
              <Image source={iconSource} style={AppStyles.icon} />
              {focused && (
                <View
                  style={{
                    width: 30,
                    height: 2,
                    backgroundColor: '#820201',
                    marginTop: 3,
                    borderRadius: 5,
                  }}
                />
              )}
            </View>
          );
        },
        tabBarActiveTintColor: '#820201',
        tabBarInactiveTintColor: '#888',
      })}>
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Mua hàng" component={BuyScreen} />
      <Tab.Screen name="Bán vàng" component={SellScreen} />
      <Tab.Screen name="Rút vàng" component={WithdrawScreen} />
      <Tab.Screen name="Giỏ hàng" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
