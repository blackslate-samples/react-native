import React, { useState, useEffect } from "react";
import {
   View,
   Text,
   FlatList,
   TouchableOpacity,
   StyleSheet,
} from "react-native";
import axios from "axios";

const NewsReaderApp = () => {
   const [news, setNews] = useState([]);

   useEffect(() => {
      const fetchNews = async () => {
         try {
            const response = await axios.get(
               "https://newsapi.org/v2/top-headlines",
               {
                  params: {
                     country: "us",
                     apiKey: "YOUR_API_KEY",
                  },
               }
            );

            setNews(response.data.articles);
         } catch (error) {
            console.error("Error fetching news:", error.message);
         }
      };

      fetchNews();
   }, []);

   const renderNewsItem = ({ item }) => (
      <TouchableOpacity style={styles.newsItem}>
         <Text style={styles.newsTitle}>{item.title}</Text>
      </TouchableOpacity>
   );

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.logoText}>News Reader</Text>
         </View>
         <FlatList
            data={news}
            keyExtractor={(item) => item.url}
            renderItem={renderNewsItem}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#f0f0f0",
      marginTop: 32, // Added margin to avoid overlapping with the front camera
   },
   header: {
      alignItems: "center",
      marginBottom: 16,
   },
   logoText: {
      fontSize: 24,
      fontWeight: "bold",
   },
   newsItem: {
      backgroundColor: "white",
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
   },
   newsTitle: {
      fontSize: 18,
      fontWeight: "bold",
   },
});

export default NewsReaderApp;
