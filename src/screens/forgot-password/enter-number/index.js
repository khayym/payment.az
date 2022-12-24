import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { View, TouchableWithoutFeedback, Keyboard, Platform, KeyboardAvoidingView } from 'react-native'
import Icon from '../../../../assets/icons/forgotPassword.svg';
import { PhoneInput } from '../../../components/phone-input';
import Texts from '../../../components/text/'
import Button from '../../../components/button'
import { styles } from './styles'
import { controlTabView, updateTabViewState } from '../../../reducers/tabControllerReducer';
import { forgetPasswordInstance } from '../../../utils/instances';
import { useSelector } from 'react-redux';


const EnterNumber = ({ route: { dispatch } }) => {
    const { t } = useTranslation()
    const [number, setNumber] = useState('');
    const [wait, setWait] = useState(false);
    const error = useSelector(state => state.tabControllerReducer.ForgotPassword.state.error);


    const sendNumber = (num) => {
        dispatch(updateTabViewState({ screen: 'ForgotPassword', state: { number: `994${num}`, error: null } }));
        setWait(true);
        forgetPasswordInstance("994" + num)
            .then(res => {
                if (res.status == 200) {
                    dispatch(controlTabView({ screen: 'ForgotPassword', index: 1, state: { number: `994${num}`, error: null } }));
                    return;
                }
                dispatch(updateTabViewState({ screen: 'ForgotPassword', state: { number: `994${num}`, error: res.data } }));

            })
            .finally(() => setWait(false));
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <View style={styles.container}>
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
                        {/* <Button text={t('singIn:forgotScreenSend')} disable={number.length < 9} callBack={() => callback(1, number)} /> */}
                        <Button text={t('singIn:forgotScreenSend')} disable={number.length < 9 || wait} callBack={() => sendNumber(number)} wait={wait} />
                    </View>
                </View>
            </TouchableWithoutFeedback >
        </KeyboardAvoidingView>
    )
}

export default memo(EnterNumber)

