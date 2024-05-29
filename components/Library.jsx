import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const Library = ({ books }) => {
  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-black">{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Library;
