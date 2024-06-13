import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const GenderSelector = ({ selectedGender, onSelectGender }) => {
  return (
    <View className="mb-4">
      <Text className="mb-2 text-gray-700">Gender</Text>
      <View className="flex-row items-center space-x-4">
        <TouchableOpacity
          className="flex-row items-center space-x-2"
          onPress={() => onSelectGender("Male")}
        >
          <Icon
            name={selectedGender === "Male" ? "dot-circle-o" : "circle-o"}
            size={20}
            color={selectedGender === "Male" ? "black" : "gray"}
          />
          <Text className="text-lg">Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center space-x-2"
          onPress={() => onSelectGender("Female")}
        >
          <Icon
            name={selectedGender === "Female" ? "dot-circle-o" : "circle-o"}
            size={20}
            color={selectedGender === "Female" ? "black" : "gray"}
          />
          <Text className="text-lg">Female</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GenderSelector;
