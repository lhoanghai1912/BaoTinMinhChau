import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import styles from './style';
import AppStyles from '../../components/Style/AppStyle'; // Import AppStyles
import images from '../../constants/Images/images';
import {Screen_Name} from '../../navigation/ScreenName';
import {navigate} from '../../navigation/RootNavigator';
import TermsModal from '../../components/Modal/TermsModal';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('1234');
  const [isVisible, setIsVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isTermsModalVisible, setIsTermsModalVisible] = useState(false);
  const disabled =
    username.length > 0 && password.length > 0 && checked == true;
  console.log('usernameusername', username);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled"
        style={{flex: 1.5}}>
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
                    <Image source={images.clear} style={AppStyles.icon}></Image>
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
                    <Image source={images.clear} style={AppStyles.icon}></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{marginBottom: 16, marginTop: 5}}>
                <TouchableOpacity>
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
                        {color: 'darkred', flexShrink: 1},
                      ]}>{` Điều khoản, Điền kiện `}</Text>
                  </TouchableOpacity>
                  <Text style={[AppStyles.text, {flexShrink: 1}]}>
                    khi mua vàng trực tuyến
                  </Text>
                </View>
              </View>
              <View style={{marginBottom: 16}}>
                <TouchableOpacity
                  disabled={disabled}
                  style={[
                    AppStyles.button,
                    {opacity: disabled ? 1 : 0.5, paddingVertical: 5},
                  ]}>
                  <Text style={[AppStyles.buttonText, {fontSize: 28}]}>
                    Đăng nhập
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginBottom: 16}}>
                <Text style={[AppStyles.text]}>
                  Quý khách chưa có mã khách hàng?
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigate(Screen_Name.RegisterScreen);
                  }}>
                  <Text
                    style={[
                      AppStyles.smallText,
                      {color: 'darkred', fontSize: 18},
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
            onClose={() => {
              setIsTermsModalVisible(false);
            }}></TermsModal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
