import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './Login_style';
import AppStyles from '../../../src/components/Style/AppStyle'; // Import AppStyles
import images from '../../constants/Images/images';
import App from '../../../App';
import {Screen_Name} from '../../navigation/ScreenName';
import {navigate} from '../../navigation/RootNavigator';
import TermsModal from '../../components/Modal/TermsModal';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('1234');
  const [isVisible, setIsVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isTermsModalVisible, setIsTermsModalVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={[
              AppStyles.text,
              {
                fontSize: 46,
                marginBottom: 10,
                color: 'yellow',
                fontWeight: 800,
              },
            ]}>
            BẢO TÍN MINH CHÂU
          </Text>
          <Text
            style={[
              AppStyles.text,
              {
                fontSize: 30,
                marginBottom: 10,
                color: 'yellow',
                fontWeight: 500,
              },
            ]}>
            GIỮ TÍN NHIỆM HƠN GIỮ VÀNG
          </Text>
          <Text
            style={[
              AppStyles.text,
              {
                fontSize: 18,
                marginBottom: 10,
                color: 'yellow',
                fontWeight: 200,
              },
            ]}>
            JEWELRY - GEMSTONES - DIAMOND - GOLD
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.wrapContent}>
            <Text style={[AppStyles.headerText, {marginBottom: 30}]}>
              Chào mừng quý khách hàng
            </Text>
            <View style={styles.inputItem}>
              <TextInput
                placeholder="Username"
                style={[AppStyles.textInput, {paddingLeft: 10}]}
                onChangeText={setUsername}
                value={username}></TextInput>
              <View style={styles.iconGroup}>
                <TouchableOpacity></TouchableOpacity>
                <TouchableOpacity
                  style={{display: username.length > 0 ? 'flex' : 'none'}}
                  onPress={() => {
                    setUsername('');
                  }}>
                  <Image source={images.clear} style={AppStyles.icon}></Image>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputItem}>
              <TextInput
                placeholder="Password"
                style={[AppStyles.textInput, {paddingLeft: 10}]}
                onChangeText={setPassword}
                secureTextEntry={isVisible}
                value={password}></TextInput>
              <View style={styles.iconGroup}>
                <TouchableOpacity
                  style={{display: password.length > 0 ? 'flex' : 'none'}}
                  onPress={() => {
                    setIsVisible(!isVisible);
                  }}>
                  <Image
                    source={isVisible ? images.show : images.hide}
                    style={AppStyles.icon}></Image>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{display: password.length > 0 ? 'flex' : 'none'}}
                  onPress={() => {
                    setPassword('');
                  }}>
                  <Image source={images.clear} style={AppStyles.icon}></Image>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity>
              <Text
                style={[AppStyles.smallText, {color: 'darkred', fontSize: 18}]}>
                Quên mật khẩu
              </Text>
            </TouchableOpacity>
            <View style={styles.terms}>
              <TouchableOpacity
                style={[AppStyles.icon]}
                onPress={() => {
                  setChecked(!checked);
                }}>
                <Image
                  source={checked ? images.checked : images.unchecked}
                  style={[AppStyles.icon]}></Image>
              </TouchableOpacity>
              <Text
                style={[
                  AppStyles.text,
                  {
                    fontSize: 22,
                    width: '90%',
                    textAlign: 'center',
                  },
                ]}>
                Đồng ý với{' '}
                <TouchableOpacity onPress={() => setIsTermsModalVisible(true)}>
                  <Text
                    style={{color: 'blue', textDecorationLine: 'underline'}}>
                    Điều khoản, Điều kiện
                  </Text>
                </TouchableOpacity>{' '}
                khi mua vàng trực tuyến
              </Text>
            </View>
            <TouchableOpacity
              disabled={
                username.length > 0 && password.length > 0 ? false : true
              }
              style={[
                AppStyles.button,
                {
                  marginTop: 30,
                  height: 80,
                  opacity:
                    username.length > 0 &&
                    password.length > 0 &&
                    checked === true
                      ? 1
                      : 0.5,
                },
              ]}>
              <Text
                style={[
                  AppStyles.buttonText,
                  {
                    opacity:
                      username.length > 0 && password.length > 0 ? 1 : 0.5,
                    fontSize: 28,
                  },
                ]}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
            <Text style={[AppStyles.text, {marginTop: 30}]}>
              Quý khách chưa có mã khách hàng?
            </Text>
            <TouchableOpacity
              style={{marginTop: 20}}
              onPress={() => {
                navigate(Screen_Name.RegisterScreen);
              }}>
              <Text
                style={[AppStyles.smallText, {color: 'darkred', fontSize: 18}]}>
                Đăng kí ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}></View>
        <TermsModal
          visible={isTermsModalVisible}
          onClose={() => {
            setIsTermsModalVisible(false);
          }}></TermsModal>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
