import { View, Text, Button } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>DropCart</Text>
      <Text>Same-store pricing. Daily 3pm batching.</Text>
      <Button title="Browse Stores" onPress={() => {}} />
    </View>
  );
}
