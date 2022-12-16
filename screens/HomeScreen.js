import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>I am the HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
