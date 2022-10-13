import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Header } from "../components/screen-header";
import Home from "../screens/home";
import PaymentScreen from "../screens/payment";
import HomeIcon from '../../assets/icons/tab/home.svg';
import PaymentIcon from '../../assets/icons/tab/payment.svg';

const Tab = createBottomTabNavigator()

const TabNavigator = ({ }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                // tabBarShowLabel: false,
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#8F9BB3',
                tabBarStyle: {
                    height: 94,
                },
                // headerShown: false,
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{ tabBarIcon: ({ color }) => <HomeIcon style={{ color: color }} /> }}
            />
            <Tab.Screen name="Payment"
                component={PaymentScreen}
                options={{ tabBarIcon: ({ color }) => <PaymentIcon style={{ color: color }} /> }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator