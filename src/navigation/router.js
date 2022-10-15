import DrawerNavigation from './DrawerNavigation';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import CurtomHeader from '../components/header';
import { useContextApi } from '../store/context/ContextApi';
import SignInScreenNavigator from './SingInNavigator';
const Stack = createNativeStackNavigator();


const Router = () => {
    const { login } = useContextApi();
    const [name, setName] = useState(null);
    const navigationRef = useNavigationContainerRef();

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => setName(navigationRef.getCurrentRoute().name)}
            onStateChange={() => setName(navigationRef.getCurrentRoute().name)}
        >
            <Stack.Navigator>
                {
                    !login ?
                        <Stack.Screen name="TabNavigator" component={DrawerNavigation} options={{ header: () => <CurtomHeader name={name} /> }} />
                        : <Stack.Screen name="SignInNavigator" component={SignInScreenNavigator} options={{ headerShown: false }} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router