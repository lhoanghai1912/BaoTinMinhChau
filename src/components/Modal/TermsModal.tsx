import React, {useEffect, useState} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import AppStyles from '../Style/AppStyle';
import {term} from '../../api/Term/termApi';
import HTMLReactParser from 'html-react-parser';
import RenderHTML from 'react-native-render-html';

interface TermsModalProps {
  visible: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({visible, onClose}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [termsContent, setTermsContent] = useState<string>('');
  const {width} = useWindowDimensions();

  const source = {html: termsContent};
  const fetchTerms = async () => {
    setLoading(true);
    try {
      const data = await term(); // Giả sử bạn có API này
      setTermsContent(data); // Cập nhật nội dung Điều khoản
      console.log('aaaaaa', termsContent);
    } catch (error) {
      console.log('Lỗi 2', error);

      // console.error('Lỗi tải Điều khoản:', error);
      setTermsContent('Không thể tải điều khoản');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (visible) {
      fetchTerms();
    }
  }, [visible]);
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
            width: '90%',
            backgroundColor: 'white',
            borderRadius: 15,
            padding: 20,
            alignItems: 'center',
          }}>
          {loading ? (
            <ActivityIndicator size="large" color="#820201" />
          ) : (
            <ScrollView>
              <RenderHTML contentWidth={width} source={source} />
              {/* <RenderHTML source={{html: termsContent}} /> */}
            </ScrollView>
          )}
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
