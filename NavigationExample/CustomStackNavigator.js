import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustomScreen from "./screens/CustomScreen";

const Stack = createStackNavigator();

export default function CustomStackNavigator() {
   return (
      <Stack.Navigator
         initialRouteName="Custom"
         screenOptions={{
            headerStyle: {
               backgroundColor: "#3498db",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
               fontWeight: "bold",
            },
         }}
      >
         <Stack.Screen name="Custom" component={CustomScreen} />
      </Stack.Navigator>
   );
}
