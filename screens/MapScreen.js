import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { selectDestination } from "../slices/navSlices";
import { useSelector } from "react-redux";

const MapScreen = () => {
  const Stack = createNativeStackNavigator(); //creating stack navigator inside another stack
  const navigation = useNavigation();
  const destination = useSelector(selectDestination);

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Icon name="menu" />
      </TouchableOpacity>

      <View style={tw`h-1/2`}>
        <Map /* The google map view*/ />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard" /* This Stack let us choose destination*/
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            disabled={!destination}
            name="RideOptionsCard" /* This Stack lets us choose ride/type of car */
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
