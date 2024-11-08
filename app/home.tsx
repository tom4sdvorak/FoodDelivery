import { Stack } from "expo-router";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Categories } from "@/components/Categories";
import FeaturedRow from "@/components/FeaturedRow";

function CustomHeader() {
  return (
    <SafeAreaView style={styles.header}>
      <Image style={styles.image} source={require("../assets/images/food_logo.png")} />
      <View style={{flex: 1}}><Text style={{fontWeight: 'bold', alignSelf: "center", fontSize: 20}}>Home</Text></View>
      <AntDesign name="user" size={30} color="black" />
    </SafeAreaView>
  );
}

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          header: props => <CustomHeader {...props} />,
        }}
      />
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
