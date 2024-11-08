import React, { useState, useEffect, useMemo } from 'react'
import {useRouter} from 'expo-router';
import { createContext } from 'react';
import { useContext } from 'react';
import { auth } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext({

});

export const AuthProvider = ({ children }) => {
  
  const [ error, setError ] = useState(null);
  const [ user, setUser] = useState(null);
  const [ loadingInit, setLoadingInit ] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }else{
        setUser(false);
      }
      setLoadingInit(false);
    });

    return unsub;
  }, []);

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(null);
    }
    catch (error) {
      setError(error);
    }
    finally {
      setLoading(false);
    }
  }

  const logout = () => {
    setLoading(true);

    try {
      signOut(auth);
      setError(null);
    }
    catch(error) {
      setError(error);
    }
    finally {
      setLoading(false);
      router.replace('/');
    }
  }

  const register = async (email, password) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError(null);
    }
    catch (error) {
      setError(error);
    }
    finally {
      setLoading(false);
    }
  }

  const memoedValue = useMemo(() => ({
    user,
    loading,
    error,
    logout,
    signIn,
    register,
  }), [user, loading, error]);

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInit && children}
    </AuthContext.Provider>
  )
};

export default function useAuth(){
    return useContext(AuthContext);
}