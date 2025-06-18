import React, {useState} from 'react';
import {Button, Modal, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import AppStyles from '../Style/AppStyle';

interface DateTimeProps {
  visible: boolean;
  onClose: () => void;
  onSelectedDate: (date: Date) => void;
}
const DateTimeModal: React.FC<DateTimeProps> = ({
  visible,
  onClose,
  onSelectedDate,
}) => {
  const [date, setDate] = useState(new Date());

  const handleConfirm = () => {
    onSelectedDate(date); // Trả về ngày đã chọn
    onClose(); // Đóng modal
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(52, 52, 52, 0.5)',
        }}>
        <View
          style={{
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 20,
          }}>
          <Text style={[AppStyles.headerText, {marginVertical: 20}]}>
            Chọn ngày và giờ
          </Text>

          {/* Hiển thị DatePicker */}
          <DatePicker
            date={date}
            onDateChange={setDate} // Cập nhật giá trị ngày khi người dùng thay đổi
            mode="date" // Chế độ chọn ngày và giờ
          />

          {/* Các nút Hủy và Xác nhận */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              width: '80%',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={onClose}
              style={[
                AppStyles.button,
                {width: '30%', height: 50, marginVertical: 10},
              ]}>
              <Text style={AppStyles.buttonText}>Hủy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleConfirm}
              style={[
                AppStyles.button,
                {width: '30%', height: 50, marginVertical: 10},
              ]}>
              <Text style={AppStyles.buttonText}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default DateTimeModal;
