import { View, Keyboard, TouchableWithoutFeedback, Text } from 'react-native'
import Texts from '../../components/text/'
import { PhoneInput } from '../../components/phone-input'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PasswordInput } from '../../components/password-input';
import Button from '../../components/button';
import FooterText from '../../components/text/footer-text';
import { styles } from './styles';
import { LOGIN } from '@env';
import axios from 'axios';
import { registerUserDataMMKV } from '../../utils/mmvk';
import { useDispatch } from 'react-redux';
import { controlTabView, firstOpenIndex } from '../../reducers/tabControllerReducer';
import { useContextApi } from '../../store/context/ContextApi';

export const LogIn = () => {
    const [text, setText] = useState('');
    const [number, setNumber] = useState('');
    const [ready, setReady] = useState(false);
    const [wait, setWait] = useState(false)
    const [error, setError] = useState({ code: null, message: null });
    const { t } = useTranslation()
    const { setLogin } = useContextApi();
    const dispatch = useDispatch();
    const callback = (index) => dispatch(controlTabView({ screen: 'SingRegisterRouter', index }));

    const forgotPassword = () => {
        dispatch(firstOpenIndex({ screen: 'ForgotPassword', index: 0, state: { number: null, error: null } }));
        callback(2)
    }

    const loginHandler = async () => {
        setWait(true)
        const data = { phone: "994" + number, password: text }
        try {
            const req = await axios.post(LOGIN, data);
            req.status == 200 ? await registerUserDataMMKV(req.data) : setError({ code: 400, message: t('singIn:wrongPasswordOrNumber') })
            setLogin(true);
        } catch (error) {
            if (error.code == 'ERR_BAD_REQUEST') setError({ code: 401, message: t('singIn:wrongPasswordOrNumber') });
            else if (error.code == 400) setError({ code: 400, message: t('singIn:wrongPasswordOrNumber') })
        }
        setWait(false)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.layout} >
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
                    />
                    <PasswordInput
                        text={text}
                        setText={setText}
                        custom={{ marginTop: 24 }}
                        label={t('singIn:password')}
                        rightLabel
                        rightLabelText={t('singIn:forgotPassword')}
                        rightLabelCallback={forgotPassword}
                        ready={ready}
                        setReady={setReady}
                    />
                    <Text style={styles.error}>{error.message}</Text>
                    <View style={{ height: 48, marginTop: 48, }}>
                        <Button text={t('singIn:logIn')} disable={!(ready && number.length > 8 && !wait)} callBack={loginHandler} wait={wait} />
                    </View>
                </View>
                <FooterText
                    callback={() => callback(1)}
                    text={t('singIn:help')}
                    blur={t('singIn:helpButton')}
                />
            </View>
        </TouchableWithoutFeedback >
    )
}

