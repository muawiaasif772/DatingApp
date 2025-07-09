import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import DatingHeader from '../../components/DatingHeader';

type Props = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  onPress: () => void;
  activeIndex: number; // 0, 1, or 2
};

const OnBoarding = ({
  title,
  subtitle,
  // buttonLabel,
  onPress,
  activeIndex,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <DatingHeader title={title} />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      {/* Dots */}
      <View style={styles.dots}>
        {[0, 1, 2].map((i) => (
          <View
            key={i}
            style={i === activeIndex ? styles.activeDot : styles.inactiveDot}
          />
        ))}
      </View>

      <Button title="Creat an Account" onPress={onPress} />

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.signInText}>Sign In</Text>
      </Text>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  topSection: {
    alignItems: 'center',
    gap: 18,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 22,
  },
  dots: {
    flexDirection: 'row',
    marginTop: 20,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E94057',
    marginHorizontal: 5,
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    marginHorizontal: 5,
  },
  footerText: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginTop: 20,
  },
  signInText: {
    color: '#E94057',
    fontWeight: '600',
  },
});
