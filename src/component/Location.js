import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const LocationIndicator = ({ location, distance }) => {
  const ViewContainer = (
    <View style={style.ViewStyle}>
      <View style={style.LocationStyle}>
        <EvilIcons name="location" size={28} color={"#B8426C"} />
        <Text style={style.textStyle}>{location}</Text>
      </View>
      <Text style={style.textStyle}> {distance} KM</Text>
    </View>
  );
  return ViewContainer;
};

const style = StyleSheet.create({
  ViewStyle: {
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%", // 90% width of the parent container
    alignSelf: "center", // Center the view horizontally
  },
  LocationStyle: {
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    Width: "70%",
  },
  textStyle: {
    fontSize: 16,
    color: "#B8426C",
  },
});

export default LocationIndicator;
