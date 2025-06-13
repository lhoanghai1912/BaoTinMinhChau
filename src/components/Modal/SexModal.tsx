import React, {useState} from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';
import AppStyles from '../Style/AppStyle';
import styles from '../../screens/Auth/Register/style';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppButton from '../AppButton';

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
  const [selectedSex, setSelectedSex] = useState('');

  const handleConfirm = () => {
    onSelectedSex(selectedSex);
    onClose();
  };

  const renderSex = ({item}: any) => {
    const isSelectedSex = selectedSex === item;
    console.log('isselectedSex', isSelectedSex);

    return (
      <View
        style={[
          {
            flex: 1,
            alignItems: 'center',
            width: '100%',
          },
        ]}>
        <TouchableOpacity
          onPress={() => {
            setSelectedSex(item);
          }}
          style={[
            AppStyles.button,
            {
              width: '90%',
              height: 50,
              marginBottom: 9,
              backgroundColor: isSelectedSex ? 'darkred' : 'lightgray',
            },
          ]}>
          <Text style={[AppStyles.buttonText, {fontSize: 24}]}>
            {item.name}
          </Text>
        </TouchableOpacity>
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
            width: '70%',
            backgroundColor: 'white',
            borderRadius: 15,
          }}>
          <Text style={[AppStyles.headerText, {marginVertical: 20}]}>
            Giới tính
          </Text>
          <FlatList data={dataProps} renderItem={renderSex} />
          <View
            style={{
              marginVertical: 9,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignSelf: 'center',
              width: '95%',
            }}>
            <AppButton
              title="Hủy bỏ"
              onPress={onClose}
              customStyle={[{width: '30%'}]}
            />
            <AppButton
              title="Xác nhận"
              onPress={handleConfirm}
              customStyle={[{width: '30%'}]}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default SexModal;
