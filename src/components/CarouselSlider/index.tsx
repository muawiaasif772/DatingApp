import * as React from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { Images } from '../../theme/Images';
import OnBoarding from '../../screens/OnBoarding';

const { width } = Dimensions.get('window');
const { SliderImg1, SliderImg2, SliderImg3 } = Images;
type OnboardingItem = {
  image: any; // You can replace `any` with `ImageSourcePropType` for better typing
  title: string;
  description: string;
  // buttonLabel: string;
};
const onboardingData: OnboardingItem[] = [
  {
    image: SliderImg1,
    title: 'Algorithm',
    description:
      'Users going through a vetting process to ensure you never match with bots.',
    // buttonLabel: "Next",
  },
    image: SliderImg2,
    title: 'Matches ',
    description: 'We match you with people that have a large array of similar .',
    // buttonLabel: "Continue",
    image: SliderImg3,
    title: 'Premium',
    description: 'Sign up today and enjoy the first month of premium benefits on us..',
    // buttonLabel: "Get Started",
];
function CarouselSlider() {
  const progress = useSharedValue<number>(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentSlide = onboardingData[currentIndex];
  return (
    <View style={styles.container}>
      {/* Carousel Section */}
      {/* <View style={styles.carouselContainer}> */}
        <Carousel
          width={width}
          height={360}
          data={onboardingData}
          loop={true}
          pagingEnabled={true}
          snapEnabled={true}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 135,
          }}
          onProgressChange={p => (progress.value = p)}
          onSnapToItem={index => setCurrentIndex(index)}
          renderItem={({ item }) => (
            <View style={styles.slideContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
          )}
        />
      {/* </View> */}
      {/* Dynamic Content */}
      <View >
        <OnBoarding
          title={currentSlide.title}
          subtitle={currentSlide.description}
          onPress={() => console.log('Pressed')}
          activeIndex={currentIndex} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
 
  slideContainer: {
    // marginTop: 30,
  image: {
    width: width * 0.8,
    height: 360,
    resizeMode: 'contain',
    borderRadius: 16,
  
});
export default CarouselSlider;