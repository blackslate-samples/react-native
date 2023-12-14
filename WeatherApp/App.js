import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
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
                     apiKey: "b73a4122780749debeb275d4a232153b",
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
      <TouchableOpacity>
         <Text>{item.title}</Text>
      </TouchableOpacity>
   );

   return (
      <View>
         <FlatList
            data={news}
            keyExtractor={(item) => item.url}
            renderItem={renderNewsItem}
         />
      </View>
   );
};

export default NewsReaderApp;
