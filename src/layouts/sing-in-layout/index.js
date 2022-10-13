import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import BackIcon from '../../../assets/icons/back.svg'
import { styles } from './styles';
import { SceneMap, TabView } from 'react-native-tab-view';
import { useCallback, useEffect, useState } from 'react';
import { LogIn } from '../../screens/login';
import Register from '../../screens/register';
import FotgotPassword from '../../screens/forgot-password';
import { useContextApi } from '../../store/context/ContextApi';


const renderScene = SceneMap({
    login: LogIn,
    register: Register,
    forgotPassword: FotgotPassword,
});


const SingInLayout = ({ route: { params } }) => {
    const { pop } = useNavigation();

    const { index, setIndex } = useContextApi();

    useEffect(() => {
        setIndex(params?.index)
    }, [])

    const [routes] = useState([
        { key: 'login', title: 'login' },
        { key: 'register', title: 'register' },
        { key: 'forgotPassword', title: 'forgotPassword' }
    ]);

    const backHandler = useCallback((i) => {
        if (i === 0) return pop()
        else if (i === 1) return pop()
        else if (i === 2) return setIndex(0);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity onPress={() => backHandler(index)} style={styles.iconContainer}>
                    <BackIcon />
                </TouchableOpacity>
            </View>
            <View style={styles.overlay}>
                <TabView
                    renderTabBar={() => null}
                    lazy
                    swipeEnabled={false}
                    navigationState={{ index, routes, params }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                />
            </View>
        </View >
    )
}

export default SingInLayout