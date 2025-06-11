import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import DATA_REGISTER from './data';
import {useState} from 'react';
import NavBar from '../../../components/navBar/navBar_index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import images from '../../../constants/Images/images';
import DatePicker from 'react-native-date-picker';
import DateTimeModal from '../../../components/Modal/DateTimeModal';

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

const DATA_QR = ['0987654321', 'Tra la thai bao', 'Nam', '22/10/1900'];
const RegisterScreen1 = (props: Props) => {
  const {navigation} = props;

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
  const [showPassword, setShowPassword] = useState<{[key: number]: boolean}>(
    {},
  );

  const handleSexSelected = (data: any) => {
    setSexData(data);
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
          if (!formData[item.id] || formData[item.id].trim() === '') {
            newErrors[item.id] = true;
            isValid = false;
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
    }));
  };
  const handleDateChange = (id: number, selectedDate?: Date) => {
    if (selectedDate) {
      const fomattedDate = `${selectedDate
        .getDate()
        .toString()
        .padStart(2, '0')}/${(selectedDate.getMonth() + 1)
        .toString()
        .padEnd(2, '0')}/${selectedDate.getFullYear()}`;
      setFormData(prev => ({...prev, [id]: fomattedDate}));
      setErrors(prev => ({...prev, [id]: false}));
    }
    setShowDatePicker({id: null, open: false});
  };
  const onSubmit = () => {};
  return (
    <View style={styles.container}>
      <NavBar title="Đăng kí ngay" onPress={() => navigation.goBack()} />
      <KeyboardAwareScrollView scrollEnabled>
        <View style={{flex: 1}}>
          {DATA_REGISTER.map(item => (
            <View
              style={[
                errors[item.id] && {borderColor: 'red', borderWidth: 1},
                {flex: 1},
              ]}
              key={item.id}>
              <Text style={styles.text}>{item.title}</Text>

              {item.type === DEFAULT ? (
                <View>
                  <TextInput
                    style={[styles.textInput]}
                    placeholder={item.content}
                    secureTextEntry={
                      item.isSecure ? !showPassword[item.id] : false
                    }
                    keyboardType={item.keyboardType as any}
                    value={formData[item.id] || ''}
                    onChangeText={text => handleInputChange(item.id, text)}
                  />
                  {item.isShowPass ? (
                    <TouchableOpacity
                      style={styles.btnShowPass}
                      onPress={() => onShowPass(item.id)}>
                      <Image
                        source={
                          showPassword[item.id] ? images.show : images.hide
                        }
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              ) : item.type === SEX_TYPE ? (
                <TouchableOpacity
                  style={[styles.textInput]}
                  onPress={() => handleSexSelected(item.data)}>
                  <Text style={styles.text}>
                    {formData[item.id] || (item.data && item.data[0]?.name)}
                  </Text>
                </TouchableOpacity>
              ) : item.type === BIRTH_TYPE ? (
                <TouchableOpacity
                  style={[styles.input]}
                  onPress={() => setShowDatePicker({id: item.id, open: true})}>
                  <Text style={styles.text}>
                    {formData[item.id] || item.content}
                  </Text>
                </TouchableOpacity>
              ) : null}
              {item?.isQr ? (
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => onShowQr()}>
                  <Image style={styles.icon} source={images.qr} />
                </TouchableOpacity>
              ) : null}
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
                  onCancel={() => setShowDatePicker({id: null, open: false})}
                />
              )}
            </View>
          ))}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RegisterScreen1;
