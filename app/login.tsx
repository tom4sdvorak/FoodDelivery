import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from "../firebase";
import { useRouter } from 'expo-router';
import useAuth from '@/hooks/useAuth';
import { onAuthStateChanged } from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { user, error, signIn, register, loading } = useAuth();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
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
    register(email, password);
  };

  return (
      <SafeAreaView style={styles.container}>
        <View style={{width: '80%', marginBottom: 100}}>
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
          {error ? <Text style={{color: 'red', alignSelf: 'center'}}>{error.message}</Text> : <></>}
        </View>
        <View style={{width: '40%'}}>
          <Button onPress={handleLogin} title="Login" />{loading ? <ActivityIndicator /> : <></>}
          <Text style={{alignSelf: 'center'}}>or</Text>
          <Button color="#f194ff" onPress={handleRegister} title="Register" />
        </View>
      </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    marginBottom: 20,
    height: 50,
    borderRadius: 20,
    padding: 10,
  },
});