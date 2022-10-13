import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import SingInLayout from "../layouts/sing-in-layout";
import SignInUp from "../screens/sing-in-up";
import Welcome from "../screens/welcome";
const Stack = createNativeStackNavigator();

const SignInScreenNavigator = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="SignInUp" component={SignInUp} />
                <Stack.Screen name="SingRegisterRouter" component={SingInLayout} />
            </Stack.Navigator>
        </SafeAreaView>
    );
};


export default SignInScreenNavigator