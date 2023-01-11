import { View, Text, Pressable, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native'
import { useEffect, useState } from 'react';
import Icon from '../../../../assets/icons/forgotPassword.svg';
import Texts from '../../../components/text';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { useTimer } from '../../../hooks/useTimer';
import Button from '../../../components/button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
import { SEND_OTP_AGAIN_INSTANCE, VERIFY_OTP_INSTANCE } from '../../../utils/instances';
import { tabSupervisor } from '../../../utils/tab-view-util';


const VerifyForgotPasswordOtp = () => {
    const { number } = useSelector(state => state.tabControllerReducer.ForgotPassword.state);
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: 4 });
    const [wait, setWait] = useState(false);
    const [error, setError] = useState(false);
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const { time, access, reset } = useTimer(number, number);
    const bottomOffset = useSafeAreaInsets().top * 2 + 80;

    useEffect(() => {
        setValue('');
    }, [number])

    const sendAgain = async () => {
        setValue("")
        setError(null);
        const { data, status } = await SEND_OTP_AGAIN_INSTANCE(setWait);
        if (status == 200 || status == true) {
            reset();
            return
        }
        return setError(data)
    }



    const verify = async () => {
        setError(null);
        const { data, status } = await VERIFY_OTP_INSTANCE(value, setWait);
        if (status == 200 || status == true) {
            tabSupervisor('control', { screen: 'ForgotPassword', index: 2, state: { number } })
            return;
        }
        return setError(data)
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.flex}>
            <KeyboardAvoidingView
                behavior='position'
                keyboardVerticalOffset={Platform.OS === 'ios' ? bottomOffset : 0}
                contentContainerStyle={styles.flex}
                style={styles.flex}
            >

                <View style={styles.inner}>
                    <Icon />
                    <View style={styles.textContainer}>
                        <Texts child={`***** ${number?.slice(8, 10)} ${number?.slice(10)} ${t('forgotPassword:confirmText')}`}>{t('forgotPassword:confirmCode')}</Texts>
                    </View>

                    <View style={styles.buttonGroup}>
                        <View>
                            <CodeField
                                ref={ref}
                                {...props}
                                value={value}
                                onChangeText={setValue}
                                cellCount={4}
                                rootStyle={{ paddingHorizontal: 50 }}
                                keyboardType="number-pad"
                                textContentType="oneTimeCode"
                                renderCell={({ index, symbol, isFocused }) => (
                                    <Text
                                        key={index}
                                        style={[styles.cell, isFocused && styles.focusCell, error !== null && { borderColor: 'red', color: 'red' }]}
                                        onLayout={getCellOnLayoutHandler(index)}>
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </Text>
                                )}
                            />
                            {error && <Text style={styles.wrongOpt}>{error}</Text>}
                            <View style={styles.sendAgainTextRoot}>
                                <Text style={styles.text}>{time} {t('register:smtpNotSendMessage')}</Text>
                                <Pressable disabled={access} onPress={sendAgain}>
                                    <Text style={[styles.blueText, access && styles.textDisable]}>{t('register:tryAgain')}</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.buttonView}>
                            <Button text={t('register:admit')} callBack={() => verify()} disable={value.length !== 4 || wait} wait={wait} />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default VerifyForgotPasswordOtp

