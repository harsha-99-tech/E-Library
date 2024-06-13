import React from "react";
import { View, Text, Image } from "react-native";

const ProfileHeader = ({ user }) => {
  return (
    <View className="items-center mb-6">
      <Image
        source={{ uri: user.profilePicture }}
        className="w-24 h-24 rounded-full mb-2"
      />
      <Text className="text-xl font-semibold">{user.name}</Text>
      <Text className="text-gray-500">#{user.id}</Text>
    </View>
  );
};

export default ProfileHeader;
