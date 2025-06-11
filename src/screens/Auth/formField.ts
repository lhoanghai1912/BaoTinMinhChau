// FormField.ts

export interface FormField {
  id: number;                 // ID của trường
  title: string;              // Tiêu đề của trường
  content: string;            // Nội dung placeholder hoặc mô tả
  isSecure: boolean;          // Xác định trường có ẩn văn bản (dành cho mật khẩu)
  isQr: boolean;              // Kiểm tra trường này có phải là mã QR không
  keyboardType: string;       // Kiểu bàn phím (number-pad, default, email-address, ...)
  require: boolean;           // Trường có bắt buộc hay không
  type: number;               // Loại trường (1: văn bản, 2: chọn giới tính, ...)
  data: any;                  // Dữ liệu bổ sung (dùng cho các trường như chọn giới tính, ngày tháng, ...)
  isShowPass: boolean;        // Xác định trường có thể hiển thị/ẩn mật khẩu
}

export default FormField;