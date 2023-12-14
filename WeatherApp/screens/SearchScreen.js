import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { fetchWeatherData } from "../api/weather";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e3dbd5",
   },
   input: {
      marginBottom: 10,
      paddingHorizontal: 10,
      width: 200,
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
   },
   weatherText: {
      fontSize: 20,
      fontWeight: "bold",
   },
});

const SearchScreen = ({ navigation }) => {
   const [city, setCity] = useState("");
   const [weatherData, setWeatherData] = useState(null);

   const handleSearch = async () => {
      try {
         const data = await fetchWeatherData(city);
         setWeatherData(data);
      } catch (error) {
         // Handle the error
      }
   };

   return (
      <View style={styles.container}>
         <TextInput
            style={styles.input}
            placeholder="Enter a city"
            onChangeText={(text) => setCity(text)}
            value={city}
         />
         <Button title="Search" onPress={handleSearch} />
         {weatherData && (
            <View>
               <Text style={styles.weatherText}>
                  {weatherData.name}, {weatherData.sys.country}:{" "}
                  {weatherData.main.temp}°C
               </Text>
            </View>
         )}
      </View>
   );
};

export default SearchScreen;
