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
    return response;
  } catch (error) {
    throw error;
  }
};
// Định nghĩa hàm đăng ký
export const register = async (
  fullName: string,
  userName: string,
  password: string,
  email: string,
  phone: string,
  dob: string,
  gender: string,
  address: string,
  cetizenId: string
): Promise<any> => {
  const apiUrl = 'auth/register'; // Endpoint đăng ký

  const data = {
    fullName,
    userName,
    password,
    email,
    phone,
    dob,
    gender,
    address,
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