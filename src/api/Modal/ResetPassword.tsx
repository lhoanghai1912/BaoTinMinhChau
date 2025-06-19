import {Alert} from 'react-native';
import {post} from '../api';
import Toast from 'react-native-toast-message';

export const resetpw = async (
  resetPasswordOTP: string,
  email: string,
  newPassword: string,
): Promise<any> => {
  const apiUrl = 'Account/reset-password-user';
  const data = {
    resetPasswordOTP,
    email,
    newPassword,
  };
  try {
    const response = await post<any>(apiUrl, data);
    if (response.status === 200) {
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Success',
        text2: `Cập nhật mật khẩu thành công`,
        visibilityTime: 3000,
        autoHide: true,
      });
    } else if (response.errors) {
      const errorMessages = Object.values(response.errors)
        .flat() // gộp tất cả các mảng thành 1 mảng
        .join(''); // nối bằng xuống dòng
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Lỗi!',
        text2: errorMessages,
        visibilityTime: 3000,
        autoHide: true,
      });
      console.log('Lỗi', errorMessages);
    }
    return response;
  } catch (error) {
    throw error;
  }
};
