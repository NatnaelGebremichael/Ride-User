import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
// Setup Redux

export default function App() {
  return (
    <Provider store={}>
      <View style={styles.container}>
        <Text>Fetan app!</Text>
      </View>
    </Provider>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
