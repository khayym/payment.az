import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from ".";

const Stack = createNativeStackNavigator();

const AccountExplorer = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PaymentScreen"
                component={AccountScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AccountExplorer;