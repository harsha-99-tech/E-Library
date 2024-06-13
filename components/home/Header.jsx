import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchInput from "../SearchInput";
import ScreenHeaderBtn from "../../components/header/ScreenHeaderBtn";
import { icons, images } from "../../constants";

const Header = () => {
  return (
    <View className="justify-between items-start flex-row mb-6">
      <TouchableOpacity>
        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
      </TouchableOpacity>
      <View className="flex-row items-center space-x-4">
        <SearchInput />
      </View>
      <TouchableOpacity>
        <ScreenHeaderBtn iconUrl={icons.notification} dimension="60%" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
