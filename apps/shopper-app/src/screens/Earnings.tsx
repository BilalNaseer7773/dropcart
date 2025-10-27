import { View, Text } from "react-native";
export default function Earnings() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Earnings</Text>
      <Text>Trip payouts, tips, and history will show here.</Text>
    </View>
  );
}
