import { View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { registerStyles as styles } from '../styles';
import Texts from '../../../components/text/'
import Button from '../../../components/button'
import { PhoneInput } from '../../../components/phone-input';
import { useTranslation } from 'react-i18next';
import { REGISTER_USER_INSTANCE } from '../../../utils/instances';
import { tabSupervisor } from '../../../utils/tab-view-util';


const Registration = () => {
    const { t } = useTranslation()
    const [number, setNumber] = useState('');
    const [error, setError] = useState(null);
    const [wait, setWait] = useState(false);


    const buttonHandler = async () => {
        setError(null);
        const { data, status } = await REGISTER_USER_INSTANCE(number, setWait);
        if (status == 200 || status == true) {
            tabSupervisor('control', { screen: 'Register', index: 1, state: { number: '994' + number } })
            return;
        }
        return setError(data)
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
                        errorLabel={error}
                        error={error}
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