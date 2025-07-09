import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';

import Signup from './src/screens/Signup';
import CarouselSlider from './src/components/CarouselSlider';
// import PhoneScreen from './src/screens/PhoneNumber';
import PhoneNumber from './src/screens/PhoneNumber';
import OTPScreen from './src/screens/OTPSacreen';
import VerificationScreen from './src/screens/OTPSacreen';
import ProfileDetails from './src/screens/ProfileDetails';

const { width, height } = Dimensions.get('window');

export default function App() {
  const progress = useSharedValue(0);

  const screens = [<CarouselSlider />, <Signup />,<PhoneNumber/>,<VerificationScreen /> ,<ProfileDetails/>];

  return (
    <View>
      <Carousel
        width={width}
        height={height}
        data={screens}
        scrollAnimationDuration={600}
        loop={false}
        pagingEnabled
        onProgressChange={(p) => (progress.value = p)}
        renderItem={({ item }) => <View style={styles.screen}>{item}</View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
});
