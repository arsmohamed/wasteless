// BottomTabBar.js

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const BottomTabBar = ({ navigation }) => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.tabButton}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Add")}
        style={styles.tabButton}
      >
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Chat")}
        style={styles.tabButton}
      >
        <Text>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Portfolio")}
        style={styles.tabButton}
      >
        <Text>Portfolio</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "lightgray",
    height: 50,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default BottomTabBar;
