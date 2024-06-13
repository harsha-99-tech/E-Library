import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { images } from "../../constants";

const LatestSection = () => {
  const libraryBooks = [
    {
      id: 1,
      title: "Old Woman Soul",
      author: "Olivia Wilson",
      image: images.book1,
      rating: 5.7,
    },
    {
      id: 2,
      title: "Walk into the Shadow",
      author: "Aruna Kumara",
      image: images.book2,
      rating: 7.7,
    },
    {
      id: 3,
      title: "Walk into the Shadow",
      author: "Aruna Kumara",
      image: images.book2,
      rating: 7.7,
    },
    {
      id: 4,
      title: "Walk into the Shadow",
      author: "Aruna Kumara",
      image: images.book2,
      rating: 7.7,
    },
  ];

  return (
    <View>
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg text-black font-regular">Latest</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row space-x-4">
          {libraryBooks.map((book) => (
            <View key={book.id} className="w-40">
              <Image source={book.image} className="w-full h-60 rounded" />
              <Text className="text-black mt-2">{book.title}</Text>
              <Text className="text-gray-500">{book.author}</Text>
              <Text className="text-yellow-500">⭐ {book.rating}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default LatestSection;
