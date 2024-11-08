import { Stack } from "expo-router";
import { Text, View, StyleSheet, Image, ScrollView, Modal, Pressable, Button, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Categories } from "@/components/Categories";
import FeaturedRow from "@/components/FeaturedRow";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { CustomModal } from '../components/CustomModal';
import { CustomHeader } from '../components/CustomHeader';


export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalToggle = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          header: props =>  <CustomHeader {...props} onModalToggle={handleModalToggle} />,
        }}
      />
      <CustomModal visible={isModalVisible} onClose={handleModalToggle} />
      <ScrollView>
        <Categories />
        <FeaturedRow 
          id="10"
          title="Featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
