import icons from "@/constants/icons";
import { RelativePathString, useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

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

const SubscriptionItem = ({ id, title }: ItemProps) => {
  const router = useRouter();
  const { cost, duration, subscriptionEndDate } = fetchSubscriptionInfo(id);

  const onSubscriptionPress = () => {
    router.push(`/subscription/${id}` as const);
  };

  return (
    <Pressable
      onPress={onSubscriptionPress}
      className="flex flex-row justify-between my-2 px-4 py-2 bg-white rounded-xl"
    >
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
    </Pressable>
  );
};

export default SubscriptionItem;
