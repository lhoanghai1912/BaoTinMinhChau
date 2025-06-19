import {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AppButton from '../AppButton';
import {apiAuthentication} from '../../api/Modal/OtpAuthentication';
import Toast from 'react-native-toast-message';

interface EnterOtpProp {
  visible: boolean;
  onClose: () => void;
  onSuccess: (otpString: string) => void;
  email: string;
}

const EnterOtpModal: React.FC<EnterOtpProp> = ({
  visible,
  onClose,
  onSuccess,
  email,
}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Lưu trữ 6 ký tự OTP
  const [error, setError] = useState(false); // Lỗi nếu mã OTP không hợp lệ
  const [isLoading, setIsLoading] = useState(false); // Thêm state cho Loading

  // Tạo refs cho từng ô nhập OTP
  const inputRefs = useRef([]);
  useEffect(() => {
    if (visible) {
      setOtp(['', '', '', '', '', '']); // Reset về rỗng mỗi khi mở modal
      setError(false); // Reset lỗi nếu có
    }
  }, [visible]);
  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text; // Cập nhật ký tự OTP tại ô tương ứng
    // Nếu nhập đủ 6 ký tự, mới cập nhật OTP
    setOtp(newOtp);

    // Di chuyển focus tự động sang ô tiếp theo nếu người dùng nhập 1 ký tự
    if (text && index < 5) {
      inputRefs.current[index + 1].focus();
    }
    if (!text && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {
    const otpString = otp.join('');
    if (otpString.length === 6) {
      setIsLoading(true);
      try {
        const response = await apiAuthentication(email, otpString);
        console.log('data back from ResetPasswod', response);
        if (response.status === 200) {
          onSuccess(otpString); // Gửi mã OTP nếu hợp lệ
          onClose(); // Đóng modal
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error',
          text2: `${error} `,
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    } else {
      setError(true); // Nếu mã OTP không hợp lệ, hiển thị lỗi
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
          // alignItems: 'center',
          backgroundColor: 'rgba(52, 52, 52,0.5)',
          paddingHorizontal: 13,
        }}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Nhập mã OTP</Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={[styles.otpInput, error && styles.errorInput]}
                value={digit}
                onChangeText={text => handleOtpChange(text, index)} // Cập nhật khi người dùng nhập
                keyboardType="numeric"
                maxLength={1}
                ref={ref => {
                  inputRefs.current[index] = ref;
                }} // Gán ref cho từng ô
                autoFocus={index === 0} // Tự động focus vào ô đầu tiên
              />
            ))}
          </View>

          {error && (
            <Text style={styles.errorText}>Mã OTP phải có 6 chữ số.</Text>
          )}
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
              onPress={handleSubmit}
              customStyle={[{width: '30%'}]}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  otpContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
    marginLeft: 9,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitText: {
    color: 'white',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelText: {
    color: 'white',
    fontSize: 16,
  },
});

export default EnterOtpModal;
