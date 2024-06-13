import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const UploadButton = () => {
  return (
    <TouchableOpacity className="bg-teal-500 p-4 rounded-lg mb-6 items-center flex-row justify-center space-x-2">
      <Icon name="upload" size={20} color="white" />
      <Text className="text-white text-lg">Publish Your books in free</Text>
    </TouchableOpacity>
  );
};

export default UploadButton;
