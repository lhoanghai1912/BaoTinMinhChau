import { Alert } from "react-native";

const url_base = 'http://posapi.foxai.com.vn:8386/api/';

//GET
export const get = async <T,>(url: string, params?: object): Promise<T> => {
  try {
    const queryParams = params ? `?${new URLSearchParams(params as Record<string, string>)}` : '';
    const response = await fetch(`${url_base}${url}${queryParams}`);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Hàm để gọi API POST
export const post = async <T,>(url: string, data: object): Promise<T> => {
  try {
    const response = await fetch(`${url_base}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      console.log('erro:',response);
    }
        console.log('success',response);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Hàm để gọi API PUT
export const put = async <T,>(url: string, data: object): Promise<T> => {
  try {
    const response = await fetch(`${url_base}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Error updating data');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
