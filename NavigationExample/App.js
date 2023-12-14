import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import CustomStackNavigator from "./CustomStackNavigator";
import { globalStyles, tabStyles } from "./styles";

const Tab = createBottomTabNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
               activeTintColor: "#3498db",
               inactiveTintColor: "gray",
               labelStyle: {
                  fontSize: 12,
                  marginBottom: 5,
               },
               style: {
                  backgroundColor: "#ecf0f1",
               },
            }}
         >
            <Tab.Screen
               name="Home"
               component={HomeScreen}
               options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color, size }) => (
                     <MaterialCommunityIcons
                        name="home"
                        color={color}
                        size={size}
                     />
                  ),
               }}
            />
            <Tab.Screen
               name="Details"
               component={DetailsScreen}
               options={{
                  tabBarLabel: "Details",
                  tabBarIcon: ({ color, size }) => (
                     <MaterialCommunityIcons
                        name="information"
                        color={color}
                        size={size}
                     />
                  ),
               }}
            />
            <Tab.Screen
               name="Custom"
               component={CustomStackNavigator}
               options={{
                  tabBarLabel: "Custom",
                  tabBarIcon: ({ color, size }) => (
                     <MaterialCommunityIcons
                        name="puzzle"
                        color={color}
                        size={size}
                     />
                  ),
               }}
            />
         </Tab.Navigator>
      </NavigationContainer>
   );
}
