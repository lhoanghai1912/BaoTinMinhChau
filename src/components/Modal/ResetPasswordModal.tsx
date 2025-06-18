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
import Toast from 'react-native-toast-message';

interface ResetPasswodProp {
  visible: boolean;
  onClose: () => void;
  email: string;
  otp: string;
}

const ResetPasswodModal: React.FC<ResetPasswodProp> = ({
  visible,
  onClose,
  email,
  otp,
}) => {
  const [resetPassword, setresetPassword] = useState('');
  const [confirmResetPassword, setConfirmResetPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Thêm state cho Loading
  const handleConfirm = async () => {
    if (resetPassword !== confirmResetPassword) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Lỗi!',
        text2: 'Mật khẩu và xác nhận mật khẩu không trùng khớp',
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

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
            borderRadius: 5,
          }}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#820201" />
          ) : (
            <View>
              <Text style={[AppStyles.headerText, {marginVertical: 20}]}>
                Cập nhật mật khẩu mới
              </Text>

              <TextInput
                placeholder="Nhập mật khẩu mới"
                onChangeText={text => setresetPassword(text)}
                value={resetPassword}
                style={[
                  AppStyles.textInput,
                  {width: '85%', alignSelf: 'center'},
                ]}></TextInput>
              <TextInput
                placeholder="Nhập lại mật khẩu "
                onChangeText={text => setConfirmResetPassword(text)}
                value={confirmResetPassword}
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
