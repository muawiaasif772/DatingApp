import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
// for Apple
import { Images } from '../../theme/Images';
import Button from '../../components/Button';

const { width } = Dimensions.get('window');

const Signup = () => {
	const {FacebookLogo,TradeMark,GoogleLogo,AppleLogo} =Images
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={TradeMark} style={styles.logo} />

      {/* Title */}
      <Text style={styles.title}>Sign up to continue</Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.emailBtn}>
       <Button
		  title="Sign up with email"
		  onPress={() => console.log('Sign up with email pressed')}
		 
		  textColor="#fff"
		/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.phoneBtn}>
        <Text style={styles.phoneText}>Use phone number</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or sign up with</Text>
        <View style={styles.line} />
      </View>

      {/* Social Buttons */}
      {/* Social Buttons */}
<View style={styles.socialContainer}>
  <TouchableOpacity
    style={styles.socialBtn}
    onPress={() => console.log('Sign up with Facebook pressed')}
  >
    <Image source={FacebookLogo} style={{ width: 28, height: 28 }} />
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.socialBtn}
    onPress={() => console.log('Sign up with GOOGLE pressed')}
  >
    <Image source={GoogleLogo} style={{ width: 28, height: 28 }} />
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.socialBtn}
    onPress={() => console.log('Sign up with Apple pressed')}
  >
    <Image source={AppleLogo} style={{ width: 28, height: 28 }} />
  </TouchableOpacity>
</View>


      {/* Footer Links */}
      <View style={styles.footer}>
        <Text style={styles.footerLink}>Terms of use</Text>
        <Text style={styles.footerLink}>Privacy Policy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    // backgroundColor: '#fff',
    justifyContent: 'center',
	
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 25,
  },
  emailBtn: {
    // backgroundColor: '#d43f5e',
    borderRadius: 14,
    // paddingVertical: 14,
    marginBottom: 14,
  },
 
  phoneBtn: {
    borderWidth: 1,
    borderColor: '#E8E6EA',
    borderRadius: 14,
    paddingVertical: 14,
    marginBottom: 25,
  },
  phoneText: {
    color: '#E94057',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#000000',
    fontSize: 13,
	fontWeight: '600',
	
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 0,
	marginTop: 20,
    
  },
  socialBtn: {
    width: 64,
    height: 64,
    borderRadius: 15,
	// borderColor:"#E8E6EA !important",
    borderColor: '#E8E6EA',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
	
	borderWidth: 1,
  },
  footer: {
	marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
	gap: 25,
  },
  footerLink: {
    color: '#E94057',
    // fontWeight: '300',
    fontSize: 14,
  },
});

export default Signup;
