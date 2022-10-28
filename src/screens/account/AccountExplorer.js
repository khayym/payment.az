import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from ".";
import AppInfo from "./app-info";
import Policy from "./policy";
import UserSecurity from "./security";
import UserInfo from "./user-info";

const Stack = createNativeStackNavigator();

const AccountExplorer = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UserInfoScreen"
                component={UserInfo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UserSecurityScreen"
                component={UserSecurity}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PolicyScreen"
                component={Policy}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AppInfoScreen"
                component={AppInfo}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AccountExplorer;