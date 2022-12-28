import React from "react";
import { View, Text, Button } from "react-native";
import useAuth from "../hooks/useAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <SafeAreaView style={tw`content-center justify-center`}>
      <View>
        <Text>Login to App</Text>
        <Button title="Login" onPress={signInWithGoogle} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
