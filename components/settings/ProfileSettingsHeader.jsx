import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileSettingHeader = ({ user }) => {
  return (
    <View className="items-center mb-6">
      <View className="relative">
        <Image
          source={{ uri: user.profilePicture }}
          className="w-24 h-24 rounded-full mb-2"
        />
        <Icon
          name="pencil"
          size={18}
          color="white"
          style={{ position: "absolute", top: 0, right: 0 }}
        />
      </View>
      <Text className="text-xl font-semibold">{user.name}</Text>
      <Text className="text-gray-500">#{user.id}</Text>
    </View>
  );
};

export default ProfileSettingHeader;
