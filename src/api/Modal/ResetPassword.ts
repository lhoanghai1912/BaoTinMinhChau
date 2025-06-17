import { Alert } from "react-native";
import { post } from "../api";

export const resetpw = async(
    resetPasswordOTP:string,
    email:string,
    newPassword: string,
):Promise<any>=>{
    const apiUrl = 'Account/reset-password-user';
    const data = {
        resetPasswordOTP,
        email,
        newPassword
    }
try {
    const response = await post<any>(apiUrl,data)
    if(response.status ===200){
        Alert.alert('Cập nhật mật khẩu thành công');
    }
    else{
        Alert.alert('Lỗi',response.errors);
        
    }
    return response;
} catch (error) {
    throw error
}
}