import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
   return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         <Text style={{ fontSize: 24 }}>Welcome to the Home Screen!</Text>
         <Button
            title="Go to Details"
            onPress={() => navigation.navigate("Details")}
            style={{ marginTop: 20 }}
         />
      </View>
   );
}
