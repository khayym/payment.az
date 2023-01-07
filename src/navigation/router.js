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
import { isPasscodeRegisterMMKV } from '../utils/mmkv';
import PasscodeScreen from '../screens/passcode-screen';

const Stack = createNativeStackNavigator();

const Router = ({ userData, paymentsHistory }) => {
    const [name, setName] = useState(null);
    // const [havePass, setHavePass] = useState(false);
    const navigationRef = useNavigationContainerRef();
    const { verify, login } = useSelector(state => state.user);
    const dispatch = useDispatch();

    // const checkPasscode = async () => {
    //     // const isVerify = await verifyPasscode();
    //     const pass = await isPasscodeRegisterMMKV();
    //     setHavePass(pass);
    //     // if()
    // }

    useLayoutEffect(() => {
        // checkPasscode();
        dispatch(setUserData(userData));
        dispatch(addHistory(paymentsHistory))
        if (userData !== null) {
            dispatch(setLogin(true))
        } else {
            dispatch(setLogin(false))
        }
    }, [userData])

    const controlLogin = () => {
        if (verify) {
            return <Stack.Screen name="TabNavigator" component={DrawerNavigation} options={{ header: () => <CustomHeader name={name} /> }} />
        }
        else {
            return <Stack.Screen name="PasscodeNavigator" component={PasscodeScreen} options={{ headerShown: false }} />
        }
    }

    const screenRouting = () => {
        console.log({ login });
        if (login) return controlLogin()
        return <Stack.Screen name="SignInNavigator" component={SignInScreenNavigator} options={{ headerShown: false }} />
    }



    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => setName(navigationRef.getCurrentRoute().name)}
            onStateChange={() => setName(navigationRef.getCurrentRoute().name)}
        >
            <Stack.Navigator >
                {screenRouting()}
            </Stack.Navigator>
            <CustomModal />
        </NavigationContainer>
    )
}

export default Router