import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContextApi } from '../store/context/ContextApi';
import SignInScreenNavigator from './SingInNavigator';
import TabNavigator from './TabNavigation';
const Stack = createNativeStackNavigator();

const Router = () => {

    const { login } = useContextApi();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    login ?
                        <Stack.Screen
                            name="TabNavigator"
                            component={TabNavigator}
                        /> : <Stack.Screen
                            name="SignInNavigator"
                            component={SignInScreenNavigator}
                            options={{ headerShown: false }}
                        />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router