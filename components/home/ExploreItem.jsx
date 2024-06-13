import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ExploreItem = ({ book }) => {
  return (
    <View className="flex-row items-center space-x-4 mb-4">
      <Image source={book.image} className="w-16 h-20 rounded" />
      <View className="flex-1">
        <Text className="text-lg text-black">{book.title}</Text>
        <Text className="text-gray-500">{book.author}</Text>
        <Text className="text-yellow-500">⭐ {book.rating}</Text>
      </View>
      <TouchableOpacity className="p-2  rounded mr-2">
        <Icon name="bookmark" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default ExploreItem;
