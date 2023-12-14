import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles";

export default function CustomScreen() {
   return (
      <View style={globalStyles.container}>
         <Text style={globalStyles.titleText}>Custom Screen</Text>
         <Text>This is a custom screen in your app!</Text>
      </View>
   );
}
