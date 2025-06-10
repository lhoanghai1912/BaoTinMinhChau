import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Image,
} from 'react-native';
import styles from './Register_style';
import NavBar from '../../components/navBar/navBar_index';
import AppStyles from '../../components/Style/AppStyle';
import GenderModal from '../../components/Modal/GenderModal';
import {navigate} from '../../navigation/RootNavigator';
import {Screen_Name} from '../../navigation/ScreenName';
import DatePicker from 'react-native-date-picker';
import DateTimeModal from '../../components/Modal/DateTimeModal';
import moment from 'moment';
import images from '../../constants/Images/images';

const RegisterScreen = ({navigation}) => {
  const [modalGenderVisible, setModalGenderVisible] = useState(false);
  const [gender, setGender] = useState('');
  const handleSelectedGender = (selectedGender: any) => {
    setGender(selectedGender);
    setModalGenderVisible(false);
  };

  const [modalDateTimePickerVisible, setModalDateTimePickerVisible] =
    useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const handleSelectedDate = date => {
    setSelectedDate(date);
  };

  const [personalId, setPersonalId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <NavBar title="Đăng kí ngay" onPress={() => navigation.goBack()} />
      <ScrollView
        style={{
          flex: 1,
          paddingVertical: 20,
          backgroundColor: 'lightgray',
        }}
        contentContainerStyle={{flexGrow: 1}} // Cho phép cuộn khi có đủ nội dung
        keyboardShouldPersistTaps="handled">
        <View
          style={{
            flex: 1,
            alignSelf: 'center',
            width: '95%',
          }}>
          <View
            style={[
              AppStyles.textInput,
              {
                marginVertical: 20,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'white',
              },
            ]}>
            <Text style={[AppStyles.text]}>Số CCCD/CMND</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={[AppStyles.text, {width: '100%'}]}
                value={personalId}
                onChangeText={setPersonalId}
                placeholder="Số CCCD/CMND"></TextInput>
              <TouchableOpacity onPress={() => setPersonalId('')}>
                <Image
                  source={images.clear}
                  style={[
                    AppStyles.icon,
                    {
                      right: 0,
                      position: 'absolute',
                      display: personalId.length > 0 ? 'flex' : 'none',
                    },
                  ]}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              AppStyles.textInput,
              {
                marginVertical: 20,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'white',
              },
            ]}>
            <Text style={[AppStyles.text]}>Họ và tên</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={[AppStyles.text, {width: '100%'}]}
                value={name}
                onChangeText={setName}
                placeholder="Họ và tên"></TextInput>
              <TouchableOpacity onPress={() => setName('')}>
                <Image
                  source={images.clear}
                  style={[
                    AppStyles.icon,
                    {
                      right: 0,
                      position: 'absolute',
                      display: name.length > 0 ? 'flex' : 'none',
                    },
                  ]}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setModalGenderVisible(true);
            }}
            style={[
              AppStyles.textInput,
              {
                marginVertical: 20,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'white',
              },
            ]}>
            <Text style={[AppStyles.text]}>Giới tính</Text>
            <Text
              style={[
                AppStyles.text,
                {width: '100%', paddingVertical: 10, paddingHorizontal: 5},
              ]}>
              {`${gender || 'Giới tính'}`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalDateTimePickerVisible(true);
            }}
            style={[
              AppStyles.textInput,
              {
                marginVertical: 20,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'white',
              },
            ]}>
            <Text style={[AppStyles.text]}>Ngày sinh</Text>
            <Text
              style={[
                AppStyles.text,
                {width: '100%', paddingVertical: 10, paddingHorizontal: 5},
              ]}>{`${
              selectedDate
                ? moment(selectedDate).format('DD/MM/YYYY')
                : 'Ngày sinh'
            }`}</Text>
          </TouchableOpacity>
          <View
            style={[
              AppStyles.textInput,
              {
                marginVertical: 20,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'white',
              },
            ]}>
            <Text style={[AppStyles.text]}>Nơi thường trú</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={[AppStyles.text, {width: '100%'}]}
                value={address}
                onChangeText={setAddress}
                placeholder="Nơi thường trú"></TextInput>
              <TouchableOpacity onPress={() => setAddress('')}>
                <Image
                  source={images.clear}
                  style={[
                    AppStyles.icon,
                    {
                      right: 0,
                      position: 'absolute',
                      display: address.length > 0 ? 'flex' : 'none',
                    },
                  ]}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              AppStyles.textInput,
              {
                marginVertical: 20,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'white',
              },
            ]}>
            <Text style={[AppStyles.text]}>Tên đăng nhập</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={[AppStyles.text, {width: '100%'}]}
                value={username}
                onChangeText={setUsername}
                placeholder="Tên đăng nhập"></TextInput>
              <TouchableOpacity onPress={() => setUsername('')}>
                <Image
                  source={images.clear}
                  style={[
                    AppStyles.icon,
                    {
                      right: 0,
                      position: 'absolute',
                      display: username.length > 0 ? 'flex' : 'none',
                    },
                  ]}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              AppStyles.textInput,
              {
                marginVertical: 20,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'white',
              },
            ]}>
            <Text style={[AppStyles.text]}>Mật khẩu</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={[AppStyles.text, {width: '100%'}]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={passwordVisible}
                placeholder="Mật khẩu"></TextInput>
              <View style={[styles.iconGroup, {right: 0}]}>
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}>
                  <Image
                    source={passwordVisible ? images.show : images.hide}
                    style={[
                      AppStyles.icon,
                      {
                        right: 0,
                        display: password.length > 0 ? 'flex' : 'none',
                      },
                    ]}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPassword('')}>
                  <Image
                    source={images.clear}
                    style={[
                      AppStyles.icon,
                      {
                        right: 0,
                        display: password.length > 0 ? 'flex' : 'none',
                      },
                    ]}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={[
              AppStyles.textInput,
              {
                marginVertical: 20,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'white',
              },
            ]}>
            <Text style={[AppStyles.text]}>Nhập lại mật khẩu</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={[AppStyles.text, {width: '100%'}]}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={confirmPasswordVisible}
                placeholder="Mật khẩu"></TextInput>
              <View style={[styles.iconGroup, {right: 0}]}>
                <TouchableOpacity
                  onPress={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }>
                  <Image
                    source={confirmPasswordVisible ? images.show : images.hide}
                    style={[
                      AppStyles.icon,
                      {
                        right: 0,
                        display: confirmPassword.length > 0 ? 'flex' : 'none',
                      },
                    ]}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setConfirmPassword('')}>
                  <Image
                    source={images.clear}
                    style={[
                      AppStyles.icon,
                      {
                        right: 0,
                        display: confirmPassword.length > 0 ? 'flex' : 'none',
                      },
                    ]}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={[
              AppStyles.textInput,
              {
                marginVertical: 20,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'white',
              },
            ]}>
            <Text style={[AppStyles.text]}>Số điện thoại</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={[AppStyles.text, {width: '100%'}]}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="number-pad"
                placeholder="Số điện thoại"></TextInput>
              <TouchableOpacity onPress={() => setPhoneNumber('')}>
                <Image
                  source={images.clear}
                  style={[
                    AppStyles.icon,
                    {
                      right: 0,
                      position: 'absolute',
                      display: phoneNumber.length > 0 ? 'flex' : 'none',
                    },
                  ]}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              AppStyles.textInput,
              {
                marginVertical: 20,
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'white',
              },
            ]}>
            <Text style={[AppStyles.text]}>Email</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={[AppStyles.text, {width: '100%'}]}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"></TextInput>
              <TouchableOpacity onPress={() => setEmail('')}>
                <Image
                  source={images.clear}
                  style={[
                    AppStyles.icon,
                    {
                      right: 0,
                      position: 'absolute',
                      display: email.length > 0 ? 'flex' : 'none',
                    },
                  ]}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems: 'center', marginBottom: 50}}>
            <TouchableOpacity
              style={[
                AppStyles.button,
                {width: '100%', alignContent: 'center', height: 80},
              ]}>
              <Text
                style={[
                  AppStyles.buttonText,
                  {fontSize: 24, fontWeight: 'bold'},
                ]}>
                Xác nhận
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <GenderModal
        visible={modalGenderVisible}
        onClose={() => {
          setModalGenderVisible(false);
        }}
        onSelectedGender={handleSelectedGender}
      />
      <DateTimeModal
        visible={modalDateTimePickerVisible}
        onClose={() => {
          setModalDateTimePickerVisible(false);
        }}
        onSelectedDate={handleSelectedDate}
      />
    </View>
  );
};

export default RegisterScreen;
