import { View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import Texts from '../../components/text/'
import { PhoneInput } from '../../components/phone-input'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../../components/language-selector'
import { PasswordInput } from '../../components/password-input';
import Button from '../../components/button';
import FooterText from '../../components/text/footer-text';
import { styles } from './styles';
import { useContextApi } from '../../store/context/ContextApi';


export const LogIn = () => {
    const [text, setText] = useState('');
    const [number, setNumber] = useState('');
    const [ready, setReady] = useState(false);
    const [wait, setWait] = useState(false)
    const { t } = useTranslation()
    const { setIndex, setLogin } = useContextApi();

    const loginHandler = () => {
        setWait(true)
        setTimeout(() => {
            if (number == '558447755' && text == 'Test12345') return setLogin(true)
            else {
                setText('')
                setNumber('')
                setWait(false)
            }
        }, 1500)

    }

    return (
        <View style={styles.layout}>
            {/* <LanguageSelector /> */}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Texts child={t('singIn:logBottomLable')}>{t('singIn:logIn')}</Texts>
                    </View>
                    <View style={styles.inputs}>
                        <PhoneInput
                            setNumber={setNumber}
                            number={number}
                            label={t('singIn:numberLable')}
                            errorLabel={t('singIn:wrongNumber')}
                        // error
                        />
                        <PasswordInput
                            text={text}
                            setText={setText}
                            custom={{ marginTop: 24 }}
                            label={t('singIn:password')}
                            rightLabel
                            rightLabelText={t('singIn:forgotPassword')}
                            rightLabelCallback={() => setIndex(2)}
                            ready={ready}
                            setReady={setReady}
                        // withSecure
                        />
                        <View style={{ height: 48, marginTop: 48, }}>
                            <Button text={t('singIn:logIn')} disable={!(ready && number.length > 8 && !wait)} callBack={loginHandler} wait={wait} />
                        </View>
                    </View>
                    <FooterText
                        callback={() => setIndex(1)}
                        text={t('singIn:help')}
                        blur={t('singIn:helpButton')}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

