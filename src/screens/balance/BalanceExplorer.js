import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BalanceScreen } from ".";

const Stack = createNativeStackNavigator();

const BalanceExplorer = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BalanceScreen"
                component={BalanceScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default BalanceExplorer;