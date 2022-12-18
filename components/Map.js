import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigion } from "../slices/navSlices";

const Map = () => {
  const origin = useSelector(selectOrigion);

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard" //removes unnesscery details from map
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
