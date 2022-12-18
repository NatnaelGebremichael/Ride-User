import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useRef } from "react";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigion,
  setTravelTimeInformation,
} from "../slices/navSlices";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigion);
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();
  const mapRef = useRef(null); //pointer (this can be pointed at anything) we use it to point to "map"

  useEffect(() => {
    if (!origin || !destination) return;

    //Zoom & fit to markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
      units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        })
        .catch(function (error) {
          console.log(
            "There has been a problem with your fetch operation: " +
              error.message
          );
        });
    };
    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard" //removes unnesscery details from map
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {origin?.location && (
        <Marker /**allows us to put pin on location */
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker /**allows us to put pin on location */
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
