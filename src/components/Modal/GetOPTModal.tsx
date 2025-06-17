import {
  ActivityIndicator,
  Alert,
  Modal,
  Text,
  TextInput,
  View,
} from 'react-native';
import AppStyles from '../Style/AppStyle';
import AppButton from '../AppButton';
import App from '../../../App';
import {useState} from 'react';
import {otp} from '../../api/Modal/OTPApi';

interface OTPProp {
  visible: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
}

const OTPModal: React.FC<OTPProp> = ({visible, onClose, onSuccess}) => {
  const [email, setEmail] = useState('hoanghai281zzz@gmail.com');
  const [isLoading, setIsLoading] = useState(false); // Thêm state cho Loading

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      const response = await otp(email);
      console.log('data back from otp', response);
      if (response?.status === 200) {
        onClose();
        onSuccess(email);
      } else {
        Alert.alert('Không tìm thấy tài khoản', 'Vui lòng kiểm tra lại Email');
      }
    } catch (error) {
      Alert.alert('lỗi');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',

          alignItems: 'center',
          backgroundColor: 'rgba(52, 52, 52,0.5)',
        }}>
        <View
          style={{
            width: '70%',
            backgroundColor: 'white',
            borderRadius: 15,
          }}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#820201" />
          ) : (
            <View>
              <Text style={[AppStyles.headerText, {marginVertical: 20}]}>
                Nhập email đăng kí tài khoản
              </Text>
              <TextInput
                onChangeText={text => setEmail(text)}
                value={email}
                style={[
                  AppStyles.textInput,
                  {width: '85%', alignSelf: 'center'},
                ]}></TextInput>
              <View
                style={{
                  marginVertical: 9,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignSelf: 'center',
                  width: '95%',
                }}>
                <AppButton
                  title="Hủy bỏ"
                  onPress={onClose}
                  customStyle={[{width: '30%'}]}
                />
                <AppButton
                  title="Xác nhận"
                  onPress={handleConfirm}
                  customStyle={[{width: '30%'}]}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};
export default OTPModal;
