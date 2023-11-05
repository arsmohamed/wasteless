import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

const BottomTabBar = ({ navigation, state }) => {
  const { index } = state;

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        onPress={() => navigateToScreen("Home")}
        style={styles.tabButton}
      >
        <Feather
          name="home"
          size={30}
          color={index === 0 ? "#B8426C" : "#252525"}
        />
        {/* <Text>Home</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Add")}
        style={styles.tabButton}
      >
        <Feather
          name="plus"
          size={30}
          color={index === 1 ? "#B8426C" : "#252525"}
        />
        {/* <Text>Add</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Chat")}
        style={styles.tabButton}
      >
        <Ionicons
          name="chatbubble-ellipses"
          size={30}
          color={index === 2 ? "#B8426C" : "#252525"}
        />
        {/* <Text>Chat</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen("Portfolio")}
        style={styles.tabButton}
      >
        <Ionicons
          name="person-circle"
          size={30}
          color={index === 3 ? "#B8426C" : "#252525"}
        />
        {/* <Text>Portfolio</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    height: 80,
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Drop shadow in Y=4
    shadowOpacity: 0.25, // Opacity of the shadow
    shadowRadius: 4, // Blur
    elevation: 5, // For Android shadow
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default BottomTabBar;
