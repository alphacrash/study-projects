import ProfileRow from "@/components/home/ProfileRow";
import SubscriptionItem from "@/components/home/SubscriptionItem";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

export default function Home() {
  return (
    <SafeAreaView>
      <ProfileRow />
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
    </SafeAreaView>
  );
}
