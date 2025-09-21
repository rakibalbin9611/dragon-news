import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log(user);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logOut = () => {
    return signOut(auth);
  };
  //login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // auth observer
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(user);
    });
    return () => {
      unsubcribe();
    };
  }, []);
  const authInfo = {
    user,
    setUser,
    createUser,
    logOut,
    loginUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
