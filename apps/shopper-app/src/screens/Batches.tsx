import { View, Text } from "react-native";
export default function Batches() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Available Batches</Text>
      <Text>Orders assigned to you will appear here.</Text>
    </View>
  );
}
