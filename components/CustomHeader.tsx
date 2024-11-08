import useAuth from '@/hooks/useAuth';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, View, Button, StyleSheet, Pressable, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function CustomHeader({ onModalToggle }) {

    return (
      <SafeAreaView style={styles.header}>
        <Image style={styles.image} source={require("../assets/images/food_logo.png")} />
        <View style={{flex: 1}}><Text style={{fontWeight: 'bold', alignSelf: "center", fontSize: 20}}>Home</Text></View>
        <Pressable onPress={onModalToggle}><AntDesign name="user" size={30} color="black" /></Pressable>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 50,
      height: 50,
    },
    header: {
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'flex-end',
      backgroundColor: 'white',
      padding: 4,
    },
  });