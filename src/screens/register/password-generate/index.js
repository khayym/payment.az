import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { passwordGenerateStyle as styles } from '../styles';
import Texts from '../../../components/text/'
import Button from '../../../components/button'
import { useTranslation } from 'react-i18next';
import { useContextApi } from '../../../store/context/ContextApi';
import { PasswordInput } from '../../../components/password-input';
import { CREATE_USER_INSTANCE, LOGIN_INSTANCE, VERIFY_OTP_INSTANCE } from '../../../utils/instances';
import { registerUserDataMMKV } from '../../../utils/mmkv';

const PasswordGenerate = () => {
    const { t } = useTranslation()
    const [text, setText] = useState('');
    const [ready, setReady] = useState(false);
    const [wait, setWait] = useState(false)
    const [error, setError] = useState(null);
    const { setLogin } = useContextApi();

    const buttonHandler = async () => {

        const { status, data } = await CREATE_USER_INSTANCE(text, setWait);
        if (status == 201 || status == true) {
            setLogin(true)

            return;
        }
        setError(data);

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
            <View style={{ flex: 1, }}>
                <Texts child={t('register:createPassword')}>{t('register:createPassword')}</Texts>
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
                <View style={{ width: '100%', height: 48, marginTop: 137 }}>
                    <Button text={t('register:admit')} disable={!ready || wait} callBack={buttonHandler} wait={wait} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default PasswordGenerate