import images from "@/constants/images";
import { Image, Pressable, Text, View } from "react-native";

const ProfileRow = () => {
  return (
    <View className="flex flex-row items-center justify-between px-6 py-6">
      <View className="flex flex-row items-center gap-4">
        <Image
          source={images.avatar}
          className="w-14 h-14"
          style={{ resizeMode: "contain" }}
        />
        <View>
          <Text className="text-gray-500">Greetings!</Text>
          <Text className="text-xl font-bold">John Doe</Text>
        </View>
      </View>
      <Pressable className="bg-white rounded-full p-4">
        <Image
          source={images.bell}
          className="w-6 h-6"
          style={{ resizeMode: "contain" }}
        />
      </Pressable>
    </View>
  );
};

export default ProfileRow;
