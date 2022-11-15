import DrawerNavigation from './DrawerNavigation';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLayoutEffect, useState } from 'react';
import CurtomHeader from '../components/header';
import { useContextApi } from '../store/context/ContextApi';
import SignInScreenNavigator from './SingInNavigator';
import CustomModal from '../components/modal';
import { useDispatch } from 'react-redux';
import { setUserData } from '../reducers/userReducer';
import { addHistory } from '../reducers/modalControllerReducer';

const Stack = createNativeStackNavigator();

const Router = ({ userData, paymentsHistory }) => {
    const { login, setLogin } = useContextApi();
    const [name, setName] = useState(null);
    const navigationRef = useNavigationContainerRef();
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(setUserData(userData));
        dispatch(addHistory(paymentsHistory))
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