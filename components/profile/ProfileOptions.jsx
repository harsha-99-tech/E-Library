import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const options = [
  { id: 1, name: "My Books", icon: "book" },
  { id: 2, name: "Progress", icon: "line-chart" },
  { id: 3, name: "Setting", icon: "cog" },
];

const ProfileOptions = () => {
  return (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          className="flex-row items-center p-4 border-b border-gray-200"
        >
          <Icon name={option.icon} size={24} color="black" />
          <Text className="ml-4 text-lg">{option.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProfileOptions;
