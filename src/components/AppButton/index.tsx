// src/components/AppButton.tsx

import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';

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
      style={[styles.button, ...customStyle, {opacity: disabled ? 0.5 : 1}]}>
      <Text style={[styles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  //Button
  button: {
    backgroundColor: '#820201',
    // alignItems: 'center',
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 5,
  },

  buttonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 500,
    width: '100%',
    textAlign: 'center',
  },
});

export default AppButton;
