import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Categories } from "@/components/Categories";
import FeaturedRow from "@/components/FeaturedRow";
import useAuth from "@/hooks/useAuth";


export default function Index() {
  const { user, loading } = useAuth();

  if(user){
    console.log("User logged");
  }
  else{
    console.log("No user");
  }

  return (
      <SafeAreaView style={styles.container}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <View>
          <Text style={styles.title}>FoodDelivery</Text>
          {loading ? <></> : <Text style={styles.subtitle}>{user ? "Welcome back" : "Please login to continue"}</Text>}
        </View>
        <Image resizeMode='contain' style={styles.image} source={require("../assets/images/food_logo.png")} />
        <View>
          <Link style={styles.button} href="/login">Continue</Link>
        </View>
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
