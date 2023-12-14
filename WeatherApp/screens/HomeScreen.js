import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e3dbd5",
   },
   heading: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
      color: "black",
   },
});

const HomeScreen = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.heading}>Welcome to Weather App</Text>
         <Button
            title="Search City"
            onPress={() => navigation.navigate("Search")}
         />
      </View>
   );
};

export default HomeScreen;
