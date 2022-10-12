import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingInLayout from "../layouts/sing-in-layout";
import SignInUp from "../screens/sing-in-up";
import Welcome from "../screens/welcome";
const Stack = createNativeStackNavigator();

const SignInScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignInUp" component={SignInUp} />
            <Stack.Screen name="SingRegisterRouter" component={SingInLayout} />
        </Stack.Navigator>
    );
};


export default SignInScreenNavigator