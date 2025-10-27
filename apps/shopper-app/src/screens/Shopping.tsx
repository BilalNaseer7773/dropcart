import { View, Text } from "react-native";
export default function Shopping() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Shopping List</Text>
      <Text>Items to pick, with UPC scan and substitutions (later).</Text>
    </View>
  );
}
