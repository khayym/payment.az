import DrawerNavigation from './DrawerNavigation';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLayoutEffect, useState } from 'react';
import CurtomHeader from '../components/header';
import { useContextApi } from '../store/context/ContextApi';
import SignInScreenNavigator from './SingInNavigator';
const Stack = createNativeStackNavigator();
import CustomModal from '../components/modal';

const Router = ({ userData }) => {
    const { login, setLogin } = useContextApi();
    const [name, setName] = useState(null);
    const navigationRef = useNavigationContainerRef();

    useLayoutEffect(() => {
        userData !== null ? setLogin(true) : setLogin(false);
    }, [userData])

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => setName(navigationRef.getCurrentRoute().name)}
            onStateChange={() => setName(navigationRef.getCurrentRoute().name)}
        >
            <Stack.Navigator >
                {
                    login ?
                        <Stack.Screen name="TabNavigator" component={DrawerNavigation} options={{ header: () => <CurtomHeader name={name} /> }} />
                        : <Stack.Screen name="SignInNavigator" component={SignInScreenNavigator} options={{ headerShown: false }} />
                }
            </Stack.Navigator>
            <CustomModal />
        </NavigationContainer>
    )
}

export default Router