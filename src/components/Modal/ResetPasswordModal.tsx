import {
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AppStyles from '../Style/AppStyle';
import AppButton from '../AppButton';
import App from '../../../App';
import {useState} from 'react';
import {resetpw} from '../../api/Modal/ResetPassword';
import Toast from 'react-native-toast-message';
import {colors} from '../Style/Colors';
import images from '../../constants/Images/images';

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
  const [resetPassword, setResetPassword] = useState('');
  const [confirmResetPassword, setConfirmResetPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Thêm state cho Loading
  const [isVisible, setIsVisible] = useState(false);
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
      if (response.status === 200) {
        onClose();
      }
    } catch (error) {
      console.log('lỗi');
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
            <View style={{paddingHorizontal: 9}}>
              <Text style={[AppStyles.headerText, {marginVertical: 20}]}>
                Cập nhật mật khẩu mới
              </Text>

              <View style={[styles.inputItem]}>
                <TextInput
                  underlineColorAndroid="transparent" // Ẩn viền mặc định Android
                  autoCorrect={false} // Tắt autocorrect
                  spellCheck={false} // Tắt spell check
                  autoCapitalize="none" // Không viết hoa tự động
                  textContentType="none" // Ngăn gợi ý mật khẩu/email...
                  importantForAutofill="no" // Ngăn gợi ý từ autofill
                  placeholder="ResetPassword"
                  style={[AppStyles.textInput, {paddingLeft: 9}]}
                  onChangeText={setResetPassword}
                  secureTextEntry={isVisible}
                  value={resetPassword}></TextInput>
                <View style={styles.iconGroup}>
                  <TouchableOpacity
                    style={{
                      display: resetPassword.length > 0 ? 'flex' : 'none',
                    }}
                    onPress={() => setIsVisible(!isVisible)}>
                    <Image
                      source={isVisible ? images.show : images.hide}
                      style={AppStyles.icon}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      display: resetPassword.length > 0 ? 'flex' : 'none',
                    }}
                    onPress={() => {
                      setResetPassword('');
                    }}>
                    <Image source={images.clear} style={AppStyles.icon}></Image>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={[styles.inputItem]}>
                <TextInput
                  underlineColorAndroid="transparent" // Ẩn viền mặc định Android
                  autoCorrect={false} // Tắt autocorrect
                  spellCheck={false} // Tắt spell check
                  autoCapitalize="none" // Không viết hoa tự động
                  textContentType="none" // Ngăn gợi ý mật khẩu/email...
                  importantForAutofill="no" // Ngăn gợi ý từ autofill
                  placeholder="ConfirmResetPassword"
                  style={[AppStyles.textInput, {paddingLeft: 9}]}
                  onChangeText={setConfirmResetPassword}
                  secureTextEntry={isVisible}
                  value={confirmResetPassword}></TextInput>
                <View style={styles.iconGroup}>
                  <TouchableOpacity
                    style={{
                      display:
                        confirmResetPassword.length > 0 ? 'flex' : 'none',
                    }}
                    onPress={() => setIsVisible(!isVisible)}>
                    <Image
                      source={isVisible ? images.show : images.hide}
                      style={AppStyles.icon}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      display:
                        confirmResetPassword.length > 0 ? 'flex' : 'none',
                    }}
                    onPress={() => {
                      setConfirmResetPassword('');
                    }}>
                    <Image source={images.clear} style={AppStyles.icon}></Image>
                  </TouchableOpacity>
                </View>
              </View>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
    paddingHorizontal: 16,
  },

  //Header
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 32,
  },
  headerText: {
    fontSize: 40,
    marginBottom: 9,
    color: colors.yellow,
    fontWeight: 'bold',
  },

  //Body
  body: {
    flex: 1,
    alignItems: 'center',
  },

  wrapContent: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 30,
  },

  inputItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 9,
  },

  iconGroup: {
    flexDirection: 'row',
    position: 'absolute',
    resizeMode: 'contain', // Đảm bảo logo không bị méo
    // zIndex: 1,
    justifyContent: 'space-between',
    width: 70,
    right: 10,
    bottom: '25%',
  },
  forgotPassword: {
    marginBottom: 9,
    marginTop: 5,
  },
  terms: {
    // paddingHorizontal:9,
    // flex:1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  //Footer
  footer: {
    flex: 1,
  },
});
export default ResetPasswodModal;
