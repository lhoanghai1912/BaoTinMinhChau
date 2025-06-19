import AsyncStorage from "@react-native-async-storage/async-storage";
import { post } from "../api";

export const login = async (
    username: string,
     password:string
): Promise<any>=>{
const apiUrl = 'Account/Login-User';
const data = {
    username,
    password,
};
    try{
    const response = await post<any>(apiUrl,data)
    console.log('Dữ liệu trả về từ API đăng nhập:', response);
    console.log('token', await AsyncStorage.getItem('accessToken'));
    
    return response;
  } catch (error) {
    throw error;
  }
};
// Định nghĩa hàm đăng ký
export const register = async (
  email: string,
  userName: string,
  password: string,
  dob: string,
  gender: string,
  confirmPassword: string,
  fullName: string,
  address: string,
  phone: string,
  cetizenId: string
): Promise<any> => {
  const apiUrl = 'Account/Register-User'; // Endpoint đăng ký

  const data = {
  email,
  userName,
  password,
  dob,
  gender,
  confirmPassword,
  fullName,
  address,
  phone,
  cetizenId,
  };

  try {
    const response = await post<any>(apiUrl, data); // Gọi hàm POST từ api.ts
    console.log('Dữ liệu trả về từ API đăng ký:', response);
    return response;
  } catch (error) {
    throw error;
  }
};