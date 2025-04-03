import HeroSubscription from "@/components/home/HeroSubscription";
import ProfileRow from "@/components/home/ProfileRow";
import RecentSubcriptions from "@/components/home/RecentSubcriptions";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <ProfileRow />
      <HeroSubscription />
      <RecentSubcriptions />
    </SafeAreaView>
  );
}
