import { Stack } from "expo-router";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Categories } from "@/components/Categories";

function CustomHeader() {
  return (
    <SafeAreaView style={styles.header}>
      <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
      <View style={{flex: 1}}><Text style={{fontWeight: 'bold', alignSelf: "center"}}>Test</Text></View>
      <AntDesign name="user" size={24} color="black" />
    </SafeAreaView>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          header: props => <CustomHeader {...props} />,
        }}
      />
      <ScrollView>
        <Categories />
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
  image: {
    width: 50,
    height: 50,
  },
  icon: {},
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-end',
    backgroundColor: '#f4511e',
    padding: 4,
  },
});
