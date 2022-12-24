import { VERIFY_OTP } from '@env';
import axios from 'axios';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Pressable } from 'react-native'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Button from '../../../components/button';
import Texts from '../../../components/text/'
// import { useContextApi } from '../../../store/context/ContextApi';
import { styles } from './styles';
import { addTabViewState, controlTabView } from '../../../reducers/tabControllerReducer';
import { useDispatch, useSelector } from 'react-redux';

const SMTP = () => {
    const CELL_COUNT = 4;
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [value, setValue] = useState('');
    const [wait, setWait] = useState(false);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    let { number, code, message } = useSelector(state => state.tabControllerReducer.Register.state);

    const sendOtpAgain = () => {
        setValue("")
        setWait(true)
        dispatch(addTabViewState({ screen: "Register", state: { number, code: null, message: null } }))
        axios.get(VERIFY_OTP)
            .catch(() => {
                dispatch(addTabViewState({ screen: "Register", state: { number, code: 401, message: "Something went wrong" } }))
            })
            .finally(() => setWait(false));
    }

    const sendOtp = () => {
        dispatch(addTabViewState({ screen: "Register", state: { number, code: null, message: null } }))
        setWait(true)

        axios.post(VERIFY_OTP, { otp: value })
            .then(() => dispatch(controlTabView({ screen: 'Register', index })))
            .catch(error => {
                dispatch(addTabViewState({ screen: "Register", state: { number, code: 401, message: "The code you wrote is incorrect! or The code has expired!" } }))
            })
            .finally(() => {
                setWait(false)
            })
    }


    return (
        <View style={styles.container}>
            <Texts Texts child={`${number} ${t('register:smtpmessage')}`}> {t('register:admitCode')}</Texts >
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell, code !== null && { borderColor: 'red', color: 'red' }]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
            {message && <Text style={styles.wrongOpt}>{message}</Text>}
            <View style={styles.textRoot}>
                <Text style={styles.text}>{t('register:smtpNotSendMessage')}</Text>
                <Pressable onPress={sendOtpAgain}>
                    <Text style={styles.blueText}>{t('register:tryAgain')}</Text>
                </Pressable>
            </View>
            <View style={styles.buttonView}>
                <Button text={t('register:admit')} callBack={sendOtp} disable={value.length !== 4 || wait} wait={wait} />
            </View>
        </View >
    )
}

export default SMTP

