import { Stack } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
