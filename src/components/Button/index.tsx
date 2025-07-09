import React from 'react';
import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent,ViewStyle } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
 style?: ViewStyle;
}

const Button: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  backgroundColor = '#E94057',
  textColor = '#fff',
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, { color: textColor },style]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 70,
    borderRadius: 12,
    // width: '100%',
    alignItems: 'center',
    marginTop: 40,

  },
  buttonText: {
    fontWeight: '600',
    fontSize: 16,
  },
});
