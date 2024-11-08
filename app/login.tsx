import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from "../firebase";
import { useRouter } from 'expo-router';
import useAuth from '@/hooks/useAuth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { user, signIn } = useAuth();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user: string) => {
      if (user) {
        router.replace('/home');
      }
    });

    return unsub;
  }, []);

  const handleLogin = () => {
    signIn(email, password);
  };

  const handleRegister = () => {
    auth.createUserWithEmailandPassword(email, password);
  };

  return (
      <SafeAreaView style={styles.container}>
        <TextInput
          placeholder="Username"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button onPress={handleLogin} title="Login" />
        <Text>or</Text>
        <Button color="#f194ff" onPress={handleRegister} title="Register" />
      </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'space-evenly',
  },
  input: {},
});