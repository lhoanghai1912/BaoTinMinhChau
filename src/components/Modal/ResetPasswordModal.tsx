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
import {resetpw} from '../../api/Modal/ResetPassword';

interface ResetPasswodProp {
  visible: boolean;
  onClose: () => void;
  email: string;
}

const ResetPasswodModal: React.FC<ResetPasswodProp> = ({
  visible,
  onClose,
  email,
}) => {
  const [resetPassword, setresetPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Thêm state cho Loading

  const handleConfirm = async () => {
    setIsLoading(true);
    try {
      const response = await resetpw(otp, email, resetPassword);
      console.log('data back from ResetPasswod', response);
      onClose();
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
                Cập nhật mật khẩu mới
              </Text>
              <TextInput
                editable={false}
                value={email}
                style={[
                  AppStyles.textInput,
                  {width: '85%', alignSelf: 'center'},
                ]}></TextInput>
              <TextInput
                placeholder="Nhập mật khẩu mới"
                onChangeText={text => setresetPassword(text)}
                value={resetPassword}
                style={[
                  AppStyles.textInput,
                  {width: '85%', alignSelf: 'center'},
                ]}></TextInput>
              <TextInput
                placeholder="Nhập mã OTP"
                onChangeText={text => setOtp(text)}
                value={otp}
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
export default ResetPasswodModal;
