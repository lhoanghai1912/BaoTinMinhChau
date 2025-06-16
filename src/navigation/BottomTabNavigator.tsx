import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {Text, View} from 'react-native';
import HomeScreen from '../screens/Home';
import BuyScreen from '../screens/Home/Buy';
import SellScreen from '../screens/Home/Sell';
import WithdrawScreen from '../screens/Home/Withdraw';
import CartScreen from '../screens/Home/Cart';

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
          let iconName: string = '';
          let IconPack: any = Ionicons;

          switch (route.name) {
            case 'Trang chủ':
              iconName = focused ? 'home' : 'home-outline';
              IconPack = Ionicons;
              break;
            case 'Mua hàng':
              iconName = focused ? 'storefront' : 'storefront-outline';
              IconPack = Ionicons;
              break;
            case 'Bán vàng':
              iconName = 'money-bill-wave';
              IconPack = FontAwesome5;
              break;
            case 'Rút vàng':
              iconName = 'credit-card';
              IconPack = MaterialIcons;
              break;
            case 'Giỏ hàng':
              iconName = focused ? 'shopping-cart' : 'shopping-cart';
              IconPack = MaterialIcons;
              break;
          }

          return (
            <View style={{alignItems: 'center'}}>
              <IconPack
                name={iconName}
                size={22}
                color={focused ? '#820201' : '#888'}
              />
              {focused && (
                <View
                  style={{
                    width: 30,
                    height: 2,
                    backgroundColor: '#820201',
                    marginTop: 3,
                    borderRadius: 1,
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
