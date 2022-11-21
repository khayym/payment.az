import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet, Pressable } from 'react-native'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Button from '../../../components/button';
import Texts from '../../../components/text/'
import { VERIFY_OTP } from '../../../constants/api';
import axios from 'axios';
import { useContextApi } from '../../../store/context/ContextApi';
import { theme } from '../../../theme/theme';


const SMTP = () => {
    const CELL_COUNT = 4;
    const { t } = useTranslation()
    const [value, setValue] = useState('');
    const [wait, setWait] = useState(false);
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const { setRegisterIndex } = useContextApi()
    const [error, setError] = useState({ code: null, message: null })

    const sendOtp = async () => {
        setError({ code: null, message: null })
        setWait(true)
        try {
            const sendOpt = await axios.post(VERIFY_OTP, { otp: value });
            sendOpt.status ? setRegisterIndex(2) : setError({ error: 400, message: 'Somethign went wrong' });
        } catch (error) {
            error.response.status == 400 && setError({ code: 401, message: 'Wrong opt' })
            setValue('')
        }
        setWait(false);
    }


    return (
        <View style={styles.container}>
            {/* <LanguageSelector /> */}
            <Texts Texts child={`****** 77 55 ${t('register:smtpmessage')}`}> {t('register:admitCode')}</Texts >
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
                        style={[styles.cell, isFocused && styles.focusCell, error.code !== null && { borderColor: 'red', color: 'red' }]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
            {error.code == 401 && <Text style={styles.wrongOpt}>{t('register:wrongOpt')}</Text>}
            <View style={styles.textRoot}>
                <Text style={styles.text}>{t('register:smtpNotSendMessage')}</Text>
                <Pressable onPress={() => console.log('----')}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonView: {
        height: 48,
        marginTop: 48,
    },
    root: {
        flex: 1,
        padding: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    },
    codeFieldRoot: {
        marginTop: 56,
        paddingHorizontal: 24,
    },
    cell: {
        width: 40,
        height: 48,
        lineHeight: 45,
        fontSize: 20,
        borderWidth: 1,
        color: '#038BFF',
        borderRadius: 8,
        backgroundColor: '#F7F9FC',
        borderColor: '#E4E9F2',
        textAlign: 'center',
        fontFamily: theme.font[500],
    },
    focusCell: {
        borderColor: '#038BFF'
    },
    textRoot: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
    },
    text: {
        color: '#2E3A59',
        fontFamily: theme.font[400],
        fontSize: 14,
    },
    blueText: {
        color: '#0095FF',
        fontFamily: theme.font[400],
        fontSize: 14,
        marginLeft: 7,
    },
    wrongOpt: {
        alignSelf: 'center', marginTop: 10, color: 'red'
    }
});