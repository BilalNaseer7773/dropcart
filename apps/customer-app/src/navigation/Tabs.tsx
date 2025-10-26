import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Stores from "../screens/Stores";
import Cart from "../screens/Cart";
import Orders from "../screens/Orders";

export type TabParamList = {
  Home: undefined;
  Stores: undefined;
  Cart: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Stores" component={Stores} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Orders" component={Orders} />
    </Tab.Navigator>
  );
}
