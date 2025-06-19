import { Alert } from "react-native";
import { post } from "../api";
import Toast from "react-native-toast-message";

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
        
    }catch(error){
        throw error;
    }
}