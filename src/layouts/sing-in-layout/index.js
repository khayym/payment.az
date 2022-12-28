import { View, TouchableOpacity, KeyboardAvoidingView, TextInput, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import BackIcon from '../../../assets/icons/back.svg'
import { styles } from './styles';
import { SceneMap, TabView } from 'react-native-tab-view';
import { useEffect, useState } from 'react';
import { LogIn } from '../../screens/login';
import Register from '../../screens/register';
import ForgotPassword from '../../screens/forgot-password';
import { useDispatch, useSelector } from 'react-redux';
import { firstOpenIndex, tabViewBackController } from '../../reducers/tabControllerReducer';


const renderScene = SceneMap({
    login: LogIn,
    register: Register,
    forgotPassword: ForgotPassword,
});


const SingInLayout = ({ route: { params, name } }) => {
    const { pop } = useNavigation();
    let { index } = useSelector(state => state.tabControllerReducer.SingRegisterRouter);
    let registerIndex = useSelector(state => state.tabControllerReducer.Register.index);
    let forgotPasswordIndex = useSelector(state => state.tabControllerReducer.ForgotPassword.index);
    let state = useSelector(state => state.tabControllerReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(firstOpenIndex({ screen: 'SingRegisterRouter', index: params.index }));
    }, [params])

    const [routes] = useState([
        { key: 'login', title: 'login' },
        { key: 'register', title: 'register' },
        { key: 'forgotPassword', title: 'forgotPassword' }
    ]);


    const registerController = () => {
        if (registerIndex.length === 1) {
            pop()
            dispatch(firstOpenIndex({ screen: 'Register', index: 0, }));
            dispatch(firstOpenIndex({ screen: 'SingRegisterRouter', index: 1 }));
            return
        };
        dispatch(tabViewBackController({ screen: 'Register', state: state.Register.state }))
    }

    const loginController = () => {
        if (forgotPasswordIndex.length !== 1) {
            dispatch(tabViewBackController({ screen: 'ForgotPassword', state: {} }))
            return
        }

        if (index.length === 1) {
            pop();
            dispatch(firstOpenIndex({ screen: 'Register', index: 0 }));
            dispatch(firstOpenIndex({ screen: 'SingRegisterRouter', index: 1 }));
            return
        }
        dispatch(tabViewBackController({ screen: 'SingRegisterRouter', state: {} }))
    }


    const backHandler = () => {
        switch (params.index) {
            case 0:
                loginController()
                break;

            case 1:
                registerController();
                break;
            default:
                loginController()
                break;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity onPress={backHandler} style={styles.iconContainer}>
                    <BackIcon />
                </TouchableOpacity>
            </View>
            <View style={styles.overlay}>
                <TabView
                    renderTabBar={() => null}
                    onIndexChange={() => null}
                    lazy
                    swipeEnabled={false}
                    navigationState={{ index: index[index.length - 1], routes }}
                    renderScene={renderScene}
                />
            </View>
        </View >
    )
}

export default SingInLayout