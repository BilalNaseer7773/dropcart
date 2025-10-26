import { View, Text } from "react-native";
export default function Orders() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>My Orders</Text>
      <Text>Your past and active orders will show here.</Text>
    </View>
  );
}
