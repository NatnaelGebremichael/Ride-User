import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Map = () => {
  return (
    <View>
      <MapView
        style={tw`flex-1`}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Text>I am a Map</Text>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
