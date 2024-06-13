import React, { useState } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  View,
  Text,
} from "react-native";
import { images } from "../../constants";
import Header from "../../components/home/Header";
import Categories from "../../components/home/Categories";
import LatestSection from "../../components/home/LatestSection";
import ExploreItem from "../../components/home/ExploreItem";
import EmptyState from "../../components/EmptyState";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // Add your refresh logic here
    setRefreshing(false);
  };

  const exploreBooks = [
    {
      id: 1,
      title: "Lunar Storm",
      author: "Kumara Siriwan",
      image: images.book3,
      rating: 5.7,
    },
    {
      id: 2,
      title: "Harry Potter",
      author: "J.K. Rowling",
      image: images.book4,
      rating: 7.7,
    },
    {
      id: 3,
      title: "Harry Potter",
      author: "J.K. Rowling",
      image: images.book4,
      rating: 7.7,
    },
  ];

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={exploreBooks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ExploreItem book={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <Header />
            <Categories />
            <LatestSection />
            <View>
              <Text className="text-lg text-black font-regular mb-3">
                Explore
              </Text>
              <Text className="text-sm text-gray-500 mb-4">
                Our store has more than 390 books
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Books Found"
            subtitle="Be the first one to upload a book"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
