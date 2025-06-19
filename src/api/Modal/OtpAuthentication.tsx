import {Alert} from 'react-native';
import {post} from '../api';
import Toast from 'react-native-toast-message';

export const apiAuthentication = async (
  email: string,
  otp: string,
): Promise<any> => {
  const apiUrl = 'Account/verify-reset-password-otp-user';
  const data = {
    email,
    otp,
  };
  try {
    const response = await post<any>(apiUrl, data);
    if (response.status === 200) {
    } else {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error',
        text2: `${response.errors}`,
        visibilityTime: 3000,
        autoHide: true,
      });
    }
    return response;
  } catch (error) {
    throw error;
  }
};
