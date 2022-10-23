import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BalanceScreen } from ".";
import BalanceRouter from './balance-router'

const Stack = createNativeStackNavigator();

const BalanceExplorer = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BalanceScreen"
                component={BalanceScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BalanceRouter"
                component={BalanceRouter}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default BalanceExplorer;