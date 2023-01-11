import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Button from '../../../components/button';
import { PasswordInput } from '../../../components/password-input';
import Texts from '../../../components/text'
import { RESET_PASSWORD_INSTANCE } from '../../../utils/instances';
import { tabSupervisor } from '../../../utils/tab-view-util';
import { styles } from './styles';


const SetNewPassword = () => {

    const { t } = useTranslation()
    const [text, setText] = useState('');
    const [ready, setReady] = useState(false);
    const [wait, setWait] = useState(false)
    const [error, setError] = useState(null);
    const { navigate } = useNavigation();

    const buttonHandler = async () => {
        const { status, data } = await RESET_PASSWORD_INSTANCE(text, setWait);
        if (status == 200 || status == true) {
            navigate('SingRegisterRouter', { index: 0 })
            tabSupervisor('reset', { screen: 'ForgotPassword' })
            return;
        }
        setError(data);

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
            <View style={{ flex: 1, }}>
                <Texts child={t('register:createPassword')}>{"Yeni şifrə"}</Texts>
                <View style={{ marginTop: 72 }}>
                    <PasswordInput
                        text={text}
                        setText={setText}
                        custom={{ marginTop: 24 }}
                        label={t('singIn:password')}
                        ready={ready}
                        setReady={setReady}
                        withSecure
                        error={error}
                        errorMessage={error}
                    />
                </View>
                <View style={styles.view}>
                    <Button text={t('register:admit')} disable={!ready || wait} callBack={buttonHandler} wait={wait} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SetNewPassword