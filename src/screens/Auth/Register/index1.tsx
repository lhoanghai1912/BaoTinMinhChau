import {
  Alert,
  Image,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import DATA_REGISTER from './data';
import {useState} from 'react';
import NavBar from '../../../components/navBar/navBar_index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import images from '../../../constants/Images/images';
import DatePicker from 'react-native-date-picker';
import SexModal from '../../../components/Modal/SexModal';
import AppButton from '../../../components/AppButton';
import {login, register} from '../../../api/Auth/authApi';
import moment from 'moment';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {login_redux, setUserData} from '../../../store/Slice/Slice_index';
import LoadingScreen from '../../../components/Loading';
import {colors} from '../../../components/Style/Colors';
import Toast from 'react-native-toast-message';

interface Props {
  navigation: any;
}

interface SEX {
  id: number;
  name: string;
}

const DEFAULT = 1;
const SEX_TYPE = 2;
const BIRTH_TYPE = 3;

const DATA_QR = [
  '09876543220',
  'Tra la thai bao',
  'Nam',
  '22/10/1900',
  'Hn',
  'Htest20',
  '123Ab@',
  '123Ab@',
  '0987655321',
  'test20@gmail.com',
];
const RegisterScreen1 = (props: Props) => {
  const {navigation} = props;
  const {userData} = useSelector((state: any) => state.user);
  console.log(userData, 'a');

  const [formData, setFormData] = useState<{[key: number]: string}>(() => {
    const initialData: {[key: number]: string} = {};
    DATA_REGISTER.forEach(item => {
      if (item.type === SEX_TYPE && item.data && item.data.length > 0) {
        initialData[item.id] = 'Giới tính';
      }
    });
    return initialData;
  });
  const [errors, setErrors] = useState<{[key: number]: boolean}>({});
  const [showDatePicker, setShowDatePicker] = useState<{
    id: number | null;
    open: boolean;
  }>({id: null, open: false});
  const [isSexModal, setIsSexModal] = useState(false);
  const [sexData, setSexData] = useState<SEX[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState<{[key: number]: boolean}>(
    {},
  );
  //formData[4] : 13/07/1982
  const date = formData[4];
  const formattedDate = moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
  console.log(
    'formData',
    formData[10],
    formData[6],
    formData[7],
    formData[8],
    formData[2],
    formData[5],
    formData[9],
    formData[1],
    formattedDate,
    formData[3],
  );

  const handleSexSelected = (data: any) => {
    setSexData(data);
    console.log('data', data);
    setIsSexModal(true);
  };

  const handleInputChange = (id: number, value: string) => {
    setFormData(prev => ({...prev, [id]: value}));
    if (value.trim()) {
      setErrors(prev => ({...prev, [id]: false}));
    }
  };
  const onShowPass = (id: number) => {
    setShowPassword(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const onSexConfirmed = (data: any) => {
    setFormData(prev => ({...prev, [3]: data?.name}));
  };
  const validateForm = () => {
    const newErrors: {[key: number]: boolean} = {};
    let isValid = true;

    DATA_REGISTER.forEach(item => {
      if (item.require) {
        if (item.type === SEX_TYPE) {
          if (!formData[item.id] && !(item.data && item.data[0]?.name)) {
            newErrors[item.id] = true;
            isValid = false;
          }
        } else {
          if (item.id === 8) {
            const password = formData[7];
            const confirmPassword = formData[8];
            if (password !== confirmPassword) {
              newErrors[item.id] = true;
              isValid = false;
              Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Lỗi!',
                text2: 'Mật khẩu và xác nhận mật khẩu không trùng khớp',
                visibilityTime: 3000,
                autoHide: true,
              });
            }
          }
          if (!formData[item.id] || formData[item.id].trim() === '') {
            newErrors[item.id] = true;
            isValid = false;
            Toast.show({
              type: 'error',
              position: 'top',
              text1: 'Lỗi!',
              text2: 'Vui lòng nhập đầy đủ thông tin',
              visibilityTime: 3000,
              autoHide: true,
            });
          }
        }
      }
    });
    setErrors(newErrors);
    return isValid;
  };
  const onShowQr = () => {
    setFormData(prev => ({
      ...prev,
      [1]: DATA_QR[0],
      [2]: DATA_QR[1],
      [3]: DATA_QR[2],
      [4]: DATA_QR[3],
      [5]: DATA_QR[4],
      [6]: DATA_QR[5],
      [7]: DATA_QR[6],
      [8]: DATA_QR[7],
      [9]: DATA_QR[8],
      [10]: DATA_QR[9],
    }));
  };
  const handleDateChange = (id: number, selectedDate?: Date) => {
    if (selectedDate) {
      const fomattedDate = `${selectedDate
        .getDate()
        .toString()
        .padStart(2, '0')}/${(selectedDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}/${selectedDate.getUTCFullYear()}`;
      setFormData(prev => ({...prev, [id]: fomattedDate}));
      setErrors(prev => ({...prev, [id]: false}));
    }
    setShowDatePicker({id: null, open: false});
  };
  const onSubmit = async () => {
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await register(
          formData[10],
          formData[6],
          formData[7],
          formattedDate,
          formData[3],
          formData[8],
          formData[2],
          formData[5],
          formData[9],
          formData[1],
        );

        if (response.userName) {
          Alert.alert('Đăng kí thành công');
          const loginNow = await login(formData[6], formData[7]);
          if (loginNow.token) {
            console.log('Dữ liệu trả về từ đăng nhập', loginNow);
            await AsyncStorage.setItem('accessToken', loginNow.token);
            dispatch(setUserData({userData: loginNow}));
            dispatch(login_redux({accessToken: loginNow.token}));
          }
        } else {
          console.log('erro else', response.errors);
          Alert.alert('erro alert', response.errors || 'Có lỗi xảy ra');
        }
      } catch (error) {
        console.log('Lỗi ', error);
        Alert.alert('Lỗi đăng kí', 'Vui lòng thử lại');
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <View style={styles.container}>
      <NavBar title="Đăng kí ngay" onPress={() => navigation.goBack()} />
      {isLoading ? (
        <LoadingScreen></LoadingScreen>
      ) : (
        <KeyboardAwareScrollView scrollEnabled>
          <View style={styles.body}>
            {DATA_REGISTER.map(item => (
              <View key={item.id}>
                <View
                  style={[
                    styles.input,
                    errors[item.id] && {
                      borderColor: colors.red,
                      borderWidth: 1,
                      // height: 70,
                      // borderRadius: 10,
                    },
                  ]}
                  key={item.id}>
                  <Text style={[styles.text]}>{item.title}</Text>

                  {item.type === DEFAULT ? (
                    <View style={{}}>
                      <TextInput
                        style={[
                          styles.text,
                          {
                            paddingBottom: 10,
                          },
                        ]}
                        placeholder={item.content}
                        secureTextEntry={
                          item.isSecure ? !showPassword[item.id] : false
                        }
                        keyboardType={item.keyboardType as any}
                        value={formData[item.id] || ''}
                        onChangeText={text => handleInputChange(item.id, text)}
                      />
                    </View>
                  ) : item.type === SEX_TYPE ? (
                    <TouchableOpacity
                      style={[
                        {
                          paddingLeft: 5,
                          paddingVertical: 9,
                        },
                      ]}
                      onPress={() => handleSexSelected(item.data)}>
                      <Text style={styles.text}>
                        {formData[item.id] || (item.data && item.data[0]?.name)}
                      </Text>
                    </TouchableOpacity>
                  ) : item.type === BIRTH_TYPE ? (
                    <TouchableOpacity
                      style={{paddingLeft: 5, paddingVertical: 9}}
                      onPress={() =>
                        setShowDatePicker({id: item.id, open: true})
                      }>
                      <Text style={[styles.text]}>
                        {formData[item.id] || item.content}
                      </Text>
                    </TouchableOpacity>
                  ) : null}
                  {/* </View> */}

                  {showDatePicker.open && showDatePicker.id === item.id && (
                    <DatePicker
                      modal
                      open={showDatePicker.open}
                      date={
                        formData[item.id]
                          ? new Date(
                              formData[item.id].split('/').reverse().join('-'),
                            )
                          : new Date()
                      }
                      mode="date"
                      maximumDate={new Date()}
                      onConfirm={selectedDate =>
                        handleDateChange(item.id, selectedDate)
                      }
                      onCancel={() =>
                        setShowDatePicker({id: null, open: false})
                      }
                    />
                  )}
                </View>
                <View style={[styles.iconGroup]}>
                  {item.isShowPass ? (
                    <TouchableOpacity
                      // style={styles.btnShowPass}
                      onPress={() => onShowPass(item.id)}>
                      <Image
                        source={
                          showPassword[item.id] ? images.show : images.hide
                        }
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  ) : null}
                  {item?.isQr ? (
                    <TouchableOpacity
                      // style={styles.btnShowPass}
                      onPress={() => onShowQr()}>
                      <Image style={styles.icon} source={images.qr} />
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            ))}
          </View>
          <AppButton
            title="Đăng kí"
            onPress={onSubmit}
            customStyle={[{marginVertical: 16}]}
          />
        </KeyboardAwareScrollView>
      )}

      <SexModal
        visible={isSexModal}
        onClose={() => setIsSexModal(false)}
        onSelectedSex={data => onSexConfirmed(data)}
        dataProps={sexData}
      />
    </View>
  );
};

export default RegisterScreen1;
