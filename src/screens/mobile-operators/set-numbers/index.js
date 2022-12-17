import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import Button from '../../../components/button';
import { PhoneInput } from '../../../components/phone-input';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { setNumbersStyles as styles } from '../styles';
import { useDispatch, useSelector } from 'react-redux';
import { setMonitionDeterminer } from '../../../reducers/headerDeterminerReducer';

const SetMpbileOperators = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch();
    const [number, setNumber] = useState('');
    const [error, setError] = useState({
        code: null,
        message: null
    });
    const bottomOffset = useSafeAreaInsets().top + 60
    const { state } = useSelector(state => state.headerMonitionIndexes.MobileOperators)
    const callback = () => dispatch(setMonitionDeterminer({ screen: 'MobileOperators', value: 2, state, number }));

    return (
        <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={bottomOffset}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <PhoneInput
                        setNumber={setNumber}
                        number={number}
                        label={t('home:mobileNumber')}
                        errorLabel={error.message}
                        error={error.code}
                    />
                    <View style={styles.buttonView}>
                        <Button text={t('home:continue')} disable={number?.length !== 9} callBack={callback} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default SetMpbileOperators