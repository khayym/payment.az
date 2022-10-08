import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import PaymentScreen from "../screens/payment";

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Payment" component={PaymentScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator