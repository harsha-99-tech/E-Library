import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import ExploreItem from "../../components/home/ExploreItem";

const saved = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);

    setRefreshing(false);
  };
  return (
    <SafeAreaView className="bg-primary-100 h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <View>
            <Text className="text-3xl text-black">{item.id}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6 ">
            <ExploreItem book={item} />
            <Text className="text-xl text-black font-bold text-center">
              Saved Books
            </Text>
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

export default saved;
