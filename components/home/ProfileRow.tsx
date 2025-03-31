import { Text, View } from "react-native";

const ProfileRow = () => {
  return (
    <View className="flex flex-col items-center justify-center">
      <Image
        source={icons[id]}
        className="w-14 h-14"
        style={{ resizeMode: "contain" }}
      />
      <Text className="mt-4 text-xl font-semibold">John Doe</Text>
      <Text className="text-gray-600">Software Engineer</Text>
    </View>
  );
};

export default ProfileRow;
