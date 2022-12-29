import { store } from "./store";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./components/StackNavigator";
import { AuthProvider } from "./hooks/useAuth";
import LoginScreen from "./screens/LoginScreen";

// Setup Redux
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <LoginScreen></LoginScreen>
          {/**HOC - higher Order Component */}
          {/** <AuthProvider> <StackNavigator /></AuthProvider> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
