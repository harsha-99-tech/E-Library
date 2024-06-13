import React from "react";
import { View, Text, TextInput } from "react-native";

const SettingInput = ({ label, placeholder, secureTextEntry }) => {
  return (
    <View className="mb-4">
      <Text className="mb-2 text-gray-700">{label}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        className="border border-gray-300 p-2 rounded-lg"
      />
    </View>
  );
};

export default SettingInput;
