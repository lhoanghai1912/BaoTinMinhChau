import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../../components/AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../store/Slice/Slice_index';
import {navigate} from '../../navigation/RootNavigator';
import {Screen_Name} from '../../navigation/ScreenName';
import images from '../../constants/Images/images';
import AppStyles from '../../components/Style/AppStyle';
import {colors} from '../../components/Style/Colors';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const {userData} = useSelector((state: any) => state.user);
  const handleLogout = async () => {
    console.log('token home', await AsyncStorage.getItem('accessToken'));
    await AsyncStorage.removeItem('accessToken');
    dispatch(logout());
    console.log('logout pressed', userData);
  };
  console.log(userData);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={images.logo} style={[styles.icon]}></Image>
        <View style={styles.headerContent}>
          <View style={[styles.headerContentCol, {flex: 0.5, marginLeft: 10}]}>
            <Image
              source={images.account}
              style={[
                styles.icon,
                {
                  borderRadius: 450,
                  backgroundColor: colors.white_1,
                },
              ]}></Image>
          </View>
          <View style={[styles.headerContentCol, {alignItems: 'flex-start'}]}>
            <Text style={AppStyles.text}>Xin chào</Text>
            <Text style={AppStyles.text}>{userData?.user?.fullName}</Text>
            <Text style={AppStyles.text}>{userData?.user?.phone}</Text>
          </View>
          <View style={[styles.headerContentCol, styles.itemGroup]}>
            <TouchableOpacity>
              <Image source={images.noti} style={AppStyles.icon}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLogout()}>
              <Image source={images.logout} style={AppStyles.icon}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.wrapBody}>
          <TouchableOpacity onPress={() => navigate(Screen_Name.BuyScreen)}>
            <View style={[styles.bodyItems]}>
              <Image
                source={images.buy_action}
                style={[styles.icon, {width: 50, height: 50}]}></Image>
              <Text>Mua vàng</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate(Screen_Name.SellScreen)}>
            <View style={[styles.bodyItems]}>
              <Image
                source={images.sell_action}
                style={[styles.icon, {width: 50, height: 50}]}></Image>
              <Text>Bán vàng</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate(Screen_Name.WithdrawScreen)}>
            <View style={[styles.bodyItems, {marginRight: 0}]}>
              <Image
                source={images.wallet_action}
                style={[styles.icon, {width: 50, height: 50}]}></Image>
              <Text>Rút vàng</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flex: 0.6,
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  headerContent: {
    flexDirection: 'row',
    marginTop: 16,
    backgroundColor: colors.white,
    height: '80%',
    borderRadius: 5,
    marginHorizontal: 32,
    paddingHorizontal: 9,
    paddingVertical: 16,
  },
  headerContentCol: {
    flex: 1,
    justifyContent: 'center',
  },
  itemGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0.5,
    alignItems: 'center',
  },
  body: {
    flex: 2,
  },
  wrapBody: {
    marginTop: 100,
    marginBottom: 16,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', // Cho phép các item xuống dòng khi cần thiết
    justifyContent: 'center',
    alignItems: 'flex-start', // Giúp căn chỉnh các item bắt đầu từ trên
  },
  bodyItems: {
    width: 170,
    height: 100,
    marginRight: 10,
    marginBottom: 20, // Thêm marginBottom cho các phần tử để tránh bị dính nhau
    backgroundColor: colors.white,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15, // Thêm padding để nội dung không bị sát mép
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    // backgroundColor: colors.white_1,
  },
});

export default HomeScreen;
