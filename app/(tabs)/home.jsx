import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import EmptyState from "../../components/EmptyState";
import { icons, images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import ScreenHeaderBtn from "../../components/header/ScreenHeaderBtn";
import Library from "../../components/Library";

const home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-black">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View className="mt-1.5 flex-row">
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
              </View>

              <View className="mt-1.5 flex-row">
                <SearchInput />

                <ScreenHeaderBtn iconUrl={icons.notification} dimension="60%" />
              </View>
            </View>

            <View className="w-full flex-1  ">
              <Text className="text-gray-100 text-lg font=pregular mb-3">
                Categories
              </Text>
              <Library books={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />
            </View>
            <View className="w-full flex-1 ">
              <Text className="text-gray-100 text-lg font=pregular mb-3">
                Library
              </Text>
              <Library books={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Books Found"
            subtitle="Be the first one to upload a book"
          />
        )}
        refreshControl={<RefreshControl />}
      />
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({});
