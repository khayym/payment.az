import DrawerNavigation from './DrawerNavigation';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLayoutEffect, useState } from 'react';
import CustomHeader from '../components/header';
import SignInScreenNavigator from './SingInNavigator';
import CustomModal from '../components/modal';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, setUserData } from '../reducers/userReducer';
import { addHistory } from '../reducers/modalControllerReducer';
import PasscodeScreen from '../screens/passcode-screen';

const Stack = createNativeStackNavigator();

const Router = ({ userData, paymentsHistory }) => {
    const [name, setName] = useState(null);
    const navigationRef = useNavigationContainerRef();
    const { verify, login } = useSelector(state => state.user);
    const dispatch = useDispatch();


    useLayoutEffect(() => {
        dispatch(setUserData(userData));;
        dispatch(addHistory(paymentsHistory))
        if (userData !== null) {
            dispatch(setLogin(true))
        } else {
            dispatch(setLogin(false))
        }
    }, [userData])


    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => setName(navigationRef.getCurrentRoute().name)}
            onStateChange={() => setName(navigationRef.getCurrentRoute().name)}
        >
            <Stack.Navigator >
                {
                    !login
                        ? <Stack.Screen name="SignInNavigator" component={SignInScreenNavigator} options={{ headerShown: false }} />
                        : verify
                            ? <Stack.Screen name="TabNavigator" component={DrawerNavigation} options={{ header: () => <CustomHeader name={name} /> }} />
                            : <Stack.Screen name="PasscodeNavigator" component={PasscodeScreen} options={{ headerShown: false }} />
                }
            </Stack.Navigator>
            <CustomModal />
        </NavigationContainer>
    )
}

export default Router