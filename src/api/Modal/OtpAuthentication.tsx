import {Alert} from 'react-native';
import {post} from '../api';

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
      Alert.alert('Lỗi', response.errors);
    }
    return response;
  } catch (error) {
    throw error;
  }
};
