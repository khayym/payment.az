import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { passwordGenereateStyle as styles } from '../styles';
import Texts from '../../../components/text/'
import Button from '../../../components/button'
import { useTranslation } from 'react-i18next';
import { useContextApi } from '../../../store/context/ContextApi';
import { PasswordInput } from '../../../components/password-input';
import { CREATE_USER } from '../../../constants/api';
import axios from 'axios';

const PasswordGenerate = () => {
    const { t } = useTranslation()
    const [text, setText] = useState('');
    const [ready, setReady] = useState(false);
    const [wait, setWait] = useState(false)

    const { setLogin } = useContextApi();

    const buttonHandler = async () => {
        setWait(true)
        const data = {
            password: text,
            password_confirm: text
        }
        try {
            const request = await axios.post(CREATE_USER, data)
            setLogin(true)
        } catch (err) {
            console.log(err);
        }
        // request.status ? setLogin(true) : console.log('not olgin')
        // Keyboard.dismiss()
        // setTimeout(() => {
        //     // setSend(true)
        setWait(false);
        setLogin(true)
        //     Keyboard.dismiss
        // setLogin(true)
        // }, 1500)
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