import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { registerStyles as styles } from '../styles';
import Texts from '../../../components/text/'
import Button from '../../../components/button'
import { PhoneInput } from '../../../components/phone-input';
import { useTranslation } from 'react-i18next';
import { useContextApi } from '../../../store/context/ContextApi';

const Registration = () => {
    const { t } = useTranslation()
    const [number, setNumber] = useState('');
    const [send, setSend] = useState(false);
    const [wait, setWait] = useState(false);

    const { setRegisterIndex } = useContextApi()

    const buttonHandler = () => {
        setWait(true)
        Keyboard.dismiss()
        setTimeout(() => {
            setSend(true)
            setWait(false);
            Keyboard.dismiss
            setRegisterIndex(2)
        }, 1500)

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.container}>
                <Texts child={t('register:title')}>{t('register:register')}</Texts>
                <View style={styles.number}>
                    <PhoneInput
                        setNumber={setNumber}
                        number={number}
                        label={t('singIn:numberLable')}
                        errorLabel={t('singIn:wrongNumber')}
                    />
                </View>
                <View style={styles.button}>
                    <Button text={t('register:continue')} disable={number.length < 9 || wait} callBack={buttonHandler} wait={wait} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Registration