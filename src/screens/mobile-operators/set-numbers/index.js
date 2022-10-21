import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native'
import Button from '../../../components/button';
import { PhoneInput } from '../../../components/phone-input';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SetMpbileOperators = () => {
    const { t } = useTranslation()
    const [number, setNumber] = useState('');
    const [error, setError] = useState({
        code: null,
        message: null
    });
    const bottomOffset = useSafeAreaInsets().bottom
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={{ flex: 1, borderWidth: 1, justifyContent: 'space-between' }}>
                    <PhoneInput
                        setNumber={setNumber}
                        number={number}
                        label={t('home:mobileNumber')}
                        errorLabel={error.message}
                        error={error.code}
                    />
                    <View style={{ height: 48 }}>
                        <Button text='davam' />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default SetMpbileOperators