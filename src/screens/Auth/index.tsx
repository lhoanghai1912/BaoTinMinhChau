import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './style';
import AppStyles from '../../components/Style/AppStyle'; // Import AppStyles
import images from '../../constants/Images/images';
import {Screen_Name} from '../../navigation/ScreenName';
import {navigate} from '../../navigation/RootNavigator';
import TermsModal from '../../components/Modal/TermsModal';
import LoadingScreen from '../../components/Loading';
import {login} from '../../api/Auth/authApi';
import AppButton from '../../components/AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setUserData, login_redux} from '../../store/Slice/Slice_index';
import OTPModal from '../../components/Modal/GetOtpModal';
import ResetPasswodModal from '../../components/Modal/ResetPasswordModal';
import {colors} from '../../components/Style/Colors';
import EnterOtpModal from '../../components/Modal/EnterOtpModal';
import {otp} from '../../api/Modal/OTPApi';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('lhoanghai');
  const [password, setPassword] = useState('123Ab@');
  const [isVisible, setIsVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Thêm state cho Loading
  const [isTermsModalVisible, setIsTermsModalVisible] = useState(false);
  const [isEnterOtpModalVisible, setIsEnterOtpModalVisible] = useState(false);
  const [isOTPModalVisible, setIsOTPModalVisible] = useState(false);
  const [isResetPasswordModalVisible, setIsResetPasswordModalVisible] =
    useState(false);
  const [resetEmail, setResetEmail] = useState(''); // giữ email từ OTPModal
  const [resetOtp, setResetOtp] = useState('');

  const disabled =
    username.length > 0 && password.length > 0 && checked == false;
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await login(username, password);
      console.log('Dữ liệu trả về từ đăng nhập', response);
      if (response.token) {
        await AsyncStorage.setItem('accessToken', response.token);
        dispatch(setUserData({userData: response}));
        dispatch(login_redux({accessToken: response.token}));
        Alert.alert(
          'Đăng nhập thành công',
          `Chào mừng ${response.user.fullName}`,
        );
      } else {
        console.log('res1', response.errors);
        Alert.alert('Lỗi đăng nhập', response.errors);
      }
    } catch (error) {
      Alert.alert('Lỗi đăng nhập', 'Có lỗi xảy ra khi đăng nhập');
    } finally {
      setIsLoading(false); // Dừng loading khi đã xong
    }
  };
  const handleOtpSubmit = otp => {
    // Xử lý OTP sau khi người dùng nhập xong và nhấn "Xác nhận"
    console.log('OTP đã nhập: ', otp);
    // Gọi API hoặc logic xác thực OTP ở đây
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled"
        style={{flex: 1.5}}>
        {isLoading ? (
          <LoadingScreen></LoadingScreen>
        ) : (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={[styles.headerText]}>BẢO TÍN MINH CHÂU</Text>
              <Text style={[styles.headerText, {fontSize: 26}]}>
                GIỮ TÍN NHIỆM HƠN GIỮ VÀNG
              </Text>
              <Text style={[styles.headerText, {fontSize: 16}]}>
                JEWELRY - GEMSTONES - DIAMOND - GOLD
              </Text>
            </View>
            <View style={styles.body}>
              <View style={styles.wrapContent}>
                <Text style={[AppStyles.headerText]}>
                  Chào mừng quý khách hàng
                </Text>
                <View style={[styles.inputItem]}>
                  <TextInput
                    placeholder="Username"
                    style={[AppStyles.textInput, {paddingLeft: 9}]}
                    onChangeText={text => setUsername(text)}
                    value={username}></TextInput>
                  <View style={styles.iconGroup}>
                    <View />
                    <TouchableOpacity
                      style={{display: username.length > 0 ? 'flex' : 'none'}}
                      onPress={() => setUsername('')}>
                      <Image
                        source={images.clear}
                        style={AppStyles.icon}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={[styles.inputItem]}>
                  <TextInput
                    placeholder="Password"
                    style={[AppStyles.textInput, {paddingLeft: 9}]}
                    onChangeText={setPassword}
                    secureTextEntry={isVisible}
                    value={password}></TextInput>
                  <View style={styles.iconGroup}>
                    <TouchableOpacity
                      style={{display: password.length > 0 ? 'flex' : 'none'}}
                      onPress={() => setIsVisible(!isVisible)}>
                      <Image
                        source={isVisible ? images.show : images.hide}
                        style={AppStyles.icon}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{display: password.length > 0 ? 'flex' : 'none'}}
                      onPress={() => {
                        setPassword('');
                      }}>
                      <Image
                        source={images.clear}
                        style={AppStyles.icon}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{marginBottom: 16, marginTop: 5}}>
                  <TouchableOpacity onPress={() => setIsOTPModalVisible(true)}>
                    <Text style={[AppStyles.smallText]}>Quên mật khẩu</Text>
                  </TouchableOpacity>
                </View>
                <View style={[styles.terms]}>
                  <View style={{}}>
                    <TouchableOpacity
                      onPress={() => {
                        setChecked(!checked);
                      }}>
                      <Image
                        source={checked ? images.checked : images.unchecked}
                        style={[AppStyles.icon]}></Image>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      paddingLeft: 9,
                      flexDirection: 'row',
                    }}>
                    <Text style={[AppStyles.text, {flexShrink: 1}]}>
                      Đồng ý với
                    </Text>
                    <TouchableOpacity
                      onPress={() => setIsTermsModalVisible(true)}>
                      <Text
                        style={[
                          AppStyles.text,
                          {color: colors.red, flexShrink: 1, fontWeight: 500},
                        ]}>{` Điều khoản, Điền kiện `}</Text>
                    </TouchableOpacity>
                    <Text style={[AppStyles.text, {flexShrink: 1}]}>
                      khi mua vàng trực tuyến
                    </Text>
                  </View>
                </View>
                <View style={{marginBottom: 16, alignItems: 'center'}}>
                  <AppButton
                    disabled={disabled}
                    title="Đăng nhập"
                    onPress={handleLogin}
                  />
                </View>
                <View style={{marginBottom: 16}}>
                  <Text style={[AppStyles.text]}>
                    Quý khách chưa có mã khách hàng?
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigate(Screen_Name.RegisterScreen1);
                    }}>
                    <Text
                      style={[
                        AppStyles.smallText,
                        {color: '#820201', fontSize: 18},
                      ]}>
                      Đăng kí ngay
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[styles.footer]}></View>
            <TermsModal
              visible={isTermsModalVisible}
              onClose={() => setIsTermsModalVisible(false)}></TermsModal>
            <OTPModal
              visible={isOTPModalVisible}
              onClose={() => setIsOTPModalVisible(false)}
              onSuccess={emailFromOTP => {
                setResetEmail(emailFromOTP);
                setIsOTPModalVisible(false);
                setIsEnterOtpModalVisible(true);
              }}></OTPModal>
            <EnterOtpModal
              visible={isEnterOtpModalVisible}
              onClose={() => setIsEnterOtpModalVisible(false)}
              email={resetEmail}
              onSuccess={otp => {
                setResetOtp(otp);
                setIsEnterOtpModalVisible(false);
                setIsResetPasswordModalVisible(true);
              }}
            />
            <ResetPasswodModal
              visible={isResetPasswordModalVisible}
              onClose={() => setIsResetPasswordModalVisible(false)}
              email={resetEmail}
              otp={resetOtp}></ResetPasswodModal>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
