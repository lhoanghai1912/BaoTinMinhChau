import React, {useState} from 'react';
import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';
import AppStyles from '../Style/AppStyle';
import styles from '../../screens/Auth/Register/style';
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
            // padding: 20,
            width: '70%',
            // justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: 15,
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
              marginTop: 5,
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
                {width: '22%', height: 50, marginVertical: 5},
              ]}>
              <Text style={AppStyles.buttonText}>Hủy bỏ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleConfirm();
              }}
              style={[
                AppStyles.button,
                {width: '25%', height: 50, marginVertical: 5},
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
