import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from ".";
import MobileOperators from "../mobile-operators";
const Stack = createNativeStackNavigator();


const HomeExplorer = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MobileOperators'
                component={MobileOperators}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default HomeExplorer;