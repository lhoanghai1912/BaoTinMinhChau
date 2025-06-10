import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import AppStyles from '../Style/AppStyle';
import styles from '../../screens/Login/Login_style';
import DateTimePicker from '@react-native-community/datetimepicker';

interface GenderTypeProps {
  visible: boolean;
  onClose: () => void;
  onSelectedGender: (value: string) => void;
}

const GenderModal: React.FC<GenderTypeProps> = ({
  visible,
  onClose,
  onSelectedGender,
}) => {
  const [isSelectingMale, setIsSelectingMale] = useState(false);
  const [isSelectingFemale, setIsSelectingFemale] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  const handleSelectGender = (gender: string) => {
    setSelectedGender(gender);
  };
  const handleConfirm = () => {
    if (selectedGender) {
      onSelectedGender(selectedGender);
    }
    onClose();
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
          backgroundColor: 'rgba(52, 52, 52,0.5)',
        }}>
        <View
          style={{
            // padding: 20,
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 15,
            alignContent: 'center',
          }}>
          <Text style={[AppStyles.headerText, {marginVertical: 20}]}>
            Giới tính
          </Text>
          <TouchableOpacity
            onPress={() => {
              setSelectedGender('Nam');
            }}
            style={[
              AppStyles.button,
              {
                height: 50,
                backgroundColor:
                  selectedGender === 'Nam' ? 'darkred' : 'lightgray',
              },
            ]}>
            <Text
              style={[AppStyles.buttonText, {fontSize: 24}]}
              onPress={() => {
                handleSelectGender('Nam');
                setIsSelectingMale(true);
              }}>
              Nam
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedGender('Nữ');
            }}
            style={[
              AppStyles.button,
              {
                height: 50,
                backgroundColor:
                  selectedGender === 'Nữ' ? 'darkred' : 'lightgray',
              },
            ]}>
            <Text
              style={[AppStyles.buttonText, {fontSize: 24}]}
              onPress={() => {
                handleSelectGender('Nữ');
                setIsSelectingFemale(!isSelectingFemale);
              }}>
              Nữ
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignSelf: 'center',
              width: '95%',
            }}>
            <TouchableOpacity
              onPress={() => {
                onClose();
              }}
              style={[
                AppStyles.button,
                {width: '20%', height: 50, marginVertical: 5},
              ]}>
              <Text style={AppStyles.buttonText}>Hủy bỏ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleConfirm();
              }}
              style={[
                AppStyles.button,
                {width: '20%', height: 50, marginVertical: 10},
              ]}>
              <Text style={AppStyles.buttonText}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GenderModal;
