import { View, Text } from 'react-native'
import React from 'react'
import { createContext } from 'react';
import { useContext } from 'react';

const AuthContext = createContext({

});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={
        {
            user: "Sonny"
        }
    }>
      {children}
    </AuthContext.Provider>
  )
};

export default function useAuth(){
    return useContext(AuthContext);
}