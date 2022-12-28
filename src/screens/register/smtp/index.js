import { useState, useEffect } from 'react';
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
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { SEND_OTP_AGAIN_INSTANCE, VERIFY_OTP_INSTANCE } from '../../../utils/instances';
import { useTimer } from '../../../hooks/useTimer';
import { tabSupervisor } from '../../../utils/tab-view-util';

const SMTP = () => {

    const { t } = useTranslation()
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);
    const [wait, setWait] = useState(false);
    const ref = useBlurOnFulfill({ value, cellCount: 4 });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    let { number } = useSelector(state => state.tabControllerReducer.Register.state);
    const { time, access, reset } = useTimer(number, number);

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
            tabSupervisor('control', { screen: 'Register', index: 2, state: { number } })
            return;
        }
        return setError(data)
    }


    return (
        <View style={styles.container}>
            <Texts Texts child={`${number} ${t('register:smtpmessage')}`}> {t('register:admitCode')}</Texts >
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={4}
                rootStyle={styles.codeFieldRoot}
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
            <View style={styles.textRoot}>
                <Text style={styles.text}>{time} {t('register:smtpNotSendMessage')}</Text>
                <Pressable onPress={sendAgain} disabled={access}>
                    <Text style={[styles.blueText, access && styles.textDisable]}>{t('register:tryAgain')}</Text>
                </Pressable>
            </View>
            <View style={styles.buttonView}>
                <Button text={t('register:admit')} callBack={() => verify()} disable={value.length !== 4 || wait} wait={wait} />
            </View>
        </View >
    )
}

export default SMTP

