  // src/api/termsApi.ts

  import { get } from '../api'; // Giả sử bạn đã có hàm `get` để gọi GET requests

  export const term = async (): Promise<string> => {
    const apiUrl = 'Clause/GetTerms'; // Địa chỉ endpoint lấy Điều khoản và Điều kiện

    try {
      // Gọi API GET và nhận về nội dung Điều khoản
      const response = await get<any>(apiUrl); 
      console.log('Dữ liệu trả về từ API Điều khoản:', response);

      return response.termsContent || ''; // Trả về nội dung Điều khoản
    } catch (error) {
      console.error('Lỗi khi tải Điều khoản:', error);
      throw error;
    }
  };
