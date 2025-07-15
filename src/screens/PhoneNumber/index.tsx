import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Keyboard,
<<<<<<< HEAD
  ScrollView,
} from 'react-native';
=======
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
>>>>>>> 16ff305 (fix issues)

// You'll need to install: npm install react-native-country-picker-modal
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
import Button from '../../components/Button';

<<<<<<< HEAD
interface MobileVerificationProps {}
=======
interface MobileVerificationProps { }
>>>>>>> 16ff305 (fix issues)

const PhoneNumber: React.FC<MobileVerificationProps> = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>('PK');
  const [country, setCountry] = useState<Country | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>('331 623 8413');
  const [showCountryPicker, setShowCountryPicker] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const phoneInputRef = useRef<TextInput>(null);
  const containerRef = useRef<View>(null);

  const onSelectCountry = (selectedCountry: Country) => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
    setShowCountryPicker(false);
    // Refocus the input after country selection
    setTimeout(() => {
      phoneInputRef.current?.focus();
    }, 100);
  };

  const formatPhoneNumber = (text: string) => {
    // Remove non-numeric characters
    const cleaned = text.replace(/\D/g, '');

    // Format as XXX XXX XXXX
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join(' ');
    }
    return text;
  };

  const handlePhoneNumberChange = (text: string) => {
    const formatted = formatPhoneNumber(text);
    setPhoneNumber(formatted);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleContainerPress = () => {
    // Focus the input when container is pressed
    phoneInputRef.current?.focus();
  };

  const handleCountryPickerPress = () => {
    // Dismiss keyboard before showing country picker
    Keyboard.dismiss();
    setShowCountryPicker(true);
  };

<<<<<<< HEAD
  const handleScrollViewTouch = (event: any) => {
    // Get the touch coordinates
    const { locationX, locationY } = event.nativeEvent;
    
    // Check if the touch is inside the phone input container
    if (containerRef.current) {
      containerRef.current.measure((fx, fy, width, height, px, py) => {
        const isInsideContainer =
          locationX >= px &&
          locationX <= px + width &&
          locationY >= py &&
          locationY <= py + height;

        // Only dismiss keyboard if touch is outside the container
        if (!isInsideContainer) {
          Keyboard.dismiss();
        }
      });
    }
  };

  const handleContinue = () => {
    console.log('CONTINUE');
    // Add your navigation or validation logic here
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      onTouchStart={handleScrollViewTouch}
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      <SafeAreaView style={styles.container}>
=======




  return (

    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>   
              <KeyboardAwareScrollView
        style={{ flex: 1, flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"

      >
>>>>>>> 16ff305 (fix issues)
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

        <View style={styles.content}>
          <Text style={styles.title}>My mobile</Text>
          <Text style={styles.subtitle}>
            Please enter your valid phone number. We will send you a 4-digit
            code to verify your account.
          </Text>

          <TouchableOpacity
            onPress={handleContainerPress}
            activeOpacity={1}
            ref={containerRef}
            style={[
              styles.phoneInputContainer,
              isFocused && styles.phoneInputContainerFocused,
            ]}
          >
            <TouchableOpacity
              style={styles.countrySelector}
              onPress={handleCountryPickerPress}
            >
              <CountryPicker
                countryCode={countryCode}
                withFilter
                withFlag
                withCallingCode
                withCallingCodeButton
                visible={showCountryPicker}
                onSelect={onSelectCountry}
                onClose={() => setShowCountryPicker(false)}
                containerButtonStyle={styles.countryPickerButton}
              />
              <Text style={styles.dropdownArrow}>▼</Text>
            </TouchableOpacity>

            <TextInput
              ref={phoneInputRef}
              style={styles.phoneInput}
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Enter phone number"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              maxLength={12} // XXX XXX XXXX format
<<<<<<< HEAD
              returnKeyType="done"
              blurOnSubmit={true}
=======
              // returnKeyType="done"

>>>>>>> 16ff305 (fix issues)
            />
          </TouchableOpacity>

          <Button
            title="Continue"
            style={styles.continueButton}
<<<<<<< HEAD
            onPress={handleContinue}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
=======
            onPress={() => { console.log("pressed") }}
          />
        </View>
      </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>

    </SafeAreaView>

>>>>>>> 16ff305 (fix issues)
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
    marginBottom: 40,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    marginBottom: 32,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  phoneInputContainerFocused: {
    borderWidth: 1,
    shadowColor: '#E94057',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
    marginRight: 12,
  },
  countryPickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownArrow: {
    fontSize: 12,
    color: '#666666',
    marginLeft: 4,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    paddingVertical: 16,
    paddingHorizontal: 0,
  },
});

export default PhoneNumber;