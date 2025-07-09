import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  color?: string;
  size?: number;
  align?: 'left' | 'center' | 'right';
}

const DatingHeader: React.FC<HeaderProps> = ({
  title,
  color = '#E94057',
  size = 24,
  align = 'center',
}) => {
  return (
    <Text style={[styles.text, { color, fontSize: size, textAlign: align }]}>
      {title}
    </Text>
  );
};

export default DatingHeader;

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    // marginTop: -34,
  },
});
