import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { passwordGenereateStyle as styles } from '../styles';
import Texts from '../../../components/text/'
import Button from '../../../components/button'
import { PhoneInput } from '../../../components/phone-input';
import { useTranslation } from 'react-i18next';
import { useContextApi } from '../../../store/context/ContextApi';
import { PasswordInput } from '../../../components/password-input';

const PasswordGenerate = () => {
    const { t } = useTranslation()
    const [text, setText] = useState('');
    const [ready, setReady] = useState(false);
    const [wait, setWait] = useState(false)

    const { setLogin } = useContextApi();

    const buttonHandler = () => {
        setWait(true)
        Keyboard.dismiss()
        setTimeout(() => {
            // setSend(true)
            setWait(false);
            Keyboard.dismiss
            setLogin(true)
        }, 1500)
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
                        // rightLabel
                        // rightLabelText={t('singIn:forgotPassword')}
                        // rightLabelCallback={() => setIndex(2)}
                        ready={ready}
                        setReady={setReady}
                        withSecure
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