import { useContext, createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import type { User, UserCredential } from "firebase/auth";

import { auth } from "@/firebase-config";

interface Context {
  /** Provides a popup to the user to sign-in with their Google account */
  googleSignIn: () => Promise<UserCredential>;
  /**
   * Promises to sign out the currently authenticated user in Firebase
   * (provided the user is authenticated), irrespective of provider
   */
  signOut: () => Promise<void>;
  /** An object representing the currently authenticated user */
  user: User | null;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext(null as unknown as Context);

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }: Props) {
  const router = useRouter();
  const [user, setUser] = useState<Context["user"]>(null);

  const contextValue: Context = {
    googleSignIn: () => signInWithPopup(auth, new GoogleAuthProvider()),
    signOut: () => signOut(auth).then(() => void router.push("/")),
    user,
  };

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
