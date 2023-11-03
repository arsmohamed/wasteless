// Import necessary modules
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; // You can use different icon libraries

// Create a BottomTabNavigator
const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false, // Hide labels
        style: {
          height: 60, // Adjust height as needed
          backgroundColor: "#f5f5f5", // Background color of the bottom bar
        },
      }}
    >
      <Tab.Screen
        name="Home"
        // component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        // component={AddScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        // component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="comments" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        // component={PortfolioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="briefcase" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavBar;
