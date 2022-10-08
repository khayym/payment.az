import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/register";
import SignIn from "../screens/sing-in";
import Welcome from "../screens/welcome";
const Stack = createNativeStackNavigator();

const SignInScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
};


export default SignInScreenNavigator