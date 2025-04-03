import SubscriptionItem from "@/components/home/SubscriptionItem";
import { FlatList, Text, View } from "react-native";

const DATA = [
  {
    id: "netflix",
    title: "Netflix",
  },
  {
    id: "youtubePremium",
    title: "YouTube Premium",
  },
  {
    id: "amazonPrime",
    title: "Amazon Prime",
  },
];

const RecentSubcriptions = () => {
  return (
    <View className="px-6 py-2">
      <View>
        <Text className="text-lg font-light">Recent</Text>
        <Text className="text-xl font-bold">Subscriptions</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <SubscriptionItem id={item.id} title={item.title} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RecentSubcriptions;
