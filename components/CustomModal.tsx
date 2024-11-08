import useAuth from '@/hooks/useAuth';
import { Divider } from '@rneui/themed';
import { Link, useRouter } from 'expo-router';
import { Modal, View, Button, StyleSheet, TouchableWithoutFeedback, Pressable, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const CustomModal = ({ visible, onClose }) => {
  const { logout } = useAuth();
  const router = useRouter();
  
  const goAbout = () => {
    router.replace("/about");
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Pressable style={{flexDirection: 'row'}} onPress={goAbout}><FontAwesome6 name="contact-card" size={24} color="black" /><Text style={{fontSize: 20, marginLeft: 20}}>Contact Us</Text></Pressable>
            <Divider width={1} />
            <Pressable style={{flexDirection: 'row'}} onPress={logout}><AntDesign name="logout" size={24} color="black" /><Text style={{fontSize: 20,marginLeft: 20}}>Log Out</Text></Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    marginTop: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  }
});