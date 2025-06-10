import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AppStyles from '../Style/AppStyle';

interface TermsModalProps {
  visible: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({visible, onClose}) => {
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
            backgroundColor: 'white',
            borderRadius: 15,
            padding: 20,
            alignItems: 'center',
          }}>
          <Text style={[AppStyles.headerText, {marginBottom: 10}]}>
            Điều khoản và Điều kiện
          </Text>
          <ScrollView style={{width: '100%'}}>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Text style={[AppStyles.text, {fontSize: 16, marginBottom: 15}]}>
                1. Điều khoản 1: Mô tả về điều khoản đầu tiên...
              </Text>
              <Text style={[AppStyles.text, {fontSize: 16, marginBottom: 15}]}>
                2. Điều khoản 2: Mô tả về điều khoản thứ hai...
              </Text>
              <Text style={[AppStyles.text, {fontSize: 16, marginBottom: 15}]}>
                3. Điều khoản 3: Mô tả về điều khoản thứ ba...
              </Text>
              <Text style={[AppStyles.text, {fontSize: 16, marginBottom: 15}]}>
                4. Điều khoản 4: Mô tả về điều khoản thứ tư...
              </Text>
              {/* Thêm nhiều điều khoản ở đây */}
            </View>
          </ScrollView>

          {/* Nút Đóng */}
        </View>
        <TouchableOpacity
          onPress={onClose}
          style={[
            AppStyles.button,
            {
              width: 50,
              height: 50,
              padding: 10,
              borderRadius: '100%',
              marginTop: 15,
            },
          ]}>
          <Text style={[AppStyles.buttonText, {fontSize: 24}]}>X</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default TermsModal;
