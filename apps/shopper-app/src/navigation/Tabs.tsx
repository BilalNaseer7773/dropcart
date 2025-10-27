import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Batches from "../screens/Batches";
import Shopping from "../screens/Shopping";
import Earnings from "../screens/Earnings";
import Settings from "../screens/Settings";

export type TabParamList = {
  Batches: undefined;
  Shopping: undefined;
  Earnings: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Batches" component={Batches} />
      <Tab.Screen name="Shopping" component={Shopping} />
      <Tab.Screen name="Earnings" component={Earnings} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
