// src/api/termsApi.ts

import {get} from '../api'; // Giả sử bạn đã có hàm `get` để gọi GET requests

export const term = async (): Promise<string> => {
  // const apiUrl = 'Clause/GetTerms'; // Địa chỉ endpoint lấy Điều khoản và Điều kiện
  // try {
  //   const response = await get<any>(apiUrl);
  //   const data = await response.json(); // Lấy nội dung HTML từ API
  //   console.log(data);
  //   return data;
  // } catch (error) {
  //   console.log('Lỗi ',error);

  //   // console.error('Lỗi khi tải Điều khoản:', error);
  //   throw error;
  // }
  const apiUrl = 'http://posapi.foxai.com.vn:8386/api/Clause/GetTerms';
  try {
    const res = await fetch(apiUrl);
    const data = await res.text();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
