import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { View, TouchableWithoutFeedback, Keyboard, Platform, KeyboardAvoidingView } from 'react-native'
import Icon from '../../../../assets/icons/forgotPassword.svg';
import { PhoneInput } from '../../../components/phone-input';
import Texts from '../../../components/text/'
import Button from '../../../components/button'
import { styles } from './styles'
import { forgetPasswordInstance } from '../../../utils/instances';
import { useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { tabSupervisor } from '../../../utils/tab-view-util';


const EnterNumber = () => {
    const { t } = useTranslation()
    const [number, setNumber] = useState('');
    const [wait, setWait] = useState(false);
    const error = useSelector(state => state.tabControllerReducer.ForgotPassword.state.error);
    const bottomOffset = useSafeAreaInsets().top + 40;

    const sendNumber = (num) => {
        tabSupervisor('update', { screen: 'ForgotPassword', state: { number: `994${num}`, error: null } });
        setWait(true);
        forgetPasswordInstance("994" + num)
            .then(res => {
                if (res.status == 200) {
                    tabSupervisor('control', { screen: 'ForgotPassword', index: 1, state: { number: `994${num}`, error: null } })
                    return;
                }
                tabSupervisor('update', { screen: 'ForgotPassword', state: { number: `994${num}`, error: res.data } })
            })
            .finally(() => setWait(false));
    }


    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior={'position'}
                    style={{ borderWidth: 1, flex: 1 }}
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
                            label={t('singIn:numberLable')}
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

