import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import MapScreen from "../screens/MapScreen";
import EatsScreen from "../screens/EatsScreen";
import HomeScreen from "../screens/HomeScreen";
import tw from "tailwind-react-native-classnames";
import { KeyboardAvoidingView, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import useAuth from "../hooks/useAuth";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();

  return (
    <KeyboardAvoidingView
      //we have to use platform because the way it work in IOS and Androis is diffrent
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      style={tw`flex-1`}
    >
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EatsScreen"
              component={EatsScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
};

export default StackNavigator;
