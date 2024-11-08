import { Stack } from "expo-router";
import { Text, View, StyleSheet, Image, ScrollView, Modal, Pressable, Button, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from "react";
import { CustomModal } from '../components/CustomModal';
import { CustomHeader } from '../components/CustomHeader';


export default function Aboute() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalToggle = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomModal visible={isModalVisible} onClose={handleModalToggle} />
      <Text>Contact Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-evenly',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  subtitle: {
    fontSize: 20,
    alignSelf: "center",
  },
  image: {
    height: '30%',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'lightblue',
    borderRadius: 50,
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
