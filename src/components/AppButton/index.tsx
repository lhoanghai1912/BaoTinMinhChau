// src/components/AppButton.tsx

import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import {colors} from '../Style/Colors';

interface AppButtonProps {
  onPress: () => void; // Hàm khi nhấn nút
  title: string; // Tiêu đề nút
  customStyle?: ViewStyle[]; // Custom style cho nút
  disabled?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title,
  customStyle = [],
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        disabled ? styles.buttonDisabled : styles.button,
        ...customStyle,
        {opacity: disabled ? 0.5 : 1},
      ]}>
      <Text style={[styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  //Button
  button: {
    backgroundColor: colors.red,
    borderRadius: 5,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 9,
  },
  buttonDisabled: {
    backgroundColor: colors.white_1,
    borderRadius: 5,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 9,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 500,
    width: '100%',
    textAlign: 'center',
  },
});

export default AppButton;
