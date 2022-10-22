import { View, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Field from '../../../components/field'
import { useSelector } from 'react-redux'
import { confirmStyles as styles } from '../styles';
import Button from '../../../components/button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { t } from 'i18next';
const operators = {
    Azercell: require(`../../../../assets/images/screens/operators/azercell.png`),
    Bakcell: require(`../../../../assets/images/screens/operators/bakcell.png`),
    'Nar Mobile': require(`../../../../assets/images/screens/operators/nar.png`),
}

const ConfirmMobileOperaion = () => {
    const { number, state } = useSelector(state => state.headerMontionIndexes.MobileOperators)
    const bottomOffset = useSafeAreaInsets().top + 40;
    const [value, setValue] = useState('');
    const [wait, setWait] = useState(false);
    const [error, setError] = useState(null);
    const balance = 256;

    const handleSubmit = () => {
        setWait(true);
        if (value > balance) setError('* Kifayet qeder balance yoxdur')
        else {
            console.log('succes')
            setError(null)
        }
        setTimeout(() => {
            setWait(false);
        }, 1000)

    }

    return (
        <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={bottomOffset}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <Field
                            type='image'
                            text={`+994 ${number?.slice(0, 2)} ${number?.slice(3, 6)} ${number?.slice(6, 8)} ${number?.slice(7, 9)}`}
                            left={operators[state]}
                            mv={10}
                        />
                    </View>
                    <View style={styles.bottomBox}>
                        <View style={styles.inputBox}>
                            <Text style={styles.error}>{error}</Text>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    value={value}
                                    onChangeText={setValue}
                                    placeholder='0₼'
                                    style={styles.input}
                                />
                                {value.length > 0 && <Text style={styles.balance}>₼</Text>}
                            </View>
                            <Text style={styles.text}>{t('home:balance')} {balance}₼</Text>
                        </View>

                        <View style={{ height: 46 }}>
                            <Button text={t('home:continue')} callBack={handleSubmit} wait={wait} disable={value == 0 || parseInt(value) > balance || wait} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default ConfirmMobileOperaion
