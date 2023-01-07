import { View, Keyboard, TouchableWithoutFeedback, Text, KeyboardAvoidingView } from 'react-native'
import Texts from '../../components/text/'
import { PhoneInput } from '../../components/phone-input'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PasswordInput } from '../../components/password-input';
import Button from '../../components/button';
import FooterText from '../../components/text/footer-text';
import { styles } from './styles';
import { registerUserDataMMKV } from '../../utils/mmkv';
import { useDispatch } from 'react-redux';
import { controlTabView, firstOpenIndex } from '../../reducers/tabControllerReducer';
import { LOGIN_INSTANCE } from '../../utils/instances';
import { setLogin } from '../../reducers/userReducer';

export const LogIn = () => {
    const [text, setText] = useState('');
    const [number, setNumber] = useState('');
    const [ready, setReady] = useState(false);
    const [wait, setWait] = useState(false)
    const [error, setError] = useState(null);
    const { t } = useTranslation()
    const dispatch = useDispatch();
    const callback = (index) => dispatch(controlTabView({ screen: 'SingRegisterRouter', index }));

    const forgotPassword = () => {
        dispatch(firstOpenIndex({ screen: 'ForgotPassword', index: 0, state: { number: null, error: null } }));
        callback(2)
    }

    const loginHandler = async () => {
        setError(null)
        const { data, status } = await LOGIN_INSTANCE({ phone: "994" + number, password: text }, setWait);
        if (status == 200 || status == true) {
            await registerUserDataMMKV(data);
            dispatch(setLogin(true));
            return;
        }
        return setError(data)
    }

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.layout}>
            <View style={{ flex: 1 }}>
                <KeyboardAvoidingView style={styles.container} behavior='position'>
                    <View style={styles.header}>
                        <Texts child={t('singIn:logBottomLable')}>{t('singIn:logIn')}</Texts>
                    </View>
                    <View style={styles.inputs}>
                        <PhoneInput
                            setNumber={setNumber}
                            number={number}
                            label={t('singIn:numberLable')}
                            error={error}
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
                            error={error}
                            setReady={setReady}
                        />
                        <Text style={styles.error}>{error}</Text>
                        <View style={{ height: 48, marginTop: 48, }}>
                            <Button text={t('singIn:logIn')} disable={!(ready && number.length > 8 && !wait)} callBack={loginHandler} wait={wait} />
                        </View>
                    </View>

                </KeyboardAvoidingView>
                <FooterText
                    callback={() => callback(1)}
                    text={t('singIn:help')}
                    blur={t('singIn:helpButton')}
                />
            </View>
        </TouchableWithoutFeedback>

    )
}

