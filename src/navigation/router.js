import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreenNavigator from './SingInNavigator';
import TabNavigator from './TabNavigation';
const Stack = createNativeStackNavigator();

const Router = () => {

    const logIn = false

    return (
        <NavigationContainer>
            {<Stack.Navigator>
                {
                    logIn ?
                        <Stack.Screen
                            name="TabNavigator"
                            component={TabNavigator}
                            options={{ headerShown: false }}
                        /> : <Stack.Screen
                            name="SignInNavigator"
                            component={SignInScreenNavigator}
                            options={{ headerShown: false }}
                        />
                }
            </Stack.Navigator>}
        </NavigationContainer>
    )
}

export default Router