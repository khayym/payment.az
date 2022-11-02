import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SingInLayout from "../layouts/sing-in-layout";
import SignInUp from "../screens/sing-in-up";
import Welcome from "../screens/welcome";
import { getGuideMMKV } from "../utils/mmvk";
const Stack = createNativeStackNavigator();

const SignInScreenNavigator = () => {
    const [guide, setGuide] = useState(false);

    const getGuideVisiblity = async () => {
        const show = await getGuideMMKV()
        setGuide(show);
    }

    useLayoutEffect(() => {
        getGuideVisiblity();
        () => null
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!guide ? <Stack.Screen name="Welcome" component={Welcome} /> : null}
                <Stack.Screen name="SignInUp" component={SignInUp} />
                <Stack.Screen name="SingRegisterRouter" component={SingInLayout} />
            </Stack.Navigator>
        </SafeAreaView>
    );
};


export default SignInScreenNavigator