import { View, Text, Pressable, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native'
import { controlTabView } from '../../../reducers/tabControllerReducer'
import Icon from '../../../../assets/icons/forgotPassword.svg';
import Texts from '../../../components/text';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { useEffect, useState } from 'react';
import { useTimer } from '../../../hooks/useTimer';
import Button from '../../../components/button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';
import { forgetPasswordInstance, VERIFY_OTP_INSTANCE } from '../../../utils/instances';


const VerifyForgotPasswordOtp = ({ route: { dispatch } }) => {
    const { number } = useSelector(state => state.tabControllerReducer.ForgotPassword.state);
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: 4 });
    const [wait, setWait] = useState(false);
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const { time, access, reset } = useTimer(number, number);
    const bottomOffset = useSafeAreaInsets().top * 2 + 80;


    const verifyButtonHandler = () => {
        console.log('trigger otp button', value);
        setWait(true);
        VERIFY_OTP_INSTANCE(value)
            .then(res => console.log(res))
            .finally(() => setWait(false));
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
                                        style={[styles.cell, isFocused && styles.focusCell]}
                                        onLayout={getCellOnLayoutHandler(index)}>
                                        {symbol || (isFocused ? <Cursor /> : null)}
                                    </Text>
                                )}
                            />

                            <View style={styles.sendAgainTextRoot}>
                                <Text style={styles.text}>{time} {t('register:smtpNotSendMessage')}</Text>
                                <Pressable disabled={access} onPress={reset}>
                                    <Text style={[styles.blueText, access && styles.textDisable]}>{t('register:tryAgain')}</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.buttonView}>
                            <Button text={t('register:admit')} callBack={() => verifyButtonHandler()} disable={value.length !== 4 || wait} wait={wait} />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default VerifyForgotPasswordOtp

