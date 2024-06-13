import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import ProfileHeader from "../../components/profile/ProfileHeader";
import UploadButton from "../../components/profile/UploadButton";
import ProfileOptions from "../../components/profile/ProfileOptions";
import Icon from "react-native-vector-icons/FontAwesome";

const user = {
  profilePicture: "https://example.com/path-to-image.jpg",
  name: "Sapumal Kumara",
  id: "12345678",
};

const Profile = () => {
  const options = [
    { id: 1, name: "My Books", icon: "book" },
    { id: 2, name: "Progress", icon: "line-chart" },
    { id: 3, name: "Setting", icon: "cog" },
  ];
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const toggleSettings = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
        <View className="flex-row justify-between items-center mb-6">
          <TouchableOpacity className="p-2" onPress={toggleSettings}>
            <Icon name="bars" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {isSettingsVisible ? (
          <View className="space-y-4">
            <View>
              <Text className="font-semibold mb-2">Password</Text>
              <TextInput
                className="bg-gray-200 rounded-md p-3"
                secureTextEntry
                placeholder="Enter password"
              />
            </View>

            <View>
              <Text className="font-semibold mb-2">Gender</Text>
              <View className="flex-row items-center space-x-4">
                <TouchableOpacity className="flex-1 bg-gray-200 rounded-md p-3 items-center">
                  <Text>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 bg-gray-200 rounded-md p-3 items-center">
                  <Text>Female</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text className="font-semibold mb-2">Email Address</Text>
              <TextInput
                className="bg-gray-200 rounded-md p-3"
                placeholder="Enter email address"
              />
            </View>

            <View>
              <Text className="font-semibold mb-2">Contact Number</Text>
              <TextInput
                className="bg-gray-200 rounded-md p-3"
                placeholder="Enter contact number"
              />
            </View>

            <TouchableOpacity className="bg-green-500 rounded-md p-3 items-center">
              <Text className="text-white font-semibold">Save</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <ProfileHeader user={user} />
            <UploadButton />
            <View className="space-y-4">
              <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-200">
                <Icon name="book" size={24} color="black" />
                <Text className="ml-4 text-lg">My Books</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-200">
                <Icon name="line-chart" size={24} color="black" />
                <Text className="ml-4 text-lg">Progress</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleSettings}
                className="flex-row items-center p-4 border-b border-gray-200"
              >
                <Icon name="cog" size={24} color="black" />
                <Text className="ml-4 text-lg">Settings</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
