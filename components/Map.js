import {
  selectDestination,
  selectOrigion,
  setTravelTimeInformation,
} from "../slices/navSlices";
import cars from "../assets/data/cars.js";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { Image } from "react-native-elements";
import React, { useEffect, useRef } from "react";
import tw from "tailwind-react-native-classnames";
import MapView, { Marker } from "react-native-maps";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";

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

  const getCarImage = (type) => {
    if (type === "UberX") {
      return require("../assets/images/top-UberX.png");
    }
    if (type === "Comfort") {
      return require("../assets/images/top-Comfort.png");
    }
    if (type === "UberXL") {
      return require("../assets/images/top-UberXL.png");
    }
  };

  return (
    <MapView //display map
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard" //removes unnesscery details from map
      initialRegion={{
        latitude: origin === null ? 28.450627 : origin.location.lat,
        longitude: origin === null ? -16.263045 : origin.location.lng,
        //latitude: origin === null ? origin.location.lat : -41.2888731,
        //longitude: origin === null ? origin.location.lng : 174.76712036132812,
        latitudeDelta: 0.0922, //original value 0.005
        longitudeDelta: 0.0121,
      }}
    >
      {origin &&
        destination && ( //display line from origin to destination
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="black"
          />
        )}

      {destination?.location /**allows us to put pin on destination location */ && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="destination"
          description={destination.description}
          identifier="destination"
        />
      )}

      <Marker /**allows us to put pin on  origin location */
        coordinate={{
          latitude: origin === null ? 28.450627 : origin.location.lat,
          longitude: origin === null ? -16.263045 : origin.location.lng,
        }}
        title="origin"
        description={
          origin === null ? "Victoria University" : origin.description
        }
        identifier="origin"
      />

      {cars.map((car) => (
        <Marker /**Display Icons for available cars on the map */
          key={car.id}
          coordinate={{
            latitude: car.latitude,
            longitude: car.longitude,
          }}
          title="catTest1"
          description="test-Car1"
          identifier="catTest1"
        >
          <Image
            style={{
              width: 50,
              height: 50,
              resizeMode: "contain",
              transform: [
                // allows for display of car in the direction they are going
                {
                  rotate: `${car.heading}90deg`,
                },
              ],
            }}
            source={getCarImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
