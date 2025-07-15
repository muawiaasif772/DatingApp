import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AppSafeAreaView from '../../components/AppSafeAreaView';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DatingHeader from '../../components/DatingHeader';
const { width } = Dimensions.get('window');

const OTPScreen = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < code.length - 1) {
      inputs.current[index + 1]?.focus();
      setActiveIndex(index + 1);
    }

    if (text && index === code.length - 1) {
      setActiveIndex(-1); // Done
      Keyboard.dismiss();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (code[index] !== '') {
        const newCode = [...code];
        newCode[index] = '';
        setCode(newCode);
        setActiveIndex(index);
      } else if (index > 0) {
        inputs.current[index - 1]?.focus();
        setActiveIndex(index - 1);
      }
    }
  };

  const handleResend = () => {
    setCode(['', '', '', '']);
    setTimer(60);
    inputs.current[0]?.focus();
    setActiveIndex(0);
  };

  const closeKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <AppSafeAreaView>
   
         <KeyboardAwareScrollView
        style={{flex:1,flexGrow:1}}
        keyboardShouldPersistTaps="handled"
  
      >
    
        <View style={styles.container}>
          <Text style={styles.timerText}>
            {`00:${timer.toString().padStart(2, '0')}`}
          </Text>

          <Text style={styles.instruction}>
            Type the verification code{'\n'}we’ve sent you
          </Text>

          <View style={styles.codeContainer}>
            {code.map((digit, index) => {
              const isFilled = digit !== '';
              const isActive = index === activeIndex;

              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={1}
                  onPress={() => {
                    inputs.current[index]?.focus();
                    setActiveIndex(index);
                  }}
                >
                  <TextInput
                    ref={(ref) => (inputs.current[index] = ref)}
                    style={[
                      styles.codeBox,
                      isFilled && styles.filledBox,
                      isActive && styles.activeBox,
                    ]}
                    value={digit}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    keyboardType="number-pad"
                    maxLength={1}
                    textAlign="center"
                    selectionColor="#E94057"
                    onFocus={() => setActiveIndex(index)}
                  />
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resend}>Send again</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
  
  </AppSafeAreaView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 40,
  },
  instruction: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 16,
    color: '#555',
  },
  codeContainer: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 20,
  },
  codeBox: {
    width: 60,
    height: 60,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    backgroundColor: '#fff',
  },
  filledBox: {
    backgroundColor: '#E94057',
    borderColor: '#E94057',
    color: '#fff',
  },
  activeBox: {
    borderColor: '#E94057',
  },
  resend: {
    color: '#E94057',
    fontWeight: '600',
    marginTop: 30,
  },
});
