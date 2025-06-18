import { Alert } from "react-native";
import { post } from "../api";

export const otp = async(
    email: string,
): Promise<any>=>{
    const apiUrl = 'Account/send-otp-login-user';
    const data = {
        email,
    };
    try{
        const response = await post<any>(apiUrl,data)
        if(response.status ===200){
        }
        else{
            Alert.alert('Lỗi',response.errors);
            
        }
        return response;
        
    }catch(error){
        throw error;
    }
}