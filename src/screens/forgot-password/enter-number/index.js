import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import Icon from '../../../../assets/icons/forgotPassword.svg';
import { PhoneInput } from '../../../components/phone-input';
import Texts from '../../../components/text/'
import Button from '../../../components/button'
import { styles } from './styles'
import { FORGET_PASSWORD_INSTANCE } from '../../../utils/instances';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { tabSupervisor } from '../../../utils/tab-view-util';
import { validatePhone } from '../../../helpers/phone_validator';


const EnterNumber = () => {
    const { t } = useTranslation()
    const [number, setNumber] = useState('');
    const [wait, setWait] = useState(false);
    const [error, setError] = useState(null);
    const bottomOffset = useSafeAreaInsets().top + 40;

    const sendNumber = async (num) => {
        if (validatePhone(num) === false) {
            setError('Write correct number');
            return;
        }
        setError(null);

        const { data, status } = await FORGET_PASSWORD_INSTANCE('994' + num, setWait);
        if (status == 200 || status == true) {
            tabSupervisor('control', { screen: 'ForgotPassword', index: 1, state: { number: `994${num}`, error: null } })
            return;
        }
        return setError(data)
    }


    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior={'position'}
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={bottomOffset}
                >
                    <View style={{ alignItems: 'center' }}>
                        <Icon />
                    </View>
                    <Texts child={t('singIn:forgotPasswordScreenText')} custom={{ marginTop: 48 }}>{t('singIn:forgotPasswordScreenHeader')}</Texts>

                    <View style={styles.number}>
                        <PhoneInput
                            setNumber={setNumber}
                            number={number}
                            label={t('singIn:numberLabel')}
                            errorLabel={error}
                            error={error}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button text={t('singIn:forgotScreenSend')} disable={number.length < 9 || wait} callBack={() => sendNumber(number)} wait={wait} />
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback >

    )
}

export default memo(EnterNumber)

