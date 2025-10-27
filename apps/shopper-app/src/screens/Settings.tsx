import { View, Text } from "react-native";
export default function Settings() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Settings</Text>
      <Text>Profile, availability, vehicle info, notifications.</Text>
    </View>
  );
}
