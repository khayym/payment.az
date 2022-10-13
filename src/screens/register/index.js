import { TabView, SceneMap } from 'react-native-tab-view';
import { memo, useState } from 'react'
// import Texts from '../../components/text/'
// import Button from '../../components/button'
// import { PhoneInput } from '../../components/phone-input';
// import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import Registration from './registration';
import SMTP from './smtp';
import PasswordGenerate from './password-generate';
import { useContextApi } from '../../store/context/ContextApi';

const renderScene = SceneMap({
    registration_step: Registration,
    smtp_step: SMTP,
    password_step: PasswordGenerate
});

const Register = () => {
    const { registerIndex, setRegisterIndex } = useContextApi();

    // const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'registration_step', title: 'Registration' },
        { key: 'smtp_step', title: 'SMTP' },
        { key: 'password_step', title: 'PasswordGenerate' },
    ]);



    return (
        <TabView
            navigationState={{ index: registerIndex, routes }}
            renderScene={renderScene}
            onIndexChange={setRegisterIndex}
            renderTabBar={() => null}
            swipeEnabled={false}
            lazy
        />
    )
}

export default memo(Register)

