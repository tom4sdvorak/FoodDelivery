import { Stack } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";
import useAuth, { AuthProvider } from "../hooks/useAuth";


export default function RootLayout() {
  
  const { user } = useAuth();
  if(user){
    console.log("Used logged");
  }
  else{
    console.log("No user");
  }
  
  return (
    <AuthProvider>
        <Stack>        
            <Stack.Screen name="index" />
            { user ? <Stack.Screen name="home" /> : <Stack.Screen name="login" />}
        </Stack>
      </AuthProvider>
  );
}
