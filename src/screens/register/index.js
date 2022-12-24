import { TabView, SceneMap } from 'react-native-tab-view';
import { memo, useState } from 'react'
import Registration from './registration';
import SMTP from './smtp';
import PasswordGenerate from './password-generate';
import { useSelector } from 'react-redux';

const renderScene = SceneMap({
    registration_step: Registration,
    smtp_step: SMTP,
    password_step: PasswordGenerate
});

const Register = ({ route }) => {
    let { index } = useSelector(state => state.tabControllerReducer.Register);

    const [routes] = useState([
        { key: 'registration_step', title: 'Registration' },
        { key: 'smtp_step', title: 'SMTP' },
        { key: 'password_step', title: 'PasswordGenerate' },
    ]);



    return (
        <TabView
            navigationState={{ index: index[index.length - 1], routes }}
            renderScene={renderScene}
            // onIndexChange={setRegisterIndex}
            renderTabBar={() => null}
            swipeEnabled={false}
            lazy
        />
    )
}

export default memo(Register)

