import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Modal,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import { Images } from '../../theme/Images';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileDetails = () => {
  const [firstName, setFirstName] = useState('David');
  const [lastName, setLastName] = useState('Peterson');
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [tempBirthday, setTempBirthday] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleImagePick = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    if (result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri || null);
    }
  };

  const onChangeBirthday = (event: any, selectedDate?: Date) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
      if (selectedDate) {
        setBirthday(selectedDate);
      }
    } else {
      if (selectedDate) {
        setTempBirthday(selectedDate);
      }
    }
  };

  const openDatePicker = () => {
    setTempBirthday(birthday || new Date());
    setShowDatePicker(true);
  };

  const { ProfileAvtor, CameraIcon } = Images;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Profile details</Text>

      <View style={styles.imageWrapper}>
        <Image
          source={imageUri ? { uri: imageUri } : ProfileAvtor}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraButton} onPress={handleImagePick}>
          <Image source={CameraIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.coolInput}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Write here..."
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.coolInput}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Write here..."
          placeholderTextColor="#999"
        />
      </View>

      <TouchableOpacity
        style={styles.birthdayButton}
        onPress={openDatePicker}
        activeOpacity={0.7}
      >
        <View style={styles.birthdayRow}>
          {/* <Icon name="calendar-month-outline" size={20} color="#E91E63" /> */}
          <Text style={styles.birthdayText}>
            {birthday ? birthday.toDateString() : 'Choose birthday date'}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Android Date Picker */}
      {Platform.OS === 'android' && showDatePicker && (
        <DateTimePicker 
          value={birthday || new Date()}
          mode="date"
          display="default"
          onChange={onChangeBirthday}
        />
      )}

      {/* iOS Date Picker Modal */}
      {Platform.OS === 'ios' && (
        <Modal visible={showDatePicker} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <TouchableOpacity onPress={() => setShowDatePicker(false)}>
                  <Text style={styles.modalButton}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (tempBirthday) setBirthday(tempBirthday);
                    setShowDatePicker(false);
                  }}
                >
                  <Text style={[styles.modalButton, styles.doneButton]}>Done</Text>
                </TouchableOpacity>
              </View>
              <DateTimePicker
                value={tempBirthday || new Date()}
                mode="date"
                display="spinner"
                onChange={onChangeBirthday}
              />
            </View>
          </View>
        </Modal>
      )}

      <Button title="Confirm" onPress={() => console.log('confirm')} />
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    paddingHorizontal: 35,
  },
  skipButton: {
    alignSelf: 'flex-end',
  },
  skipText: {
    fontSize: 16,
    color: '#E91E63',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 26,
    marginBottom: 24,
  },
  imageWrapper: {
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 42,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  cameraButton: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    backgroundColor: '#E91E63',
    borderRadius: 20,
    padding: 8,
    borderColor: '#fff',
    borderWidth: 2,
  },
  coolInput: {
    flexDirection: 'column',
    position: 'relative',
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: '#E91E63',
    position: 'absolute',
    top: -8,
    left: 18,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
    height: 48,
    paddingLeft: 16,
  },
  birthdayButton: {
    backgroundColor: '#FCE4EC',
    paddingVertical: 16,
    borderRadius: 16,
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  birthdayRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  birthdayText: {
    color: '#E91E63',
    fontSize: 16,
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'red',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalButton: {
    fontSize: 16,
    color: '#E91E63',
  },
  doneButton: {
    fontWeight: 'bold',
  },
});
