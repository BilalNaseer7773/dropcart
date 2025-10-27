import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";

export type RootStackParamList = {
  Tabs: undefined;
  BatchDetails: { id: string };
  Scan: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="BatchDetails" component={() => null} />
        <Stack.Screen name="Scan" component={() => null} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
