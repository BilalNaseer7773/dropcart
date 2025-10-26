import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";

export type RootStackParamList = {
  Tabs: undefined;
  Product: { id: string } | undefined;
  Checkout: undefined;
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
        {/* Placeholder routes we’ll flesh out later */}
        <Stack.Screen name="Product" component={() => null} />
        <Stack.Screen name="Checkout" component={() => null} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
