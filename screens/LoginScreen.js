import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as firebase from "expo-firebase-auth";
//import auth from "@react-native-firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
//import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

//firebase.initializeApp();

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const sendVerification = () => {};
  const confirmCode = () => {};
  const recaptchaVerifier = useRef(null);

  return (
    <SafeAreaView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Phone Number"
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          autoCompleteType="tel"
          style={styles.input}
        />
        <TextInput
          placeholder="Confirmation Code"
          onChangeText={setCode}
          keyboardType="number-pad"
          style={styles.input}
          secureTextEntry
        />
        {/**<Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber("+1 650-555-3434")}
          /> */}
        {/**<Button title="Login" onPress={signInWithPhoneNumber} /> */}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={sendVerification} style={styles.button}>
          <Text style={styles.buttonText}>Send Verification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={confirmCode}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Send Verification</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
