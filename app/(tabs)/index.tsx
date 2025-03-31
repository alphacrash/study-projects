import icons from "@/constants/icons";
import { FlatList, Image, Text, View } from "react-native";

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

const fetchSubscriptionInfo = (id: string) => {
  return {
    id,
    subscriptionEndDate: "Dec 17, 2025",
    cost: "$16.90",
    duration: "/month",
  };
};

const isValidIconKey = (key: string): key is keyof typeof icons => key in icons;
type ItemProps = { id: string; title: string };

const Item = ({ id, title }: ItemProps) => {
  const { cost, duration, subscriptionEndDate } = fetchSubscriptionInfo(id);

  return (
    <View className="flex flex-row justify-between my-2 px-4 py-2 bg-white rounded-xl">
      <View className="flex flex-row items-center gap-4">
        <View>
          {isValidIconKey(id) ? (
            <Image
              source={icons[id]}
              className="w-14 h-14"
              style={{ resizeMode: "contain" }}
            />
          ) : (
            <Text>Icon not found</Text>
          )}
        </View>
        <View>
          <Text className="font-bold">{title}</Text>
          <Text className="text-sm text-gray-600">{subscriptionEndDate}</Text>
        </View>
      </View>
      <View>
        <Text className="font-bold">{cost}</Text>
        <Text className="font-sm text-gray-600">{duration}</Text>
      </View>
    </View>
  );
};

export default function Index() {
  return (
    <View className="px-6 py-2">
      <View>
        <Text className="text-lg font-light">Recent</Text>
        <Text className="text-xl font-bold">Subscriptions</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item id={item.id} title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
