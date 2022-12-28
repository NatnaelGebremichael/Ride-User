import React, { createContext, useContext } from "react";
import * as Google from "expo-auth-session";
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from "@env";
import * as AppAuth from "expo-app-auth";

const config = {
  androidClientId:
    "317418140281-j5r9q1deqd01j4lnh1h8kposs6bbar4i.apps.googleusercontent.com",
  iosClientId:
    "317418140281-c5k151ro2uui6btbg5r8hh1992n3mbg2.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permission: ["public_profile", "email", "gender", "location"],
};

const AuthContext = createContext({
  //initial state, initialy it's empty
});

export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    try {
      Google.logInAsync(config).then(async (logInResult) => {
        if (logInResult.type === "success") {
          //login
        } else {
          console.log("failed");
        }
      });
    } catch (e) {
      console.log("There has been a problem with your fetch operation: " + e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: null,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
