import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, router } from "expo-router";
import CustomButton from "../components/CustomButton";

const index = () => {
  return (
    <View>
      <Text>why</Text>
      <CustomButton
        title="Continue with Email"
        handlePress={() => router.push("/home")}
        containerStyles="w-full mt-7"
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
