import { View, Text } from "react-native";
export default function Stores() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Stores</Text>
      <Text>- Costco</Text>
      <Text>- Walmart</Text>
    </View>
  );
}
