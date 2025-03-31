import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Subscription Details: {id}</Text>
    </View>
  );
};

export default SubscriptionDetails;

const styles = StyleSheet.create({});
