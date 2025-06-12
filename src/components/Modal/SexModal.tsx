import React, {useState} from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';
import AppStyles from '../Style/AppStyle';
import styles from '../../screens/Auth';
import DateTimePicker from '@react-native-community/datetimepicker';

interface SexTypeProps {
  visible: boolean;
  onClose: () => void;
  dataProps: any;
  onSelectedSex: (value: string) => void;
}

const SexModal: React.FC<SexTypeProps> = ({
  visible,
  onClose,
  onSelectedSex,
  dataProps,
}) => {
  const [isSelectingMale, setIsSelectingMale] = useState(false);
  const [isSelectingFemale, setIsSelectingFemale] = useState(false);
  const [selectedSex, setSelectedSex] = useState('');
  const handleSelectSex = (Sex: string) => {
    setSelectedSex(Sex);
  };
  const handleConfirm = () => {
    if (selectedSex) {
      onSelectedSex(selectedSex);
    }
    onClose();
  };

  const renderSex = (item: any) => {
    return (
      <View>
        <Text>Render</Text>
      </View>
    );
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
          <FlatList data={dataProps} renderItem={renderSex} />
          {/* <TouchableOpacity
            onPress={() => {
              setSelectedSex('Nam');
            }}
            style={[
              AppStyles.button,
              {
                height: 50,
                backgroundColor:
                  selectedSex === 'Nam' ? 'darkred' : 'lightgray',
              },
            ]}>
            <Text
              style={[AppStyles.buttonText, {fontSize: 24}]}
              onPress={() => {
                handleSelectSex('Nam');
                setIsSelectingMale(true);
              }}>
              Nam
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedSex('Nữ');
            }}
            style={[
              AppStyles.button,
              {
                height: 50,
                backgroundColor: selectedSex === 'Nữ' ? 'darkred' : 'lightgray',
              },
            ]}>
            <Text
              style={[AppStyles.buttonText, {fontSize: 24}]}
              onPress={() => {
                handleSelectSex('Nữ');
                setIsSelectingFemale(!isSelectingFemale);
              }}>
              Nữ
            </Text>
          </TouchableOpacity> */}
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
export default SexModal;
