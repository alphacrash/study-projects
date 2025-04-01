import icons from "@/constants/icons";
import { Button, Image, Pressable, Text, View } from "react-native";

const HeroSubscription = () => {
  return (
    <View className="flex gap-4 px-6 py-2">
      <View>
        <Text className="text-lg font-light">Offer of</Text>
        <Text className="text-xl font-bold">The Week</Text>
      </View>
      <View className="flex flex-row bg-white rounded-3xl">
        <View className="flex gap-8 bg-[#E50914] p-4 rounded-l-3xl">
          <View className="flex items-center justify-center bg-white rounded-full h-32 w-32">
            <Image
              source={icons.netflix}
              className="w-24 h-24"
              style={{ resizeMode: "contain" }}
            />
          </View>
          <View className="flex items-center justify-center">
            <Text className="text-white">Till January</Text>
            <Text className="text-white">2023</Text>
          </View>
        </View>
        <View className="flex flex-row justify-between gap-6 mx-6">
          <View className="flex flex-col justify-around">
            <View>
              <Text className="text-xl font-bold">Netflix</Text>
              <Text className="text-gray-500">Family Pack</Text>
            </View>
            <View>
              <Text className="text-2xl font-bold">$9.00</Text>
              <Text className="text-gray-500">Per Month</Text>
            </View>
          </View>
          <View className="flex justify-end mb-10">
            <Pressable
              onPress={() => {}}
              className="flex items-center justify-center bg-[#E50914] rounded-full h-24 w-24"
            >
              <Text className="text-6xl mt-2 font-light text-white">+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeroSubscription;
