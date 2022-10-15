import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from ".";
const Stack = createNativeStackNavigator();


const HomeExplorer = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default HomeExplorer;