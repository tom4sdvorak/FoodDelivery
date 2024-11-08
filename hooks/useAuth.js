import { View, Text } from 'react-native'
import React from 'react'
import { createContext } from 'react';
import { useContext } from 'react';

const AuthContext = createContext({

});

export const AuthProvider = ({ children }) => {
  
  const signIn = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);

    }
    catch (error) {
      return null;
    }
  }

  return (
    <AuthContext.Provider value={
        {
            user: null,
            signIn
        }
    }>
      {children}
    </AuthContext.Provider>
  )
};

export default function useAuth(){
    return useContext(AuthContext);
}